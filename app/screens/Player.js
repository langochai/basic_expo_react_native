import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";

export default function Player() {
    return (
        <ScrollView style={styles.container}>
            <Text>Player</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
