import React from "react";

import Header from "../../components/molecules/Header";
import CardList from "../../components/organisms/CardList";

import { Container} from "./styles";

const Home = () => {
  return (
    <Container>
      <Header user={"Wemeson Monteiro"} />
      <CardList listName={"Favorite Drinks"} />
      <CardList listName={"Vodka"} />
      <CardList listName={"Gim"} />
      <CardList listName={"Tequila"} />
      <CardList listName={"Whisk"} />
    </Container>
  );
};

export default Home;
