// import { useState, useEffect, useRef } from 'react'
// import { useAuth } from "../src/hook/auth"
// import Router from 'next/router'
// function login() {
//     const { login,user,error } = useAuth()
//     const [error, setError] = useState("")
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

// export default login;
