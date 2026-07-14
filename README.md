# 14th-fe-react-router-practice

14기 FE 2주차 세션 실습 레포지토리입니다.
- styled-components + 컴포넌트 조합
- react-router 라우팅

## 폴더 구조

```
src/
  components/
    Button.jsx         # 실습 1에서 완성할 컴포넌트
    PostCard.jsx       # 실습 2, 3에서 완성할 컴포넌트
    Layout/            # 네브바 + <Outlet /> (모든 페이지가 공유하는 레이아웃)
  pages/
    Home.jsx           # 게시글 목록 페이지 ("/")
    PostDetail.jsx     # 실습 3에서 완성할 상세 페이지 ("/post/:id")
    Test.jsx           # 실습 1 확인용 페이지 ("/test")
  data/
    posts.js           # 실습용 mock 데이터
  styles/
    page.style.js      # Home/Test/PostDetail이 공유하는 페이지 레이아웃 styled-components
  router.jsx           # createBrowserRouter 라우트 정의 (Layout 아래 children으로 nested)
  main.jsx
```
