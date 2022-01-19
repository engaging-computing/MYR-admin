import React from 'react';

import {
    ArrayInput,
    BooleanInput,
    Edit,
    FormTab,
    NumberInput,
    required,
    SaveButton,
    SimpleFormIterator,
    TabbedForm,
    TextInput,
    Toolbar,
} from 'react-admin';

const CourseEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const CourseTitle = ({ record }) => {
    return <span>Course: {record ? `"${record.name}"` : ''}</span>;
};

const CourseEdit = (props) => (
    <Edit title={<CourseTitle />} {...props}>
        <TabbedForm toolbar={<CourseEditToolbar />}>
            <FormTab label="Course Information">
                <TextInput disabled source="_id" />
                <TextInput source="name" validate={required()}/>
                <TextInput source="shortname" validate={required()}/>
                <NumberInput source="difficulty" validate={required()}/>
                <TextInput multiline source="description" validate={required()}/>
            </FormTab>
            <FormTab label="Lessons">
                <ArrayInput source="lessons">
                    <SimpleFormIterator>
                        <br />
                        <TextInput source="name"/>
                        <TextInput multiline source="prompt" />
                        <TextInput multiline source="code" />
                        <TextInput source="settings.skyColor" type="color" label="Sky Color" defaultValue="#ffffff" />
                        <BooleanInput source="settings.showFloor" label="Show Floor" />
                        <TextInput source="settings.floorColor" type="color" label="Floor Color" defaultValue="#000000" />
                        <BooleanInput source="settings.showCoordHelper" label="Show Coordinate Helper" />
                        <TextInput source="settings.camPositon" label="Camera Position" />
                        <NumberInput source="settings.camConfig" label="Camera Config" />
                        <BooleanInput source="settings.canFly" label="Can Fly"/>
                        <BooleanInput source="settings.viewOnly" label="View Only" />
                        <BooleanInput source="settings.defaultLight" label="Default Light" />
                        <BooleanInput source="settings.lightIndicator" label="Show Light Indicators" />
                        <BooleanInput source="settings.shadow" label="Cast Shadows" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default CourseEdit;