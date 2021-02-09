import { Container, Header, Content, Sidebar } from 'rsuite';

function App() {
    return (
        <Container>
            <Sidebar>Sidebar</Sidebar>
            <Container>
                <Header>Header</Header>
                <Content>Content</Content>
            </Container>
        </Container>
    );
}

export default App;