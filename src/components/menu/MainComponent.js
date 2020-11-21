import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './dishdetail';
import { DISHES } from './pictures';
import Header from '../header/header';
import Footer from '../footer/footer';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    console.log('dishId', dishId)
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
      <Header />
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      <Footer />
      </div>
    );
  }
}

export default Main; 