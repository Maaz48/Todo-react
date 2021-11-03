import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert, ScrollView, LogBox } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

LogBox.ignoreLogs(['Remote debugger']);
export default function App() {

  const [value, setvalue] = useState("")
  const [data, setdata] = useState([])
  // Alert.alert(value)

  // console.log(data);


  const addtodoItems = () => {
    if (value === null || value === "") {
      Alert.alert("Please write something")
    } else {
      const userTodo = {
        id: Math.random(),
        uservalue: value,
      }
      setdata([...data, userTodo])
      setvalue('')
    }
  }

  function deleteTodo(dele) {

    // alert(dele);
    let newData = data.filter((val, i) => {
      // console.log(val);
      if (val.id !== dele) {
        // console.log(val);
        return val
      }
    })
    setdata(newData)
    // console.log(dele);
    // Alert.alert("Your todo has been deleted")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBar}>

      </View>


      <View style={styles.upperContainer}>
        <Text style={styles.heading}>ADD TODO's Please</Text>
        <View style={styles.scrollview}>
          <SwipeListView
            disableRightSwipe={true}
            data={data}
            keyExtractor={(item) => { item.id }}
            renderItem={(item) => (
              <View style={styles.todoItems}>
                {/* {rowMap} */}
                <Text style={styles.todoText}>{item.item.uservalue}</Text>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                {/* <Text style={styles.Gesture}>Left</Text> */}
                <Text style={styles.Gesture} onPress={() => { deleteTodo(data.item.id) }}>Delete</Text>
              </View>
            )}
            rightOpenValue={-75}
          />

          {/* {
            data.map((text) => {
              console.log(text);
              return <View style={styles.todoItems}>
                <Text style={styles.todoText}>
                  {text}
                </Text>
              </View>
            })
          } */}
        </View>
      </View>



      <View style={styles.lowerContainer}>
        <TextInput style={styles.input}
          placeholder="Enter Todo Element"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(text) => { setvalue(text) }} />

        <Text style={styles.addTodoBtn} onPress={addtodoItems}>
          <Text>
            +
          </Text>
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 50,
    color: "white",
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  statusBar: {
    width: "100%",
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 5,
  },
  upperContainer: {
    width: "100%",
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 50
  },
  lowerContainer: {
    flex: 0.2,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 20
  },

  scrollview: {
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",

  },
  todoItems: {
    width: "100%",
    // height: "7%",
    color: "white",
    fontSize: 30,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    textAlign: "center",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "red"
  },
  todoText: {
    color: "white",
  },
  addTodoBtn: {
    flex: 0.7,
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    height: 50,
    backgroundColor: "black",
    borderRadius: 50,
    paddingTop: 10,
    fontSize: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
    width: "80%",
    padding: 10,
    borderRadius: 20,
    paddingLeft: 20
  },
  rowBack: {
    width: "100%",
    height: 70,
    padding: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  Gesture: {
    color: "red",
    textAlign: "right"
  }

});
