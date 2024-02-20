import {
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    StatusBar,
} from "react-native";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";
import Box from "./components/Box";
import { useEffect, useState } from "react";

export default function App() {
    const [dimension, setDimension] = useState({
        window: Dimensions.get("window"),
        statusBarHeight: orientation == 1 || orientation == 2 ? 24 : 38,
    });
    const [orientation, setOrientation] = useState();
    const checkOrientation = async () => {
        const orientation = await ScreenOrientation.getOrientationAsync();
        setOrientation(orientation);
    };
    const handleOrientationChange = (o) => {
        setOrientation(o.orientationInfo.orientation);
    };
    useEffect(() => {
        checkOrientation();
        const DimensionChange = Dimensions.addEventListener(
            "change",
            ({ window }) => {
                setDimension({
                    window,
                    statusBarHeight:
                        orientation == 1 || orientation == 2 ? 24 : 38,
                });
            }
        );
        const OrientationChange =
            ScreenOrientation.addOrientationChangeListener(
                handleOrientationChange
            );
        return () => {
            DimensionChange?.remove();
            ScreenOrientation.removeOrientationChangeListeners(
                OrientationChange
            );
        };
    }, [orientation]);
    return (
        <View
            style={
                styles(dimension.window, dimension.statusBarHeight).container
            }
        >
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
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
        </View>
    );
}

const styles = (window, statusBarHeight) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            borderWidth: 10,
            width: window.width,
            height: window.height,
            marginTop: statusBarHeight,
        },
    });
};
