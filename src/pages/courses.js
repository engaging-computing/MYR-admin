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
    AutocompleteArrayInput,
    TabbedForm,
    FormTab
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
        <TabbedForm toolbar={<CourseEditToolbar />}>
            <FormTab label="Course Information">
                <DisabledInput source="_id" />
                <TextInput source="name" />
                <TextInput source="shortname" />
                <NumberInput source="difficulty" />
                <LongTextInput source="description" />
            </FormTab>
            <FormTab label="Lessons">
                <ArrayInput source="lessons">
                    <SimpleFormIterator>
                        <br />
                        <TextInput source="name"/>
                        <LongTextInput source="prompt" />
                        <LongTextInput source="code" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CourseCreate = (props) => (
    <Create {...props}>
        <TabbedForm toolbar={<CourseCreateToolbar />}>
            <FormTab label="Course Information">
                <TextInput source="name" validate={required()} />
                <TextInput source="shortname" validate={required()} />
                <NumberInput source="difficulty" validate={required()} />
                <LongTextInput source="description" validate={required()} />
            </FormTab>
            <FormTab label="Lessons">
                <ArrayInput source="lessons">
                        <SimpleFormIterator>
                            <br />
                            <TextInput source="name"/>
                            <LongTextInput source="prompt" />
                            <LongTextInput source="code" />
                        </SimpleFormIterator>
                    </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Create>
);