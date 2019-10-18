import React from 'react';

import {
    ArrayInput,
    SimpleFormIterator,
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    Responsive,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    required,
    SimpleForm,
    SimpleList,
    TextInput,
    SaveButton,
    Toolbar,
    NumberInput,
    ReferenceArrayInput,
    AutocompleteArrayInput
} from 'react-admin';

const CourseFilter = (props) => (
    <Filter {...props}>
        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
        <NumberInput label="Difficulty" source="difficulty" />
        {/* <TextInput label="Name" source="name" /> */}
        <TextInput label="Shortname" source="shortname" />
    </Filter>
);

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

export const CourseList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<CourseFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `Shortname: ${record.shortname}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="shortname" />
                    <TextField source="name" />
                    <TextField source="difficulty" />
                    <TextField source="description" />
                    <TextField label="Lessons" source="lessons.length" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const CourseTitle = ({ record }) => {
    return <span>Course: {record ? `"${record.name}"` : ''}</span>;
};

export const CourseEdit = (props) => (
    <Edit title={<CourseTitle />} {...props}>
        <SimpleForm toolbar={<CourseEditToolbar />}>
            <DisabledInput source="_id" />
            <TextInput source="name" />
            <TextInput source="shortname" />
            <NumberInput source="difficulty" />
            <LongTextInput source="description" />

            <ArrayInput source="lessons">
                <SimpleFormIterator>
                    <br />
                    <TextInput source="name"/>
                    <TextInput source="prompt" />
                    <LongTextInput source="code" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const CourseCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<CourseCreateToolbar />}>
            <TextInput source="name" validate={required()} />
            <TextInput source="shortname" validate={required()} />
            <NumberInput source="difficulty" validate={required()} />
            <LongTextInput source="description" validate={required()} />
            <ReferenceArrayInput label="Lessons" reference="lessons" source="lessons" optionValue="_id">
                <AutocompleteArrayInput />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);