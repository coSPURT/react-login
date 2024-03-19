import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { userState } from "@store";
import Logomark from "@assets/logo-mark.svg";
import Logo from "@assets/logo.svg";

function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useRecoilState(userState);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if ( email === "spurt941222@gmail.com" && password === "123") {
            
            setUser({
                isLoggedIn: "true",
            });

            setIsLoggedIn(true);
            Navigate("/Display");
            
        }else {
            alert("wrong");
        }      
    }

    return (
        <div className="main">
            
            <div className="logo-content">
                <a href="/">
                    <img className="logo" src={Logo} />
                </a>
                <img className="logo-mark" src={Logomark} />
            </div>

            <div className="login-content">
                
                <div className="login-incontent">
                    <div className="context">
                        <h4>Sign in to Vaultik</h4>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="login-form">
                            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a id="fopass" href="">Forgot password?</a>
                        
                            <button id="btn" type="submit">Login</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Home;