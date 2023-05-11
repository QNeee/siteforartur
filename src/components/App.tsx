
import React from 'react';
import { Container } from './App.styled';
import { FooterApp } from './Footer/Footer';
import { MainApp } from './Main/Main';


export const App: React.FC = () => {

  return <Container>
    <MainApp />
    <FooterApp />
  </Container>

}


