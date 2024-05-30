import styled from "styled-components";
import { Icon } from "../../icon/Icon";

export const InputWrapper = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  position: relative;
  width: 216px;
  padding-left: 10px;
  margin-right: 15px;
  background-color: #f9fbff;
  border-radius: 10px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 0;
  background: #f9fbff;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const IconWrapp = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  right: 0;
  width: 20px;
  height: 20px;
  fill: #999;
  display: inline-block;
  cursor: pointer;
`;
