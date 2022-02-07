// import 'materialize-css/dist/css/materialize.min.css'
// import Head from 'next/head'
// import Router from 'next/router'
// import { useState, useEffect, useRef } from 'react'
// import { withPublic } from "../src/hook/route"
// import Router from 'next/router'
// function login({auth}) {
//     const { login,user,error }=auth
//     // const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)
//     const email = useRef()
//     const password = useRef()
//     const handleSubmit =(e) => {
//         e.preventDefault()
//         login(email.current.value, password.current.value)
//         setLoading(false)
//         setTimeout(() => {
//             if (currentUser!== null&success!==null) {
//                 Router.push('./home')
//             }
//         }, 3000);

//     }
  
//     return (<div>
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/icon?family=Material+Icons"
//           rel="stylesheet"
//         ></link>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400&family=Klee+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Poppins:wght@100;200;300;400;500&family=Quintessential&family=Satisfy&display=swap"
//           rel="stylesheet"
//         ></link>
//       </Head>
//         <div id="modal2" class="modal">
//             <div class="modal-content">
//                 <h4>log in
//                 </h4>
//                 <div class="row">
//                     <form class="col s12" onSubmit={(e) => handleSubmit(e)}>
//                         <div class="row">
//                             <div class="input-field col s12">
//                                 <input ref={email}id="email" type="email" class="validate" />
//                                 <label for="email">Email</label>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="input-field col s12">
//                                 <input ref={password}id="password" type="password" class="validate" />
//                                 <label for="password">Password</label>
//                             </div>
//                         </div>

//                         <a href="#!" class="modal-close waves-effect waves-green btn-flat"

//                         >
//                             <button disabled={loading} class="waves-effect black lighten-4 btn-small"
//                                 type='submit'>
//                                 sign in
//                             </button>
//                         </a>
//                     </form>
//                 </div>
//             </div>

//         </div>

//     </div>);
// }

// export default withPublic(login);
import React from "react";
import { withPublic } from "../src/hook/route";

function Login({ auth }) {
  const { user, loginWithGoogle, error } = auth;
  return (
    <div>
      {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
      <h1>{user?.uid}</h1>
    </div>
  );
}

export default withPublic(Login);