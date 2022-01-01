import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from 'react-admin';
import CodeDisplayField from '../components/CodeDisplay';

/**
 * Shows the detailed information about the selected scene
 * @param {*} props 
 * @returns 
 */
 export const SceneShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <img src={`/apiv1/preview/id/${props.id}`} style={{ maxHeight: "300px" }} alt="Scene Preview" />
                <TextField source="_id" />
                <TextField source="name" />
                <TextField style={{
                    width:"200px",
                    whiteSpace: "nowrap",
                    textOverflow: 'ellipsis', 
                    overflow: 'hidden'}} 
                    source="desc" />
                <TextField source="settings.collection" label="Collection" />
                <CodeDisplayField source="code" />
            </SimpleShowLayout>
        </Show>
    );
}

export default SceneShow;