import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native'


const w = Dimensions.get('window').width

export default ({obj, onActivited}) => {
    const { active, title } = obj;
    const activeStyle = active ? styles.active : null;

    return (
        <TouchableOpacity style={{width: '40%'}} onPress={() => onActivited(title)}>
            <View style={[styles.card_item, activeStyle]}>
                <Text style={{textAlign: 'center'}}>{title}</Text>
            </View>
        </TouchableOpacity >
    )
}


const styles = StyleSheet.create({
    card_item: {
        width: '100%',
        padding: 15,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'gray',
        backgroundColor: '#f2f2f2',
        marginBottom: 15
    },
    active: {
        borderColor: '#FD4D01',
        backgroundColor: '#ffe3d2',
    }
})