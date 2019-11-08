import React from 'react'
import ReactDOM from 'react-dom'
import { AST_PropAccess } from 'terser'


const Info = (props) => {
    return (
        <div>
            <h1>Info Component</h1>
            <p> content related to Info component: {props.info} </p>
        </div>
    )
}

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            <p> this is private info. please do not share it. </p>
            <WrapperComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? <WrapperComponent {...props} /> : <p> Please Authenticate first! </p>
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="some info" />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="some info" />, document.getElementById('root'));