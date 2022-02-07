import { useState, useEffect, useRef } from 'react' 
import SignUp from './signup'
import Login from './login'
import Router from 'next/router'
function Navbar() {    
      useEffect(() => {
        if(typeof window!=='undefined'){
            const M =require('materialize-css')
        }
          var elems = document.querySelectorAll('.tooltipped');
          M.Tooltip.init(elems);  
          var modals = document.querySelectorAll('.modal');
          M.Modal.init(modals)
       
    }, []); 
  return (
      <div> 
       {/* <SignUp/>
       <Login /> */}
      
          <nav
              class=" z-depth-0 white"
              style={{
                  borderBottom: "1px #f5f5f5 solid",
                  padding: "0  7rem ",
              }}
          >
              <div class="nav-wrapper white " style={{}}>
                  <a
                      href="#!"
                      class="brand-logo blue-grey-text text-darken-4"
                      style={{ fontFamily: "Kalam", paddingBottom: "1rem" }}
                  >
                      WebTools
                  </a>
                  <ul
                      id="nav-mobile"
                      class="right "
                      style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "25%",
                      }}
                  >
                      <li>
                          <a 
                              data-target="modal2" class="btn pulse black tooltipped modal-trigger" data-position="bottom" data-tooltip="Add submission">
                              <i class="material-icons">add</i>
                          </a>
                      </li>
                      <li>
                          <a href="/login"
                        //  onClick={()=>Router.replace('/auth')}
                            //   href="" data-target="modal2"
                              class=" blue-grey-text text-darken-4 
                              modal-trigger"
                              style={{
                                  fontFamily: "poppins",
                                  cursor: "pointer",
                                  "&hover": { color: "blue" },
                              }}
                          >
                              Login
                          </a>
                      </li>
                      <li>
                          <a 
                          onClick={()=>Router.replace('/login')}
                          data-target="modal1"
                              href="/auth"
                              class=" blue-grey-text text-darken-4 
                              modal-trigger"
                              style={{
                                  fontFamily: "poppins",
                                  cursor: "pointer",
                                  "&hover": { color: "purple" },
                              }}
                          >
                              Sign up
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>
  </div>)
}

export default Navbar;
