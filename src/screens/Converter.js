import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Header from '../header';
import { connect } from 'react-redux'
import { setActiveCourses } from '../../actions'


const KEY = 'f99d0b952da713d1bf3128ee7c651427'

class ConverterScreen extends React.Component {

    getCourses = (mass) => {
        fetch(`https://currate.ru/api/?get=rates&pairs=${mass[0]},${mass[1]}&key=${KEY}`)
            .then(res => res.json())
            .then(dataRes => this.props.setActiveCourses(dataRes, mass))
    }


    componentDidMount = () => {
        const { courses } = this.props;
        let activeArray = []
        for(let obj in courses.data) {
            if(courses.data[obj].active) activeArray.push(courses.data[obj].title)
        }

        if(activeArray.length < 2) {
            return;
        } else {
            this.getCourses(activeArray);
        }
    }

    getActiveCourses = () => {
        const { activeCourses, activeArray } = this.props;
        return(
            <View>
                <Text style={styles.title}>Выбраны курсы</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
                    width: '100%',
                    padding: 10}}>
                    {
                        activeArray.map((title, i) => {
                            return (
                                <View key={i} style={styles.card_item}>
                                    <Text style={{textAlign: 'center'}}>{title}</Text>
                                    <Text style={{textAlign: 'center', marginTop: 10, color: 'tomato', fontSize: 25}}>{activeCourses.data[title]}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }


    render() {
        const {loadingHomePage} = this.props
        return(
            <View style={styles.container}>
                <Header title="Converter" />
                {
                    loadingHomePage ? <Text style={[styles.title, styles.title_not_courses]}>Выберите курсы (можно выбрать 2 курса)</Text>
                    : this.getActiveCourses()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card_item: {
        width: '100%',
        padding: 20,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'orange',
        backgroundColor: '#ffecc1',
        marginBottom: 15
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    title_not_courses: {
        color: 'tomato',
        marginTop: 40,
        fontSize: 30
    }
})

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        loading: state.loading,
        activeCourses: state.activeCourses,
        activeArray: state.activeArray,
        loadingHomePage: state.loadingHomePage
    }
}

export default connect(mapStateToProps, {setActiveCourses})(ConverterScreen);