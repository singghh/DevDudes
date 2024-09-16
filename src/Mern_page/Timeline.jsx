import React, { Fragment } from "react";
function Timeline({ features }) {
  return (
    <div className="flex flex-col gap-y-3 w-full bg-gradient-to-r from-teal-700 to-cyan-100">
      <br />
      <Circle />
      {features.map((event, key) => {
        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] mx-auto items-center gap-x-3 ">
              {event.direction === "left" ? (
                <Featurecard
                  heading={event.heading}
                  subheading={event.subheading}
                />
              ) : (
                <div></div>
              )}
              <Pillar />
              {event.direction === "right" ? (
                <Featurecard
                  heading={event.heading}
                  subheading={event.subheading}
                />
              ) : (
                <div></div>
              )}
            </div>
            {key < features.length - 1 && <Circle />}
          </Fragment>
        );
      })}
      <Circle />
      <br />
    </div>
  );
}

const Circle = () => {
  return (
    <div className="rounded-full bg-gradient-to-r from-sky-950 to-cyan-400 w-5 h-5 mx-auto bg-blue-500"></div>
  );
};

const Pillar = () => {
  return (
    <div className="rounded-t-full bg-gradient-to-r from-neutral-900 to-cyan-400 rounded-b-full w-2 h-full mx-auto bg-blue-500"></div>
  );
};

const Featurecard = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col transition duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-1 gap-y-2 rounded-xl border shadow-md p-4">
      <div className="font-semibold text-lg ">{heading}</div>
      <div className=" text-sm">{subheading}</div>
    </div>
  );
};

export default Timeline;
