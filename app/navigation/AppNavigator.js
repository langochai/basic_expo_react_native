import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Audio List"
                component={AudioList}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="headset" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Player"
                component={Player}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5
                            name="compact-disc"
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="PlayList"
                component={PlayList}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="my-library-music"
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
