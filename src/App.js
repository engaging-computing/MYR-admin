import React from 'react';
import { Admin, Resource } from 'react-admin';

import Dashboard from './pages/dashboard';
import authProvider from './dataProvider/authProvider';
import dataProvider from './dataProvider/dataProvider';
import loginPage from './pages/LoginPage'

import { CourseList, CourseEdit, CourseCreate } from './pages/courses';
import { ReferenceExamplesList, ReferenceExamplesEdit, ReferenceExamplesCreate } from './pages/referenceExamples';

import scene        from './pages/scene';
import googleLogin  from "./pages/googleLogin";
import user         from "./pages/user";
import snapshot     from "./pages/snapshot";
import collection   from "./pages/collection";
import notification from "./pages/notification";

import {
  List                 as CourseIcon,
  Help                 as RefExIcon,
} from "@mui/icons-material";

const App = () => (
  <Admin dashboard={Dashboard} loginPage={loginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="scenes"           {...scene} />
    <Resource name="collections"      {...collection} />
    <Resource name="courses"          list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon}/>
    <Resource name="referenceExamples"list={ReferenceExamplesList} edit={ReferenceExamplesEdit} create={ReferenceExamplesCreate} icon={RefExIcon}/>
    <Resource name="users"            {...user}/>
    <Resource name="googlelogins"     {...googleLogin}/>
    <Resource name="notifications"    {...notification} />
    <Resource name="snapshots"        {...snapshot}/>
  </Admin>
);

export default App;