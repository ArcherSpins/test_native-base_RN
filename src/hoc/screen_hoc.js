import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { Container, Drawer } from 'native-base';
import { HeaderComponent, Sidebar, SpinnerComponent, FooterComponent } from '../components';
import { bgComponentSmoke } from '../constants';

class HocScreen extends React.Component {

    state = {
      title: this.props.title
    }

    closeDrawer = () => {
       this.drawer._root.close()
    };
    
    openDrawer = () => { 
       this.drawer._root.open()
    };
  
    render() {
      return(
        <Drawer ref={(ref) => {this.drawer = ref;}}
            content={<Sidebar bgColor={bgComponentSmoke} navigate={this.props.navigation.navigate} closeDrawer={this.closeDrawer} />}
            onClose={() => this.closeDrawer()}>
            <Container>
              <HeaderComponent title={this.state.title} bgColor={bgComponentSmoke} openDrawer={this.openDrawer} />
              <View style={styles.content}>
                {this.props.children}
              </View>
              <FooterComponent navigate={this.props.navigation.navigate} bgColor={bgComponentSmoke} />
            </Container>
        </Drawer>
      )
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1
    }
});

export default HocScreen 