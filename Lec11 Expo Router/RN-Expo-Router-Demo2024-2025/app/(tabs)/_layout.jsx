import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' }}>
      <Tabs.Screen
        name="properties"
        options={{
          title: 'Prop title',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="info" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings title',
          tabBarIcon: ({ color }) => {
            console.log('color', color);
            return <FontAwesome size={24} name="cog" color={color !== 'purple' ? 'red' : color} />
          },
        }}
      />
      <Tabs.Screen
        name="plane"
        options={{
          title: 'plane title',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="plane" color={color} />,
        }}
      />
    </Tabs>
  );
}
