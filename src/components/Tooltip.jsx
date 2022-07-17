import React from "react";

function Tooltip(props) {
    return (
        <div className="group">
            <div className="tooltip">
                {props.children}
                <p className="text-sm text-gray-700 group-hover:scale-100">
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default Tooltip;
