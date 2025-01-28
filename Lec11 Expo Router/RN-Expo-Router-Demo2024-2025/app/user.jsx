import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function User(props) {
  const params = useLocalSearchParams();
  const { user} = params;
  console.log(params);
  
  return (
    <View>
      <Text>User 
        user={user}
      </Text>
    </View>
  )
}