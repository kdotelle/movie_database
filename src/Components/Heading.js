import React from 'react';

const Heading = (props) => {
    return (
        <div className="col-sm-4 heading">
            <h2>{props.heading}</h2>
        </div>
    )
}

export default Heading