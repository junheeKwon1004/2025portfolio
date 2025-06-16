import React, { useEffect, useRef, useState } from "react";

// 이미지 import
import skillIcon01 from "../assets/images/skill_icon01.png";
import skillIcon02 from "../assets/images/skill_icon02.png";
import skillIcon03 from "../assets/images/skill_icon03.png";
import skillIcon04 from "../assets/images/skill_icon04.png";
import skillIcon05 from "../assets/images/skill_icon05.png";
import skillIcon06 from "../assets/images/skill_icon06.png";
import skillIcon07 from "../assets/images/skill_icon07.png";

const Section1: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`p-6 bg-white section01 ${inView ? "animate-line" : ""}`}
    >
      <div className="sectionLeft">
        <h3 className="font_Fraternite">My Skill</h3>
      </div>
      <div className="sectionRight">
        <div className="box">
          <img src={skillIcon01} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="box">
          <img src={skillIcon02} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="box">
          <img src={skillIcon03} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="box">
          <img src={skillIcon04} alt="React" />
          <p>React</p>
        </div>
        <div className="box">
          <img src={skillIcon05} alt="SCSS / SASS" />
          <p>SCSS / SASS</p>
        </div>
        <div className="box">
          <img src={skillIcon06} alt="Jquery" />
          <p>Jquery</p>
        </div>
        <div className="box">
          <img src={skillIcon07} alt="Photoshop / Illustration" />
          <p>PhotoShop / Illustration</p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
