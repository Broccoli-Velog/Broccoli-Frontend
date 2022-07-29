import Header from "../../components/Header/Header"
import Page from "../Router/Router"
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import MiddleBar from "../../components/Bar/Bar";

export default function Layout(){
    return (
        <>
            <Sticky>
                <Header/>
                <MiddleBar/>
            </Sticky>

            <Container className="no-padding">
                <Page />
            </Container>
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