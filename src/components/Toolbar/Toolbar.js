import React from 'react';
import SideBarButton from '../sidebar/sidebarbutton';
import './Toolbar.css';


const Toolbar = prop => (
    <header className="toolbar">
      
        <nav className="toolbar_navigation ">
            <div className="button1">
                <SideBarButton click = {prop.sidebarClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"> Say Cheese</a> </div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
                <br />
            </div>
        </nav>
        
    </header>
);


export default Toolbar;