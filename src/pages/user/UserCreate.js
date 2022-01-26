import React from 'react';
import {
    BooleanInput,
    Create,
    required,
    SimpleForm,
    SaveButton,
    TextInput,
    Toolbar
} from 'react-admin';

const UserCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create User"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<UserCreateToolbar />}>
            <TextInput source="name" validate={required()} />
            <TextInput source="email" type="email" validate={required()} />
            <TextInput source="password" type="password" validate={required()} />
            <BooleanInput source="admin" />
            <BooleanInput source="subscribed" />
        </SimpleForm>
    </Create>
);

export default UserCreate;