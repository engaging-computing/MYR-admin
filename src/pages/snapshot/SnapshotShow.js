import React from 'react';
import {
    BooleanField,
    DateField,
    Show,
    SimpleShowLayout,
    TextField
} from 'react-admin';

const SnapshotShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="user" />
            <TextField source="text" />
            <BooleanField source="error" />
            <DateField source="timestamp" showTime />
        </SimpleShowLayout>
    </Show>
);

export default SnapshotShow;