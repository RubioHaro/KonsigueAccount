import React, { Component } from "react";
import Icon_Facturas from "../assets/img/apps_icons/FacturasKonsigue.png";
import Icon_Seguridad from "../assets/img/apps_icons/KonsigueSeguridad.png";
import Icon_Inversiones from "../assets/img/apps_icons/KonsigueInvierte.png";
import Icon_Pymes from "../assets/img/apps_icons/KonsiguePyMES.png";
import AppCard from "./components/konsigue-app-card";
import Header from "./components/header";

class AppsMenu extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="p-3">
          <div className="card-deck">
            <AppCard
              IconURL={Icon_Facturas}
              app_title="Facturas Konsigue"
              app_description="Administra todas tus facturas crowfounding aqui!"
              btn_title="Administrar Facturas"
            />

            <AppCard
              IconURL={Icon_Inversiones}
              app_title="Inversiones Konsigue"
              app_description="Invierte y genera rendimientos!"
              btn_title="Invertir Ahora"
            />

            <AppCard
              IconURL={Icon_Pymes}
              app_title="PyMES Konsigue"
              app_description=" Solicita y administra tus financiamientos."
              btn_title="Solicitar credito"
            />

            <AppCard
              IconURL={Icon_Seguridad}
              app_title="Seguridad Konsigue"
              app_description="Todo sobre tu cuenta y su seguridad"
              btn_title="Revisar seguridad"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AppsMenu;
