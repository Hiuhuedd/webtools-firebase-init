import  Carousel  from './carousel';
import { useState, useEffect, useRef } from 'react' 

import Loader from './loader'; 
import Alert from './alert'; 
// import SignUp from './signup'
function landingPage() {
   const [isalert, setisalert] = useState(false);
   const [issuccess, setissuccess] = useState(false);
//     const {error,isLoading,Calls,success}=useAuth()
// console.log(Calls);
    
//     useEffect(() => {
//       error!==null&&setisalert(true)
//     },[error]);
//     useEffect(() => {
//       success!==null&&setissuccess(true)
//     },[success]);

//     useEffect(() => {
//       error!==null&&setisalert(true)
//       success!==null&&setissuccess(true)
//     },[Calls]);
    
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const M = require('materialize-css')
  //   }
  //   var elems = document.querySelectorAll('.tooltipped');
  //   M.Tooltip.init(elems);
  //   var modals = document.querySelectorAll('.modal');
  //   M.Modal.init(modals)

  // }, []); 
  // setTimeout(() => {
  //   setissuccess(false)
  // }, 4000);
  return (<div> 
    {/* <SignUp /> */}
    {/* {isLoading && <Loader />} 
    {isalert && <Alert error={error} handleClose={()=>setisalert(false)}/>} 
    {issuccess && <Alert success={success}/>}  */}
      <div className="row" style={{ padding: "0 6rem" }}>
<div className="col s6">
        <h2 style={{ fontFamily:'poppins',fontWeight:'600',fontSize:'2.7rem' }}> Contribute to web technology and earn cash-redeemable web tokens</h2>
        <p style={{ fontFamily: 'poppins'}}>
          Share your thoughts, ideas or imaginations of an app|software that can solve a particular problem that you have experienced directly or indirectly and stand a chance to earn up to <b>$100</b> & aquire the inventor tag for the app. </p>
        <a style={{ fontFamily: 'poppins', fontSize: '.9rem', textTransform: 'lowercase', marginRight: '2rem' }} class="waves-effect  pulse grey darken-2 btn-large">learn more</a>
        <a style={{ fontFamily: 'poppins', fontSize: '.9rem', textTransform: 'lowercase', marginRight: '2rem' }} data-target="modal1" class="modal-trigger waves-effect black lighten-4 btn-large">get started</a>
</div>
<div className="col s5">
    <img src="/webtools1.png" alt="" width={550} />
</div>
      </div>
      <Carousel/>
  </div>);
}

export default landingPage;
