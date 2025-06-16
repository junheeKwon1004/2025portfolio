import React, { useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
  const [koreaTime, setKoreaTime] = useState<string>("");
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

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
    setKoreaTime(getKoreanTime());

    const timer = setInterval(() => {
      setKoreaTime(getKoreanTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => {
      if (wrapRef.current) observer.unobserve(wrapRef.current);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4 header">
      <div
        ref={wrapRef}
        className={`header_Wrap flex justify-between items-center ${inView ? "animate-line" : ""}`}
      >
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
