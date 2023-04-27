import styled from "styled-components";




export const Footer = styled.footer`
height: 300px;
background-color: black;
display: flex;
`;
export const CardContainer = styled.div`
margin-top:auto;
margin-left:auto;
margin-right:auto;
margin-bottom: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Card = styled.div`
width:300px;
height: 200px;
background-color: white;
`;
export const P = styled.p`
color:red;
`;

export const Img = styled.img`
width:300px;
height: 120px;
`;

export const A = styled.a`
`;
export const ButtonContainer = styled.div`
width:300px;
display: flex;
justify-content: space-between;
`;
export const Button = styled.button`
  background-color: #007aff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    padding: 14px 28px;
    font-size: 20px;
  }
`;