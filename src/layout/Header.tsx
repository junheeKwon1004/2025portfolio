import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [koreaTime, setKoreaTime] = useState<string>("");

  // 한국 시간 포맷팅 함수
  const getKoreanTime = () => {
    const now = new Date();
    return new Intl.DateTimeFormat("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Seoul",
    }).format(now);
  };

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 시간 설정
    setKoreaTime(getKoreanTime());

    // 1초마다 시간 갱신
    const timer = setInterval(() => {
      setKoreaTime(getKoreanTime());
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4 header">
      <div className="header_Wrap flex justify-between items-center">
        <h5 className="text-lg font-bold">2025 PROJECTS</h5>
        <div className="clock flex items-center gap-2">
          <div className="round w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <p>
            <strong>KOREA</strong> {koreaTime}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
