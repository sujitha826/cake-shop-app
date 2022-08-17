import React from "react";

// Function Composition explained..Card accepts 2 props as defined ones and any others as children
function Compostion() {
    return (
        <div className="composition">
            <Card title="Title1" description="Description1">
                <a href="https://google.com">Go to this link</a>
            </Card>
            <Card title="Title2" description="Description2">
                <button>Click here</button>
            </Card>
        </div>
    );
}

function Card(props) {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
        </div>
    );
}

export default Compostion;