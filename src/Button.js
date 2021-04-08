import React from "react";

export default function Button(props) {
    const {text, type, disabled} = props;
    return <button type={type} disabled={disabled} className="ui-button">{text}</button>
}
