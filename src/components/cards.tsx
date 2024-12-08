import React from "react";
import Image from 'next/image';

const Cards = () => {
  return (
    <section className="py-8">
      {/* Add your image here */}
      <div className="flex justify-center">
        <Image
          src="/cards.png.png" // Replace with your image path
          alt="New Collection"
          className="w-full max-w-4xl rounded-lg shadow-md"
          width={600}  // Specify the width of the image
          height={400} // Specify the height of the image
        />
      </div>
    </section>
  );
};

export default Cards;

