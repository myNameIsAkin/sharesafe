import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native"
const TopBar = ()  => {
    return (
<View style={styles.topBar}>
             <AntDesign name="arrowleft" size={24} color="#4141ff" />
             <View style={styles.topBarRight}>
                <Ionicons name="notifications" size={24} color="#4141ff" />
                <MaterialCommunityIcons name="face-man-profile" size={24} color="#4141ff" />
             </View>
           </View>

    )
}

const styles = StyleSheet.create({
      topBar: {
      display:"flex",
      flexDirection: "Row",
      justifyContent: "space-between",
      paddingVertical: 16,
      alignItems: "center"
      
      },
      topBarRight: {
        display:"flex",
        flexDirection: "Row",
        justifyContent: "space-between",
        
        width: 60
       },
      textInput: { 
        borderWidth: 2,
        height: 180,
        borderRadius: 20,
        padding: 16
      },
      chooseFileButton: {
        backgroundColor: "#4141ff",
        width: 100,
        paddingVertical: 4,
       
      },
      chooseFileText: {
        color: "white"
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

export default TopBar