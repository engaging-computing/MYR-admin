import React from 'react';
import {
    BooleanField,
    BooleanInput,
    Datagrid,
    DateField,
    EditButton,
    EmailField,
    Filter,
    List,
    Responsive,
    SimpleList,
    TextField,
    TextInput
} from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput source="email" />
        <BooleanInput source="admin" />
        <BooleanInput source="subscribed" />
    </Filter>
);

const UserList = (props) => (
    <List title="All users" {...props} bulkActionButtons={false} filters={<UserFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.email}
                // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="name" />
                    <EmailField source="email" />
                    <BooleanField source="subscribed" />
                    <BooleanField source="admin" />
                    <DateField source="last_login" showTime />
                    <DateField source="user_created" showTime />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export default UserList;