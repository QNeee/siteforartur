import { useState } from "react"
import { A, Button, ButtonContainer, Card, CardContainer, Footer, Img, P } from "./Footer.styled"
import canabis from '../../images/canabis.jpg'
import pistoleti from '../../images/pistols.jpg'
import prostitytki from '../../images/prostitytki.jpg'
import bebri from '../../images/bebri.jpg'
import pise4ki from '../../images/vareniki.jpg'
import battlenet from '../../images/battlenet.jpg'
interface IData {
    id: number,
    preview: string,
    name: string,
    src: string
}
const data: IData[] = [
    {
        id: 1,
        preview: canabis,
        name: 'Canabis',
        src: '#',
    },
    {
        id: 2,
        preview: pistoleti,
        name: 'Pistoleti',
        src: '#',
    },
    {
        id: 3,
        preview: prostitytki,
        name: 'Pprostitytki',
        src: '#',
    },
    {
        id: 4,
        preview: bebri,
        name: 'Bebri',
        src: '#',
    },
    {
        id: 5,
        preview: pise4ki,
        name: 'Pise4ki',
        src: '#',
    },
    {
        id: 6,
        preview: battlenet,
        name: 'Battlenet',
        src: '#',
    },
]
export const FooterApp = () => {
    const [change, setChange] = useState(0);
    const onClickNext = () => {
        setChange(prev => prev + 1)
    }
    const onClickPrev = () => {
        setChange(prev => prev - 1)
    }
    return <Footer>
        <CardContainer>
            <Card key={data[change].id}>
                <P>{data[change].name}</P>
                <Img src={data[change].preview} />
                <A href={data[change].src}>ssilka</A>
            </Card>
            <ButtonContainer>
                {change < 5 && <Button onClick={onClickNext} >Next</Button>}
                {change !== 0 && <Button onClick={onClickPrev} >Prev</Button>}
            </ButtonContainer>
        </CardContainer>
    </Footer>
}