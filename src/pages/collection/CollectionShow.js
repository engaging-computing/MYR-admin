import React from 'react';
import {
    ArrayField,
    Datagrid,
    Show,
    SimpleShowLayout,
    TextField
} from 'react-admin';

const CollectionShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="_id" />
                <TextField source="collectionID" />
                <TextField source="uid" />
                <ArrayField source="scenes">
                    <Datagrid>
                        <TextField source="_id" label="Scene ID" />
                        <TextField source="name" />
                        <TextField source="uid" label="Scene Owner ID" />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    );
};

export default CollectionShow;