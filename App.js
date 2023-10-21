import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      textValue: "",
    };
  }

  simpleAlert = () => {
    Alert.alert(
      'Texto', `${this.state.textValue}`, 
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('Yes Pressed');
          }
        }
      ]
    );
  }

  onChange = (value) => {
    console.warn(`El switch cambiará a: ${value}`);
    this.setState({switchValue: value});
  }

  onChangeTextInput = (value) => {
    this.setState({textValue: value})
    //console.warn(`Se ha escrito esto: ${value}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.simpleAlert}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChangeTextInput(text)}
          placeholder="Escribe algo..."
          value = {this.state.textValue}
        />

        <Switch
          onValueChange={() => this.onChange(!this.state.switchValue)}
          value={this.state.switchValue}
        />

        <Text>¡Hola, esta es la Práctica R1!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
