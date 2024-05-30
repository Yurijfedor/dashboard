import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Title } from "../../components/customers/title/Title";
import { PageContainer, TableTopWrapp } from "./Customers.styled";
import { SearchBar } from "../../components/customers/filter/Filter";
import { Table } from "../../components/customers/customersTable/CustomersTable";
import { CustomersMobileTable } from "../../components/customers/customersMobileTable/CustomersMobileTable";
import { Pagination } from "../../components/pagination/Pagination";

const URL = "https://642f75f6b289b1dec4b364d7.mockapi.io/api/v1/customers";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [isClickedActiveMembers, setIsClickedActiveMembers] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setVisibleData(data);
      });
  }, []);

  const onSearch = (searchValue) => {
    const filteredData = customers.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.company.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.country.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setVisibleData(filteredData);
  };

  const getActiveCustomers = () => {
    setIsClickedActiveMembers((prev) => !prev);
    const filteredData = !isClickedActiveMembers
      ? visibleData.filter((row) => row.status === "active")
      : customers;
    setVisibleData(filteredData);
  };

  return (
    <PageContainer>
      <TableTopWrapp>
        <Title
          isClickedActiveMembers={isClickedActiveMembers}
          getActiveCustomers={getActiveCustomers}
          title={
            visibleData.length === customers.length
              ? "All Customers"
              : "Filtered Customers"
          }
        />
        <SearchBar onSearch={onSearch} />
      </TableTopWrapp>

      {isMobile ? (
        <CustomersMobileTable data={visibleData} />
      ) : (
        <Table data={visibleData} />
      )}
      <Pagination data={customers} setVisibleData={setVisibleData} />
    </PageContainer>
  );
};
export default Customers;
