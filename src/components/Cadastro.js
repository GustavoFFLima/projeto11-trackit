import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"
import logo from "../assets/logo.svg"

export default function PaginaPrincipal() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function dadosConta(event){
        event.preventDefault();
        axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
                email: email,
                name: name,
                image: image,
                password: password
            } )
            .then(pagina)
            .catch((erro) => console.log(erro))
    }

    function pagina(){
        
        navigate("/")
    }

    return (
        <HomeStyled>
            <img src={logo}/>
            <form onSubmit={dadosConta}>    
                <input type="text" data-test="email-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required></input>
                <input type="text" data-test="password-input" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></input>
                <input type="text" data-test="user-name-input" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required></input>
                <input type="text" data-test="user-image-input" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" required></input>
                <button type="submit" data-test="signup-btn">Cadastrar</button>
            </form>
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