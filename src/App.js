import React from 'react';
import { Admin, Resource } from 'react-admin';

import Dashboard from './pages/dashboard';
import authProvider from './dataProvider/authProvider';
import dataProvider from './dataProvider/dataProvider';
import loginPage from './pages/LoginPage'

import { CourseList, CourseEdit, CourseCreate } from './pages/courses';
import { ReferenceExamplesList, ReferenceExamplesEdit, ReferenceExamplesCreate } from '../public/referenceExamples';
import { NotifList, NotifEdit, NotifCreate } from './Notifications';
import { CollectionList, CollectionShow } from './pages/collection/Collections';

import scenes from './pages/scene';
import googleLogins from "./pages/googleLogin";
import users from "./pages/user";
import snapshot from "./pages/snapshot";

import {
  List                 as CourseIcon,
  Help                 as RefExIcon,
  Filter               as CollectionIcon,
  PriorityHigh         as NotificationIcon,
} from "@mui/icons-material";

const App = () => (
  <Admin dashboard={Dashboard} loginPage={loginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="scenes"           {...scenes} />
    <Resource name="collections"      list={CollectionList} show={CollectionShow} icon={CollectionIcon}/>
    <Resource name="courses"          list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon}/>
    <Resource name="referenceExamples"list={ReferenceExamplesList} edit={ReferenceExamplesEdit} create={ReferenceExamplesCreate} icon={RefExIcon}/>
    <Resource name="users"            {...users}/>
    <Resource name="googlelogins"     {...googleLogins}/>
    <Resource name="notifications"    list={NotifList} edit={NotifEdit} create={NotifCreate} icon={NotificationIcon} />
    <Resource name="snapshots"        {...snapshot}/>
  </Admin>
);

export default App;