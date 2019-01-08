import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, onChangeText, value }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={{ height: 20, width: 100 }}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export { Input };
