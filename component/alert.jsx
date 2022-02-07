
function alert(props) {
  
    return (<div>
        <div id="loader" class="modal" style={{ width: '40rem', fontFamily: "poppins", padding: "3rem", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {props.success && (
                <>
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
            <br />
            <b>Redirecting</b>
                </>)

            } 
            {props.error && <i class="material-icons blue-grey-text text-darken-4">report_problem</i>}
         <b>{props.error}</b>
         <b>{props.success}</b>
            <br />
            {props.error&&<a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={(e)=>{props.handleClose(e)}} >
                <button class="waves-effect black lighten-4 btn-small">
                    try again
                   
                </button>
            </a>}
        </div>
    </div>);
}

export default alert;