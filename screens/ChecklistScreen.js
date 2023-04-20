import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ChecklistScreen = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'T-Shirt', checked: false , category: 'Clothing'},
    { id: 2, label: 'Short', checked: false ,category: 'Clothing'},
    { id: 3, label: 'Socks', checked: false , category: 'Clothing'},
    { id: 4, label: 'Toothbrush', checked: false ,category: 'Toiletries'},
    { id: 5, label: 'Thoothpaste', checked: false ,category: 'Toiletries'},
    { id: 6, label: 'Shampoo', checked: false ,category: 'Toiletries'},
    { id: 7, label: 'Laptop', checked: false ,category: 'Electronics'},
    { id: 8, label: 'Phone', checked: false ,category: 'Electronics'},
    { id: 9, label: 'Charger', checked: false ,category: 'Electronics'},
  ]);

  const handleCheckboxToggle = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, checked: !checkbox.checked };
      } else {
        return checkbox;
      }
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Recommendations</Text>
      {checkboxes.map((checkbox) => (
        <TouchableOpacity
          key={checkbox.id}
          onPress={() => handleCheckboxToggle(checkbox.id)}
          style={styles.checkboxContainer}
        >
          <View
            style={[
              styles.checkbox,
              checkbox.checked && styles.checkedCheckbox,
            ]}
          />
          <Text style={styles.label}>{checkbox.label}</Text>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  label: {
    fontSize: 18,
  },
});

export default ChecklistScreen;
