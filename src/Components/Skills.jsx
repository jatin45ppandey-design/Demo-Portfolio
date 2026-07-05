import React from 'react';
import SlickSlider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaLaptopCode } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const skillList = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Full Stack", icon: FaLaptopCode, color: "#20c997" }
];

function Skills() {

  const Slider = SlickSlider.default ? SlickSlider.default : SlickSlider;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>My Skills</h2>
      
      <div style={styles.sliderWrapper}>
        <Slider {...settings}>
          {skillList.map((skill, index) => {
            
            const IconComponent = skill.icon;
            
            return (
              <div key={index}>
                <div style={styles.card}>
                  <div style={styles.iconWrapper}>
                    {}
                    <IconComponent size={60} color={skill.color} />
                  </div>
                  <h3 style={styles.skillText}>{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '40px',
    color: '#333',
  },
  sliderWrapper: {
    padding: '0 10px',
  },
  card: {
    backgroundColor: '#2d3748', 
    borderRadius: '12px',
    padding: '40px 20px',
    margin: '0 15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'grab',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginBottom: '16px',
  },
  skillText: {
    color: 'wheat',
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '600',
  }
};

export default Skills;