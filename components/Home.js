import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Dimensions, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LineChart } from 'react-native-chart-kit'

import Calendar from "./Calendar";

export default function Home() {
  // state for updating calendar Icon
  const [calendarIcon, updateCalendarIcon] = useState("calendar-outline");
  // state for updating the calendar visibility
  const [calendarVisibility, changeCalendarVisibility] = useState(false);
  
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
        <Text style={{ fontSize: 22 }}>BikeForFuture</Text>
        <ScrollView>
          <View style={styles.container}>
            <View>
              {/*It is an Example of LineChart*/}
              <Text
                style={{
                  textAlign: 'center', fontSize: 18,
                  padding: 16,
                  marginTop: 16,
                }}>
                Line Chart
              </Text>
              <LineChart data={{
                labels: [ '5',
                '10',
                '15',
                '20',
                '25',
                '30',
                ],
                datasets: [
                {
                data: [40, 60, 10, 80, 99, 43],
                strokeWidth: 2,
                },
                ],
                }}
                width={Dimensions.get('window').width - 16}
                height={400}
                chartConfig={{
                backgroundColor: '#9f1414',
                backgroundGradientFrom: '#fac82f',
                backgroundGradientTo: '#ff8302',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                borderRadius: 16,
                },
                }}
                style={{ marginVertical: 8,
                borderRadius: 16,
                }}
              />
            </View>
          </View>
        </ScrollView>
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
