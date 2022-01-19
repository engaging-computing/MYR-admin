import React from 'react';
import {
    Datagrid,
    DeleteButton,
    Filter,
    List,
    Responsive,
    ShowButton,
    SimpleList,
    TextField,
    TextInput
} from 'react-admin';

const CollectionFilter = (props) => (
    <Filter {...props}>
        <TextInput source="collectionID" label="Collection Name" />
        <TextInput source="uid" label="User ID" />
    </Filter>
);

const CollectionList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<CollectionFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.collectionID}
                    secondaryText={record => record.uid}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="collectionID" label="Collection Name" />
                    <TextField source="uid" label="Owner" />
                    <ShowButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

export default CollectionList;