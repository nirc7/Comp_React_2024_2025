import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [name, setName] = useState('no name');
  const [text, onChangeText] = useState('Useless Text');
  const [txtsayHello, setSayHello] = useState('');


  const btnSayHello = () => {
    setSayHello('Hello ' + text);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, color: 'red' }}>Ruppin Demo.</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
      />
      <Button title="Say Hello" onPress={btnSayHello} />
      <Text>text = {text}</Text>
      <Text>{txtsayHello}</Text>

      <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
