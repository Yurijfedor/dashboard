import { TitleWrapp, TableTitle, TableTitleBottom } from "./Title.styled";

export const Title = ({
  title,
  getActiveCustomers,
  isClickedActiveMembers,
}) => {
  return (
    <TitleWrapp>
      <TableTitle>{title}</TableTitle>
      <TableTitleBottom onClick={() => getActiveCustomers()}>
        {isClickedActiveMembers ? "All Members" : "Active Members"}
      </TableTitleBottom>
    </TitleWrapp>
  );
};
