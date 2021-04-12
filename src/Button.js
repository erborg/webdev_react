import React from "react";
import clsx from "clsx";

export default function Button(props) {
    const {text, newClass, ...rest} = props;
    let className = clsx({"ui-button": true}, newClass);
    return <button className={className} {...rest}>{text}</button>
}
