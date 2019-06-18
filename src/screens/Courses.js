import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import Header from '../header';
import { connect } from 'react-redux'
import { getCourses, onActivited, getError } from '../../actions'
import CardItem from '../ui-elements/course-block.js'
import ErrorMessage from '../error-boundry';

const KEY = '0805d529d4e0c0db25e5170ddbfe3729'
const url = 'https://currate.ru/api/?get=currency_list&key='


class CoursesScreen extends React.Component {


    componentDidMount = () => {
        fetch(url+KEY)
            .then(res => res.json())
            .then(dataRes => {
                if(dataRes.data.length < 1) {
                    this.props.getError()
                } else {
                    const { data } = dataRes;
                    const newData = data.map(item => {
                        return {
                            title: item,
                            active: false
                        }
                    })
                    dataRes.data = newData;
                    this.props.getCourses(dataRes)
                }
            })
    }

    render() {
        const { courses, onActivited, errorLoading } = this.props;
        return(
            <View style={styles.container}>
                <Header title="Courses" />
                <ScrollView>
                    {
                        errorLoading
                        ?   <ErrorMessage />

                        : this.props.loading
                        ? <ActivityIndicator color = '#bc2b78' size = "large" style={{marginTop: 10}} />
                        : <View style={styles.body}>
                              {
                                  courses.data.map((item, i) => <CardItem onActivited={onActivited} obj={item} key={i} />)
                              }
                          </View>
                    }
                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
})

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        loading: state.loading,
        errorLoading: state.errorLoading
    }
}




export default connect(mapStateToProps, {getCourses, onActivited, getError})(CoursesScreen);