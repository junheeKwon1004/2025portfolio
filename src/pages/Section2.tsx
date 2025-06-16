// src/Section2.tsx
import React, { useEffect, useRef, useState } from "react";
import MyTabs from ".././components/MyTabs";

const Section2: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="p-6 bg-gray-50 section02">
      {/* 1. 제목 부분 */}
      <div
        ref={titleRef}
        className={`title ${inView ? "animate-line" : ""}`}
      >
        <h2>My Project</h2>
      </div>

      {/* 2. MyTabs 컴포넌트 삽입 */}
      <div className="project_Tab">
        <MyTabs />
      </div>
    </section>
  );
};

export default Section2;
