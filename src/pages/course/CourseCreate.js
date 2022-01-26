import React from 'react';

import {
    ArrayInput,
    BooleanInput,
    Create,
    FormTab,
    NumberInput,
    required,
    SaveButton,
    SimpleFormIterator,
    TabbedForm,
    TextInput,
    Toolbar,
} from 'react-admin';

const CourseCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create Course"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const CourseCreate = (props) => (
    <Create {...props}>
        <TabbedForm toolbar={<CourseCreateToolbar />}>
            <FormTab label="Course Information">
                <TextInput source="name" validate={required()} />
                <TextInput source="shortname" validate={required()} />
                <NumberInput source="difficulty" validate={required()} />
                <TextInput multiline source="description" validate={required()} />
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
    </Create>
);

export default CourseCreate;