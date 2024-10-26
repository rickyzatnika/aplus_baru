"use client";

import React, { useEffect } from "react";

import useSWR from "swr";

const GetContactPage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data } = useSWR("/api/contact", fetcher);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className="w-full">
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default GetContactPage;
