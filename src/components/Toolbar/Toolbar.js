import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import SvgLogo from '../../Icons/Logo';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/" className="toolbar__logo"> <SvgLogo className="Toolbar__3SD_Logo"/> Three Step Development</a>   </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Testimonals</a></li>
                    <li><a href="/">Quote in 5 mins</a></li>
                    <li><a href="/">Why Three Step Development</a></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default toolbar;