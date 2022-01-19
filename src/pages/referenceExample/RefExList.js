import React from 'react';
import {
    Datagrid,
    EditButton,
    List,
    Responsive,
    SimpleList,
    TextField
} from 'react-admin';

const RefExList = (props) => (
    <List {...props} bulkActionButtons={false}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.functionName}
                    secondaryText={record => `Type: ${record.type}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="functionName" />
                    <TextField source="info" />
                    <TextField source="type" />
                    {/* <TextField source="description" /> */}
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export default RefExList;