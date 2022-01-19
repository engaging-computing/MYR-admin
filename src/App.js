import React from 'react';
import { Admin, Resource } from 'react-admin';

import Dashboard from './pages/Dashboard';
import authProvider from './dataProvider/authProvider';
import dataProvider from './dataProvider/dataProvider';
import loginPage from './pages/LoginPage'

import scene        from './pages/scene';
import googleLogin  from "./pages/googleLogin";
import user         from "./pages/user";
import snapshot     from "./pages/snapshot";
import collection   from "./pages/collection";
import notification from "./pages/notification";
import referenceExample from "./pages/referenceExample";
import course       from "./pages/course";


const App = () => (
  <Admin dashboard={Dashboard} loginPage={loginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="scenes"           {...scene} />
    <Resource name="collections"      {...collection} />
    <Resource name="courses"          {...course}/>
    <Resource name="referenceExamples"{...referenceExample} />
    <Resource name="users"            {...user} />
    <Resource name="googlelogins"     {...googleLogin} />
    <Resource name="notifications"    {...notification} />
    <Resource name="snapshots"        {...snapshot} />
  </Admin>
);

export default App;