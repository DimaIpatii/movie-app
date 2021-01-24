import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.js';

const withSidebarLayout = (Wrapped) => (props) => {
    return(
        <div className="wrapper">
            <div className="container">
                <Sidebar />
                <div className="content">
                    <Wrapped {...props} />
                </div>
            </div>
        </div>
    )
};


export default withSidebarLayout;
