import React from 'react';
import { Admin, Resource } from 'react-admin';

import Dashboard from './pages/dashboard';
import authProvider from './dataProvider/authProvider';
import dataProvider from './dataProvider/dataProvider';
import loginPage from './pages/LoginPage'

import { CourseList, CourseEdit, CourseCreate } from './pages/courses';
import { ReferenceExamplesList, ReferenceExamplesEdit, ReferenceExamplesCreate } from './pages/referenceExamples';
import { SnapshotList, SnapshotShow } from './pages/snapshots';
import { NotifList, NotifEdit, NotifCreate } from './pages/Notifications';
import { CollectionList, CollectionShow } from './pages/Collections';

import scenes from './pages/scene';
import googleLogins from "./pages/googleLogin";
import users from "./pages/user";

import {
  List                 as CourseIcon,
  Help                 as RefExIcon,
  CameraEnhance        as SnapshotIcon,
  Filter               as CollectionIcon,
  PriorityHigh         as NotificationIcon,
} from "@mui/icons-material";

const App = () => (
  <Admin dashboard={Dashboard} loginPage={loginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="scenes"           {...scenes} />
    <Resource name="collections"      list={CollectionList} show={CollectionShow} icon={CollectionIcon} />
    <Resource name="courses"          list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
    <Resource name="referenceExamples"list={ReferenceExamplesList} edit={ReferenceExamplesEdit} create={ReferenceExamplesCreate} icon={RefExIcon} />
    <Resource name="users"            {...users} />
    <Resource name="googlelogins"     {...googleLogins} />
    <Resource name="notifications"    list={NotifList} edit={NotifEdit} create={NotifCreate} icon={NotificationIcon} />
    <Resource name="snapshots"        list={SnapshotList} show={SnapshotShow} icon={SnapshotIcon} />
  </Admin>
);

export default App;