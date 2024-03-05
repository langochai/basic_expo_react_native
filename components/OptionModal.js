import {
    Modal,
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect } from "react";
import color from "../app/misc/color";

export default function OptionModal({
    visible,
    onClose,
    currentItem,
    onPlayPress,
    onPlaylistPress,
}) {
    return (
        <>
            <Modal animationType="slide" transparent visible={visible}>
                <View style={styles.modal}>
                    <Text style={styles.title} numberOfLines={2}>
                        {currentItem.filename}
                    </Text>
                    <View style={styles.optionContainer}>
                        <TouchableWithoutFeedback onPress={onPlayPress}>
                            <Text style={styles.option}>Play</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={onPlaylistPress}>
                            <Text style={styles.option}>Add to playlist</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modal: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: color.APP_BG,
        zIndex: 1000,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 20,
        paddingBottom: 0,
        color: color.FONT_MEDIUM,
    },
    optionContainer: {
        padding: 20,
    },
    option: {
        fontSize: 16,
        fontWeight: "bold",
        color: color.FONT,
        paddingVertical: 10,
        letterSpacing: 1,
    },
    background: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: color.MODAL_BG,
        zIndex: 999,
    },
});
