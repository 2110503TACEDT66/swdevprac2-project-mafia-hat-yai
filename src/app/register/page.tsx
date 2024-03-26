'use client'
import { useState } from 'react';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {

            // Call your API route to sign up the user
            const res = await fetch('http://localhost:5000/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name, telephone }),
            });

            if (res.ok) {
                
                window.location.href = '/';
            }

        } catch (err) {
            console.log("ERROR CANNOT REGISTER");
            console.log(err);
        } 
        
        // if (res.ok) {
        // // Redirect the user after successful sign-up
        //     // Replace '/dashboard' with the desired destination
        //     window.location.href = '/';
        // } else {
        //     // Handle sign-up error
        //     console.error('Sign-up failed');
        // }
    };

    return (
        <div style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="Telephone"
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
            </form>
        </div>
    );
}
