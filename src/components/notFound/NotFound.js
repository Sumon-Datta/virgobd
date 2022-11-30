import React from 'react';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div  className='notfound text-danger'>
            <h2 className='text-danger'>Opps! Page Not Found</h2>
            <h1>404</h1>
        </div>
    );
};

export default NotFound;