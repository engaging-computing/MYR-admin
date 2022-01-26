import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
    <div>
        <Card>
            <CardHeader title="Welcome to the front-end of the backend!" />
            <CardContent>Below you will find information about how to use the admin portal.</CardContent>
        </Card>
        <br></br>
        <Card>
            <CardHeader title="Types of Users" />
            <CardContent>
                <p>The Users tab is for admin page users.</p>
                <p>The Googlelogins tab is for frontend users.</p>
            </CardContent>
        </Card>
    </div >
);