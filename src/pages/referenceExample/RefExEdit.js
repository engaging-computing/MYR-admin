import React from 'react';
import {
    ArrayInput,
    Edit,
    ReferenceInput,
    SaveButton,
    SelectInput,
    SimpleForm,
    SimpleFormIterator,
    TextInput,
    Toolbar
} from 'react-admin';

const RefExEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const RefExTitle = ({ record }) => {
    return <span>ReferenceExamples: {record ? `"${record.functionName}"` : ''}</span>;
};

const RefExEdit = (props) => (
    <Edit title={<RefExTitle />} {...props}>
        <SimpleForm toolbar={<RefExEditToolbar />}>
            <TextInput disabled source="_id" />
            <TextInput source="functionName" />
            <SelectInput source="type" choices={[
                { id: 'Geometry', name: 'Geometry' },
                { id: 'Transformation', name: 'Transformation' },
                { id: 'Animation', name: 'Animation' },
                { id: 'Group', name: 'Group' },
                { id: 'Texture', name: 'Texture' },
                { id: 'Light', name: 'Light' }
            ]} />
            <ArrayInput source="functionParams">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            {/* <TextInput source="info" /> */}
            {/* <NumberInput source="difficulty" /> */}
            <TextInput multiline source="info" />
            <TextInput multiline source="code" />
            <ReferenceInput label="Suggested Course" reference="courses" source="suggestedCourse" optionValue="shortname">
                <SelectInput optionText="name" optionValue="shortname" />
                {/* <AutocompleteArrayInput /> */}
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default RefExEdit;