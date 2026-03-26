# 🎬 Xflix

[![Deploy](https://github.com/software92/Xflix--sw/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/software92/Xflix--sw/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://software92.github.io/Xflix--sw/)
[![Figma](https://img.shields.io/badge/Figma-Design-orange)](https://www.figma.com/make/6gAd7XAT3ErQOj8xVDt8Cq/Movie-Detail-Page-Design?p=f&t=zVHKCNqmHkqM0ES3-0)

TMDB API를 활용한 영화 정보 웹 애플리케이션입니다.

**React 기반 SPA 구조를 재정립하고, 외부 라이브러리 의존도를 최소화하여 핵심 로직을 직접 구현하는 것을 목표로 개발했습니다.**

또한 사용자 관점에서 영화 탐색 경험을 개선하는 데 집중했습니다.

## 📌 Overview

- SPA 구조 기반 페이지 전환
- 영화 상세 정보 조회
- 영화 장르별 필터링
- GitHub Actions를 통한 자동 배포

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![React Router](https://img.shields.io/badge/React_Router-v6-red)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-black)

<!-- - **Icons:** Lucide React / React Icons (추천) -->

### 주요 선택 이유

- **React**: 컴포넌트 기반 SPA 구조를 통해 UI 재사용성과 유지보수성 확보
- **TypeScript**: API 응답 데이터 타입 안정성 확보를 통한 런타임 오류 방지
- **Vite**: 빠른 개발 서버 환경과 빌드 속도 개선 및 GitHub Pages 배포 최적화
- **TailwindCSS**: 반복적인 스타일 작성 비용을 줄이고, UI를 빠르게 구현

## 🏗 Architecture

```text
src/
├── assets/       # SVG 아이콘 리소스
├── routes/       # 라우터 설정 및 loader
├── api/          # Promise 인스턴스, IMDB API 호출 로직
├── constant/     # media query 및 라우터 경로 저장
├── components/   # 공통 컴포넌트, 레이아웃 컴포넌트
├── pages/        # 페이지
├── hooks/        # 데이터 페칭 및 유틸 커스텀 훅
├── types/        # TMDB API 응답 및 데이터 타입 정의
└── utils/        # 유틸리티 함수(이미지 경로 변환, 로거)
```

### 설계 포인트

- API 모듈 및 공통 컴포넌트 분리로 재사용성 확보
- screen 크기에 따라 레이아웃 최적화
- 환경 변수를 사용한 API KEY 관리
- GitHub Actions CI/CD 자동 배포

## 🔐 Environment Variables

로컬 개발 시:

```typescript
VITE_TMDB_KEY = your_api_key
```

배포 환경에서는 GitHub Secrets를 통해 주입합니다.

## 🚀 Deployment

- GitHub Pages
- GitHub Actions를 통해 main 브랜치 push 시 자동 배포

## 🖥️ 서비스 화면

### PC

|                                                                Home                                                                 |                                                               Detail                                                                |
| :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img width="1548" height="983" alt="Image" src="https://github.com/user-attachments/assets/c7c26b7d-86ab-4482-b9a2-84dd5a815f55" /> | <img width="1548" height="983" alt="Image" src="https://github.com/user-attachments/assets/298ed612-984f-458c-ad05-305d79443281" /> |
|                                                             메인 페이지                                                             |                                                          영화 상세 페이지                                                           |

|                                                               Movies                                                                |                                                               Movies                                                                |
| :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img width="1548" height="983" alt="Image" src="https://github.com/user-attachments/assets/298ed612-984f-458c-ad05-305d79443281" /> | <img width="1548" height="983" alt="Image" src="https://github.com/user-attachments/assets/6b1ed2fe-5548-421d-80fa-6b3da50923fa" /> |
|                                                          영화 목록 페이지                                                           |                                                       필터링한 영화 목록 출력                                                       |

### Mobile

|                                                                Home                                                                |                                                               Detail                                                               |                                                               Movies                                                               |                                                               Movies                                                               |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img width="285" height="642" alt="Image" src="https://github.com/user-attachments/assets/b86fb995-1f6f-482a-9148-fc12d891a471" /> | <img width="285" height="642" alt="Image" src="https://github.com/user-attachments/assets/c5056c44-f491-4f6a-acf0-2554d7a507fb" /> | <img width="285" height="642" alt="Image" src="https://github.com/user-attachments/assets/accc87bf-a956-4ee1-b522-c7c1c7c791f4" /> | <img width="285" height="642" alt="Image" src="https://github.com/user-attachments/assets/c1f1afb5-0ae5-437c-8591-3ad3f62760ab" /> |
|                                                            메인 페이지                                                             |                                                          영화 상세 페이지                                                          |                                                          영화 목록 페이지                                                          |                                                         Mobile menu modal                                                          |

## 💡 향후 개선 가능 사항

- 검색 기능 추가
- API 캐싱 전략 적용

## 🔗 Live Demo

👉 https://software92.github.io/Xflix--sw/

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
