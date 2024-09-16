import React, { Fragment } from "react";
function Timeline({ features }) {
  return (
    <div className="relative flex flex-col gap-y-3 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-8">
      <Bubbles />
      <Circle />
      {features.map((event, key) => {
        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] mx-auto items-center gap-x-6">
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
    </div>
  );
}

const Bubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-20 animate-float"
          style={{
            width: `${Math.random() * 50 + 10}px`,
            height: `${Math.random() * 50 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

const Circle = () => {
  return (
    <div className="relative rounded-full bg-gradient-to-r from-yellow-300 to-orange-500 w-8 h-8 mx-auto shadow-lg">
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-transparent opacity-50"></div>
    </div>
  );
};

const Pillar = () => {
  return (
    <div className="relative rounded-full w-2 h-full mx-auto bg-gradient-to-b from-yellow-300 to-orange-500 shadow-lg">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-50"></div>
    </div>
  );
};

const Featurecard = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl gap-y-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-white">
      <div className="font-bold text-xl bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
        {heading}
      </div>
      <div className="text-sm">{subheading}</div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 to-white/20 opacity-50"></div>
    </div>
  );
};

export default Timeline;
