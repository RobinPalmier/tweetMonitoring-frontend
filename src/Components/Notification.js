import React from 'react';

function notification (props) {
      return (
        <div
          style={props.status === true ? {background : "#2ac20c"} : {background : "#e31029"}}
          className="notification"
        >
          <p>{props.message}</p>
        </div>
    );
}

export default notification;
