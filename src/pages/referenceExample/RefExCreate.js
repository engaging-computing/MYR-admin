import React from 'react';
import {
    ArrayInput,
    Create,
    ReferenceInput,
    SaveButton,
    SelectInput,
    SimpleForm,
    SimpleFormIterator,
    TextInput,
    Toolbar
} from 'react-admin';

const RefExCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create ReferenceExamples"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const RefExCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<RefExCreateToolbar />}>
            <TextInput source="functionName" />
            {/* <TextInput source="info" /> */}
            {/* <NumberInput source="difficulty" /> */}
            <SelectInput source="type" choices={[
                { id: 'Geometry', name: 'Geometry' },
                { id: 'Transformation', name: 'Transformation' },
                { id: 'Animation', name: 'Animation' },
                { id: 'Group', name: 'Group' },
                { id: 'Texture', name: 'Texture' }
            ]} />
            <ArrayInput source="functionParams">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="info" />
            <TextInput multiline source="code" />
            <ReferenceInput label="Suggested Course" reference="courses" source="suggestedCourse" optionValue="shortname">
                <SelectInput optionText="name" optionValue="shortname" />
                {/* <AutocompleteArrayInput /> */}
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default RefExCreate;