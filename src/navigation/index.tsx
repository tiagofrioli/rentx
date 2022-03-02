import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./navigation.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
