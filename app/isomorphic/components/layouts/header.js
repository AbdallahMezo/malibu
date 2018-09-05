import React from "react";
import "./header.m.css";
import format from 'date-fns/format';
import { Icon } from "../icon";

let MultiLanguages = props => {
  return <div>
      <ul styleName="HeaderLaguage">
        {props.externalLinks.map(link => {
          return <li styleName="HeaderLaguageList" key={link.heading}><a href="#" styleName="LaguageFont">{link.heading}</a></li>
        })}
      </ul>
  </div>
}
let Sociallogo = props => {
  return <div styleName="SocialLogoRight">
        {props.socialLinks.map(socialLogo => {
           return <Icon iconType = {socialLogo.type} key = {socialLogo.type} />;
        })}
    </div>
}

let Datecomponent = () => {
  return <span styleName="Date">{format(new Date(),"ddd MMM DD,YYYY")}</span>
}
let HeaderWrapper = props => {
  return <div styleName="Wrapper">
        <Datecomponent />
        <MultiLanguages externalLinks={props.menu.externalLinks}/>
        <Sociallogo socialLinks={props.menu.socialLinks}/>
    </div>
}

let HeaderLogo = props => {
  return <img src={props.logo.url} alt={props.logo.heading} styleName="Logo"/>
}

let Header = props => {
  return (
    <div styleName="Header">
      <div styleName="TopHeader">
        <div className="container">
          <HeaderWrapper menu={props.menu} />
        </div>
      </div>
      <div className="container">
        <HeaderLogo logo = {props.logo} />
      </div>
    </div>
  )
}

export { Header };