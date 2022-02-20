import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImageWrapper, Title,SliderWrapper } from './Slider.style';

import Html from '../../assets/slider/html.png';
import Css from '../../assets/slider/css.png';
import Sass from '../../assets/slider/sass.png';
import Php from '../../assets/slider/php.png';
import Bootstrap from '../../assets/slider/bootstrap.png';
import Ts from '../../assets/slider/ts.png';
import Js from '../../assets/slider/js.png';
import ReactImg from '../../assets/slider/react.png';
import Node from '../../assets/slider/node.png';
import Express from '../../assets/slider/express.png';
import Mongo from '../../assets/slider/mongo.png';
import MySql from '../../assets/slider/mysql.png';
import Firebase from '../../assets/slider/firebase.png';
import Jq from '../../assets/slider/jq.png';
import Git from '../../assets/slider/git.png';
import Figma from '../../assets/slider/figma.png';
import AdobeXD from '../../assets/slider/xd.png';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
			arrows: false,
      infinite: true,
      speed: 500,
			autoplay: true,
      slidesToShow: 8,
      slidesToScroll: 1,
			  responsive: [
    {
      breakpoint: 1248,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 4,
      }
    },
		 {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
      }
    },
		{
      breakpoint: 440,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
    };
    return (
			<SliderWrapper>
			<Title>Technologies I use in my projects</Title>
        <Slider {...settings} >
          <ImageWrapper> 
            <img src={Html} alt="html" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Css} alt="css" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Sass} alt="sass" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Php} alt="php" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Bootstrap} alt="bootstrap" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Js} alt="js" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Ts} alt="ts" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={ReactImg} alt="react" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Node} alt="node" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Express} alt="express" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Mongo} alt="mongoDb" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={MySql} alt="mySql" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Firebase} alt="Firebase" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Jq} alt="jq" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Git} alt="git" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={Figma} alt="figma" />
          </ImageWrapper>
					<ImageWrapper> 
            <img src={AdobeXD} alt="adobexd" />
          </ImageWrapper>
        </Slider>
				</SliderWrapper>
    );
  }
}