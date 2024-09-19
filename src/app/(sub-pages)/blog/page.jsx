import React from "react";

const page = () => {
  return (
    <section>
      <div className="relative h-55vh">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/checkout1.jpg')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">
            <span>Blog Standard</span>
          </h1>
          <h2 className="text-lg tracking-wide flex gap-0">
            Home - Blog Standard
          </h2>
        </div>
      </div>
    </section>
  );
};

export default page;
