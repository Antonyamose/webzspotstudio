
import React from "react";

import ViewGallery from "./ViewGallery";
import SelectFavourites from "./SelectFavourites";
import Clients from "./Clients";
import AccessBoard from "./AccessBoard";

const Client = ({ active }) => {
  return (
    <section>

      {active === "View Gallery" && <ViewGallery />}

      {active === "Select Favourites" && <SelectFavourites />}

      {active === "Clients" && <Clients />}

      {active === "Access Board" && <AccessBoard />}

    </section>
  );
};

export default Client;
