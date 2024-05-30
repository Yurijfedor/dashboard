import {
  TableStyled,
  TbodyStyled,
  TheadStyled,
  TdStyled,
  StatusButton,
  ThStyled,
  TrStyled,
} from "./CustomersTable.styled";

export const Table = ({ data }) => {
  const renderTableData = () => {
    return data.map((item, index) => {
      const { name, company, phone, email, country, status } = item;
      return (
        <TrStyled key={index}>
          <TdStyled>{name}</TdStyled>
          <TdStyled>{company}</TdStyled>
          <TdStyled>{phone}</TdStyled>
          <TdStyled>{email}</TdStyled>
          <TdStyled>{country}</TdStyled>
          <TdStyled>
            <StatusButton
              status={status}
              onClick={() => console.log("I can be changed here")}
            >
              {status}
            </StatusButton>
          </TdStyled>
        </TrStyled>
      );
    });
  };

  return (
    <TableStyled>
      <TheadStyled>
        <tr>
          <ThStyled>Customer Name</ThStyled>
          <ThStyled>Company</ThStyled>
          <ThStyled>Phone Number</ThStyled>
          <ThStyled>Email</ThStyled>
          <ThStyled>Country</ThStyled>
          <ThStyled style={{ textAlign: "center" }}>Status</ThStyled>
        </tr>
      </TheadStyled>
      <TbodyStyled>{renderTableData()}</TbodyStyled>
    </TableStyled>
  );
};
