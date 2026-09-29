import { View, StyleSheet } from "react-native";
import UserScreen from "./src/presentation/users/UserScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <UserScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});