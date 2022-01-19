import React from 'react';

import {
    Datagrid,
    EditButton,
    Filter,
    List,
    NumberInput,
    Responsive,
    SimpleList,
    TextField,
    TextInput,
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

const CourseList = (props) => (
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

export default CourseList;