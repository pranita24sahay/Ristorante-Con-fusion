import React from 'react';
import './sidebarbutton.css';

const SideBarButton = props => (
    <div>
    <button className="toggle-button "onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
    </div>

);
export default SideBarButton;