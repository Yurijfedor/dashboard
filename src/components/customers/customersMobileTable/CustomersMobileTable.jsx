import {
  TbodyStyled,
  TdStyled,
  StatusButton,
  TrStyled,
} from "../customersTable/CustomersTable.styled";
import { MobileTableStyled } from "./CustomersMobileTable.styled";

export const CustomersMobileTable = ({ data }) => {
  const renderTableData = () => {
    return data.map((item, index) => {
      const { name, company, phone, email, country, status } = item;
      return (
        <TrStyled key={index}>
          <TdStyled data-label="Customer Name">{name}</TdStyled>
          <TdStyled data-label="Company">{company}</TdStyled>
          <TdStyled data-label="Phone Number">{phone}</TdStyled>
          <TdStyled data-label="Email">{email}</TdStyled>
          <TdStyled data-label="Country">{country}</TdStyled>
          <TdStyled data-label="Status">
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
    <MobileTableStyled>
      <TbodyStyled>{renderTableData()}</TbodyStyled>
    </MobileTableStyled>
  );
};
