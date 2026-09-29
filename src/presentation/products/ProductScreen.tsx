import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { ProductService } from "../../application/services/ProductService";

export default function ProductScreen(){

const [name,setName]=useState("");
const [price,setPrice]=useState("");

return(
<View>

<TextInput
placeholder="Product"
value={name}
onChangeText={setName}
/>

<TextInput
placeholder="Price"
value={price}
onChangeText={setPrice}
/>

<Button
title="Save Product"
onPress={() =>
ProductService.create({
name,
price:Number(price)
})
}
/>

</View>
)

}