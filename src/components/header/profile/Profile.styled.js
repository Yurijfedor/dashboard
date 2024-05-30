import styled from "styled-components";
import userDefault from "../../../images/user_default.png";
export const ProfileContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ProfileAvatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: url(${userDefault});
`;

export const ProfileTextWrapp = styled.div`
  display: block;
`;

export const ProfileName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;

  letter-spacing: 0.01em;

  color: #000000;
`;

export const ProfilePosition = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  letter-spacing: 0.01em;

  color: #757575;
`;
