import React from "react";
import { Text, View } from "react-native";
import { Friend } from "./Friend";

interface Props {
  data: {
    id: string;
    name: string;
    likes: number;
  }[];
}
export function FriendsList({ data }: Props) {
  return (
    <View>
      {data.map((firend) => (
        <Friend key={firend.id} data={firend} />
      ))}
    </View>
  );
}
