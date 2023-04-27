import { A, Header, Img } from "./Header.styled"

import image from '../../images/logo2.webp'


export const HeaderApp = () => {
    return <Header>
        <A href={'#'}>
            <Img src={image} />
        </A>
    </Header>
}