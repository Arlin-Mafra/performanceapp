import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FriendsList } from "../components/FriendsList";

export function Home() {
  const [nome, setNome] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://172.25.200.25:3333/friends?q=${nome}`);
    const data = await response.json();
    setFriends(data);
  }
  return (
    <View style={style.container}>
      <Text>Amigos</Text>
      <TextInput
        placeholder="Nome do amigo"
        onChangeText={setNome}
        style={style.input}
      />

      <Button title="Buscar" onPress={handleSearch} />
      <ScrollView style={style.list}>
        <FriendsList data={friends} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  },
});
