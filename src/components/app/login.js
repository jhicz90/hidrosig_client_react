import { Container, Grid, Button, ButtonToolbar, Input } from 'rsuite';

var user = 'Hola soy algo'
var pass

function Login() {
    return (
        <Container>
            <Grid fluid>
                <Input />
                <Input />
                <ButtonToolbar>
                    <Button appearance="primary" onClick={LoginIn}>Ingresar</Button>
                </ButtonToolbar>
            </Grid>
        </Container>
    );
}

function LoginIn() {
    user = 'Ingresa algo amigo'
}

export default Login;