import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Text, View, Button, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataTable } from 'react-native-paper';


function HomeScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Select Date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.os === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  let date1 = new Date();
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ fontSize: 29, fontWeight: 'bold', color: 'green', marginTop: -100, color: '#a92227' }}>❁ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم ❁</Text>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'green', marginTop: 50 }}>Salah Tracker App 😇</Text>

      <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 50 }}>{text}</Text>
      <View style={{ marginTop: 20 }}>
        <Button style={{ width: 100 }} title="Pick Date" onPress={() => showMode('date')} />
      </View>

      <View style={{ margin: 5 }}>
        <Button style={{ width: 100 }} title=" Prayers " onPress={() => {

          navigation.navigate('Details', {
            item1: text,
          });

        }} />
      </View>

      <View>
        <Button style={{ width: 200 }} title=" Reports " onPress={() => navigation.navigate('Reports')} />
      </View>

      {show && (
        <DateTimePicker
          testID='DateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />)}


      <StatusBar style='auto' />
    </View>
  );
}






function DetailsScreen({ route, navigation }) {
  const item1 = route.params.item1;


  return (
    <>

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green', margin: 10, textAlign: 'center' }}>DATE:  {JSON.stringify(item1)}</Text>
      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", margin: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Prayers</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Performed?</Text>
      </View>

      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", margin: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Fajr (Sinrise Prayer)</Text>
        <BouncyCheckbox
          size={20}
          fillColor="red"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "red" }}
        />
      </View>

      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", margin: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Dhuhr (noon prayer)</Text>
        <BouncyCheckbox
          size={20}
          fillColor="red"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "green" }}
        />
      </View>

      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", margin: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Asr (afternoon prayer)</Text>
        <BouncyCheckbox
          size={20}
          fillColor="red"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "red" }}
        />
      </View>

      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", margin: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Maghrib (sunset prayer)</Text>
        <BouncyCheckbox
          size={20}
          fillColor="red"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "red" }}
        />
      </View>

      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", margin: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Isha (night prayer)</Text>
        <BouncyCheckbox
          size={20}
          fillColor="red"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "red" }}
        />
      </View>

      <View style={{ margin: 20 }}>
        <Button title="Add Record" onPress={() => navigation.navigate('Home')} />
      </View>

    </>
  );
}

function ReportsScreen() {
  return (
    <>
      <View style={{
        margin: 10,
        paddingHorizontal: 30,
      }}>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Fajr</DataTable.Title>
            <DataTable.Title>Dhuhr</DataTable.Title>
            <DataTable.Title>Asr</DataTable.Title>
            <DataTable.Title>Maghrib</DataTable.Title>
            <DataTable.Title>Isha</DataTable.Title>
          </DataTable.Header>

          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>Saturday</Text>
          <DataTable.Row>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
          </DataTable.Row>

          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>Sunday</Text>
          <DataTable.Row>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
          </DataTable.Row>

          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>Monday</Text>
          <DataTable.Row>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
          </DataTable.Row>

          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>Tuesday</Text>
          <DataTable.Row>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
          </DataTable.Row>

          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>Wednesday</Text>
          <DataTable.Row>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
          </DataTable.Row>

          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>Thusday</Text>
          <DataTable.Row>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
          </DataTable.Row>

          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>Friday</Text>
          <DataTable.Row>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
            <DataTable.Cell>Yes</DataTable.Cell>
            <DataTable.Cell>No</DataTable.Cell>
          </DataTable.Row>

        </DataTable>


      </View>
    </>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;