import { GET_LIST, GET_ONE, GET_MANY, GET_MANY_REFERENCE, CREATE, UPDATE, DELETE } from 'react-admin';
import { stringify } from 'query-string';

const API_URL = '/apiv1';

/**
 * Maps react-admin queries to my REST API
 *
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a data response
 */
export default (type, resource, params) => {
    let url = '';
    let options = {
        headers: new Headers({
            Accept: 'application/json',
            'Access-Control-Allow-Headers': 'x-access-token',
            'x-access-token': localStorage.getItem('token'),
            'content-type': 'application/json'
        }),
        method: 'GET'
    };
    let body;

    switch (type) {
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([
                    page,
                    perPage,
                ]),
                filter: JSON.stringify(params.filter),
            };
            url = `${API_URL}/${resource}?${stringify(query)}`;
            break;
        }
        case GET_ONE:
            url = `${API_URL}/${resource}/id/${params.id}`;
            break;
        case CREATE:
            url = `${API_URL}/${resource}`;
            options.method = 'POST';
            body = {
                'body': JSON.stringify(params.data)
            };
            options = { ...options, ...body }
            break;
        case UPDATE:
            url = `${API_URL}/${resource}/id/${params.id}`;
            options.method = 'PUT';
            body = {
                'body': JSON.stringify(params.data)
            };
            options = { ...options, ...body }
            break;
        // case UPDATE_MANY:
        //     const query = {
        //         filter: JSON.stringify({ id: params.ids }),
        //     };
        //     url = `${API_URL}/${resource}?${stringify(query)}`;
        //     options.method = 'PATCH';
        //     options.body = JSON.stringify(params.data);
        //     break;
        case DELETE:
            url = `${API_URL}/${resource}/id/${params.id}`;
            options.method = 'DELETE';
            options = {
                ...options
            }
            break;
        // case DELETE_MANY:
        //     const query = {
        //         filter: JSON.stringify({ id: params.ids }),
        //     };
        //     url = `${API_URL}/${resource}?${stringify(query)}`;
        //     options.method = 'DELETE';
        //     break;
        case GET_MANY: {
            const query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            url = `${API_URL}/${resource}?${stringify(query)}`;
            break;
        }
        case GET_MANY_REFERENCE: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([
                    (page - 1) * perPage,
                    page * perPage - 1,
                ]),
                filter: JSON.stringify({
                    ...params.filter,
                    [params.target]: params.id,
                }),
            };
            url = `${API_URL}/${resource}?${stringify(query)}`;
            break;
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
    let headers = new Headers();
    console.log(headers)
    return fetch(url, options)
        .then(res => {
            headers = res.headers;
            if (res.status < 200 || res.status >= 300) {
                throw Error(res.statusText);
            }
            return res.json();
        })
        .then(response => {
            let data;
            let total;
            switch (type) {
                case GET_LIST:
                    data = response.map(record => ({ id: record._id, ...record }));
                    try {
                        //total = headers.get('Content-Range').split('/').pop()
                        total = headers.get('Total-Documents')
                    }
                    catch (error) {
                        total = data.length
                    }
                    return {
                        data: data,
                        total: Number(total)
                    };
                case GET_MANY:
                    data = response.map(record => ({ id: record._id, ...record }));
                    try {
                        //total = headers.get('Content-Range').split('/').pop()
                        total = headers.get('Total-Documents')
                    }
                    catch (error) {
                        total = data.length
                    }
                    return {
                        data: data,
                        total: Number(total)
                    };
                case GET_MANY_REFERENCE:
                    if (!response.headers.has('content-range')) {
                        throw new Error(
                            'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                        );
                    }
                    data = response.map(record => ({ id: record._id, ...record }));
                    try {
                        //total = headers.get('Content-Range').split('/').pop()
                        total = headers.get('Total-Documents')
                    }
                    catch (error) {
                        total = data.length
                    }
                    return {
                        data: data,
                        total: Number(total),
                    };
                case CREATE:
                    return { data: { ...params.data, id: response.id } };
                case DELETE:
                    return { data: { ...params.data, id: response.id } };
                default:
                    data = ({ id: response._id, ...response })
                    return { data: data };
            }
        });
};
