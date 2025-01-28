import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Index Page</Text>
      <Link href="/about"
        style={{
          color: 'blue',
          borderRadius: 2,
          borderColor: 'black', borderWidth: 2, padding: 5, margin: 5
        }}>About with un/focus</Link>


      <Button title="go 2 page wo header" onPress={() => router.navigate("./pageWOHeader")} />
      <View style={{ height: 20 }} />

      <Button title="go 2 page with data" onPress={() =>
        router.push({ pathname: "./user", params: { user: 'Lucy' + new Date().getSeconds() } })} />

      <Link
        href={{
          pathname: './user',
          params: { user: 'Lucy' + new Date().getSeconds() } //pay atention this will run only once 
          // when the link is rendered the first time and will not change after 
          // each time the link is pressed
        }}
        style={{margin: 20, color: 'blue'}}
        >
        go 2 page with data using Link
      </Link>

      <Link href="(tabs)/properties"
        style={{
          color: 'blue',
          borderRadius: 2,
          borderColor: 'black', borderWidth: 2, padding: 5, margin: 5
        }}>Tabs</Link>

      <Link href="/DrawerDir/drawerPage1"
        style={{
          color: 'blue',
          borderRadius: 2,
          borderColor: 'black', borderWidth: 2, padding: 5, margin: 5
        }}>drawerpage1</Link>
    </View>
  );
}
