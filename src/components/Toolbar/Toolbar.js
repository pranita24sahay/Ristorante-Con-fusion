import React from 'react';
import SideBarButton from '../sidebar/sidebarbutton';
import './Toolbar.css';
import '@fortawesome/fontawesome-free';


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
                    <li><a href="/"><span class="fa fa-home fa-lg"></span> Home</a></li>
                    <li><a href="/"><span class="fa fa-info fa-lg"></span> About Us</a></li>
                    <li><a href="/"><span class="fa fa-address-card fa-lg"></span> Contact Us</a></li>
                </ul>
                <br />
            </div>
        </nav>
        
    </header>
);


export default Toolbar;