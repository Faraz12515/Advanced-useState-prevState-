import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function AdvancedUseState() {
  const [names, setNames] = useState({
    name: "Faraz",
    age: 23,
    occupation: "Software Engineer",
  });
  const { name, age, occupation } = names;

  useEffect(() => {
    MyName();
  }, []);

  const MyName = () => {
    setNames((prevState) => {
      return {
        ...prevState,
        name: "Talha",
        age: 24,
        occupation: "MERN Stack Developer",
      };
    });
  };

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Occupation: {occupation}</Text>
    </View>
  );
}
