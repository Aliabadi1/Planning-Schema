import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import Item from './components/Item';

export default function App() {
  const [input, funci] = useState('');
  const [arr, funca] = useState([]);
  const inputHandler = (text) =>{
    funci(text);
  }
  const btnHandler = () =>{
    funca(current => [...current, input]);
    console.log(arr);

  }
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <View>
        <Item title="123"></Item>
        <TextInput placeholder="type here" placeholderTextColor="blue" style={{borderColor:'black', borderWidth:2, padding:20, width: 250}} onChangeText={inputHandler}
        value={input}/>
        <Button title = "click me" onPress={btnHandler}/>
      </View>
      <View style={{padding:40}}></View>
      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity><Text>yahello</Text></TouchableOpacity>
        <Button title="bleh"/>
      </View>
      <ScrollView>
        {arr.map((goal) => <View key={goal} style={styles.listItems}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  listItems: {
    padding:10,
    backgroundColor: 'teal'

  }

  
});
