import React from 'react';

import {
    BooleanField,
    NumberField,
    Show,
    TextField,
    useRecordContext
} from 'react-admin';

import {
    GridShowLayout,
    RaGrid,
} from "ra-compact-ui";

import {
    Paper
} from "@mui/material";

import CodeDisplayField from '../components/CodeDisplay';

/**
 * Component that help display color of the Scene Settings (ie. Sky, Floor)
 * @param {*} props 
 * @returns 
 */
const ColorPalletField = (props)=>{
    const { source, defaultValue } = props;
    const record = useRecordContext(props);
    const color = record[source] ? record[source] : defaultValue;
    return <Paper elevation={2} sx={{
        backgroundColor: color,
        width:100,
        height:20,
    }}/>;
}

ColorPalletField.defaultProps = {
    addLabel: true
}

const style = {
    img: { 
        maxHeight: "300px"
    }
}

/**
 * Shows the detailed information about the selected scene
 * @param {*} props 
 * @returns 
 */
 export const SceneShow = (props) => (
    <Show {...props}>
        <GridShowLayout>
            <RaGrid container>
                <RaGrid xs={6}>
                    <TextField source="_id" />
                    <TextField source="name" />
                    <TextField source="desc" />
                    <TextField source="settings.collection" label="Collection" />
                    <CodeDisplayField source="code" />
                </RaGrid> 
                <RaGrid xs={6}>
                    <img src={`/apiv1/preview/id/${props.id}`} style={style.img} alt="Scene Preview" />
                    <h4>Settings</h4>
                    <RaGrid container spacing={3} alignItems="center" justifyContent="center">
                        <RaGrid>
                            <ColorPalletField   source="settings.skyColor"         defaultValue="#ffffff"   label="Sky Color" />
                            <ColorPalletField   source="settings.floorColor"       defaultValue="#000000"   label="Floor Color" />
                            <BooleanField       source="settings.showFloor"        emptyText="On"           label="Show Floor" />
                            <BooleanField       source="settings.showCoordHelper"  emptyText="On"           label="Show Coordinate Helper" />
                            <BooleanField       source="settings.canFly"           emptyText="Off"          label="Can Fly" />
                            <BooleanField       source="settings.viewOnly"         emptyText="Off"          label="View Only" />
                        </RaGrid> 
                        <RaGrid>
                            <BooleanField       source="settings.defaultLight"     emptyText="On"           label="Default Light" />
                            <BooleanField       source="settings.lightIndicator"   emptyText="Off"          label="Show Light Indicators" />
                            <BooleanField       source="settings.shadow"           emptyText="Off"          label="Cast Shadows" />
                            <TextField          source="settings.camPositon"       emptyText="0, 0, 0"      label="Camera Position" />
                            <NumberField        source="settings.camConfig"        emptyText="0"            label="Camera Config" />
                        </RaGrid>
                    </RaGrid> 
                </RaGrid>   
            </RaGrid>
        </GridShowLayout> 
    </Show>
);

export default SceneShow;