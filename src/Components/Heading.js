import React from 'react';

const Heading = (props) => {
    return (
      <div className="col-sm-4 heading">
        <h2>
          <bold>{props.heading}</bold>
        </h2>
      </div>
    );
}

export default Heading