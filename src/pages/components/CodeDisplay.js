import React from "react";
import { useRecordContext } from "react-admin";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

const CodeDisplayField = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    return (<AceEditor
        name="SCENE_CODE"
        mode="javascript"
        theme="github"
        value={record[source]}
        wrapEnabled={true}
        readOnly={true}
    />);
}

CodeDisplayField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired
}

CodeDisplayField.defaultProps = {
    addLabel: true
}

export default CodeDisplayField;
