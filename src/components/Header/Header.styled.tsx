import styled from "styled-components";


export const Header = styled.header`
padding-top: 20px;
padding-bottom: 20px;
padding-left:20px;
@media screen and (min-width: 768px) {
    max-width: 768px;  // максимальна ширина для вьюпорту 768
padding-left:40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;  // максимальна ширина для вьюпорту 1280
padding-left:40px;
  }
`;

export const Img = styled.img`

`;
export const A = styled.a`
text-decoration: none;
`;