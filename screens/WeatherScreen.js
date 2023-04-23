import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../const/colors';

const WeatherScreen = () => {
  const location = 'London';
  const temperature = 16;
  const description = 'Partly Cloudy';

  return (
    <ImageBackground
      source={require('./background.jpeg')}
      style={styles.backgroundImage}
    >
        <View style={styles.container}>
          <Text style={styles.title}>{location}</Text>
          <View style={styles.weatherContainer}>
            <View style={styles.temperatureContainer}>
            <Icon name="cloud" size={80} color={COLORS.white} />
              <Text style={styles.temperature}>{temperature}°C</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    fontSize: 24,
    color: '#fff',
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default WeatherScreen;