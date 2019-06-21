import React from 'react';
import { Footer, FooterTab, Badge, Button, Icon, Text } from 'native-base';

const FooterComponent = ({ bgColor, navigate }) => {
    return (
        <Footer>
            <FooterTab style={{backgroundColor: bgColor}}>
                <Button badge vertical onPress={() => navigate('Apps')}>
                    <Badge><Text>2</Text></Badge>
                    <Icon name="apps" />
                    <Text>Apps</Text>
                </Button>
                <Button vertical onPress={() => navigate('News')}>
                    <Icon name="ios-paper" />
                    <Text>News</Text>
                </Button>
                <Button badge vertical onPress={() => navigate('Contacts')}>
                    <Badge><Text>12</Text></Badge>
                    <Icon name="person" />
                    <Text>Contacts</Text>
                </Button>
                <Button vertical onPress={() => navigate('Home')}>
                    <Icon active name="md-home" />
                    <Text>Home</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}


export { FooterComponent }
