import { StatusBar } from "react-native";
import styled from "styled-components/native";
import SearchBar from "../SearchBar";

const ViewContainer = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export default function Layout({ children }) {
  return (
    <ViewContainer>
      <SearchBar />
      {children}
    </ViewContainer>
  );
}
