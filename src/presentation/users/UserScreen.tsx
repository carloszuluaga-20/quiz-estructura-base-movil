import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { UserService } from "../../application/services/UserService";

export default function UserScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const save = async () => {
    await UserService.create({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <View>
      <Text>Users</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Save User" onPress={save}/>
    </View>
  );
}