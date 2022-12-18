import styled from "styled-components"

export default function Footer() {
    return (
        <FooterStyled data-test="menu">
            <a data-test="habit-link">Hábitos</a>
            <button data-test="today">Hoje</button>
            <a data-test="history-link" >Histórico</a>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 375px;
    height: 70px;

    background: #FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
    button{
        width: 91px;
        height: 91px;
        margin-bottom: 67px;

        border: none;
        border-radius: 50px;
        background: #52B6FF;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #FFFFFF;
    }
`