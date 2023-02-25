import { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <TextInput
      label="Search"
      mode="outlined"
      value={searchText}
      onChangeText={(text) => setSearchText(text)}
      left={<Iconicons name="md-map" />}
    />
  );
}
