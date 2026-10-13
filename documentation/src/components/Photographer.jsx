
import React from "react";

import CreateStudio from "./CreateStudio";
import UploadPhotos from "./UploadPhotos";
import EventGallery from "./EventGallery";

const Photographer = ({ active }) => {
  return (
    <section>

      {active === "Create Studio" && <CreateStudio />}

      {active === "Upload Photos" && <UploadPhotos />}

      {active === "Event Gallery" && <EventGallery />}

    </section>
  );
};

export default Photographer;
