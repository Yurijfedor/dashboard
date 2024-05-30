import { useState } from "react";
import { Header } from "./components/header/Header";
import { ContainerStyled } from "./components/generalContainer/Container.styled";
import userAvatar from "./images/userAvatar.jpg";
import { PageRenderer } from "./components/PageRenderer";

export const App = () => {
  const user = {
    name: "Evano",
    position: "Project Manager",
    avatar: userAvatar,
  };
  const [currentPage, setCurrentPage] = useState("");
  return (
    <ContainerStyled>
      <Header user={user} setPage={setCurrentPage} />
      <main>
        <PageRenderer page={currentPage} user={user} />
      </main>
    </ContainerStyled>
  );
};
