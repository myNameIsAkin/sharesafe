import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"
const ShareFile = ()  => {
    return (
<View style={styles.chooseReportContainer}>
<Text style={styles.chooseReportText}>Share file (Video, Audio, Image)</Text>
<TouchableOpacity style={styles.chooseFileButton}>
    <Text style={styles.chooseFileText}>Choose file</Text>
</TouchableOpacity>
</View>


    )
}

const styles = StyleSheet.create({
    chooseReportContainer: {
        marginTop: 16,
      },
      chooseReportText: {
        fontSize: 20,
       fontWeight: 700,
       marginBottom: 16
      },
      chooseFileButton: {
        backgroundColor: "#4141ff",
        width: 100,
        paddingVertical: 4,
        alignItems: "center"
      },
      chooseFileText: {
        color: "white"
      }
  });

export default ShareFile