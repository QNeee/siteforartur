
import React from 'react';
import { Container } from './App.styled';
import { FooterApp } from './Footer/Footer';
import { HeaderApp } from './Header/Header';
import { MainApp } from './Main/Main';


export const App: React.FC = () => {

  return <Container>
    <HeaderApp />
    <MainApp />
    <FooterApp />
  </Container>

}


