import React, { 
    Fragment, 
    useCallback,
    useEffect,
    useState
} from 'react';

import {
    Datagrid,
    DeleteButton,
    ExportButton,
    EditButton,
    List,
    ListContextProvider,
    SearchInput,
    ShowButton,
    TextField,
    TopToolbar,
    useListContext
} from 'react-admin';

import {
    Divider,
    IconButton,
    Menu,
    Tab,
    Tabs,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import PromoteButton from '../components/PromoteButton';
import TextEllipsisField from '../components/TextEllipsisField';

/**
 * Input of attributes that can filter out the List
 *  In this instance, we can search the list using name of the scene and uid
 * @param {*} props 
 * @returns 
 */
const sceneFilters = [
    //TODO - Enable to search with user info (ie. email) etc.
    <SearchInput source="name" alwaysOn />,
    <SearchInput source="uid" reference="User Id"/>,
];

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

const LongMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}>
            <ShowButton {...props}/><div/>
            <EditButton {...props}/>
            {props.type==="user" ? <PromoteButton {...props}/> : null}<div/>
            <DeleteButton  {...props}/>
        </Menu>
      </div>
    );
}

const TabbedDatagrid = (props)=>{
    //Get the all the data of scenes' list
    const listContext = useListContext();
    //Picks attributes we are interested in
    const { data, ids, filterValues, setFilters, displayedFilters } = listContext;

    //Extract uid(different from ids) from data we received
    let uids = ids.map(id=>data[id].uid);
    //Filter out the repeated uids and the uids isn't 1;
    uids = [...new Set(uids.filter(uid=>uid!=="1"))];

    //State to keep track the ids for user and reference scenes
    const [userIds, setUserIds] = useState([]);
    const [exampleIds, setExampleIds] = useState([]);

    //If either the ids or tab is changed on loop, updates the state accodingly
    useEffect(() => {
        if (ids) {
            if(filterValues.uid !=="1"){
                setUserIds(ids.filter(id=>data[id].uid !== "1"));
            } else {
                setExampleIds(ids.filter(id=>data[id].uid === "1"));
            }
        }
    }, [ids, filterValues.uid]);

    const handleChange = useCallback((e,val)=>{
        if(setFilters){
            switch(val){
            case "1":
                setFilters(
                    {...filterValues, uid:"1"},
                    displayedFilters);
                break;
            case "0":
            default:
                setFilters(
                    {...filterValues, uid:undefined},
                    displayedFilters);
                break;
            }
        }
    },[filterValues,setFilters]);
    return (
        <Fragment>
            <Tabs variant="fullWidth" centered value={(filterValues.uid === "1") ? "1":"0"} onChange={handleChange}>
                <Tab value="0" label="User Scenes"/>
                <Tab value="1" label="Example Scenes"/>
            </Tabs>
            <Divider/>
            <div>
                { filterValues.uid !== "1" && (
                    <ListContextProvider value={{...listContext, ids:userIds}} >
                        <Datagrid {...props} ids={userIds}>
                            <TextField source="name" />
                            <TextField source="uid"/>
                            <TextEllipsisField source="desc"/>
                            <TextEllipsisField source="code"/>
                            <LongMenu type="user"/>
                        </Datagrid>
                    </ListContextProvider>
                )}
                {  filterValues.uid === "1" && ( 
                    <ListContextProvider value={{...listContext, ids:exampleIds }}>
                        <Datagrid {...props} ids={exampleIds}>
                            <TextField source="name" />
                            <TextEllipsisField source="desc"/>
                            <TextEllipsisField source="code"/>
                            <LongMenu type="example"/>
                        </Datagrid>
                    </ListContextProvider>
                )}
            </div>
        </Fragment>);
}

const SceneList = (props)=>(
    <List
        {...props}
        perPage={25} 
        filters={sceneFilters} 
        actions={<SceneActions/>}>
        <TabbedDatagrid/>
    </List>
);

export default SceneList;