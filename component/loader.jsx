import React from 'react';

function loader() {
  return (<div> 
      <div id="loader" class="modal" style={{ width: '40rem', fontFamily: "poppins", padding: "3rem", display:'flex',justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
          {/* <div class="progress "style={{width:'30rem'}}>
              <div class="indeterminate"></div>
          </div> */}
          <div class="preloader-wrapper active">
              <div class="spinner-layer spinner-black-only">
                  <div class="circle-clipper left">
                      <div class="circle"></div>
                  </div><div class="gap-patch">
                      <div class="circle"></div>
                  </div><div class="circle-clipper right">
                      <div class="circle"></div>
                  </div>
              </div>
          </div>
          <br />
          <b>please wait a moment...</b>
      </div>
  </div>);
}

export default loader;
