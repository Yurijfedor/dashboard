import { GreetingStyled } from "./Greeting.styled";

export const Greeting = ({ user }) => {
  return <GreetingStyled>{`Hello ${user.name} \u{1F44B}`}</GreetingStyled>;
};
