import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  width: 968px;
  margin-top: 51px;
  margin-left: 69px;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  background-color: #fff;
  padding: 30px 38px;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const TableTopWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
