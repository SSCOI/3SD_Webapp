import React, {Component}  from 'react';

import './Root.css';
import SvgLogo from './Icons/Logo';
import SvgLaptopTsd from './Icons/LaptopTsd'
import Logo from './components/LogoAnimation/Logo';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from  './components/Backdrop/Backdrop';

class Root extends Component {
  state = {
    sideDrawerOpen:false
  };

  drawerToggleClickHandler =() => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <SvgLaptopTsd className="TsdLogo__Mainpage"/>
        
      </div>
      

      
      
     
  
    );
  }
}
export default Root;
