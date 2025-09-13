import React from 'react';

export default function Navbar({ role }) {
  return (
    <nav>
      <span>Campuspro</span>
      <span style={{float: 'right'}}>{role}</span>
    </nav>
  );
}
