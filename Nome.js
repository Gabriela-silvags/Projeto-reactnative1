import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Nome({navigation}) {
    const verImagem = () => {
        navigation.navigate("Imagem");
    }
    return (
    <View style={styles.container}>
      <Text>Olá! Seja bem vinda...</Text>
      <Text>Gabriela Januaria da Silva!</Text>
      <StatusBar style="auto" />
      <Button
        title='ver Imagem'
        onPress={() => verImagem()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
