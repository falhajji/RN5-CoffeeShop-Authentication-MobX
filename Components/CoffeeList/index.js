import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import CoffeeStore from "../../store/CoffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import Quantity from "../Quantity";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee List",
    headerLeft: null,
    headerRight: <Quantity route="CoffeeCart" />
  });
  render() {
    const coffeeshops = CoffeeStore.coffeeshops;
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
