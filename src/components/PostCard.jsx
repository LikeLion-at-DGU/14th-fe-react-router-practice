// 실습 2: 게시글 카드 만들기
//
// 노션 이미지를 참고해서 카드를 styled-components로 만들어주세요.
// 이 컴포넌트는 post라는 객체를 props로 받습니다. post 안에는 아래 값들이 들어습니다.
//   - title: 제목
//   - description: 한 줄 설명
//   - content: 본문 내용

// 실습 3: Title은 Link로, Button은 useNavigate로 각각 `/post/:id`로 이동시키기

import { Link } from "react-router-dom";

// 이 곳에 PostCard 컴포넌트를 만들어주세요.
const PostCard = ({ post }) => {
  return (
    <p>
      {post.id}번 게시글
    </p>
  );
};

export default PostCard;
