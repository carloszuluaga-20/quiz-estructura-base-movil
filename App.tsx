import { View } from "react-native";

import UserScreen from "./src/presentation/users/UserScreen";
import ProductScreen from "./src/presentation/products/ProductScreen";
import PersonScreen from "./src/presentation/persons/PersonScreen";

export default function App() {
  return (
    <View>
      <UserScreen />
      <ProductScreen />
      <PersonScreen />
    </View>
  );
}