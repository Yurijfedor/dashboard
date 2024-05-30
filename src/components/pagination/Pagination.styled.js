import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const PaginationButton = styled.button`
  display: block;
  padding: 6px 9px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  ${({ isActive }) =>
    isActive === "active"
      ? `
        color: #FFFFFF;
        background: #5932EA;
        border: 1px solid #5932EA;
        border-radius: 4px;
      `
      : `
        color: #404B52;
        background: #F5F5F5;
        border: 1px solid #EEEEEE;
        border-radius: 4px;
    `}

  letter-spacing: -0.01em;

  cursor: pointer;
`;

export const PaginationWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    display: block;
  }
`;

export const PaginationText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;

  letter-spacing: -0.01em;

  color: #b5b7c0;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
