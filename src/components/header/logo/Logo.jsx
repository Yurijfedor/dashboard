import {
  LogoContainer,
  LogoText,
  LogoTextMin,
  LogoTextContainer,
} from "./Logo.styled";
import { Icon } from "../../icon/Icon";
export const Logo = () => {
  return (
    <LogoContainer>
      <Icon name="icon-setting-1-min" />
      <LogoTextContainer>
        <LogoText>Dashboard</LogoText>
        <LogoTextMin>v.01</LogoTextMin>
      </LogoTextContainer>
    </LogoContainer>
  );
};
