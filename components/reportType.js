import { Text, View, StyleSheet } from "react-native"
const ReportType = ()  => {
    return (
        <View style={styles.chooseReportContainer}>
            <Text style={styles.chooseReportText}>Choose a report type</Text>
           
           <View style={styles.generalReportsContainer}>
            <View style={styles.reportsContainer}>
                <Text style={styles.reportsText}>Medical</Text>
                <Text style={styles.reportsText}>Natural Disaster</Text>
            </View>

            <View style={styles.reportsContainer}>
                <Text style={styles.reportsText}>Fire</Text>
                <Text style={styles.reportsText}>Environmental</Text>
            </View>

            <View style={styles.reportsContainer}>
                <Text style={styles.reportsTextTechnology}>Technological</Text>
                <Text style={styles.reportsText}>security</Text>
            </View>

            <View style={styles.reportsContainer}>
                <Text style={styles.reportsText}>Search and Rescue</Text>
                <Text style={styles.reportsText}>Other</Text>
            </View>
           </View>
           </View>
    )
}

const styles = StyleSheet.create({
    chooseReportContainer: {
        marginTop: 16,
      },
      reportsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

      },
      reportsText: {
        fontSize: 16,
        fontWeight: 500,
        borderWidth: 2,
        paddingHorizontal: 24,
        paddingVertical: 6,
        marginBottom: 16,
        borderRadius: 10,
        borderColor: "#4141ff",
      },
      reportsTextTechnology: {
        color: "white",
        fontSize: 16,
        fontWeight: 500,
        borderWidth: 2,
        paddingHorizontal: 24,
        paddingVertical: 6,
        marginBottom: 16,
        borderRadius: 10,
        borderColor: "#4141ff",
        backgroundColor: "#4141ff"
      },
      chooseReportText: {
        fontSize: 20,
       fontWeight: 700,
       marginBottom: 16
      },
  
  });

export default ReportType