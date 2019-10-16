import React from 'react';
import { Admin, Resource } from 'react-admin';
import { CourseList, CourseEdit, CourseCreate } from './pages/courses';
import { ReferenceExamplesList, ReferenceExamplesEdit, ReferenceExamplesCreate } from './pages/referenceExamples';
import { UserList, UserEdit, UserCreate } from './pages/users';
import { SnapshotList, SnapshotShow } from './pages/snapshots';
//import Icon from '@material-ui/core/Icon';
import CourseIcon from '@material-ui/icons/List';
import RefExIcon from '@material-ui/icons/Help';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import SnapshotIcon from '@material-ui/icons/CameraEnhance'
import Dashboard from './pages/dashboard';
import authProvider from './data_connections/authProvider';
import dataProvider from './data_connections/dataProvider';
import loginPage from './pages/LoginPage'

const App = () => (
  <Admin dashboard={Dashboard} loginPage={loginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="courses" list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
    <Resource name="referenceExamples" list={ReferenceExamplesList} edit={ReferenceExamplesEdit} create={ReferenceExamplesCreate} icon={RefExIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="snapshots" list={SnapshotList} show={SnapshotShow} icon={SnapshotIcon} />
  </Admin>
);

export default App;