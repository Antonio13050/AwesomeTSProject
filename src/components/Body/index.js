import React from 'react';

import { Image, Container } from './styles';

import imagem from '~/assets/img.jpg'

export default function Body() {
    return (
        <Container>
            <Image source={imagem}/>    
        </Container>
    );
}