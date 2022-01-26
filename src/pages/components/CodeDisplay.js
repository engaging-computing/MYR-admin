import React from "react";
import { useRecordContext } from "react-admin";
import { useField } from "react-final-form";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

/**
 * Display the text to the Ace Editor supplied by the ra-record (readonly)
 * @param {*} props 
 * @returns 
 */
const CodeDisplayField = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    return (
    <AceEditor
        name="SCENE_CODE"
        mode="javascript"
        theme="github"
        value={record[source]}
        wrapEnabled={true}
        readOnly={true}/>
    );
};

/**
 * Display the editable text to the Ace Editor
 * @param {*} props 
 * @returns 
 */
const CodeDisplayInput = (props) => {
    const { source } = props;
    const { input: { value, onChange } } = useField(source);
    return (    
        <AceEditor
            name="SCENE_CODE"
            mode="javascript"
            theme="github"
            wrapEnabled={true}
            value={value}
            onChange={(value)=>{onChange(value);}}/>
    );
};

CodeDisplayInput.propTypes = 
CodeDisplayField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired
}

//This will display Lebel above the Displays
CodeDisplayInput.defaultProps = 
CodeDisplayField.defaultProps = {
    addLabel: true
}

export { CodeDisplayField, CodeDisplayInput };
