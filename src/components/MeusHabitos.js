
import { useState } from "react";
import styled from "styled-components"

export default function MeusHabitos() {
    const [novoHabito, setNovoHabito] = useState(false)
    let semana = [1,2,3,4,5,6,7]

    function adicionarHabito() {
        return setNovoHabito(true)
    }

    
    return ( 
    <MeusHabitosStyled>
        <div>
        <h2>MeusHabitos</h2>
        <button data-test="habit-create-btn" onClick={adicionarHabito}><p>+</p></button>
        </div>
        {novoHabito && <dicionarHabitoStyled data-test="habit-create-container">
            <input data-test="habit-name-input"></input>
            {semana.map((dia) => <button data-test="habit-day">{dia}</button>)}
            <button data-test="habit-create-cancel-btn" onClick={() => setNovoHabito(false)}>Cancelar</button>
            <button data-test="habit-create-save-btn" >Salvar</button>
        </dicionarHabitoStyled>}
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
    </MeusHabitosStyled>
    )
}

const MeusHabitosStyled = styled.div`
    margin-top: 67px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            margin: 22px 18px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }
        button{
            margin: 22px 18px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;

            background: #52B6FF;
            border-radius: 4.63636px;
            border: none;
            
            p{
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 26.976px;
                line-height: 34px;

                text-align: center;

                color: #FFFFFF;
            }
        }
    }
    p{
        margin: 2px 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`

const dicionarHabitoStyled = styled.div``