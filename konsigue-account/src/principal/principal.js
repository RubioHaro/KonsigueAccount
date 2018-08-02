import React, { Component } from 'react';
import Icon_Facturas from '../assets/img/apps_icons/FacturasKonsigue.png';
import Icon_Seguridad from '../assets/img/apps_icons/KonsigueInvierte.png';
import Icon_Inversiones from '../assets/img/apps_icons/KonsiguePyMES.png';
import Icon_Pymes from '../assets/img/apps_icons/KonsigueSeguridad.png';

class AppsMenu extends Component {
  render() {
    return (
      <div className="App">
        <div class="row">
            <div class="col-md-6">
                <img src={Icon_Facturas} alt="logo" />
                <img src={Icon_Seguridad} alt="logo" />
            </div>
            <div class="col-md-6">
                <img src={Icon_Inversiones} alt="logo" />
                <img src={Icon_Pymes} alt="logo" />  
            </div>
        </div>
      </div>
    );
  }
}

export default AppsMenu;
