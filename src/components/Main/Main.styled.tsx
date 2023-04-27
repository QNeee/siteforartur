import styled from "styled-components";





export const Main = styled.main`
 @media screen and (min-width: 1280px) {
display: flex;
 }
`;
export const Image = styled.img`
width:320px;
 @media screen and (min-width: 768px) {
width: 700px;
 }
 @media screen and (min-width: 1280px) {

 }
`;

export const H2 = styled.h2`
font-size: 28px;
    font-weight: 400;
    letter-spacing: 6px;
    margin-bottom: 10px;
    word-spacing: 5px;
`;
export const H1 = styled.h1`
display: inline-block;
    font-size: 90px;
    font-weight: 900;
    line-height: 85px;
    margin-bottom: 15px;
`;
export const ImageContainer = styled.div`
width:320;
@media screen and (min-width: 768px) {
    margin-top:100px;
    max-width: 768px;  // максимальна ширина для вьюпорту 768
padding-left:40px;
  }

  @media screen and (min-width: 1280px) {
       margin-top:100px;
    max-width: 1280px;  // максимальна ширина для вьюпорту 1280
padding-left:40px;
  }
   @media screen and (min-width: 1440px)and (max-width:2560px) {
 margin-left:auto;
     }
`;
export const H2Second = styled.h2`
    font-size: 34px;
    font-weight: 300;
    line-height: 34px;
`;
export const Container = styled.div`
padding-left:20px;
margin-top:50px;
@media screen and (min-width: 768px) {
    margin-top:100px;
    max-width: 768px;  // максимальна ширина для вьюпорту 768
padding-left:40px;
  }

  @media screen and (min-width: 1280px) {
       margin-top:100px;
    max-width: 1280px;  // максимальна ширина для вьюпорту 1280
padding-left:40px;
  }
`;