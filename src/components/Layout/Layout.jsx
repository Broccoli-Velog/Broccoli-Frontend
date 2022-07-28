import Header from "../Header/Header"
import Page from "../../Pages/Page/Page"
import Container from 'react-bootstrap/Container';

export default function Layout(){
    return (
        <>
            <Header />
            <Container className="no-padding">
                <Page />
            </Container>
        </>
    )
}