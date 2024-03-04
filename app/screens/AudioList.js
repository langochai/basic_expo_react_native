import { Text, StyleSheet, FlatList } from "react-native";
import { AudioContext } from "../context/AudioProvider";
import React, { useContext } from "react";
import { FlashList } from "@shopify/flash-list";
import AudioListItem from "../../components/AudioListItem";

export default function AudioList() {
    const audiocontext = useContext(AudioContext);
    const renderItem = ({ item }) => {
        return (
            <AudioListItem
                title={item.filename}
                duration={item.duration}
                onOptionPress={() => {
                    console.log("someshit");
                }}
            />
        );
    };
    return (
        // <ScrollView style={styles.container}>
        //     {audiocontext.audio.length > 0 &&
        //         audiocontext.audio.map((item) => (
        //             <Text key={item.id} style={styles.list}>
        //                 {item.filename}
        //             </Text>
        //         ))}
        // </ScrollView>
        <FlashList
            data={audiocontext.audio}
            renderItem={renderItem}
            estimatedItemSize={150}
        />
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
