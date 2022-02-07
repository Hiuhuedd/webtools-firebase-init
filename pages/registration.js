// import 'materialize-css/dist/css/materialize.min.css'
// import Head from 'next/head'
// import Router from 'next/router'
// import { useState, useEffect, useRef } from 'react'
// import { useAuth } from "../src/hook/auth"
// import Router from 'next/router'
// function signup() { 
//     const { signup, currentUser,success } = useAuth()

//     const [modalstate, setmodalstate] = useState("")
//     const [loading, setLoading] = useState(false)
//     const first = useRef()
//     const last = useRef()
//     const email = useRef()
//     const password = useRef() 
   
//     const handleSubmit =  (e) => {
//         e.preventDefault()
//         setLoading(true)
//         signup(email.current.value, password.current.value)
//         setLoading(false)
//         setTimeout(() => {
//             if (currentUser !== null&success!==null) {
//                 Router.push('./home')
//             }
//         }, 3000);
//     }
   
//   return (<div> 
//         <Head>
//         <link
//           href="https://fonts.googleapis.com/icon?family=Material+Icons"
//           rel="stylesheet"
//         ></link>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400&family=Klee+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Poppins:wght@100;200;300;400;500&family=Quintessential&family=Satisfy&display=swap"
//           rel="stylesheet"
//         ></link>
//       </Head>
//       <div id="modal1" class="modal">
//           <div class="modal-content">
//               <h4>sign up
//               </h4>
//               <div class="row">
//                   <form class="col s12"
//                       onSubmit={(e) => handleSubmit(e)}>
//                       <div class="row">
//                           <div class="input-field col s6">
//                               <input
//                                   ref={first}
//                                   placeholder="Placeholder" id="first_name" type="text" class="validate" />
//                               <label for="first_name">First Name</label>
//                           </div>
//                           <div class="input-field col s6">
//                               <input

//                                   ref={last}
//                                   id="last_name" type="text" class="validate" />
//                               <label for="last_name">Last Name</label>
//                           </div>
//                       </div>

//                       <div class="row">
//                           <div class="input-field col s12">
//                               <input
//                                   ref={email}
//                                   id="email" type="email" class="validate" />
//                               <label for="email">Email</label>
//                           </div>
//                       </div>
//                       <div class="row">
//                           <div class="input-field col s12">
//                               <input
//                                   ref={password}
//                                   id="password" type="password" class="validate" />
//                               <label for="password">Password</label>
//                           </div>
//                       </div>

//                       <a href="#!" class="modal-close waves-effect waves-green btn-flat" >
//                           <button disabled={loading} class="waves-effect black lighten-4 btn-small"
//                               type='submit'>
//                               sign up
//                           </button>
//                       </a>
//                   </form>
//               </div>
//           </div>

//       </div>
  
//   </div>);
// }

// export default signup;
