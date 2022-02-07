import React from 'react';

function footer() {
  return (<div>
      <footer class="page-footer white">
          <div class="containernm white" 
          style={{
                  padding: "0  7rem ",
              }}>
              <div class="row">
                  <div class="col l6 s12">
                      <h5 class="brand-logo blue-grey-text text-darken-4"
                          style={{ fontFamily: "Kalam", paddingBottom: "1rem" }}>Webtools</h5>
                      <p class="blue-grey-text text-darken-4">Contribute to web technology and earn cash-redeemable web tokens 
                      <br /> become part of the solution.



            
                    </p>
                  </div>
                  <div class="col l4 offset-l2 s12">
                      <h5 class="white-text">Links</h5>
                      <ul>
                          <li><a class="blue-grey-text text-darken-3" href="#!">Features</a></li>
                          <li><a class="blue-grey-text text-darken-3" href="#!">Contact</a></li>
                          <li><a class="blue-grey-text text-darken-3" href="#!">Sign in</a></li>
                          <li><a class="blue-grey-text text-darken-3" href="#!">Help</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="footer-copyright">
              <div class="containe 
              blue-grey-text text-darken-3" 
                  style={{
                      padding: "0  7rem ",
                  }}>
                  © 2014 Copyright Text
                  <a class="blue-grey-text text-darken-3" href="#!">More Links</a>
              </div>
          </div>
      </footer>

  </div>);
}

export default footer;
