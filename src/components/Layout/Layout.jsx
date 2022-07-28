import Header from "../Header/Header"
import Page from "../../Pages/Page/Page"
import Bar from "../Bar/Bar"
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Layout(){
    const [user, setUser]=useState(false) // redux로 교체
    const history = useHistory();
    const userToggle=(user)=>{
        setUser(!user)
        history.push('/')
    }

    return (
        <>
            <Sticky>
                <Header user={user} userToggle={userToggle}/>
                <Bar user={user} />
            </Sticky>

            <Container className="no-padding">
                <Page />
            </Container>
            <button onClick={()=>userToggle(user)}>
                temp
            </button>
        </>
    )
}

const Sticky = styled.div`
position: -webkit-sticky;
position: sticky;
top: 0;
z-index: 999;
background-color: #faf8f3;
box-shadow: 0 3px 6px #faf8f3, 0 3px 3px #f0eee9;
`