import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from '../home/home'
import DishDetail from './dishdetail';
import { DISHES } from './pictures';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        
    };
  }

  

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
      }
    return (
      <div>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default Main; 