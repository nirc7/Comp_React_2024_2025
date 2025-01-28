import { useRouter } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function PageWOHeader(props) {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <Text>pageWOHeader</Text>
      <Pressable
        style={{
          backgroundColor: 'blue', padding: 10, margin: 10,
          borderRadius: 10, borderColor: 'grey', borderWidth: 3
        }}
        onPress={() => router.navigate("/")}><Text style={{
          color: 'white',
          textAlign: 'center',
        }}>go back 2 index</Text></Pressable>
    </View>
  )
}