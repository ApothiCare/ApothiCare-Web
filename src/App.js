import React, { Component } from 'react';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from "@fortawesome/free-solid-svg-icons";

//import logo from './logo.svg';
import './App.css';
import TopNavbar from "./top-navbar";

//use Json formatted files
 // Each json element is defined by its activity, users and fonctionalities are secondary
//define default colors for each nth array inside an array (2nd user would be red for example)

export const ROUTER_PATHS = {
    Home : "/home",
    FAQ : "/FAQ",
    Blog : "/blog"
};

class App extends Component {


  //endregion

  render() {
    return (
      <div className="App">

        <TopNavbar/>

        <div className={"header"}>
          <div className={"header-content"}>
            <div className={"header-content-title"}>
              Simplifiez la gestion de vos médicaments<br/>
            </div>
            <div
                className={"header-content-subtitle"}>
              ApothiCare, une solution innovante permettant aux particuliers de gérer de de façon numérique leurs medicaments
            </div>
            <div className={"header-content-button"}>En apprendre plus</div>
          </div>
        </div>

        <div className={"content"}>
          <div className={"content-title"}>Notre solution</div>
          <div className={"content-subtitle"}>Une application mobile de gestion de vos médicaments.</div>
          <div className={"content-content-grid"}>
            <div className={"card"}>
              <img className={"void"}></img>
              <div className={"text-card"}>
                <div className={"text-card-title"}>
                  GESTION
                </div>
                <div className={"text-card-subtitle"}>
                  Gérez votre stock de médicaments et vos traitements !
                </div>
                <div className={"text-card-content"}>Scannez le QR code de votre boite de médicament pour obtenir toutes les informations disponibles !
                  Il est automatiquement ajouté à l'application pour vous informer en cas de péremption ou de retrait de lot.</div>
              </div>
            </div>
            <div className={"card"}>
              <div className={"text-card"}>
                <div className={"text-card-title"}>
                  RAPPEL
                </div>
                <div className={"text-card-subtitle"}>
                  N'oubliez plus de prendre vos médicaments !
                </div>
                <div className={"text-card-content"}>
                  Vous pouvez mettre en place des alarmes personnalisées et vous êtes automatiquement prévenu lorsque votre stock est faible.
                </div>
              </div>
              <img className={"void"}></img>
            </div>
            <div className={"card"}>
              <img className={"void"}></img>
              <div className={"text-card second"}>
                <div className={"text-card-title"}>
                  Loi CIP13 du 9/02/19
                </div>
                <div className={"text-card-subtitle"}>
                  Parlez de notre service à vos pharmaciens !
                </div>
                <div className={"text-card-content"}>
                  Les pharmaciens devront scanner le code CIP13 de leurs médicaments pour confirmer leur authenticité à compter du 9 février 2019, et nous cherchons à nous associer au plus de pharmaciens possible afin de vous fournir le meilleur service possible.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"footer"}>
          <div className={"content-title"}>Nous contacter</div>
          <div className={"content-subtitle"}>Vous êtes intéressés ou souhaitez plus d'informations sur notre solution ? Envoyez nous un mail !</div>
        </div>
        {/*<div className={"utilisateurs"}>
        </div>
        <div className={"users_1"}>
          <div>lel</div>

          <div>lel</div>

        </div>

        <div className={"activités"}>
        </div>
        <div className={"fonctionnalités"}>
        </div>*/}
      </div>
    );
  }
}

export default App;
