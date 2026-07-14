import styled from "styled-components";
import { posts } from "../data/posts.js";
import PostCard from "../components/PostCard.jsx";
import * as S from "../styles/page.style.js";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Home = () => {
  return (
    <S.PageWrapper>
      <S.ContentWrapper>
        <S.PageTitle>2. 게시글 카드 실습</S.PageTitle>
        <CardGrid>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </CardGrid>
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default Home;
