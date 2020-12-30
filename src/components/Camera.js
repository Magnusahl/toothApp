import { Component } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import { ActionSheet, Root } from 'native-base'

const width = Dimensions.get('window').width;

export default class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    onClickAddImage = () => {
        const BUTTONS = ['Take Photo00', 'Choose Photo Libary', 'Cancel'];
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: 2,
                title:"Select a Photo",
            },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        break;
                    case 1:
                        break;
                    default:
                        break;
                }

            }
        )

    };

    RennderItem = ({ item, index }) => {
        return (
            <View>
                <Image source={item.url} style={styles.itemImage} />
            </View>
        )
    };

    render() {
        let { content, btnPressStyle, txtStyle } = styles;
        let { fileList } = this.state;
        return (
            <Root>
                <View style={{ content }}>
                    <Text>CAMERA</Text>
                    <FlatList>
                   data={fileList}
                   renderItem={this.renderItem}
                   keyExtractor= {(item, index) => index.toString()}
                   extraData={this.state}
                    </FlatList>

                    <TouchableOpacity onPress={this.onClickAddImage} style={btnPressStyle}>
                        <Text style={txtStyle} >Press Add Image</Text>
                    </TouchableOpacity>
                </View>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        paddiongleft: 30,
        paddingRight: 30,
        paddingBottom: 30,

    },
    btnPressStyle: {
        backgroundColor: '#0000ff',
        height: 50,
        width: width - 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtStyle: {
        color: '#ffffff'
    },
    itemImage: {
        backgroundColor: '#800080',
        height: 150,
        widht: width - 60,
        borderRadius: 8,
        resizeMode: 'contain',


    }
});