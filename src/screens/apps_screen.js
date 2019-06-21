import React from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { getCardsMini, getCardsBig } from '../../actions';

import { bgContainer, bgComponentSmoke } from '../constants';
import { CardMini, CardBig } from '../ui-elements';
import HocScreen from '../hoc/screen_hoc';


class AppsScreen extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    };

    componentDidMount() {
        this.props.getCardsMini()
        this.props.getCardsBig()
    }
  
    render() {
        const { cards_mini, loadingCardMini, cards_big, loadingCardBig } = this.props;

        return(
            <HocScreen {...this.props} title="Apps">
                <ScrollView style={styles.container}>
                    <View style={styles.section}>
                        {
                            loadingCardMini 
                            ? <ActivityIndicator size="large" color={bgComponentSmoke} />
                            : 
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                                    <Text style={styles.title}>Новые приложения</Text>
                                    <Image source={{uri: 'https://lastfm-img2.akamaized.net/i/u/ar0/e31af8a15ba545b7c51405f6e7de54a5.png'}} style={styles.title_image} />
                                </View>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {
                                        cards_mini.map(card => (
                                            <CardMini key={card.id} {...card} />
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        }
                    </View>
                    <View style={styles.section}>
                        {
                            loadingCardBig 
                            ? <ActivityIndicator size="large" color={bgComponentSmoke} />
                            : 
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                                    <Text style={styles.title}>Список популярных</Text>
                                    <Image source={{uri: 'https://www.shareicon.net/download/2016/02/07/281272_star_512x512.png'}} style={styles.title_image} />
                                </View>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {
                                        cards_big.map(card => (
                                            <CardBig key={card.id} {...card} />
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        }
                    </View>
                    <View style={styles.section}>
                        {
                            loadingCardBig 
                            ? <ActivityIndicator size="large" color={bgComponentSmoke} />
                            : 
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                                    <Text style={styles.title}>Список бесплатных</Text>
                                    <Image source={{uri: 'https://techtipsmanish.com/wp-content/uploads/2018/09/YouTube_monetization-1.png'}} style={styles.title_image} />
                                </View>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {
                                        cards_big.reverse().map(card => (
                                            <CardBig key={card.id} {...card} />
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        }
                    </View>
                </ScrollView>
            </HocScreen>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: bgContainer
    },
    section: {
        paddingVertical: 20
    },
    title: {
        fontSize: 20,
        marginLeft: 20,
    },
    title_image: {
        width: 23,
        height: 23,
        marginLeft: 15
    }
});


const mapStateToProps = (state) => {
    return {
        cards_mini: state.card_mini_reducer.cards_mini,
        loadingCardMini: state.card_mini_reducer.loadingCardMini,
        cards_big: state.card_big_reducer.cards_big,
        loadingCardBig: state.card_big_reducer.loadingCardBig
    }
}

const mapDispatchToProps = {
    getCardsMini, getCardsBig
}

export default connect(mapStateToProps, mapDispatchToProps)(AppsScreen) 