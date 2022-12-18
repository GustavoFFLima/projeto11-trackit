import styled from "styled-components"
import MeusHabitos from "./MeusHabitos";
import Header from "./Header"
import Footer from "./Footer"

export default function Habitos() {
    return (
        <HabitosStyled>
            <Header />
            <MeusHabitos />
            <Footer />
        </HabitosStyled>
        );
}

const HabitosStyled = styled.div`
    height: 100%;
    background: #E5E5E5;
`