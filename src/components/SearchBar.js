import { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
  const SearchWrapper = styled.View`
    padding: 5px;
  `;

  return (
    <SearchWrapper>
      <TextInput
        mode="outlined"
        placeholder="Seach"
        left={<Ionicons name="ios-information-circle" />}
      />
    </SearchWrapper>
  );
}
