import React from "react";
import clsx from "clsx";

export default function Link(props) {
    const {href, text, newClass, ...rest} = props;
    const className = clsx({"ui-link": true}, newClass);
    return <a href={href} className={className} {...rest}>{text}</a>
}
