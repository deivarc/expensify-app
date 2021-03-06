//hoc -> component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>
        Hi guys. Info is {props.info}
    </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
return (props) => (
    <div>
        {props.isAuthe ? <WrappedComponent {...props} />: <p>Please login</p>}
    </div>
    );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthe={true} info="JoJo'ss Bizzare Adventure" />,document.getElementById('here'));