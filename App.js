import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

export default function App() {
  const DATA = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "5", title: "Item 5" },
    { id: "6", title: "Item 6" },
    { id: "7", title: "Item 7" },
    { id: "8", title: "Item 8" },
    { id: "9", title: "Item 9" },
    { id: "10", title: "Item 10" },
  ];

  return (
    <View style={styles.container}>
      <Text>First text on React Native Learning</Text>
      <Text>Welcome to learning React Native</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("Hello");
        }}
      >
        Hello
      </TouchableOpacity>
      <StatusBar style="auto" />

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
