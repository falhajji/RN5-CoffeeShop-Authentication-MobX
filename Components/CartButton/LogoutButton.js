import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../store/authStore";

const LogoutButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => authStore.logout(navigation)}>
      <Text>
        {"Logout "}
        <Icon
          type="FontAwesome"
          name="superpowers"
          style={{ color: "white", fontSize: 15 }}
        />
      </Text>
    </Button>
  );
};

export default withNavigation(observer(LogoutButton));
