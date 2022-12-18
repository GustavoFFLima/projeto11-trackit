import styled from "styled-components"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.svg"

export default function PaginaPrincipal() {
    const navigate = useNavigate();

    function home(){
        navigate("/cadastro")
    }

    return (
        <HomeStyled>
            <img src={logo}/>
            <input data-test="email-input" placeholder="email"></input>
            <input data-test="password-input" placeholder="senha"></input>
            <input data-test="user-name-input" placeholder="nome"></input>
            <input data-test="user-image-input" placeholder="foto"></input>
            <button data-test="signup-btn">Cadastrar</button>
            <Link data-test="login-link" to={"/"}><p>Já tem uma conta? Faça login!</p></Link>
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 180px;
        height: 178.38px;
        margin: 68px 97px 28px;
    }
    input{
        width: 303px;
        height: 45px;
        margin: 6px 36px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;

            color: #DBDBDB;
        }
    }
    button{
        width: 309px;
        height: 45px;
        margin: 0px 36px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
    a{
        
        p{
            margin-top: 25px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 13.976px;
            line-height: 17px;
            text-align: center;
            text-decoration-line: underline;

            color: #52B6FF;
        }
    }
`