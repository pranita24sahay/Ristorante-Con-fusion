import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../../shared/pictures';
import './Maincomponent.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div className="placing">
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
      </div>
    );
  }
}

export default Main;