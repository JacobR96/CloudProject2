"use client";
import createRq from "./Functions/createRq";

export default function Home() {
  const list = [
    "Grab the baby",
    "Help Get to the restroom",
    "Shut the dogs up",
  ];

  const handleClick = async (requestType) => {
    try {
      await createRq(requestType);
      console.log("Request sent:", requestType);
    } catch (err) {
      console.error("Error creating request:", err);
    }
  };

  return (
    <>
      <h3 className="text-center p-6 text-2xl">Cindarelle</h3>

      <div className="flex flex-col gap-4 p-4">
        {list.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item)}
            className="bg-blue-500 text-white p-4 rounded-xl shadow-md hover:bg-blue-600 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
