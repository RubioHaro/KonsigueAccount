import React from "react";
import css from "./style.css";

class login extends React.Component {
  static propTypes = {};
  render = () => (
    <div  className="form-signin p-1 mt-5">
      <div class="card bg-light">
        <img
          className="bg-white border-bottom card-img-top img-fluid"
          src="https://gust-production.s3.amazonaws.com/uploads/startup/panoramic_image/676486/logo_20konsigue_2026-04.png"
          alt=""
          width="50"
          height="20"
        />
        <div class="card-body">
          <h3 class="card-title">Accede a tu cuenta</h3>
          <div class="card-text">
            <form _lpchecked="1">
              <label for="inputEmail" className="sr-only">
                Correo Electronico
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Correo Electronico"
                required=""
                autofocus=""
                autocomplete="off"
              />
              <label for="inputPassword" className="sr-only">
                Contraseña
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Contraseña"
                required=""
                autocomplete="off"
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="recordar contraseña" /> recordar
                  contraseña
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Acceder
              </button>
              <div className="mt-5 mb-3 text-muted">Konsigue ©2018</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
