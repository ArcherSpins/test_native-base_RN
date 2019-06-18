import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


export default () => {
    return(
        <View style={styles.container}>
            <Image source={{uri: 'https://im0-tub-ru.yandex.net/i?id=b8ece4112797cf3c316897102eed8ff2&n=13'}} style={styles.image} />
            <Text style={styles.title}>К сожалению нет данных</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 10
    },
    title: {
        color: 'tomato',
        textAlign: 'center',
        fontSize: 25,
    }
})