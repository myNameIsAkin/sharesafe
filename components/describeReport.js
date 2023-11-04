import { Text, View, StyleSheet, TextInput} from "react-native"
const DescribeReport = ()  => {
    return (
        <View style={styles.chooseReportContainer}>
            <Text style={styles.chooseReportText}>Describe report</Text>
            <TextInput
           style={styles.textInput}
           multiline
           placeholder="Help will be readily available, kindly describe your situation..."
           />
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
      textInput: { 
        borderWidth: 2,
        height: 180,
        borderRadius: 20,
        padding: 16
      },
  });

export default DescribeReport