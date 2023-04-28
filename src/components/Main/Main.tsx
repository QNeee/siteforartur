import { Container, H1, H2, H2Second, Image, ImageContainer, Main, PhoneContainer, Proffesion } from "./Main.styled"


import image from '../../images/bemj1.png'

export const MainApp = () => {
    return <Main>
        <Container>
            <H2>HAY! THERE</H2>
            <H1>I AM MIKOLA COCKSUCKER </H1>
            <Proffesion>SOSY KOKI</Proffesion>
            <PhoneContainer>
                <H2Second>063-200-65-25</H2Second>
                <H2Second>093-200-65-25</H2Second>
                <H2Second>067-200-65-25</H2Second>
            </PhoneContainer>
        </Container>
        <ImageContainer>
            <Image src={image} alt="image" />
        </ImageContainer>
    </Main>
}