// src/components/TabsWithFlexCalcWidth.tsx
import React from "react";
import { Tabs, Card, Button } from "antd";
import type { TabsProps } from "antd";
import "./TabsWithFlexCalcWidth.css";

import naverImg from "../assets/images/naver.png";
// import chromeImg from "../assets/images/chrome.png";
import weatherImg from "../assets/images/weather.png";
// import movieImg from "../assets/images/movie.png";
// import chatImg from "../assets/images/chat.png";
import koreaArchImg from "../assets/images/korea-arch.png";
import koreaHealthImg from "../assets/images/korea-health.png";
import myongjiImg from "../assets/images/myongji.png";
import monoImg from "../assets/images/mono.png";
import hyundaiImg01 from "../assets/images/hyndai_ui.png";
import hyundaiImg02 from "../assets/images/hyundai_ezwel.png";
import hyundaiImg03 from "../assets/images/hyundai_weeksale.png";
import hyundaiImg04 from "../assets/images/hyundai_jejuair.png";
import hyundaiImg05 from "../assets/images/hyundai_noltemplate.png";
import hyundaiImg06 from "../assets/images/hyundai_recommendation.png";

interface ProjectItem {
  title: string;
  description: string;
  detailUrl: string;
  mobileUrl: string;
  githubUrl: string;
  imageSrc: string;
  tags: string[];
  contribution: string;
}

const nineCardData: ProjectItem[] = [
  {
    title: "현대면세점 UI 개선",
    description: "현대면세점 국·중·영 이어가입 UI를 개선해 다국어 가입 과정의 가독성과 사용자 편의성을 강화한 작업",
    detailUrl: "https://m.hddfs.com/shop/mm/mbshJoin/oflnToOnlnJoin.do", // PC
    mobileUrl: "", // MO
    githubUrl: "",
    imageSrc: hyundaiImg01,
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "UIUX"],
    contribution: "기여도 100%(퍼블리싱)",
  },
  {
    title: "현대면세점 에스티로더 브랜드관 리뉴얼",
    description: "면세점 내 브랜드관 풀 리뉴얼 작업로 상품 옵션 선택 UI·위젯 인터랙션 구현",
    detailUrl: "https://m.hddfs.com/shop/dm/lgBran/esteelauder/lgBranMain.do",
    mobileUrl: "",
    githubUrl: "", 
    imageSrc: hyundaiImg06,
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Swiper", "selectmenu"],
    contribution: "기여도 100%(퍼블리싱)",
  },
  {
    title: "현대면세점 이지웰 이벤트",
    description: "뽑기 이벤트 API 호출과 이심번호 지급을 위한 난수 API 활용을 비롯해, 등급업·허니 받기·임직원 등급 지급 API 연동을 구현",
    detailUrl: "https://junheekwon1004.github.io/2025portfolio/projects/hyundai/ezwel.html",
    mobileUrl:"https://junheekwon1004.github.io/2025portfolio/projects/hyundai/mo_ezwel.html",
    githubUrl: "", 
    imageSrc: hyundaiImg02,
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Json"],
    contribution: "기여도 100%(퍼블리싱)",
  },
  {
    title: "현대면세점 주특기 이벤트",
    description: "BEM 클래스 네이밍 규칙과 공통 템플릿 스니펫을 활용해 일관된 구조의 공통 폼 컴포넌트를 제작하고, 작업 효율 및 유지보수성을 개선",
    detailUrl: "https://junheekwon1004.github.io/2025portfolio/projects/hyundai/ko_weeksale_hera.html",
    mobileUrl:"https://junheekwon1004.github.io/2025portfolio/projects/hyundai/mko_weeksale_hera.html",
    githubUrl: "", 
    imageSrc: hyundaiImg03,
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Swiper"],
    contribution: "기여도 100%(퍼블리싱)",
  },
  {
    title: "현대면세점 제주항공 룰렛이벤트",
    description: "룰렛 동작 시 API 호출로 경품 당첨 여부를 처리하고 결과 팝업을 노출하는 이벤트 작업",
    detailUrl: "https://junheekwon1004.github.io/2025portfolio/projects/hyundai/ko_jeju_air_roulette.html",
    mobileUrl:"https://junheekwon1004.github.io/2025portfolio/projects/hyundai/mko_jeju_air_roulette.html",
    githubUrl: "",
    imageSrc: hyundaiImg04,
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Json"],
    contribution: "기여도 100%(퍼블리싱)",
  },
  {
    title: "현대면세점 놀유니버스 템플릿 작업",
    description: "BEM 태그 규칙을 활용해 마크업을 정리하고, 스토리북 가이드에 따라 컴포넌트 템플릿화 작업 진행",
    detailUrl: "https://junheekwon1004.github.io/2025portfolio/projects/hyundai/ko_nol.html",
    mobileUrl:"https://junheekwon1004.github.io/2025portfolio/projects/hyundai/mko_nol.html",
    githubUrl: "", 
    imageSrc: hyundaiImg05,
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "AOS"],
    contribution: "기여도 100%(퍼블리싱)",
  },
  {
    title: "Naver",
    description:
      "네이버 클론 코딩을 통한 시맨틱 마크업의 중요성과 접근성을 위한 IR 기법과 효율적인 이미지 로딩을 위한 IS 기법",
    detailUrl: "https://junheekwon1004.github.io/2025portfolio/projects/naver/",
    mobileUrl:"",
    githubUrl: "https://velog.io/@htt1247/%EB%84%A4%EC%9D%B4%EB%B2%84-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9",
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
    mobileUrl:"",
    githubUrl: "https://junheekwon1004.github.io/2025portfolio/projects/weather_app/",
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
    mobileUrl:"",
    githubUrl: "",
    imageSrc: koreaArchImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "고려대학교 보건과학대학 및 학부 4",
    description: "대학 사이트와 학부 사이트의 통일성을 추구하며 작업했고 css의 모션 효과와 호버 효과를 준 사이트",
    detailUrl: "https://chs.korea.ac.kr/main/main.html",
    mobileUrl:"",
    githubUrl: "",
    imageSrc: koreaHealthImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "명지전문대학교 조기취업형계약학과",
    description: "다양한 컬러와 일러스트를 활용했고 아이콘을 넣어 실용적이고 직관적인 사용자 인터페이스를 구축",
    detailUrl: "https://early.mjc.ac.kr/main/main.html",
    mobileUrl:"",
    githubUrl: "",
    imageSrc: myongjiImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "모노커뮤니케이션즈",
    description: "기업 아이덴티티를 살려 브랜드 컬러, 아이콘 등을 활용했고 콘텐츠 중심의 레이아웃을 활용함",
    detailUrl: "https://www.mono.co.kr/main/main.html",
    mobileUrl:"",
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
          {item.mobileUrl ? (
            <>
              {/* PC */}
              {item.detailUrl && (
                <Button
                  type="primary"
                  href={item.detailUrl}
                  target="_blank"
                  className="mainBtn leftButton"
                >
                  PC
                </Button>
              )}
              {/* MO */}
              <Button
                type="default"
                href={item.mobileUrl}
                target="_blank"
                className="mainBtn rightButton"
              >
                MO
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </Card>
    ))}
  </div>
);

const apiIndices = [1, 3, 7];
const reactIndices = [7];
const projectIndices = [0,1,2,3,4,5,6,7,8,9,10,11];
const jsIndices = [0, 1, 3, 6, 8, 9, 10, 11];
const responsiveIndices = [8, 9, 10, 11];

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
