import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { PersonService } from "../../application/services/PersonService";

export default function PersonScreen(){

const [name,setName]=useState("");
const [document,setDocument]=useState("");

return(
<View>

<TextInput
placeholder="Name"
value={name}
onChangeText={setName}
/>

<TextInput
placeholder="Document"
value={document}
onChangeText={setDocument}
/>

<Button
title="Save Person"
onPress={() =>
PersonService.create({
name,
document
})
}
/>

</View>
)

}