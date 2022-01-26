import React from "react";
import { useRecordContext } from "react-admin";
import PropTypes from "prop-types";

import { Box } from "@mui/material";

/**
 * This React component display text only in one line and will hide any overflow texts
 * @param {*} props 
 * @returns 
 */
const TextEllipsisField = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    const value = record && record[source] ? record[source] : "";

    return (<Box
        component="div" 
        width="200px"
        sx={{
            whiteSpace: "nowrap",
            textOverflow: 'ellipsis', 
            overflow: 'hidden'
        }}
      >{value != null && typeof value !== 'string'
      ? JSON.stringify(value)
      : value || ""}</Box>);
}

TextEllipsisField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired
}

TextEllipsisField.defaultProps = {
    addLabel: true
}

export default TextEllipsisField;
