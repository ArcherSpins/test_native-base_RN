import React from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux';

import { getNews } from '../../actions';

import HocScreen from '../hoc/screen_hoc';
import { bgContainer, bgComponentSmoke } from '../constants';
import { NewsCard } from '../ui-elements';


class NewsScreen extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    };

    componentDidMount = () => {
        this.props.getNews()
    }
  
    render() {
        const { news, loadingNews } = this.props;

        return(
            <HocScreen {...this.props} title="News">
                <ScrollView>
                    <View style={styles.content}>
                        {
                            loadingNews ? <ActivityIndicator size="large" color={bgComponentSmoke} />
                            :   news.map(item => (
                                <NewsCard {...item} key={item.id} />
                                ))
                        }
                    </View>
                </ScrollView>
            </HocScreen>
        )
    }
}


const styles = StyleSheet.create({
    content: {
        padding: 10,
        backgroundColor: bgContainer,
    }
});


const mapStateToProps = (state) => {
    return {
        news: state.news_reducer.news,
        loadingNews: state.news_reducer.loadingNews
    }
}

export default connect(mapStateToProps, { getNews })(NewsScreen);