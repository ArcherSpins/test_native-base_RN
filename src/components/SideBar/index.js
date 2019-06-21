import React, { Component } from 'react';
import { Image, View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { screens } from './screens';

class Sidebar extends Component {

    goToPage = (url) => {
        this.props.navigate(url)
        this.props.closeDrawer()
    }

    render() {
        const { bgColor } = this.props;

        return (
            <ScrollView style={[styles.container, {backgroundColor: bgColor}]}>
                <View>
                    <ImageBackground style={styles.image_container}
                        source={{uri: 'http://elitefon.ru/download.php?file=201211/2560x1600/elitefon.ru-2498.jpg'}} >
                        <Image source={{uri: 'https://asdorural.com/upload/iblock/4fb/4fb9d4f61082a96267a2cff6e1a41f3e.png'}}
                            style={styles.image} />
                        <View style={styles.title_container}>
                            <Text style={styles.title_user}>Камбаев Ахмед</Text>
                            <View style={styles.badge_block} >
                                <Image source={{uri: 'https://www.zeluslugi.ru/template/site/default/images/22.png'}} style={{width: 40, height: 40}} />
                            </View>
                        </View>
                        <Text style={[styles.title_user, styles.email_user]}>kambaevahmed@list.ru</Text>
                    </ImageBackground>
                    <View style={styles.container_buttons}>
                        {
                            screens.map(screen => (
                                <Button onPress={() => this.goToPage(screen.url)} key={screen.id} 
                                        style={[styles.button, {backgroundColor: screen.colorButton, marginTop: screen.logout ? 40 : 20 }]} block>
                                    <Ionicons name={screen.icon} color={screen.color} size={22} />
                                    <Text style={{color: screen.color, fontSize: 18, textAlign: 'left', marginLeft: 10}}>{screen.title}</Text>
                                </Button>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000',
        marginRight: 5,
    },
    text: {
        color: '#fff',
        marginTop: 50,
        marginLeft: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: 'tomato',
    },
    image_container: {
        padding: 30,
        opacity: 0.8,
        alignItems: 'center',
        justifyContent :'center'
    },
    container_buttons: {
        padding: 10,
    },
    title_user: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
    },
    email_user: {
        color: 'gold',
        fontSize: 16,
    },
    badge_block: {
        width: 10, 
        height: 10, 
        backgroundColor: 'white', 
        borderRadius: 5, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 15
    },
    title_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        justifyContent: 'flex-start',
        paddingLeft: 10
    }
})


export { Sidebar }