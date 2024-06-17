import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.counterButtonsContainer}>
          <View style={styles.customButton}>
            <Button
              title="-"
              color="white"
              onPress={() => setCount((prev) => prev - 1)}
            />
          </View>
          <View style={styles.customButton}>
            <Button
              title="+"
              color="white"
              onPress={() => setCount((prev) => prev + 1)}
            />
          </View>
        </View>
        <View style={styles.customResetButton}>
          <Button title="Reset" color="white" onPress={() => setCount(0)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 30,
    paddingHorizontal: 0,
  },
  bigText: {
    flex: 2,
    fontSize: 60,
    fontWeight: 'bold',
    marginHorizontal: 'auto',
    marginTop: 100,
  },
  customButton: {
    backgroundColor: 'black',
    padding: 3,
    width: 70,
    borderRadius: 15,
  },
  customResetButton: {
    backgroundColor: 'black',
    padding: 3,
    width: 150,
    borderRadius: 15,
    margin: 'auto',
  },
  buttonContainer: {
    flex: 2,
  },
  counterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
  },
});
export default App;
