import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clouds: {
    iconName: "apple-icloud",
    gradient: ["#4DA0B0", "#D39D38"],
    subtitle: "No worres, I'll be your sunshine in the clouds",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Let me hold you tight so that you won't be blown away",
  },
  Drizzle: {
    iconName: "weather-lightning",
    gradient: ["#89F7FE", "#66A6FF"],
    subtitle: "Raindrops softly knocking on your heart",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    subtitle: "Raindrops knocking on your heart",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    subtitle: "Hey, cutie! Do you want to build a snowman with me?",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "The hazy atmosphere is like your mystical charm",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "The hazy atmosphere is like your mystical charm",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "The hazy atmosphere is like your mystical charm",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "I want your beauty, not dust, to cover this world",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "The hazy atmosphere is like your mystical charm",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "I want your beauty, not sand, to cover this world",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "I want your beauty, not ash, to cover this world",
  },
  Squall: {
    iconName: "weather-hurricane",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Let me hold you tight so that you won't be blown away",
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Let me hold you tight so that you won't be blown away",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    subtitle: "The sun shining hot like you refreshes this world",
  },
};

// formatter 설정에 오브젝트 key에 따옴표를 사용하지 않게 되어 있어, 저장하면서 formatter가 적용

export default function Weather({
  temp,
  condition,
  description,
  location,
  country,
}) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <View style={styles.location}>
          <Text style={styles.locationCountry}>
            {location}, {country}
          </Text>
        </View>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.condition}>{condition}</Text>
        <Text style={styles.temp}>{temp} ℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  condition: {
    fontSize: 28,
    color: "white",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  textContainer: {
    alignItems: "flex-start",
    marginLeft: 10,
  },
  location: {
    backgroundColor: "yellow",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 30,
  },
  locationCountry: {
    color: "#2c2c2c",
    fontWeight: "600",
    fontSize: 20,
  },
});
