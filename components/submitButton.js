import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native"
const SubmitButton = ({navigation})  => {
    return (
<View style={styles.chooseReportContainer}>
<TouchableOpacity style={styles.submitButton} onPress={() => {
    console.log("Test")
    navigation.navigate("Success")
}}>
    <Text style={styles.submitText}>Submit</Text>
</TouchableOpacity>
</View>

    )
}

const styles = StyleSheet.create({
    chooseReportContainer: {
        marginTop: 16,
        marginBottom: 100
      },
      submitButton: {
        backgroundColor: "#4141ff",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 10
      },
      submitText: {
        color: "white",
        fontSize: 20,
      }
  });

export default SubmitButton