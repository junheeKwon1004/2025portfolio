// src/components/TabsWithFlexCalcWidth.tsx
import React from "react";
import { Tabs, Card, Button } from "antd";
import type { TabsProps } from "antd";
import "./TabsWithFlexCalcWidth.css";

import naverImg from "../assets/images/naver.png";
import chromeImg from "../assets/images/chrome.png";
import weatherImg from "../assets/images/weather.png";
import movieImg from "../assets/images/movie.png";
import chatImg from "../assets/images/chat.png";
import koreaArchImg from "../assets/images/korea-arch.png";
import koreaHealthImg from "../assets/images/korea-health.png";
import myongjiImg from "../assets/images/myongji.png";
import monoImg from "../assets/images/mono.png";

interface ProjectItem {
  title: string;
  description: string;
  detailUrl: string;
  githubUrl: string;
  imageSrc: string;
  tags: string[];
  contribution: string;
}

const nineCardData: ProjectItem[] = [
  {
    title: "Naver",
    description:
      "네이버 클론 코딩을 통한 시맨틱 마크업의 중요성과 접근성을 위한 IR 기법과 효율적인 이미지 로딩을 위한 IS 기법",
    detailUrl: "https://junheekwon1004.github.io/2025portfolio/projects/naver/",
    githubUrl: "",
    imageSrc: naverImg,
    tags: ["시맨틱 마크업", "CSS", "IR & IS & Blind"],
    contribution: "기여도 100%",
  },
  // {
  //   title: "Chrome app",
  //   description: "자바스크립트를 활용한 웹서비스로 날씨 api, 시간 api 데이터를 받아와 기능을 구현",
  //   detailUrl: "https://example.com/chrome-detail",
  //   githubUrl: "https://github.com/your-repo/chrome-extension",
  //   imageSrc: chromeImg,
  //   tags: ["시맨틱 마크업", "JavaScript", "Open Weather API"],
  //   contribution: "기여도 100%",
  // },
  {
    title: "Weather app",
    description: "리액트와 JSX 문법을 활용했고 Open Weather API를 이용하여 실시간 날씨 정보를 조회할 수 있음",
    detailUrl: "https://junheekwon1004.github.io/2025portfolio/projects/weather_app/",
    githubUrl: "",
    imageSrc: weatherImg,
    tags: ["React", "SCSS", "API 연동", "JSX", "Open Weather API"],
    contribution: "기여도 100%",
  },
  // {
  //   title: "React JS Movie Service",
  //   description: "리액트를 활용해 간단한 영화 웹 서비스를 만들고",
  //   detailUrl: "https://example.com/movie-detail",
  //   githubUrl: "https://github.com/your-repo/react-movie",
  //   imageSrc: movieImg,
  //   tags: ["React", "Node.JS", "CSS"],
  //   contribution: "기여도 100%",
  // },
  // {
  //   title: "React Chatting Service",
  //   description:
  //     "실시간 채팅 서비스 구현 (Socket.io), 리액트로 오픈 채팅 서비스를 구현했고 컴포넌트와 Props의 관계, UseState, UseEffect 로 컴포넌트를 구성했음",
  //   detailUrl: "https://example.com/chat-detail",
  //   githubUrl: "https://github.com/your-repo/chat-service",
  //   imageSrc: chatImg,
  //   tags: ["Socket.io", "Node.js", "WebSocket"],
  //   contribution: "기여도 35%",
  // },
  {
    title: "고려대학교 건축학과",
    description: "네브루탈리즘처럼 선을 강조한 디자인을 중점으로 작업했고 정형화된 디자인보단 간결한 여백의 미를 추구함",
    detailUrl: "https://archi.korea.ac.kr/main/main.html",
    githubUrl: "",
    imageSrc: koreaArchImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "고려대학교 보건과학대학 및 학부 4",
    description: "대학 사이트와 학부 사이트의 통일성을 추구하며 작업했고 css의 모션 효과와 호버 효과를 준 사이트",
    detailUrl: "https://chs.korea.ac.kr/main/main.html",
    githubUrl: "",
    imageSrc: koreaHealthImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "명지전문대학교 조기취업형계약학과",
    description: "다양한 컬러와 일러스트를 활용했고 아이콘을 넣어 실용적이고 직관적인 사용자 인터페이스를 구축",
    detailUrl: "https://early.mjc.ac.kr/main/main.html",
    githubUrl: "",
    imageSrc: myongjiImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "모노커뮤니케이션즈",
    description: "기업 아이덴티티를 살려 브랜드 컬러, 아이콘 등을 활용했고 콘텐츠 중심의 레이아웃을 활용함",
    detailUrl: "https://www.mono.co.kr/main/main.html",
    githubUrl: "",
    imageSrc: monoImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
];

const filterByIndices = (source: ProjectItem[], indices: number[]) =>
  source.filter((_, idx) => indices.includes(idx));

const renderList = (dataSource: ProjectItem[]) => (
  <div className="project-list">
    {dataSource.map((item, index) => (
      <Card
        key={index}
        hoverable={false}
        className="project-card"
        cover={
          item.detailUrl ? (
            <a
              href={item.detailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="img-wrapper"
            >
              <img className="card-hover-img" alt={item.title} src={item.imageSrc} />
            </a>
          ) : (
            <div className="img-wrapper">
              <img className="card-hover-img" alt={item.title} src={item.imageSrc} />
            </div>
          )
        }
      >
        <Card.Meta title={item.title} className="project-meta" />
        <div className="cont_txt">{item.description}</div>
        <div className="cont_txt2">
          <div className="tags">
            {item.tags.map((tag, idx) => (
              <span key={idx}>
                {tag}
                {idx < item.tags.length - 1 && "\u00A0\u00A0\u00A0"}
              </span>
            ))}
          </div>
          <div className="contribution">{item.contribution}</div>
        </div>
        <div className="button-group">
          {item.detailUrl && (
            <Button
              type="primary"
              href={item.detailUrl}
              target="_blank"
              className="mainBtn leftButton"
            >
              Site
            </Button>
          )}
          {item.githubUrl && (
            <Button
              type="default"
              href={item.githubUrl}
              target="_blank"
              className="mainBtn rightButton"
            >
              Velog
            </Button>
          )}
        </div>
      </Card>
    ))}
  </div>
);

const apiIndices = [1];
const reactIndices = [1];
const projectIndices = [2, 3, 4, 5];
const jsIndices = [0, 2, 3, 4, 5];
const responsiveIndices = [2, 3, 4, 5];

const items: TabsProps["items"] = [
  { key: "all", label: "All", children: <>{renderList(nineCardData)}</> },
  { key: "1", label: "API", children: <>{renderList(filterByIndices(nineCardData, apiIndices))}</> },
  { key: "2", label: "React", children: <>{renderList(filterByIndices(nineCardData, reactIndices))}</> },
  { key: "3", label: "Project", children: <>{renderList(filterByIndices(nineCardData, projectIndices))}</> },
  { key: "4", label: "JavaScript", children: <>{renderList(filterByIndices(nineCardData, jsIndices))}</> },
  { key: "5", label: "Responsive", children: <>{renderList(filterByIndices(nineCardData, responsiveIndices))}</> },
];

const TabsWithFlexCalcWidth: React.FC = () => (
  <Tabs defaultActiveKey="all" items={items} />
);

export default TabsWithFlexCalcWidth;
