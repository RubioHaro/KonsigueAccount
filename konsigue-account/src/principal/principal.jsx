import React, { Component } from "react";
import Icon_Facturas from "../assets/img/apps_icons/FacturasKonsigue.png";
import Icon_Seguridad from "../assets/img/apps_icons/KonsigueSeguridad.png";
import Icon_Inversiones from "../assets/img/apps_icons/KonsigueInvierte.png";
import Icon_Pymes from "../assets/img/apps_icons/KonsiguePyMES.png";
import AppCard from "./components/konsigue-app-card";

class AppsMenu extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-3">
            <AppCard
              IconURL={Icon_Facturas}
              app_title="Facturas Konsigue"
              app_description="Administra todas tus factutas crowfounding aqui!"
            />
          </div>
          <div class="col-md-3">
            <AppCard
              IconURL={Icon_Inversiones}
              app_title="Inversiones Konsigue"
              app_description="Invierte y genera rendimientos!"
            />
          </div>
          <div class="col-md-3">
            <AppCard
              IconURL={Icon_Pymes}
              app_title="PyMES Konsigue"
              app_description=" Solicita y administra tus financiamientos."
            />
          </div>

          <div class="col-md-3">
            <AppCard
              IconURL={Icon_Seguridad}
              app_title="Seguridad Konsigue"
              app_description="Todo sobre tu cuenta y su seguridad"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AppsMenu;
