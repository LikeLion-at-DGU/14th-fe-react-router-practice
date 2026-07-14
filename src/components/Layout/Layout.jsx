import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #f0e4d8;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const Logo = styled.span`
  font-weight: 800;
  color: #ff7a32;
  margin-right: 16px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 8px 20px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: #ff7a32;
  background: transparent;
  transition: all 0.15s ease;

  &.active {
    color: #fff;
    background: #ff7a32;
  }
`;

const Layout = () => {
  return (
    <div>
      <Nav>
        <Logo>🦁 LikeLion14th</Logo>
        <StyledNavLink to="/test">test</StyledNavLink>
        <StyledNavLink to="/" end>
          home
        </StyledNavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
