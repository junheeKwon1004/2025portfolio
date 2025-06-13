import React from "react";

const Section1: React.FC = () => {
  return (
    <section className="p-6 bg-white section01">
      <div className="sectionLeft">  
        <h3 className="font_Fraternite">My Skill</h3>
      </div>
      <div className="sectionRight">
        <div className="box">
          <img src="./src/assets/images/skill_icon01.png" alt="skill_icon01" />
          <p>HTML</p>
        </div>
        <div className="box">
          <img src="./src/assets/images/skill_icon02.png" alt="skill_icon02" />
          <p>CSS</p>
        </div>
        <div className="box">
          <img src="./src/assets/images/skill_icon03.png" alt="skill_icon03" />
          <p>JavaScript</p>
        </div>
        <div className="box">
          <img src="./src/assets/images/skill_icon04.png" alt="skill_icon04" />
          <p>React</p>
        </div>
        <div className="box">
          <img src="./src/assets/images/skill_icon05.png" alt="skill_icon05" />
          <p>SCSS / SASS</p>
        </div>
        <div className="box">
          <img src="./src/assets/images/skill_icon06.png" alt="skill_icon06" />
          <p>Jquery</p>
        </div>
        <div className="box">
          <img src="./src/assets/images/skill_icon07.png" alt="skill_icon07" />
          <p>PhotoShop / Illustration</p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
