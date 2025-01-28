import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      //headerShown: false,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="pageWOHeader" options={{ headerShown: false }} />
      <Stack.Screen name="user" />
      <Stack.Screen name="(tabs)" />
    </Stack>

  );
}
