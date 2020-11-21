import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Say Cheese!</h1>
                       <p>We take inspiration from the environment and make it an ambience</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;