import React from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
  };

  const Slider = SlickSlider.default ? SlickSlider.default : SlickSlider;
  
  return (
    <>
      <div>
        <h3>Skills</h3>
      </div>
      <Slider {...settings}>

{/* First Skill */}

        <div style={{backgroundColor:'grey'}}>
            <h1>
                Html
            </h1>
        </div>

        {/* First Skill */}

        <div style={{backgroundColor:'grey'}}>
            <h1>
                Html
            </h1>
        </div>

        {/* First Skill */}

        <div style={{backgroundColor:'grey'}}>
            <h1>
                FSD
            </h1>
        </div>

        {/* First Skill */}

        <div style={{backgroundColor:'grey'}}>
            <h1>
                Java
            </h1>
        </div>

        {/* First Skill */}

        <div style={{backgroundColor:'grey'}}>
            <h1>
                CSS
            </h1>
        </div>
      </Slider>
    </>
  );
}

export default Skills;