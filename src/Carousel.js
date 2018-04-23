import React, { Component } from 'react';
import './Carousel.css';
import banner01 from './img/banner-01.png';
import banner02 from './img/banner-02.png';
import banner03 from './img/banner-03.png';
import banner04 from './img/banner-04.png';
import Indicator from './Indicator'

class Carousel extends Component {
  constructor(props) {
    super(props)
    const arrayImg = [banner01,banner02,banner03, banner04];
    this.state = {
      currentIndex: 0,
      length: arrayImg.length,
      arrayImg: arrayImg
    }

  }
  nextSlide = () => {
    const {length, currentIndex} = this.state;
    currentIndex < length-1 ?
      this.setState({currentIndex: currentIndex+1}):
      this.setState({currentIndex: 0})
  }
  prevSlide = () => {
    const {currentIndex, length} = this.state;
    currentIndex > 0 ?
      this.setState({currentIndex: currentIndex-1}):
      this.setState({currentIndex: length-1})
  }
  dotAction = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const {currentIndex, arrayImg} = this.state
    const img = arrayImg.map( (a,i) => {
      return(<li key={i} className={currentIndex === i? "current":"hide"}><img src={a} alt="01"/></li>)
    })
    return (
      <div className="carousel">
        <ul>
          {img}
        </ul>
        <span className="prevBtn" onClick={this.prevSlide}> <i className="left"></i> </span>
        <span className="nextBtn" onClick={this.nextSlide}><i className="right"></i></span>
        <Indicator carouselNum={arrayImg.length} dotAction={this.dotAction} currentIndex={this.state.currentIndex}/>
      </div>
    );
  }
}

export default Carousel;
