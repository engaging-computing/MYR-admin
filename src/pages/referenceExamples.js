import React from 'react';
import {
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    Responsive,
    TextField,
    EditButton,
    SimpleForm,
    SimpleList,
    TextInput,
    SaveButton,
    Toolbar,
    ReferenceInput,
    SelectInput,
    ArrayInput,
    SimpleFormIterator
} from 'react-admin';

const ReferenceExamplesFilter = (props) => (
    <Filter {...props}>
        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
        {/* <NumberInput label="Difficulty" source="difficulty" /> */}
        {/* <TextInput label="Name" source="name" /> */}
        {/* <TextInput label="Shortname" source="shortname" /> */}
    </Filter>
);

const ReferenceExamplesEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const ReferenceExamplesCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create ReferenceExamples"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const ReferenceExamplesList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<ReferenceExamplesFilter />}>
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

const ReferenceExamplesTitle = ({ record }) => {
    return <span>ReferenceExamples: {record ? `"${record.functionName}"` : ''}</span>;
};

export const ReferenceExamplesEdit = (props) => (
    <Edit title={<ReferenceExamplesTitle />} {...props}>
        <SimpleForm toolbar={<ReferenceExamplesEditToolbar />}>
            <TextInput disabled source="_id" />
            <TextInput source="functionName" />
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

export const ReferenceExamplesCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<ReferenceExamplesCreateToolbar />}>
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