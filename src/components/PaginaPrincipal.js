import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"
import logo from "../assets/logo.svg"

export default function PaginaPrincipal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function habitos(){
        navigate("/habitos")
    }

    function loginConta(event){
        event.preventDefault();
        axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
                email: email,
                password: password
            } )
            .then(habitos)
            .catch((erro) => console.log(erro))
    }

    return (
        <HomeStyled>
            <img src={logo}/>
            <form onSubmit={loginConta}>    
                <input type="text" data-test="email-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required></input>
                <input type="text" data-test="password-input" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></input>
                <button type="submit" data-test="login-btn">Entrar</button>
            </form>
            <Link data-test="signup-link" to={"/cadastro"}><p>Não tem uma conta? Cadastre-se!</p></Link>
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