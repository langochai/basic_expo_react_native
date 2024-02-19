import { StyleSheet, Dimensions, ScrollView } from "react-native";
import Constants from "expo-constants";
import Box from "./components/Box";
import { useEffect, useState } from "react";

export default function App() {
    const [dimension, setDimension] = useState({
        window: Dimensions.get("window"),
    });
    useEffect(() => {
        const subcription = Dimensions.addEventListener(
            "change",
            ({ window }) => {
                setDimension({ window });
            }
        );
        return () => subcription?.remove();
    });
    return (
        <ScrollView style={styles(dimension.window).container}>
            <Box style={{ backgroundColor: "#F94144" }}></Box>
            <Box style={{ backgroundColor: "#90BE6D" }}></Box>
            <Box style={{ backgroundColor: "#577590" }}></Box>
            <Box style={{ backgroundColor: "#F3722C" }}></Box>
            <Box style={{ backgroundColor: "#F9C74F" }}></Box>
            <Box style={{ backgroundColor: "#F94144" }}></Box>
            <Box style={{ backgroundColor: "#90BE6D" }}></Box>
            <Box style={{ backgroundColor: "#577590" }}></Box>
            <Box style={{ backgroundColor: "#F3722C" }}></Box>
            <Box style={{ backgroundColor: "#F9C74F" }}></Box>
        </ScrollView>
    );
}

const styles = (window) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            borderWidth: 10,
            width: window.width,
            height: window.height,
            marginTop: Constants.statusBarHeight,
        },
    });
};
