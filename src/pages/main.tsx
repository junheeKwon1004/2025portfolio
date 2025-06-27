// src/Main.tsx
import React, { useEffect, useRef, useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import mainIcon01 from '../assets/images/main_icon01.png';
import videoFile from '../assets/video/main_video.mp4';

const Main: React.FC = () => {
  const mainSectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (mainSectionRef.current) {
      observer.observe(mainSectionRef.current);
    }

    return () => {
      if (mainSectionRef.current) observer.unobserve(mainSectionRef.current);
    };
  }, []);

  return (
    <main>
      {/* 1. 상단 메인 섹션 */}
      <section
        className={`main ${inView ? "animate-line" : ""}`}
        ref={mainSectionRef}
      >
        <div className="leftSection">
          <h2>
            Designing code, <br />
            crafting experiences.
          </h2>
          <div className="txtBox">
            <h4>Beyond publishing creating interactive web journeys.</h4>
            <p>
              저는 팀과의 조화를 중요하게 생각하며, 사용자와 소통하는 따뜻한 웹을 만듭니다.
              <br className="m_Thidden" />
              기본에 충실한 마크업, 유지보수가 쉬운 CSS, 생동감을 더하는 JavaScript에 더해,
              <br className="m_Thidden" />
              컴포넌트 기반의 React를 활용해 확장성과 재사용성을 고려한 웹 개발을 지향합니다.
              <br className="m_Thidden" />
              새로운 기술을 두려워하지 않고, 항상 배우고 성장하는 퍼블리셔가 되겠습니다.
            </p>
          </div>
          <div className="imgBox">
            <img src={mainIcon01} alt="main_icon01" />
          </div>
        </div>
        <div className="rightSection">
          <div className="photo">
            <div className="photo">
              <video
                src={videoFile}
                autoPlay
                loop
                muted
                playsInline
                className="mainVideo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 기타 섹션들 */}
      <Section1 />
      <Section2 />
    </main>
  );
};

export default Main;
