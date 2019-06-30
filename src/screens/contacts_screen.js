import React from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native'
import HocScreen from '../hoc/screen_hoc';
import { getContacts } from '../../actions';
import { connect } from 'react-redux';
import { bgContainer, bgComponentSmoke } from '../constants';
import { ContactItemComponent } from '../ui-elements';

class ContactsScreen extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    };

    componentDidMount() {
        this.props.getContacts()
    }
  
    render() {
        const { loadingContacts, contacts } = this.props;
        return(
            <HocScreen {...this.props} title="Contacts">
                <ScrollView>
                    <View style={styles.content}>
                        {
                            loadingContacts ? <ActivityIndicator size="large" color={bgComponentSmoke} />
                            :   contacts.map(item => (
                                <ContactItemComponent {...item} key={item.id} />
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
        backgroundColor: 'white',
    }
});


const mapStateTpProps = (state) => {
    return{
        contacts: state.contacts_reducer.contacts,
        loadingContacts: state.contacts_reducer.loadingContacts
    }
}

const mapDispatchToProps = {
    getContacts
}

export default connect(mapStateTpProps, mapDispatchToProps)(ContactsScreen)