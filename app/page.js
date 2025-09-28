"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    return router.push("/text-to-image");
  }, []);

  return <div className="">home</div>;
};

export default Home;
