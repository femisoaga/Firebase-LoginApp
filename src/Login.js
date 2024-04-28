import { useState } from "react";
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("./profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return(
        <div className = "container">
            <div className = "row justify-content-center">
                <form className = "col-md-4 mt-3 pt-3 pb-3">
                    { "" !== notice &&
                        <div className = "alert alert-warning" role = "alert">
                            { notice }    
                        </div>
                    }                  
                    <div className = "form-floating mb-3">
                        <input type = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                        <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input type = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                        <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
                    </div>
                    <div className = "d-grid">
                        <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                    </div>
                    <div className = "mt-3 text-center">
                        <span>Need to sign up for an account? <Link to = "./signup">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login


// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { loginUser, loading, user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // If authentication is still loading, display a loading indicator
//   if (loading) {
//     return (
//       <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
//     );
//   }

//   // If the user is already authenticated, redirect to the home page
//   if (user) {
//     navigate("/");
//   }

//   // Handle form submission for user login
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     loginUser(email, password)
//       .then((result) => {
//         console.log(result);
//         navigate("/");
//       })
//       .catch((error) => console.log(error.message));

//     e.target.reset();
//   };

//   // Render the login form
//   return (
//     <div>
//       <div className="min-h-screen bg-base-200">
//         <div className="hero-content flex-col">
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <div className="card-body">
//               <form onSubmit={handleFormSubmit}>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="email"
//                     placeholder="Email"
//                     className="input input-bordered"
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                   </label>
//                   <input
//                     type="password"


//                     name="password"
//                     placeholder="Password"
//                     className="input input-bordered"
//                   />
//                 </div>
//                 <div className="form-control mt-6">
//                   <button className="btn btn-primary">Login</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;