import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            // Ma'lumotlarni backend-ga yuborish
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName }),
            });

            if (response.ok) {
                // Ma'lumotlarni localStorage-ga saqlash
                localStorage.setItem('firstName', firstName);
                localStorage.setItem('lastName', lastName);
                // Profil sahifasiga o'tish
                navigate('/profile');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-[url('https://i.pinimg.com/736x/37/72/2b/37722b1332aef252864dfc03a4e48ac2.jpg')] bg-cover bg-center flex items-center justify-center h-[100vh] w-full">
            <div className="flex flex-col items-center justify-center p-4 rounded-[10px] w-[100%] gap-2">
                <h1 className="text-[35px] text-[white]">Login</h1>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="mb-2 p-2 border rounded"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="mb-4 p-2 border rounded"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
