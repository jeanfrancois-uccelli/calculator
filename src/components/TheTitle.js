import React from 'react';

export default function TheTitle (props) {
    return (
    <div style={{ fontSize: "22px" }}>
        <h1 style={{ fontSize:"24px", textAlign: "center" }}>{props.title}</h1>
    </div>
    )
}