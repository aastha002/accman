import React, { useState } from "react";
import clsx from "clsx";

const InstitutionCard = ({
  title,
  description,
  moreText,
  image,
  courses,
  link,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={clsx(
        "relative border-2 rounded-xl shadow-lg p-6 bg-white transition-all duration-300",
        hovered ? "scale-[1.02] border-red-500" : "scale-100"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <img src={image} alt={title} className="h-20 mb-4" />
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-1 text-gray-600">{courses}</p>

        {/* Show extra text on hover */}
        <div
          className={clsx(
            "mt-2 text-sm text-gray-700 transition-opacity duration-300",
            hovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          )}
        >
          {moreText}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition"
        >
          Visit Website →
        </a>
      </div>
    </div>
  );
};

export default InstitutionCard;
