import { Container, H1, H2, H2Second, Image, ImageContainer, Main } from "./Main.styled"


import image from '../../images/bemj1.png'

export const MainApp = () => {
    return <Main>
        <Container>
            <H2>HAY! THERE</H2>
            <H1>I AM smith </H1>
            <H2Second>dno</H2Second>
            <H2Second>2131232133</H2Second>
            <H2Second>2131232133</H2Second>
            <H2Second>2131232133</H2Second>
        </Container>
        <ImageContainer>
            <Image src={image} alt="image" />
        </ImageContainer>
    </Main>
}