import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = 'side-drawer open';
    }   
     return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Testimonals</a></li>
                <li><a href="/">Quote in 5 mins</a></li>
                <li><a href="/">Why Three Step Development</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;