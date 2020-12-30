import React from 'react';

import { StyleSheet, Text, Image, TouchableWithoutFeedback, View, Button, Modal } from 'react-native';


export default class Modal extends React.Component {
    state = {
        modalVisible
    }

    render() {
        return (
            <Modal

            >
                <Image></Image>
                <Text></Text>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});