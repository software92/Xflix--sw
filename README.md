# 🎬 Xflix

TMDB(The Movie Database) API를 활용하여 최신 영화 및 TV 시리즈 정보를 탐색할 수 있는 반응형 프론트엔드 애플리케이션입니다.

## 🛠 Tech Stack

- **Framework:** React (Vite)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Data Source:** TMDB API
<!-- - **Icons:** Lucide React / React Icons (추천) -->

## 🚀 Pages

- **Main Page:** 최신 트렌드 콘텐츠 및 실시간 인기 영화/TV 시리즈 통합 대시보드
- **Movies Page:** '현재 상영 중', '인기 영화' 등 카테고리별 영화 탐색 및 필터링
- **Detail Page (Optional):** 개별 콘텐츠의 상세 줄거리, 캐스팅 정보 및 관련 영상 제공

## ✨ Features

- **Responsive Design:** TailwindCSS를 활용하여 모바일, 태블릿, 데스크탑에 맞게 레이아웃 최적화
- **Real-time Data:** TMDB API를 통해 실시간으로 업데이트되는 영화/TV 데이터를 페칭
- **Dynamic Routing:** React Router를 활용한 선언적 라우팅 및 매끄러운 페이지 전환
<!-- 
보강 포인트
- **Infinite Scroll**: Intersection Observer API 또는 React Query를 활용하여 페이지 하단 도달 시 데이터를 자동으로 추가 페칭, 끊김 없는 사용자 경험 제공
- **Image Optimization**: TMDB 원본 이미지를 디바이스 크기에 맞는 해상도로 리사이징하여 로딩 속도 최적화
- **Debounced Search**: 검색어 입력 시 API 호출 횟수를 최적화하기 위해 Debounce 기법 적용
  적용

📂 Structure (Updated)
Plaintext
src/
├── api/ # Axios 인스턴스 및 TMDB API endpoints
├── components/  
│ ├── common/ # Button, Input, Loading Spinner 등 공통 UI
│ ├── layout/ # Navbar, Footer, PageLayout
│ └── movie/ # MovieCard, MovieList, ScrollContainer
├── hooks/  
│ ├── useInfiniteScroll.ts # 무한 스크롤 로직 커스텀 훅
│ └── useDebounce.ts # 검색어 최적화 훅
├── pages/ # Main, Movies, TVs, Search, Detail
├── types/ # API 응답 및 데이터 인터페이스
└── utils/ # 포맷팅, 이미지 URL 생성 등
🛠 Tech Stack (Updated)
Framework: React (Vite)

State Management: React Query (TanStack Query) — 데이터 캐싱 및 무한 스크롤 구현 시 강력 추천

Language: TypeScript

Styling: TailwindCSS

Data Source: TMDB API

💡 추가 제안 (Point of View)
React Query 활용: 만약 무한 스크롤을 구현하신다면 useInfiniteQuery를 사용하시는 것을 적극 추천합니다. 이 부분을 README에 명시하면 "서버 상태 관리를 할 줄 아는 개발자"라는 인상을 줍니다.

Intersection Observer: 라이브러리 없이 직접 구현하셨다면 해당 부분을 강조하여 브라우저 API 활용 능력을 어필해 보세요.

Skeleton UI: 데이터를 불러올 때 MovieCard 모양의 회색 박스(Skeleton)가 나타나게 구현하면 훨씬 전문적인 앱처럼 보입니다. -->

## 📂 Structure

```text
src/
├── assets/       # SVG 아이콘 리소스
├── routes/          # 라우터 설정 및 loader
├── api/          # Promise  인스턴스, IMDB API 호출 로직
├── components/   # 공통 컴포넌트, 레이아웃 컴포넌트
├── pages/        # 페이지
├── hooks/        # 데이터 페칭 및 유틸 커스텀 훅
├── types/        # TMDB API 응답 및 데이터 타입 정의
└── utils/        # 유틸리티 함수(이미지 경로 변환, 로거)
```

## Install

```bash
# 의존성 설치
npm install

# 로컬 서버 실행
npm run dev
```

## 📄 License

This project is for educational purposes. Data provided by TMDB.
