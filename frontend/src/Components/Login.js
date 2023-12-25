// import React, { useState } from "react";

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 // Login successful, you can redirect or set a state indicating the user is logged in
//                 console.log('Login successful!');
//             } else {
//                 // Login failed, handle the error
//                 console.error('Login failed:', await response.text());
//             }
//         } catch (error) {
//             console.error('Error during login:', error);
//         }
//     };
//     return (
//         <div className="login">
//             <h2>Login</h2>
//             <form>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <button type="button" onClick={handleLogin}>
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ onLogin }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 // Login successful, you can redirect or set a state indicating the user is logged in
//                 onLogin(); // Invoke the parent component's login handler
//                 navigate("/home"); // Navigate to the home page upon success
//             } else {
//                 // Login failed, handle the error
//                 setErrorMessage("Incorrect username or password");
//             }
//         } catch (error) {
//             console.error('Error during login:', error);
//         }
//     };

//     return (
//         <div className="login">
//             <h2>Login</h2>
//             {errorMessage && <p>{errorMessage}</p>}
//             <form>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <button type="button" onClick={handleLogin}>
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('https://ishanisudur-api.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Login successful, you can redirect or set a state indicating the user is logged in
                onLogin(); // Invoke the parent component's login handler
                navigate("/home"); // Navigate to the home page upon success
            } else {
                // Login failed, handle the error
                setErrorMessage("Incorrect username or password");
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login">
            {/* <h2>login</h2> */}
            {errorMessage && <p>{errorMessage}</p>}
            <form className="login_form">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {/* <label>Username</label> */}
                            </td>
                            <td>
                                <input
                                    placeholder="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <label>Password</label> */}
                            </td>
                            <td>
                                <input
                                    placeholder="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <button className="login_btn" type="button" onClick={handleLogin}>
                    login
                </button>
            </form>
        </div>
    );
};

export default Login;
