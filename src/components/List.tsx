import React from "react";
import {
  IconSofa,
  IconHome,
  IconBuilding,
  IconPlane,
  IconSpeedboat,
  IconMotorbike,
  IconBuildingBank,
  IconBeach,
} from "@tabler/icons-react";

const items = [
  {
    Name: "Furniture",
    icon: IconSofa,
  },
  {
    Name: "Property",
    icon: IconHome,
  },
  {
    Name: "Job",
    icon: IconBuilding,
  },
  {
    Name: "Travel",
    icon: IconPlane,
  },
  {
    Name: "Boat",
    icon: IconSpeedboat,
  },
  {
    Name: "MC",
    icon: IconMotorbike,
  },
  {
    Name: "Economy",
    icon: IconBuildingBank,
  },
  {
    Name: "Holiday",
    icon: IconBeach,
  },
];

let colors = [
  "bg-green-100",
  "bg-blue-100",
  "bg-pink-100",
  "bg-red-100",
  "bg-gray-100",
];

function List() {
  return (
    <div className="flex items-center justify-between flex-wrap">
      {items.map((item, i) => (
        <div
          key={i}
          className={`w-[120px] ${
            colors[i % colors.length]
          } p-5 rounded flex flex-col items-center justify-around mb-4 cursor-pointer`}
        >
          {React.createElement(item.icon)}
          <span>{item.Name}</span>
        </div>
      ))}
    </div>
  );
}
export default List;
