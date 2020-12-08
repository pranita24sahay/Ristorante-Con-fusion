import React, { Component } from 'react';
import './App.css';
import Main from './components/menu/MainComponent.js';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/sidebar/sidebar.js';
import BackDrop from './components/backdrop/backdrop.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../src/components/Redux/configurestore';

const store = ConfigureStore();

  class App extends Component {

    state = {
      sidebarOpen:false
    };

    sidebarToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sidebarOpen: !prevState.sidebarOpen}
      });
    };

    backdropClickHandler =  () => {
      this.setState({sidebarOpen :false});
    };
      

    render()
    {
      let sidebar;
      let backdrop;

      if(this.state.sidebarOpen)
      {
        sidebar=<SideBar />;
        backdrop = <BackDrop click={this.backdropClickHandler}/>;
      }
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div style={{height:'100%'}}>
      <Toolbar  sidebarClickHandler ={this.sidebarToggleClickHandler}/>
        {sidebar}
        {backdrop}
        <div>
          <Main />
        </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
    }
  }


export default App;