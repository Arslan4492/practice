import React from "react";

const arr = [
  { id: 1, src: "/images/first.jpg" },
  { id: 2, src: "/images/second.jpg" },
  { id: 3, src: "/images/third.jpg" },
  { id: 4, src: "/images/first.jpg" },
  { id: 5, src: "/images/second.jpg" },
  { id: 6, src: "/images/third.jpg" },
];

const Picture = () => {
  return (
    <div className="grid grid-cols-4 gap-3 p-3">
      {arr.map((image) => (
        <img key={image.id} alt="" className="w-48 h-48" src={image.src} />
      ))}
    </div>
  );
};

export default Picture;
