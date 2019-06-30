import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';


const ContactItemComponent = ({avatar, name, online}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={{
            padding: 6}}>
            <ContactItem>
                <ContactThumbnail>
                    <Image source={{uri: avatar}} />
                </ContactThumbnail>
                <ContactContent>
                    <TitleText>{name}</TitleText>
                    <IndicatorOnline style={{backgroundColor: online ? 'green' : 'orange'}} />
                    <Icon name="ios-arrow-dropright" size={30} color="gray" style={{position: 'absolute', right: 4}} />
                </ContactContent>
            </ContactItem>
        </TouchableOpacity>
    )
}

const ContactItem = styled.View`
    flex-direction: row;
    background-color: #fff;
    border-bottom-color: gray;
    border-bottom-width: .5px;
    align-items: center;
    padding-bottom: 6px;
`

const ContactThumbnail = styled.View`
    width: 10%;
`

const ContactContent = styled.View`
    flex-direction: row;
    padding-left: 20px;
    align-items: center;
    width: 90%;
`

const TitleText = styled.Text`
    color: tomato;
    font-size: 18px;
    margin-right: 10px;
`

const IndicatorOnline = styled.View`
    border-radius: 5px;
    width: 10px;
    height: 10px;
`

const Image = styled.Image`
    border-radius: 25px;
    width: 50px;
    height: 50px;
    border-color: blue;
`

export { ContactItemComponent }