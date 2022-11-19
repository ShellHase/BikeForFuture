import { StyleSheet, View, Text } from "react-native";

export default function Calendar() {
  let monthsList = {
    Jan: "31",
    Feb: "28",
    Mar: "31",
    Apr: "30",
    May: "31",
    June: "30",
    July: "31",
    Aug: "31",
    Sept: "30",
    Oct: "31",
    Nov: "30",
    Dec: "31",
  };
  let calendarList = [["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]];

  // generating month list
  let firstDayOfMonth = calendarList[0].indexOf(
    [...calendarList[0], ...calendarList[0]][
      calendarList[0].indexOf(Date().slice(0, 3)) +
        (7 - (Date().slice(8, 10) % 7) + 1)
    ]
  );
  for (let d = 1 - firstDayOfMonth; d <= monthsList[Date().slice(4, 7)]; d++) {
    (d + firstDayOfMonth - 1) % 7 == 0 ? calendarList.push([]) : "";
    calendarList[Math.floor((d + firstDayOfMonth - 1) / 7 + 1)].push(
      d < 1 ? "" : d
    );
  }

  return (
    <View style={styles.month}>
      {calendarList.map((week) => {
        <View style={week[0] == "Sun" ? styles.dayNameBar : styles.week}>
          {week.map((day) => {
            <Text style={week[0] == "Sun" ? styles.dayName : styles.day}>
              {day}
            </Text>;
          })}
        </View>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  month: {
    flex: 20,
    justifyContent: "space-around",
  },
  week: {},
  dayNameBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dayName: {
    borderRadius: 5,
  },
});
