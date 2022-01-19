import React from 'react';
import {
    Datagrid,
    DateField,
    DateTimeInput,
    DeleteButton,
    EditButton,
    Filter,
    List,
    Responsive,
    SimpleList,
    TextField,
    TextInput
} from 'react-admin';

let tmp = document.createElement("input");
tmp.setAttribute("type", "datetime-local");

const NotifFilter = (props) => (
    <Filter {...props}>
        <TextInput source="title" />
        <DateTimeInput source="endTime" showTime />
        <DateTimeInput source="startTime" showTime />
    </Filter>
);

const NotifList = (props) => ( tmp.type === "datetime-local" ?
    <List {...props} bulkActionButtons={false} filters={<NotifFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => record.message}
                // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="title" />
                    <TextField source="message" />
                    <DateField source="startTime" showTime />
                    <DateField source="endTime" showTime />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
    :
    <p>
        Your browser is missing support for input types needed to create and edit Notifications, consider using <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">Chrome</a>
    </p>
);

export default NotifList;