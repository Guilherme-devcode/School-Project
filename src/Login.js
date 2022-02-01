import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

function Login() {
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
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
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
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                </FormGroup>
                {' '}
                <Button className='login-button'>
                    Entrar
                </Button>
            </Form>
        </div>
    </div>
}

export default Login;



