import React, { Component } from 'react';

import { StyleSheet, Text, Image, TouchableWithoutFeedback, View, Button } from 'react-native';

import Modal from 'react-native-modal';


export default class ModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {


        return (
            <Modal
                isVisible={this.props.isModalVisible}
                animationIn={'slideInDown'}
                animationOut={'slideOutUp'}
                onBackdropPress={() => this.props.setIsModalVisible()}
            >
                <View>
                    <Text>Testar</Text>
                </View>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});