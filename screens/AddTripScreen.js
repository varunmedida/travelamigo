import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { doc, setDoc , addDoc, collection} from "firebase/firestore"; 
import { db } from '../firebase';

const AddTripScreen = ({navigation}) => {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [isGroupTrip, setIsGroupTrip] = useState(false);

  const handleSaveTrip = () => {
    // Handle saving trip to database or local storage
    addDoc(collection(db, "trips"), {
      tripName: tripName,
      destination: destination,
      startDate: startDate,
      isGroupTrip: isGroupTrip
    }).then(() => {
      Alert.alert('Trip Saved', 'Trip Details Saved' , [
        {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
      ]);
    }
    ).catch(() => {
      Alert.alert('Error', 'Error Saving Trip Details. Please try again.' , [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    });
  };

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a Trip</Text>
      <TextInput
        style={styles.input}
        placeholder="Trip Name"
        value={tripName}
        onChangeText={setTripName}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <View style={styles.datePickerContainer}>
        <Text style={styles.label}>Start Date:</Text>
        <TextInput
          style={styles.datePickerInput}
          placeholder="YYYY-MM-DD"
          value={startDate.toISOString().split('T')[0]}
          editable={false}
        />
        <Button title="Select" onPress={() => setShowStartDatePicker(true)} />
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
          />
        )}
      </View>
      <View style={styles.datePickerContainer}>
        <Text style={styles.label}>End Date:</Text>
        <TextInput
          style={styles.datePickerInput}
          placeholder="YYYY-MM-DD"
          value={endDate.toISOString().split('T')[0]}
          editable={false}
        />
        <Button title="Select" onPress={() => setShowEndDatePicker(true)} />
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={handleEndDateChange}
          />
        )}
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Group Trip:</Text>
        <Switch
          value={isGroupTrip}
          onValueChange={setIsGroupTrip}
        />
      </View>
      <Button title="Save Trip" onPress={handleSaveTrip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    marginRight: 8,
  },
  datePickerInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  toggleLabel: {
    marginRight: 8,
  },
});

export default AddTripScreen;