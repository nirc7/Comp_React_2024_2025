import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        < Drawer.Screen
          name="drawerPage1" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'drawerPage1',
            title: 'drawerPage1',
          }}
        />
        <Drawer.Screen
          name="drawerPage2"
          options={{
            headerShown: false 
          }}
        />
      </Drawer>
    </GestureHandlerRootView >
  );
}
