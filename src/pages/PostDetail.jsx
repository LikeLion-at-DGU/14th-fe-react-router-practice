// 실습 3: 게시글 상세 페이지 만들어 이동하기
//
// TODO 1. useParams로 URL의 id 값을 가져오세요.
// TODO 2. posts 배열에서 그 id와 일치하는 게시글을 찾으세요.
// TODO 3. 찾은 게시글의 title, description, content를 화면에 보여주세요.

// post 안에는 아래 값들이 들어있습니다.
//   - title: 제목
//   - description: 한 줄 설명
//   - content: 본문 내용

import { Link } from "react-router-dom";
import * as S from "../styles/page.style.js";

const PostDetail = () => {
  return (
    <S.PageWrapper>
      <S.ContentWrapper>
        <Link to="/">뒤로가기</Link>
        <p style={{ fontSize: 24, color: "#000000" }}>
          ✨✨ 이곳을 채워주세요 {/* ex. 1번째 게시글 상세 페이지입니다*/}
        </p>
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default PostDetail;
