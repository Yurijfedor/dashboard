import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  gap: 8px;
  /* justify-content: center; */
  align-items: center;
`;

export const LogoTextContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
`;

export const LogoText = styled.p`
  font-weight: 600;
  font-size: 26px;
  line-height: 1.5;

  letter-spacing: 0.01em;

  color: #000000;
`;

export const LogoTextMin = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.5px;

  letter-spacing: -0.01em;

  color: #838383;
`;
