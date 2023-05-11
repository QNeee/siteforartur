import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Container = styled.div`
background-color: #e9e9e9;
  max-width: 100vw; 
  height: 100vh;
  margin: 0 auto;    
`;

export const LinkItem = styled(Link)`
width: 100px;
  text-decoration: none;
  display: inline-block;
  color: red;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
  cursor: pointer;

  
      @media screen and (min-width: 320px) {
      padding: 10px 15px;
      margin: 5px 10px;
      font-size: 14px;
    }

      @media screen and (min-width: 768px) {
      &:hover {
        background-position: right center;
      }
    }
  
`;