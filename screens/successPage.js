import { Text, View, StyleSheet, TouchableOpacity} from "react-native"
import TopBar from "../components/topBar";
import { AntDesign } from '@expo/vector-icons';

const SuccessPage = ({navigation})  => {
    return (
        <View style={styles.container}>
            <TopBar/>
<View style={styles.successContainer}>
<AntDesign name="checkcircle" size={150} color="#4141ff" />
    <Text style={styles.successText}>Request Submited</Text>

    
    <TouchableOpacity onPress={() => {
        navigation.navigate("Home")
    }} style={styles.goToHomeButton}>
        <Text style={styles.goToHomeText}>Go To Home</Text>
    </TouchableOpacity>
</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    successContainer: {
        flex: 0.7,
alignItems:"center", 
justifyContent: "center"
      },
      goToHomeButton: {
        backgroundColor: "#4141ff",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 10,
        width: 200,
        marginTop: 40
      },
      goToHomeText: {
        color: "white",
        fontSize: 20,
      },
      successText: {
        fontSize: 24,
        fontWeight: 700,
        marginVertical: 16
      }
  });

export default SuccessPage