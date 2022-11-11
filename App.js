import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContent}>
      <Text style={{fontSize: 22}}>BikeForFuture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    height: "80%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
