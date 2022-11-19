import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Calendar from "./Calendar";

export default function Home() {
  let [calendarIcon, updateCalendarIcon] = useState("calendar-outline");
  let [calendarVisibility, changeCalendarVisibility] = useState(false);

  return (
    <View style={styles.appContainer}>
      <Modal visible={calendarVisibility} animationType="fade">
        <View style={styles.calendarButtonCalendar}>
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
        <Calendar />
      </Modal>
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
        <Text style={{ fontSize: 22 }}>BikeForFuture</Text>
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
  calendarButtonCalendar: {
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
