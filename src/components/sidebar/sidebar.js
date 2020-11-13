import React from 'react';
import './sidebar.css';

const SideBar = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Flora</a></li>
            <li><a href="/">Fauna</a></li>
            <li><a href="/">Portraits</a></li>
            <li><a href="/">Landscapes</a></li>
            <li><a href="/">Sky</a></li>
        </ul>
    </nav>
);

export default SideBar;