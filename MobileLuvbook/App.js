// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Open up App.js to start working on your app!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2019/03/03/20/23/flowers-4032775__340.png',
      }}
    >
      <View style={styles.cardView}>
        <Text>Komikku</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    color: 'orange',
  },
  cardView: {
    width: 300,
    height: 300,
    maxHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
