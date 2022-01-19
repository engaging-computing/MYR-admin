import React from 'react';
import {
    Create,
    DateTimeInput,
    required,
    SaveButton,
    SimpleForm,
    TextInput,
    Toolbar
} from 'react-admin';

const NotifCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create Notification"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const NotifCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<NotifCreateToolbar />}>
            <TextInput source="title" />
            <TextInput source="message" validate={required()} />
            <TextInput label="Background Color" source="color" type="color" validate={required()} defaultValue="#FFFF00" />
            <TextInput label="Font Color" source="fontColor" type="color" validate={required()} defaultValue="#000000" />
            <TextInput label="Link Button Text" source="linkText" />
            <TextInput label="Link Button URL" source="link" />
            <DateTimeInput source="startTime" />
            <DateTimeInput source="endTime" validate={required()} />
        </SimpleForm>
    </Create>
);

export default NotifCreate;

