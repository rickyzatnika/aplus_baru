"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const links = [
  {
    id: "1",
    title: "Event",
    url: "/dashboard/events",
  },
  {
    id: "2",
    title: "Production",
    url: "/dashboard/production",
  },
  {
    id: "3",
    title: "Branding",
    url: "/dashboard/branding",
  },
];

const NavDashboard = () => {
  const { data: session, status } = useSession();

  const router = useRouter();



  useEffect(() => {
    return;
  }, [session, router, status]);

  return (
    <>
      <div className="col-span-1 lg:col-span-2 flex flex-col items-start gap-8 w-full h-full  bg-red-600 text-zinc-100 px-4 pt-24 ">

        <div className="w-full flex flex-col gap-4">
          <h1 className="text-gray-50">Action</h1>
          <div className="flex flex-col gap-4 px-4 text-gray-200">
            {links?.map((link, i) => (
              <Link key={i} href={link?.url}>
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => signOut({ redirect: false }, router.push("/login"))}>Logout</button>
      </div>
    </>
  );
};

export default NavDashboard;
