import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';

function Header(props) {
  return (
    <div className='hero'>
      <div>HELLO {props.name}</div>
      <div className='hero gatsby-image-wrapper'>
        <Img resolutions={props.resolutions} />
      </div>
    </div>

  )
}

export default Header;