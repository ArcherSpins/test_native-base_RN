import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';

const w = Dimensions.get('window').width;

class CardMini extends Component {

    state = {
        loading: true,
        url: this.props.url
    }

    setLoading = () => {
        this.setState({loading: false})
    }


    render() {
        const { title } = this.props;
        return (
            <TouchableOpacity style={{marginHorizontal: 7}}>
                <View style={styles.card}>
                    {
                        !this.state.url ? <ActivityIndicator size="small" color="blue" /> 
                        : <Image style={styles.image} 
                            source={{uri: this.state.url}} onLoadEnd={this.setLoading} /> 
                    }
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 20
    },
    card: {
        padding: 15,
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: '#fff6',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: 0.6,
    },
    title: {
        marginLeft: 10,
        fontSize: 18
    }
})

export { CardMini }