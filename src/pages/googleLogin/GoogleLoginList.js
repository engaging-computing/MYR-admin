import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    TextInput,
    SimpleList,
    Responsive,
    Filter
} from 'react-admin';

const GoogleLoginFilter = (props) => (
    <Filter {...props}>
        <TextInput source="_id" label="User ID" />
        <TextInput source="email" />
        <TextInput source="googleId" label="Google ID" />
    </Filter>
);

const GoogleLoginList = (props) => (
    <List {...props} perPage={25} bulkActionButtons={false} filters={<GoogleLoginFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.email}
                    secondaryText={record => record.googleId}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="_id"/>
                    <TextField source="email"/>
                    <TextField source="googleId" label="Google ID"/>
                    <TextField source="firebaseID" label="Firebase ID"/>
                </Datagrid>
            }
        />
    </List>
);

export default GoogleLoginList;