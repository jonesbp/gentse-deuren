import React from "react";

import HelmetWrapper from "./helmet-wrapper";

export default ({ children }) => (
  <>
    <HelmetWrapper />
    <header className="homepage">
      <h1>Gentse Deuren</h1>
    </header>
    
    <div className="homepage-wrapper">
      {children}
    </div>
  </>
);