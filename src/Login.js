import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'


function Login(props) {
    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props
    return <div className='login-body'>
        <div className='login-form container d-flex justify-content-center align-items-center'>
            <Form inline>
                <h1 className='h2'>Login</h1>
                <FormGroup>
                    <Label
                        for="exampleEmail"
                        hidden
                    >
                        Email
                    </Label>
                    <Input
                        className='login-input'
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className='errorMsg'>{emailError}</p>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="examplePassword"
                        hidden
                    >
                        Password
                    </Label>
                    <Input
                        className='login-input'
                        id="examplePassword"
                        name="password"
                        placeholder="Senha"
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='errorMsg'>{passwordError}</p>

                    <Input className='login-checkbox' type="checkbox" /> Lembrar senha
                </FormGroup>
                {' '}
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <Button onClick={handleLogin} className='login-button'>
                                Entrar
                            </Button>
                            <p>Não possui uma conta? <span onClick={()=>setHasAccount(!hasAccount)}>Cadastre-se</span></p>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleSignUp} className='login-button'>
                                Cadastrar
                            </Button>
                            <p>Possui uma conta? <span onClick={()=>setHasAccount(!hasAccount)}>Entrar</span></p>
                        </>
                    )}

                </div>
            </Form>
        </div>
    </div>
}

export default Login;



