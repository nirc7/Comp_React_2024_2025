import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { View, Text } from 'react-native';

export default function About(props) {
  useFocusEffect(
    // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
    useCallback(() => {
      // Invoked whenever the route is focused.
      console.log('Hello, I am focused!');

      // Return function is invoked whenever the route gets out of focus.
      return () => {
        console.log('This route is now unfocused.');
      };
    }, [])
  );

  return (
    <View>
      <Text>about</Text>
    </View>
  )
}