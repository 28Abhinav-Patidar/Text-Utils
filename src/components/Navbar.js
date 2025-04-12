// import react from 'react';
import PropTypes from 'prop-types';
// import {a, Link} from 'react-router-dom'

export default function Navbar(props){
  const lightmode = () =>{
    let newmode = 'light';
    props.changemode(newmode);
    props.sendalert("success","Light mode is Enabled !");
  }
  const darkmode = () =>{
    let newmode = 'dark';
    props.changemode(newmode);
    props.sendalert("success","Dark mode is Enabled !");
  }
  const bluemode = () =>{
    let newmode = 'blue';
    props.changemode(newmode);
    props.sendalert("success","Blue mode is Enabled !");
  }
  const dangermode = () =>{
    let newmode = 'danger';
    props.changemode(newmode);
    props.sendalert("success","Danger mode is Enabled !");
  }
  const getnewMode = (mode) =>{
    switch(mode){
      case 'light' :return 'secondary';
      case 'dark' :return 'dark';
      case 'danger' :return 'danger';
      default :return 'info';
    }
  }
    return(
      <nav className={`navbar navbar-expand-lg navbar-${getnewMode(props.mode)}  bg-${getnewMode(props.mode)} `} >
      <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.Title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" to="/about">{props.About}</a>
        </li>
      </ul>
      <div className="btn-group">
          <button type="button" className={`btn btn-${getnewMode(props.mode)}`}>Select Mode</button>
          <button type="button" className={`btn btn-${getnewMode(props.mode)} dropdown-toggle dropdown-toggle-split`} data-bs-toggle="dropdown" aria-expanded="false"></button>
          <ul className={`dropdown-menu bg-${getnewMode(props.mode)}`}>
            <li><button className={`dropdown-item text-${props.mode === 'dark'?'light':'dark'} border border-1px solid dark bg-${getnewMode(props.mode)}`} onClick={lightmode} >Light Mode</button></li>
            <li><button className={`dropdown-item text-${props.mode === 'dark'?'light':'dark'} border border-1px solid dark bg-${getnewMode(props.mode)}`} onClick={darkmode} >Dark Mode</button></li>
            <li><button className={`dropdown-item text-${props.mode === 'dark'?'light':'dark'} border border-1px solid dark bg-${getnewMode(props.mode)}`} onClick={bluemode}>Blue Mode</button></li>
            <li><button className={`dropdown-item text-${props.mode === 'dark'?'light':'dark'} border border-1px solid dark bg-${getnewMode(props.mode)}`} onClick={dangermode} >Danger Mode</button></li>
          </ul>
      </div>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {
  Title: PropTypes.string,
  About : PropTypes.string
};

Navbar.defaultProps = {
  Title : 'set title here'

}
