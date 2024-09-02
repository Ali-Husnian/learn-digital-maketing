"use client";
import { useState, useEffect } from "react";

const page = ({
  heading = "Next Full Stack Digital Marketing Training Batch is Starting From",
}) => {
  const [nextBatchDate, setNextBatchDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const nextBatchDate = new Date(today.getFullYear(), today.getMonth(), 21);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = nextBatchDate.toLocaleDateString("en-US", options);

    setNextBatchDate(formattedDate);
  }, []);

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      {heading} {nextBatchDate}
    </h2>
  );
};

export default page;
