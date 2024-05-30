import styled from "styled-components";

export const TableStyled = styled.table`
  border-collapse: collapse;
  margin-bottom: 30px;
`;

export const TdStyled = styled.td`
  position: relative;
  width: 250px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  padding: 24px 0;

  letter-spacing: -0.01em;

  color: #292d32;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #eeeeee;
  }
`;

export const StatusButton = styled.button`
  display: block;
  width: 80px;
  margin: 0 auto;
  text-align: center;
  padding: 4px 0;

  border-radius: 4px;
  cursor: pointer;
  ${({ status }) =>
    status === "active"
      ? `
        color: #008767;
        background: rgba(22, 192, 152, 0.38);
border: 1px solid #00B087;
      `
      : `
    color: #DF0404;
    background: #FFC5C5;
border: 1px solid #DF0404; 
    `}
`;

export const ThStyled = styled.th`
  width: 250px;

  padding-bottom: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  text-align: start;

  letter-spacing: -0.01em;

  color: #b5b7c0;
  &::before {
    content: "";
    position: absolute;
    top: 166px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #eeeeee;
  }
`;

export const TrStyled = styled.tr`
  td:first-child {
    border-left: none;
  }
  td:last-child {
    border-right: none;
  }
`;

export const TbodyStyled = styled.tbody`
  border-spacing: 0;
`;

export const TheadStyled = styled.thead`
  border-spacing: 0;
`;
