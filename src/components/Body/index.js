import React from 'react';

import { Image, Container, Input, TextMeta, TextQtd } from './styles';

import imagem from '~/assets/img.jpg'
import { View } from 'react-native';

export default function Body() {
    return (
        <Container>
            
            <Image source={imagem}/>

            <View>
                <TextQtd>1,5L</TextQtd>
            </View>
            
        </Container>
    );
}