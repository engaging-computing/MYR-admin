import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNotification, CloneButton } from 'react-admin';
import { push } from 'connected-react-router';


const promoteEndpoint = "/apiv1/scenes/example";

class PromoteButton extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        const updatedRecord = {...record, uid: "1"};
        const headers = {
            Accept: 'application/json',
            'Access-Control-Allow-Headers': 'x-access-token',
            'x-access-token': localStorage.getItem('token'),
            'content-type': 'application/json'
        };

        fetch(promoteEndpoint, {method: "POST", headers: headers, body: JSON.stringify(updatedRecord)}).then(() => {
            showNotification('Example Scene Created!');
            push('/scenes');
        }).catch((e) => {
            showNotification("Error: Could not create Example Scene", 'warning');
            push('/scenes');
        });
    }
    render() {
        return <CloneButton label="Promote" onClick={this.handleClick} />
    }
}

PromoteButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification,
    push,
})(PromoteButton);