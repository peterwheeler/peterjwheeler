import React from 'react';
import { Link } from "react-router";
import { push as Menu } from 'react-burger-menu';
import Radium from 'radium';

const RadiumLink = Radium(Link);

export default class MenuComponent extends React.Component {
   render() {
    return (
      <div id="outer-container">
      	<Menu outerContainerId={'outer-container'} pageWrapId={'page-wrap'} width={300} noOverlay left>
              	 <h1><RadiumLink path="home">Literatim</RadiumLink></h1>
          	     <RadiumLink className="menu-item" path="about">About</RadiumLink>
          	     <RadiumLink className="menu-item" path="projects">Projects</RadiumLink>
          	     <RadiumLink className="menu-item" path="coder">Coder</RadiumLink>
        </Menu>
      </div>
    );
  }
}