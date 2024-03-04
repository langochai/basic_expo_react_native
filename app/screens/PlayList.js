import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";

export default function PlayList() {
    return (
        <ScrollView style={styles.container}>
            <Text>PlayList</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
