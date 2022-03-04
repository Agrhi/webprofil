import React from 'react'
import { NavLink } from 'react-bootstrap';
const Link = ({ name, linkTo }) => (
    <NavLink href={linkTo}>
      {name}
    </NavLink>
  );

  export default Link