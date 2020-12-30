import React, { Component } from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback, View, Button, TouchableOpacity } from 'react-native';

import Wisard from '../components/wizard';
import ModalComponent from '../components/ModalComponent';
import { useNavigation } from '@react-navigation/native';

export default class MultiStepScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Wisard>


          <Wisard.Step>
            <View style={styles.multiStepStyle}>
              <Text>Bild - framifrån</Text>
              <Button title="Lägg till +"

              ></Button>
              <TouchableOpacity
                onPress={() => this.setState({ isModalVisible: true })}
              >
                <Text>Se exempel</Text>
              </TouchableOpacity>

            </View>
          </Wisard.Step>

          <ModalComponent
            isModalVisible={this.state.isModalVisible}
            setIsModalVisible={() => this.setState({ isModalVisible: false })}

          />




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
