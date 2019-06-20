import React from 'react';
import { Footer, FooterTab, Badge, Button, Icon, Text } from 'native-base';

const FooterComponent = ({ bgColor }) => {
    return (
        <Footer>
            <FooterTab style={{backgroundColor: bgColor}}>
                <Button badge vertical>
                    <Badge><Text>2</Text></Badge>
                    <Icon name="apps" />
                    <Text>Apps</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                </Button>
                <Button active badge vertical>
                    <Badge ><Text>51</Text></Badge>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                </Button>
                <Button vertical>
                    <Icon name="person" />
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}


export { FooterComponent }
