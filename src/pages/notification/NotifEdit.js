import React from 'react';
import {
    DateTimeInput,
    Edit,
    required,
    SaveButton,
    SimpleForm,
    TextInput,
    Toolbar,
} from 'react-admin';

const NotifEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save Notification"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const NotifTitle = ({ record }) => {
    return <span>{record ? 
        (record.title ? 
            <React.Fragment>
                <strong>{record.title + ": "}</strong>{record.message}
            </React.Fragment> : record.message) 
            :
            ''
    }</span>;
};

const NotifEdit = (props) => (
    <Edit title={<NotifTitle />} {...props}>
        <SimpleForm toolbar={<NotifEditToolbar />}>
            <TextInput disabled source="_id" />
            <TextInput source="title" />
            <TextInput source="message" validate={required()} />
            <TextInput label="Background Color" source="color" type="color" />
            <TextInput label="Font Color" source="fontColor" type="color" />
            <TextInput label="Link Button Text" source="linkText" />
            <TextInput label="Link Button URL" source="link" />
            <DateTimeInput source="startTime" />
            <DateTimeInput source="endTime" validate={required()} />
        </SimpleForm>
    </Edit>
);

export default NotifEdit;