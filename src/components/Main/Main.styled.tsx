import styled from "styled-components";





export const Main = styled.main`
position: relative;
height: 100vh;
 @media screen and (min-width: 1280px) {
    padding-left:80px;
display: flex;
 }
`;
export const Image = styled.img`
width:100vw;
height: calc(100vh - 500px);
 @media screen and (min-width: 768px) {
width: 50%;
height: auto;
position:absolute;
right:0;
top:0;
margin-top:100px;
margin-right: 50px;
 }
 @media screen and (min-width: 1280px) {
    width: 500px;
    height: 60%;
 }
`;

export const H2 = styled.h2`
font-size: 15px;
    font-weight: 400;
    letter-spacing: 6px;
    margin-bottom: 10px;
    word-spacing: 5px;
`;
export const Proffesion = styled.h2`
text-align: center;
color:red;
@media (min-width: 768px){
text-align: left;
}
`;
export const H1 = styled.h1`
display: inline-block;
font-size: 25px;
    line-height: 35px;
    margin-bottom: 10px;
@media (min-width: 768px){
   font-size: 35px;
   width:50%;
    font-weight: 900;
    line-height: 85px;
    margin-bottom: 15px;
  
}
`;
export const ImageContainer = styled.div`
width:320;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 768px) {
    margin-top:100px;
    max-width: 768px;  
padding-left:40px;
  }

  @media screen and (min-width: 1280px) {
       margin-top:100px;
    max-width: 1280px; 
padding-left:40px;
  }
   @media screen and (min-width: 1440px)and (max-width:2560px) {
 margin-left:auto;
     }
`;
export const H2Second = styled.h2`
    font-size: 26px;
    font-weight: 300;
    line-height: 34px;
`;
export const Container = styled.div`
padding-left:20px;
margin-top:50px;
@media screen and (min-width: 768px) {
    margin-top:100px;
    max-width: 768px;  
padding-left:40px;
  }

  @media screen and (min-width: 1280px) {
       margin-top:100px;
    max-width: 1280px;  
padding-left:40px;
  }
`;
export const PhoneContainer = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 320px)and (max-width:767px){
justify-content: center;
align-items: center;
}

`;