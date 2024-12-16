import React from 'react';

const NotFound = () => {
    return (
        <div className='ErrorPage'>
            <h1>404</h1>
            <div className="cloak__wrapper">
                <div className="cloak__container">
                    <div className="cloak"></div>
                </div>
            </div>
            <div className="info">
                <h2>We can't find that page</h2>
                <a
                    href="/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
