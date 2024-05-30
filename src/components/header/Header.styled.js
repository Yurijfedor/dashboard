import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 21.26%;
  /* height: 1198px; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 36px 28px;
  background-color: #fff;
  @media (max-width: 767px) {
    width: 100%;
    /* flex-direction: row; */
  }
`;

export const NavWrapp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  flex-grow: 1;
  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavWrapperMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333;
    padding: 20px;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 99;

    & > * {
      margin-bottom: 16px;
    }
  }
`;
