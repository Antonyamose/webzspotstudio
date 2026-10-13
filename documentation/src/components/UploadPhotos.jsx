
import React, { useEffect, useRef } from "react";
import s3 from "../assets/s3.png";
import v2 from "../assets/v2.mp4";

const UploadPhotos = () => {

  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      photos: "15 Photos",
      validity: "14 Days",
    },
    {
      name: "Basic Plan",
      price: "₹499",
      photos: "15,000 Photos",
      validity: "50 Days",
    },
    {
      name: "Premium Plan",
      price: "₹1,000",
      photos: "5,000 Photos",
      validity: "28 Days",
    },
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  // ORANGE CIRCULAR NUMBER
  const StepNumber = ({ number }) => (
    <span className="w-9 h-9 shrink-0 rounded-full bg-orange-100 text-orange-600 font-semibold flex items-center justify-center">
      {number}
    </span>
  );

  return (
    <section>

      {/* HEADING */}
      <h1 className="text-4xl font-bold mb-4">
        Upload Photos
      </h1>

      <p className="text-gray-500 mb-10">
        Upload and organize photographs from your events.
      </p>

      <h2 className="text-xl font-semibold mb-4">
        How to Upload Photos
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Photographers can upload captured photographs
        into their event galleries, allowing clients
        to access the images in one organized location.
      </p>

      {/* DASHBOARD */}
      <h2 className="text-3xl font-semibold mb-6">
        Dashboard
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        This is the Dashboard view for a photographer,
        where they can access the event gallery,
        client details, and clients' favourite photos.
      </p>

      <img
        src={s3}
        alt="Webzspot Studio Photographer Dashboard"
        className="w-full rounded-xl mb-10"
      />

      {/* PHOTO UPLOAD */}
      <div>

        <h2 className="text-3xl font-semibold mb-6">
          Photo Upload
        </h2>

        <ol className="space-y-6 text-gray-700 leading-relaxed">

          {/* STEP 1 */}
          <li className="flex items-start gap-4">
            <StepNumber number={1} />

            <p className="flex-1 min-w-0 pt-1">
              After successfully creating an event,
              navigate to the Dashboard to manage your
              event details and photographs.
            </p>
          </li>

          {/* STEP 2 */}
          <li className="flex items-start gap-4">
            <StepNumber number={2} />

            <p className="flex-1 min-w-0 pt-1">
              Inside the dashboard, you will find three
              main sections:{" "}
              <strong>Photos, Clients, and Favourites.</strong>{" "}
              Select the Photos section to begin uploading
              your event photographs.
            </p>
          </li>

          {/* STEP 3 */}
          <li className="flex items-start gap-4">
            <StepNumber number={3} />

            <div className="flex-1 min-w-0 pt-1">
              <p>
                You can upload photographs using either
                of the following methods:
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2">

                <li>
                  <strong>Browse Files:</strong> Click the
                  upload area to browse and select photos
                  from your device.
                </li>

                <li>
                  <strong>Drag and Drop:</strong> Drag photos
                  directly from your device and drop them
                  into the designated upload area.
                </li>

              </ul>
            </div>
          </li>

          {/* STEP 4 */}
          <li className="flex items-start gap-4">
            <StepNumber number={4} />

            <div className="flex-1 min-w-0 pt-1">

              <p>
                Webzspot Studio offers different subscription
                plans based on your photo upload requirements.
                Choose a plan according to the number of
                photographs you want to upload and the
                subscription validity.
              </p>

              {/* SUBSCRIPTION TABLE */}
              <div className="mt-6 mb-3 w-full overflow-x-auto rounded-xl border border-gray-200">

                <table className="w-full min-w-[480px] text-left text-sm">

                  <thead className="bg-[#111827] text-white">
                    <tr>
                      <th className="px-5 py-4 font-semibold">
                        Plan
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Price
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Photo Limit
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Validity
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">

                    {plans.map((plan, index) => (
                      <tr
                        key={index}
                        className="hover:bg-orange-50 transition-colors"
                      >

                        <td className="px-5 py-4 font-medium text-gray-900">
                          {plan.name}
                        </td>

                        <td className="px-5 py-4 font-semibold text-orange-600">
                          {plan.price}
                        </td>

                        <td className="px-5 py-4">
                          {plan.photos}
                        </td>

                        <td className="px-5 py-4">
                          {plan.validity}
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>
          </li>

          {/* STEP 5 */}
          <li className="flex items-start gap-4">
            <StepNumber number={5} />

            <p className="flex-1 min-w-0 pt-1">
              After selecting your photographs, proceed
              with the upload process. Make sure the
              number of photos does not exceed the
              upload limit provided by your subscription
              plan.
            </p>
          </li>

          {/* STEP 6 */}
          <li className="flex items-start gap-4">
            <StepNumber number={6} />

            <p className="flex-1 min-w-0 pt-1">
              Once the upload is complete, your photographs
              will be available in the{" "}
              <strong>Photos</strong> section.
              You can view and manage the uploaded images
              for further processing and client access.
            </p>
          </li>

        </ol>



        {/* TUTORIAL VIDEO */}
        <div className="mt-6 w-full aspect-video overflow-hidden rounded-xl bg-black">
          <video
            ref={videoRef}
            src={v2}
            controls
            muted
            playsInline
            loop
            preload="metadata"
            className="block h-full w-full object-contain"
          />
        </div>



      </div>

    </section>
  );
};

export default UploadPhotos;
