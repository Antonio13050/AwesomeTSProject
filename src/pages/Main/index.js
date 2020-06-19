import React from 'react';

import Header from '~/components/Header';
import Body from '~/components/Body';
import SubHeader from '~/components/SubHeader';

import { Container } from './styles';

export default function Main(){
  return (
    <Container>
      <Header />
      <SubHeader />
      <Body />
    </Container>
  );
}