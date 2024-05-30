import styled from "styled-components";
import { TableStyled } from "../customersTable/CustomersTable.styled";

export const MobileTableStyled = styled(TableStyled)`
  th {
    display: none;
  }
  td {
    display: block;
    padding: 10px 0;
    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
      margin-right: 10px;
    }
  }
`;
