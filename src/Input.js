import React from "react";
import clsx from "clsx";

export default function Input(props) {
    const {type = "text", newClass, ...rest} = props;
    const className = clsx({"ui-textfield": true}, newClass);
    return <input className={className} type={type} {...rest}/>
}