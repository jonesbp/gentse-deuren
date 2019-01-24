import React from "react";

import HelmetWrapper from "./helmet-wrapper";
import FooterScripts from "./footer-scripts";

export default ({ children }) => (
  <>
    <HelmetWrapper />
    <header className="general">
      <h1>Gentse Deuren</h1>
    </header>
    
    <div className="page-wrapper">
      {children}
    </div>

    <FooterScripts />
  </>
);