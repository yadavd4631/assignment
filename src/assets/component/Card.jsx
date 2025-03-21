import React from "react";

const data = [
  {
    image: "boy1.png",
    name: "Skylar",
    product: "Splunk",
    degree: "Master",
    experience: "6 months old",
  },
  {
    image: "girl1.png",
    name: "Luna",
    product: "CloudWatch",
    degree: "Intermediate",
    experience: "30 days old",
  },
  {
    image: "girl2.png",
    name: "Aria",
    product: "Datadog",
    degree: "Expert",
    experience: "3 months old",
  },
  {
    image: "boy2.png",
    name: "Nova",
    product: "NewRelic",
    degree: "Novice",
    experience: "1 day old",
  },
];

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 ">
      {data.map((person, index) => (
        <div
          key={index}
          className="bg-white shadow-2xl rounded-2xl p-6 w-72  -mt-20 text-center border-8 border-[#F6F6F6] hover:shadow-xl transition-all "
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-24 h-24 mx-auto rounded-full border border-gray-200 bg-gray-200"
          />
          <h2 className="text-xl text-gradient font-bold mt-4 text-gray-800">
            {person.name}
          </h2>
          <p className="bg-[#6681E2] text-white font-semibold px-4 py-1 rounded-full inline-block mt-2">
            Product: {person.product}
          </p>
          <div className="flex justify-center items-center gap-3 mt-3 text-black text-sm font-medium ">
            <span className="border border-gray-300 px-3 py-1 bg-[#f6f7f9] rounded-full">
              {person.degree}
            </span>
            <span className="border border-gray-300  bg-[#f6f7f9] rounded-full p-2 ">
              {person.experience}
            </span>
          </div>
          <button className="text-gradient mt-4 hover:underline text-sm font-semibold cursor-pointer  ">
            View Details →
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
