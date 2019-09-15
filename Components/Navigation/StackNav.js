import { createStackNavigator } from "react-navigation";

import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    Login: Login,
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default StackNav;
