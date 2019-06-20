import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


const HeaderComponent = ({ openDrawer, bgColor, title }) => {
    return(
        <Header style={{backgroundColor: bgColor, paddingTop: 40, paddingBottom: 8, height: 90}}>
            <Left>
            <Button onPress={() => openDrawer()} transparent>
                <Icon name='menu' />
            </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='camera' />
                </Button>
            </Right>
        </Header>
    )
}


export { HeaderComponent }