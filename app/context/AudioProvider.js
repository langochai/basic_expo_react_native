import React, { createContext, useEffect ,useState} from "react";
import * as MediaLibrary from "expo-media-library";

export const AudioContext = createContext();
export default function AudioProvider({ children }) {
    const [audio, setAudio] = useState([])
    const getPermission = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
            getAudioFiles()
        }
        if(!permission.granted){
            Expo.App.manifest.exitApp();
        }
    };
    const getAudioFiles = async () =>{
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: "audio",
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType:"audio",
            first: media.totalCount
        })
        setAudio(media.assets)
    }
    useEffect(() => {
        getPermission();
    }, []);
    return <AudioContext.Provider value={{audio}}>{children}</AudioContext.Provider>;
}
