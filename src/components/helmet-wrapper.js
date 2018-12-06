import React from "react";

import Helmet from "react-helmet";

export default (props) => (
  <Helmet
    defaultTitle="Gentse Deuren"
    titleTemplate={'%s – Gentse Deuren'}
  >
    <html lang="en" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  </Helmet>
);