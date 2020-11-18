import { Component } from "react";
import React from 'react';
import landingData from './Landing'

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {landing: landingData};
  }
render() {
    return(
      <section>
      {
        this.state.landing.map((s, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
              <h1>{s.title}</h1>
              <p>{s.description}</p>
              <img src={s.img} />
          </div>
        ) }
        </section>
    )
  }
}
export default Slide;