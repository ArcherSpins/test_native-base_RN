import React from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export const NewsCard = ({title, thumbnail, imageCard, date, content, name, stars}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={{marginHorizontal: 7}}>
            <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: thumbnail}} />
                        <Body>
                            <Text>{name}</Text>
                            <Text note>{date}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image source={{uri: imageCard}} style={styles.imageCard}/>
                        <Text style={styles.title}>{title}</Text>
                        <ScrollView style={styles.content}>
                            <Text>
                                {content}
                            </Text>
                        </ScrollView>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon name="logo-github" />
                            <Text>{stars} stars</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    title: {fontSize: 18, fontWeight: 'bold', borderBottomColor: 'gray', 
            borderBottomWidth: 2, marginBottom: 5, width: '100%'},
    imageCard: {height: 200, width: '100%', flex: 1, marginBottom: 15},
})