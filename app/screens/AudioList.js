import { ScrollView, Text, StyleSheet } from "react-native";
import { AudioContext } from "../context/AudioProvider";
import React, { useContext } from "react";

export default function AudioList() {
    const audiocontext = useContext(AudioContext);
    return (
        <ScrollView style={styles.container}>
            {audiocontext.audio.length > 0 &&
                audiocontext.audio.map((item) => (
                    <Text key={item.id} style={styles.list}>
                        {item.filename}
                    </Text>
                ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 10,
        borderBottomColor: "blue",
        borderBottomWidth: 2,
    },
});
