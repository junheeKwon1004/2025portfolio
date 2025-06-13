// src/Section2.tsx
import React from "react";
import MyTabs from ".././components/MyTabs"; // 경로는 실제 파일 위치에 맞게 조정하세요.

const Section2: React.FC = () => {
  return (
    <section className="p-6 bg-gray-50 section02">
      {/* 1. 제목 부분 */}
      <div className="title">
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
