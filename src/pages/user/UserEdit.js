import React from 'react';
import {
    Edit,
    BooleanInput,
    required,
    TextInput,
    Toolbar,
    SaveButton,
    SimpleForm
} from 'react-admin';

const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save User"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const UserTitle = ({ record }) => {
    return <span>User: {record ? `"${record.name}"` : ''}</span>;
};

const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm toolbar={<UserEditToolbar />}>
            <TextInput disabled source="_id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="email" type="email" validate={required()} />
            <TextInput source="password" type="password" />
            <BooleanInput source="admin" />
            <BooleanInput source="subscribed" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;