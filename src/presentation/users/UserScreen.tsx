import { View, Text, Button } from "react-native";
import { UserService } from "../../application/services/UserService";

export default function UserScreen() {

  const loadUsers = async () => {
    const users = await UserService.getAll();
    console.log(users);
  };

  return (
    <View>
      <Text>User Screen</Text>

      <Button
        title="Load Users"
        onPress={loadUsers}
      />
    </View>
  );
}