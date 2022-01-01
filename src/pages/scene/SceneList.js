import React, { 
    Fragment, 
    useState, 
    useEffect,
} from 'react';
import {
    BulkDeleteButton,
    BulkExportButton,
    Datagrid,
    ExportButton,
    Filter,
    List,
    ListContextProvider,
    ShowButton,
    TextField,
    TextInput,
    TopToolbar,
    useListContext,
} from 'react-admin';

import {
    Divider,
    Tab,
    Tabs,
} from "@mui/material";

import PromoteButton from '../components/PromoteButton';
import TextEllipsisField from '../components/TextEllipsisField';

/**
 * Input of attributes that can filter out the List
 *  In this instance, we can search the list using name of the scene and uid
 * @param {*} props 
 * @returns 
 */
const SceneFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" />
        <TextInput source="uid" label="User ID" />
    </Filter>
);

/**
 * Actions/Buttons that can performs 
 * @param {*} props 
 * @returns 
 */
const SceneActions = (props)=> (
    <TopToolbar>
        {/* Filters */}
        {/* Create */}
        <ExportButton/>
    </TopToolbar>
);

/**
 * @param {*} param0 
 * @returns 
 */
const SceneBulkActionButtons = ({ basePath }) => (
    <Fragment>
        <PromoteButton/>
        <BulkExportButton />
        <BulkDeleteButton basePath={basePath} />
    </Fragment>
);

const TabbedDatagrid = (props)=>{
    //Get the all the data of scenes in list
    const listContext = useListContext();
    //Picks attributes we are interested in
    const { data, ids } = listContext;
    //Extract uid(different from ids) from data we received
    let uids = ids.map(id=>data[id].uid);

    //Get the count for each scenes
    const referenceCount = uids.filter(uid=>uid==="1").length;
    const userCount = uids.length - referenceCount;

    //Filter out the repeated uids and the uids isn't 1;
    uids = [...new Set(uids.filter(uid=>uid!=="1"))];

    //State to keep track the ids for user and reference scenes
    const [userIds, setUserIds] = useState([]);
    const [referenceIds, setReferenceIds] = useState([]);
    
    //State for tracking current tab
    const [tabIndex, setTabIndex ] = useState("0");

    //If either the ids or tab is changed on loop, updates the state accodingly
    useEffect(() => {
        if (ids) {
            if(tabIndex==="0"){
                setUserIds(ids.filter(id=>data[id].uid !== "1"));
            }else if(tabIndex==="1"){
                setReferenceIds(ids.filter(id=>data[id].uid === "1"));
            }
        }
    }, [ids, tabIndex]);

    return (
        <Fragment>
            <Tabs variant="fullWidth" centered value={tabIndex} onChange={(event,newVal)=>setTabIndex(newVal)}>
                <Tab value="0" label={`User Scenes (${userCount})`}/>
                <Tab value="1" label={`Example Scenes (${referenceCount})`}/>
            </Tabs>
            <Divider/>
            <div>
                { tabIndex === "0" && (
                    <ListContextProvider value={{...listContext, ids:userIds}} >
                        <Datagrid isRowExpandable={row => row.code} rowClick="show">
                            <TextField source="name" />
                            <TextField source="uid"/>
                            <TextEllipsisField  source="desc"/>
                            <TextEllipsisField source="code"/>
                            <ShowButton/>
                            <PromoteButton/>
                        </Datagrid>
                    </ListContextProvider>
                )}
                {  tabIndex === "1" && (
                    <ListContextProvider value={{...listContext, ids:referenceIds }}>
                        <Datagrid isRowExpandable={row => row.code} rowClick="show">
                            <TextField source="name" />
                            <TextEllipsisField  source="desc"/>
                            <TextEllipsisField source="code"/>
                            <ShowButton/>
                        </Datagrid>
                    </ListContextProvider>
                )}
            </div>
        </Fragment>);
}

const SceneList = (props)=>(
    <List {...props} filters={<SceneFilter/>} actions={<SceneActions/>} bulkActionButtons={<SceneBulkActionButtons/>}>
        <TabbedDatagrid/>
    </List>
);

export default SceneList;