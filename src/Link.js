import React from "react";

export default function Link(props) {
    const {href, text} = props;
    return <a href={href} className="ui-link">{text}</a>
}
