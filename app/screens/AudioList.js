import { Text, StyleSheet, FlatList } from "react-native";
import { AudioContext } from "../context/AudioProvider";
import React, { useContext, useState, useRef, useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import AudioListItem from "../../components/AudioListItem";
import OptionModal from "../../components/OptionModal";
import { Audio } from "expo-av";

export default function AudioList() {
    const [modalvisibility, setModalVisibility] = useState(false);
    const [soundObj, setSoundObj] = useState(null);
    const [soundStatus, SetSoundStatus] = useState(null);
    const audiocontext = useContext(AudioContext);
    const currentItem = useRef({});
    const renderItem = ({ item }) => {
        return (
            <AudioListItem
                title={item.filename}
                duration={item.duration}
                onAudioPress={() => handleAudioPress(item)}
                onOptionPress={() => {
                    currentItem.current = item;
                    setModalVisibility((v) => !v);
                }}
            />
        );
    };
    const onClose = () => {
        setModalVisibility(false);
    };
    const handleAudioPress = async (audio) => {
        try {
            if (!soundStatus) {
                const sound = new Audio.Sound();
                const sanitizedUri = audio.uri
                    .replace(/#/g, "%23")
                    .replace(/\?/g, "%3F")
                    .replace(/ /g, "%20");
                const stt = await sound.loadAsync(
                    { uri: sanitizedUri },
                    { shouldPlay: true }
                );
                setSoundObj(sound);
                SetSoundStatus(stt);
            }
            if (soundStatus && soundStatus.isLoaded && soundStatus.isPlaying) {
                console.log(123);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <FlashList
                data={audiocontext.audio}
                renderItem={renderItem}
                estimatedItemSize={150}
            />
            <OptionModal
                visible={modalvisibility}
                onPlayPress={() => {
                    console.log("play");
                }}
                onPlaylistPress={() => {
                    console.log("add playlist");
                }}
                onClose={onClose}
                currentItem={currentItem.current}
            ></OptionModal>
        </>
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
