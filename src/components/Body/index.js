import React from 'react';

import { Image, Container, Button, Input, TextButton, TextMeta, TextQtd } from './styles';

import imagem from '~/assets/img.jpg'

export default function Body() {
    return (
        <Container>
            <TextMeta>Meta diária</TextMeta>
            <Input />
            <Image source={imagem}/>
            <TextQtd>1,5L</TextQtd>
            <Button > 
                <TextButton>+</TextButton>
            </Button>
        </Container>
    );
}