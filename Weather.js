import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clouds: {
    iconName: "apple-icloud",
    gradient: ["#4DA0B0", "#D39D38"],
    subtitle: "I know, it's boring",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Hold me tight so that I won't be blown away",
  },
  Drizzle: {
    iconName: "weather-lightning",
    gradient: ["#89F7FE", "#66A6FF"],
    subtitle: "It's raining men, hallelujah",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    subtitle: "It's raining men, hallelujah",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    subtitle: "Do you want to build a snowman with me? Ppo~",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "It's like you have no glasses on.",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "Just don't go outside.",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "Just don't go outside.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "Thanks a lot China 🖕🏻",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "Just don't go outside.",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "Just don't go outside.",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
    subtitle: "Just don't go outside.",
  },
  Squall: {
    iconName: "weather-hurricane",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Hold me tight so that I won't be blown away",
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Hold me tight so that I won't be blown away",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    subtitle: "Give me gungdi-pangpang on my burnt ass",
  },
};

// formatter 설정에 오브젝트 key에 따옴표를 사용하지 않게 되어 있어, 저장하면서 formatter가 적용

export default function Weather({ temp, condition, description }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
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
});
