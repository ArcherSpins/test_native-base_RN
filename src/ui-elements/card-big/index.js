import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const CardBig = ({ thumbnail, imageCard, author, likes, comments, timer }) => {
    return (
        <TouchableOpacity style={{marginHorizontal: 7}}>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: thumbnail}} />
                        <Body>
                            <Text>{ author.title }</Text>
                            <Text note>{ author.description }</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: imageCard}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>{ likes } Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>{ comments } Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>{ timer } ago</Text>
                    </Right>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}


export { CardBig }