import styled from "styled-components"

export default function Header() {
    return (
        <HeaderStyled data-test="header">
            <h1>TrackIt</h1>
            <img src="https://static.wikia.nocookie.net/nickelodeon6666/images/1/18/BobEsponja.png/revision/latest/scale-to-width-down/470?cb=20160421162154&path-prefix=pt-br"/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;
    left: 0px;
    top: 0px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        margin: 10px 18px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;

        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        left: 306px;
        top: 9px;
        
        margin: 10px 18px;
        background: url(image.png);
        border-radius: 98.5px;
    }
`