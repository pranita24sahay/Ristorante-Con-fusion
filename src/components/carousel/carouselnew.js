import React,{Component} from 'react';
import {Carousel,CarouselIndicators,CarouselItem} from 'reactstrap';

class CarouselN extends Component {

    constructor(props) {
      super(props);
      this.state = {
          activeIndex : 0
      };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
    }
        goToIndex = (index) => {
            this.setState({ activeIndex: index });
        };    
        next = (index) => {
            this.setState({ activeIndex: index + 1 });
        };
    
        previous = (index) => {
            this.setState({ activeIndex: index + 1 });
        };
    
        
    
        render()
        {
    return (
        <Carousel activeIndex={this.activeIndex} next={this.next} previous={this.previous}>
            
            <CarouselItem><img src={require('../images/alberto.png')} /></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
            
        </Carousel>
    );
    }
}
export default CarouselN;
