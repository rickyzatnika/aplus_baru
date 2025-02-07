"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const links = [
  {
    id: "1",
    title: "Add Event",
    url: "/dashboard/events",
  },
  {
    id: "2",
    title: "Add Production",
    url: "/dashboard/production",
  },
  {
    id: "3",
    title: "Add Branding",
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
      <div className="col-span-1 lg:col-span-2 flex flex-col items-start gap-8 w-full h-full md:min-h-screen bg-red-600 text-zinc-100 px-4 pb-14 pt-32 lg:pt-44">
        {links?.map((link, i) => (
          <Link key={i} href={link?.url}>
            {link?.title}
          </Link>
        ))}
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </>
  );
};

export default NavDashboard;
