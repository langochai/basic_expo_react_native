import { StyleSheet, Text, View , Dimensions} from 'react-native';
import Constants from 'expo-constants'
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
        <Box style={{backgroundColor:"#F94144"}}></Box>
        <Box style={{backgroundColor:"#90BE6D"}}></Box>
        <Box style={{backgroundColor:"#577590"}}></Box>
        <Box style={{backgroundColor:"#F3722C"}}></Box>
        <Box style={{backgroundColor:"#F9C74F"}}></Box>
    </View>
  );
}
const windowSize = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderWidth: 10,
    width: windowSize.width,
    height:windowSize.height,
    marginTop: Constants.statusBarHeight,
  },
});
