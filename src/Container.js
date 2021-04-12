import React from "react";
import clsx from "clsx";

export default function Container(props) {
    const {children, newClass, ...rest} = props;
    const className = clsx({"ui-container": true}, newClass);
    return <div className={className} {...rest}>{children}</div>
}
