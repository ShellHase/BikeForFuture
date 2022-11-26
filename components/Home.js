import { LineChart} from 'react-native-chart-kit'
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Calendar from "./Calendar";

export default function Home() {
  // state for updating calendar Icon
  const [calendarIcon, updateCalendarIcon] = useState("calendar-outline");
  // state for updating the calendar visibility
  const [calendarVisibility, changeCalendarVisibility] = useState(false);
  const line = {
    labels: ['5 Minutes', '10 Minutes', '15 Minutes', '20 Minutes', '25 Minutes', '30 Minutes'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View style={styles.appContainer}>
      {/* Modal which is displayed if calendar button is pressed, containing a calendar */}
      <Modal visible={calendarVisibility}>
        {/* calendar button */}
        <View style={styles.calendarButtonActive}>
          <Pressable
            onPressIn={() => {
              updateCalendarIcon("calendar-outline");
              changeCalendarVisibility(false);
            }}
            style={{
              alignItems: "flex-end",
            }}
          >
            <Ionicons name={calendarIcon} size={26} color={"orange"} />
          </Pressable>
        </View>
        {/* calendar component */}
        <Calendar />
      </Modal>
      {/* default home screen */}
      {/* calendar button */}
      <View style={styles.calendarButtonHome}>
        <Pressable
          onPressIn={() => {
            updateCalendarIcon("calendar");
            changeCalendarVisibility(true);
          }}
          style={{
            alignItems: "flex-end",
          }}
        >
          <Ionicons name={calendarIcon} size={26} color={"orange"} />
        </Pressable>
      </View>
      <View style={styles.mainContent}>
        <Text>
          Deine gewonnene Energie der letzten Fahrt
        </Text>
        <LineChart
          data={linedata}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  calendarButtonHome: {
    flex: 2,
    alignItems: "flex-end",
    margin: 10,
  },
  calendarButtonActive: {
    flex: 2,
    alignItems: "flex-end",
    marginTop: 65,
    marginRight: 10,
  },
  mainContent: {
    flex: 3,
    alignItems: "center",
  },
});
