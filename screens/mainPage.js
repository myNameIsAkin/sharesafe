import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native"
import ReportType from "../components/reportType";
import DescribeReport from "../components/describeReport";
import ShareFile from "../components/shareFile";
import SubmitButton from "../components/submitButton";
import TopBar from "../components/topBar";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MainPage = ({navigation})  => {
    return (
        <View style={styles.container}>
          <ScrollView>
          <TopBar/>
            <ReportType/>
            <DescribeReport/>
            <ShareFile/>
            <SubmitButton navigation={navigation}/>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    npc
  });

export default MainPage