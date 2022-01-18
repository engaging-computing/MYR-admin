import React from "react";

import {
    BooleanInput,
    Edit,
    FormTab,
    NumberInput,
    TabbedForm,
    TextField,
    TextInput
} from "react-admin";

import { CodeDisplayInput }  from "../components/CodeDisplay";

/**
 * Allows to edit the scene through the admin portal.
 *  TODO: 
 *      -Backend doesn't support the edit of the scene besides the owner. Need to add admin priviledge.
 *      -Add confirmation window before saving or deleting a scene
 *      -Add promote button to the action bar (next to show)
 * @param {*} props 
 * @returns 
 */
const SceneEdit = (props)=>(
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Scene">
                <TextField  source="_id"  label="Scene Id"/>
                <TextField  source="uid"  label="uid"/>
                <TextInput  source="name" label="Title"/>
                <TextInput  source="desc" label="Description" multiline fullWidth/>
                <CodeDisplayInput source="code"/>
            </FormTab>
            <FormTab label="Settings">
                <TextInput      source="settings.skyColor"          defaultValue="#FFFFFF"  label="Sky Color"   type="color"/>
                <TextInput      source="settings.floorColor"        defaultValue="#000000"  label="Floor Color" type="color"/>
                <BooleanInput   source="settings.showFloor"         defaultValue={true}     label="Show Floor"/>
                <BooleanInput   source="settings.showCoordHelper"   defaultValue={true}     label="Show Coordinate Helper"/>
                <BooleanInput   source="settings.viewOnly"          defaultValue={false}    label="View Only"/>  
                <BooleanInput   source="settings.defaultLight"      defaultValue={true}     label="Default Light"/>
                <BooleanInput   source="settings.lightIndicator"    defaultValue={false}    label="Show Light Indicators"/>
                <BooleanInput   source="settings.shadow"            defaultValue={false}    label="Cast Shadows"/>
                <TextInput      source="settings.camPositon"        defaultValue="0,0,0"    label="Camera Position"/>
                <NumberInput    source="settings.camConfig"         defaultValue="0"        label="Camera Config"/>
            </FormTab>
        </TabbedForm>
    </Edit>
);


export default SceneEdit;