// src/components/TabsWithFlexCalcWidth.tsx
import React from "react";
import { Tabs, Card, Button } from "antd";
import type { TabsProps } from "antd";
import "./TabsWithFlexCalcWidth.css";


// 로컬 이미지 9개 import
import naverImg      from "../assets/images/naver.png";
import chromeImg     from "../assets/images/chrome.png";
import weatherImg    from "../assets/images/weather.png";
import movieImg      from "../assets/images/movie.png";
import chatImg       from "../assets/images/chat.png";
import koreaArchImg  from "../assets/images/korea-arch.png";
import koreaHealthImg from "../assets/images/korea-health.png";
import myongjiImg    from "../assets/images/myongji.png";
import monoImg       from "../assets/images/mono.png";


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
    detailUrl: "https://velog.io/@htt1247/React-%EC%9C%A0%EC%A0%80%EC%A0%95%EB%B3%B4-%ED%8C%9D%EC%97%85-%EA%B5%AC%ED%98%84",
    githubUrl: "https://github.com/your-repo/naver-clone",
    imageSrc: naverImg,
    tags: ["시맨틱 마크업", "CSS", "IR & IS & Blind"],
    contribution: "기여도 100%",
  },
  {
    title: "Chrome app",
    description:
      "자바스크립트를 활용한 웹서비스로 날씨 api, 시간 api 데이터를 받아와 기능을 구현",
    detailUrl: "https://example.com/chrome-detail",
    githubUrl: "https://github.com/your-repo/chrome-extension",
    imageSrc: chromeImg ,
    tags: ["시맨틱 마크업", "JavaScript", "Open Weather API"],
    contribution: "기여도 100%",
  },
  {
    title: "Weather app",
    description:
      "리액트와 JSX 문법을 활용했고 Open Weather API를 이용하여 실시간 날씨 정보를 조회할 수 있음",
    detailUrl: "https://example.com/weather-detail",
    githubUrl: "https://github.com/your-repo/weather-app",
    imageSrc: weatherImg,
    tags: ["React", "API 연동", "JSX", "Open Weather API"],
    contribution: "기여도 100%",
  },
  {
    title: "React JS Movie Service",
    description: "리액트를 활용해 간단한 영화 웹 서비스를 만들고",
    detailUrl: "https://example.com/movie-detail",
    githubUrl: "https://github.com/your-repo/react-movie",
    imageSrc: movieImg,
    tags: ["React", "Node.JS", "CSS"],
    contribution: "기여도 100%",
  },
  {
    title: "React Chatting Service",
    description:
      "실시간 채팅 서비스 구현 (Socket.io), 리액트로 오픈 채팅 서비스를 구현했고 컴포넌트와 Props의 관계, UseState, UseEffect 로 컴포넌트를 구성했음",
    detailUrl: "https://example.com/chat-detail",
    githubUrl: "https://github.com/your-repo/chat-service",
    imageSrc: chatImg ,
    tags: ["Socket.io", "Node.js", "WebSocket"],
    contribution: "기여도 35%",
  },
  {
    title: "고려대학교 건축학과",
    description:
      "네브루탈리즘처럼 선을 강조한 디자인을 중점으로 작업했고 정형화된 디자인보단 간결한 여백의 미를 추구함",
    detailUrl: "https://archi.korea.ac.kr/main/main.html",
    githubUrl: "",
    imageSrc: koreaArchImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "고려대학교 보건과학대학 및 학부 4",
    description:
      "대학 사이트와 학부 사이트의 통일성을 추구하며 작업했고 css의 모션 효과와 호버 효과를 준 사이트",
    detailUrl: "https://chs.korea.ac.kr/main/main.html",
    githubUrl: "",
    imageSrc: koreaHealthImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "명지전문대학교 조기취업형계약학과",
    description:
      "다양한 컬러와 일러스트를 활용했고 아이콘을 넣어 실용적이고 직관적인 사용자 인터페이스를 구축",
    detailUrl: "https://early.mjc.ac.kr/main/main.html",
    githubUrl: "",
    imageSrc: myongjiImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
  {
    title: "모노커뮤니케이션즈",
    description:
      "기업 아이덴티티를 살려 브랜드 컬러, 아이콘 등을 활용했고 콘텐츠 중심의 레이아웃을 활용함",
    detailUrl: "https://www.mono.co.kr/main/main.html",
    githubUrl: "",
    imageSrc: monoImg,
    tags: ["HTML5", "CSS3", "Responsive", "JS", "Jquery", "SEO"],
    contribution: "기여도 100%(디자인 + 퍼블리싱)",
  },
];

