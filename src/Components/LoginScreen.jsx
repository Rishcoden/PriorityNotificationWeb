import {useState} from "react";
import {supabase} from "../supabase.js";
function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        const {data, error} = await supabase.auth.signInWithPassword({
            email,password
        });

        if(error){
            alert(error.message);
            return;
        }
        alert("Login successful!");
        console.log(data);
    }

    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">

            <h1 className="text-3xl">

                Priority Notification

            </h1>

            <input

                type="email"

                placeholder="Email"

                className="border p-2"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

            />

            <input

                type="password"

                placeholder="Password"

                className="border p-2"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

            />

            <button

                onClick={handleLogin}

                className="bg-blue-500 text-white px-4 py-2 rounded"

            >

                Login

            </button>

        </div>
    )

}

export default LoginScreen;