"use client"

import { useState } from "react";

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    

    const createUser = async (username: string, password: string) => {
        // Implemente aqui o código para criar o usuário no banco de dados
        const response = await fetch('/api/services/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        console.log(response);
    }

    const validateUser = async (username: string, password: string) => {
        console.log("testando validação", username, password);
        const response = await fetch('/api/services/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        console.log("Validate User",response);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        if (password) {
            /* createUser(username, password); */
            validateUser(username, password);
        }
    }

    return (
        <div>
            
            <div>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <h3>Criar conta</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="check-password" placeholder="Retype Password" />                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}