// 인덱스 기반 필터 함수
const filterByIndices = (
  source: ProjectItem[],
  indices: number[]
) => source.filter((_, idx) => indices.includes(idx));

// renderList 함수: Flex 컨테이너 + calc 기반 width
const renderList = (dataSource: ProjectItem[]) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem", // 카드 사이 간격을 1rem으로 설정
      justifyContent: "flex-start",
      marginTop: "1.5rem",
    }}
  >
    {dataSource.map((item, index) => (
      <Card
        key={index}
        hoverable={false}
        cover={(
          <div className="img-wrapper">
            <img
              className="card-hover-img"
              alt={item.title}
              src={item.imageSrc}
            />
          </div>
        )}
        headStyle={{
          backgroundColor: "transparent",
          fontSize: "1.25rem",
          fontWeight: 600,
          padding: "12px 16px",
          fontFamily: "Noto Serif KR",
        }}
        bodyStyle={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // 높이 제한 없이 내용 순서대로 배치
          padding: "16px",
          fontFamily: "Noto Serif KR",
        }}
        style={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {/* 1) 카드 제목 */}
        <Card.Meta
          title={item.title}
          style={{
            marginBottom: 8,
            marginTop: "1rem",
            fontFamily: "Noto Serif KR",
          }}
        />

        {/* 2) 설명 영역 (flex: none으로 변경) */}
        <div className="cont_txt"
          style={{
            marginBottom: 12,
            fontSize: 18,
            lineHeight: "1.4",
            maxHeight: 72, // 필요 시 줄 수 제한
            minHeight: 72,
            overflow: "hidden",
            textAlign: "justify",
          }}
        >
          {item.description}
        </div>

        {/* 3) Flex 레이아웃: 동적 tags (왼쪽) + 동적 contribution (오른쪽) */}
        <div
          className="cont_txt2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          {/* 왼쪽: tags 배열 순회 렌더링 */}
          <div
            style={{
              color: "rgba(93, 93, 93, 0.85)",
              fontSize: 15,
              fontFamily: "Noto Serif KR",
            }}
          >
            {item.tags.map((tag, idx) => (
              <span key={idx}>
                {tag}
                {idx < item.tags.length - 1 && "\u00A0\u00A0\u00A0"}
              </span>
            ))}
          </div>

          {/* 오른쪽: contribution */}
          <div
            style={{
              color: "rgba(93, 93, 93, 0.85)",
              fontSize: 15,
              fontFamily: "Noto Serif KR",
            }}
          >
            {item.contribution}
          </div>
        </div>

        {/* 4) 버튼 2개 conditional render*/}
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
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

// 탭별 인덱스 설정 (예시)
const apiIndices = [1, 2, 3];
const reactIndices = [2, 3, 4];
const projectIndices = [5, 6, 7, 8];
const jsIndices = [0, 1, 5, 6, 7, 8];
const responsiveIndices = [5, 6, 7, 8];

// Tabs items 정의
const items: TabsProps["items"] = [
  {
    key: "all",
    label: "All",
    children: <>{renderList(nineCardData)}</>,
  },
  {
    key: "1",
    label: "API",
    children: <>{renderList(filterByIndices(nineCardData, apiIndices))}</>,
  },
  {
    key: "2",
    label: "React",
    children: <>{renderList(filterByIndices(nineCardData, reactIndices))}</>,
  },
  {
    key: "3",
    label: "Project",
    children: <>{renderList(filterByIndices(nineCardData, projectIndices))}</>,
  },
  {
    key: "4",
    label: "JavaScript",
    children: <>{renderList(filterByIndices(nineCardData, jsIndices))}</>,
  },
  {
    key: "5",
    label: "Responsive",
    children: <>{renderList(filterByIndices(nineCardData, responsiveIndices))}</>,
  },
];

const TabsWithFlexCalcWidth: React.FC = () => (
  <Tabs defaultActiveKey="all" items={items} />
);

export default TabsWithFlexCalcWidth;
