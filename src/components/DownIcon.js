import React, { Component } from "react";
import data from "../data.json";

const DownIcon = (props) => {
    return (
        <div
            onClick = {props.onClick}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '-34px',
                transform: 'translateY(-45px)'
            }}
        >
            <img
                src={props.icon}
                style={{
                    maxWidth: '30px'
                }} />
        </div>
    )
}

export default DownIcon