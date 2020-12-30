import React from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback, View, Button } from 'react-native';

import Wisard from '../components/wizard'

export default class MultiStepScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wisard>


          <Wisard.Step>
            <View style={styles.multiStepStyle}>
              <Text>Bild - framifrån</Text>
              <Button title="Lägg till +"
              // onPress={}
              ></Button>
              <Text>Se exempel</Text>
            </View>
          </Wisard.Step>





          <Wisard.Step>
            <View style={{
              flex: 1,
              backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text>your email</Text>
            </View>
          </Wisard.Step>
          <Wisard.Step>
            <View style={{
              flex: 1,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text>Upload Avatar</Text>
            </View>
          </Wisard.Step>
        </Wisard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  multiStepStyle: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
