import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
    <div>
        <h1>saaaafo</h1>
        <p>the info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent)=>{
    return (props) =>(
        <div>
            {props.isAdmin && <p>MENSAGEM PRIVADA</p>}
            <WrappedComponent {...props}/>
        </div>
    );

    
};

const requireAuthentication = (WrappedComponent)=>{
    return (props) =>(
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>: <p>LOGUE POR FAVOR</p>}
            
        </div>
    );

    
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="aaqui ó"/>,document.getElementById('app'));