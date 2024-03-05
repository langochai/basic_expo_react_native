import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AudioProvider from "./app/context/AudioProvider";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <AudioProvider>
            <NavigationContainer>
                <StatusBar />
                <AppNavigator />
            </NavigationContainer>
        </AudioProvider>
    );
}
