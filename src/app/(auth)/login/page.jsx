"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/dashboard");
    return;
  }

  return (
    <div className='w-full bg-[url("/bg.jpg")] bg-cover min-h-screen flex items-center justify-center px-4'>
      <div className="bg-white/20 overflow-hidden pt-8 w-full md:w-[40%] rounded-lg backdrop-blur-md flex flex-col justify-between">
        <LoginForm />
        <div className="text-sm p-4 text-zinc-100 text-center flex flex-col gap-2 bg-gradient-to-tr from-red-600 to-orange-500">
          <p>Sorry, this page only for admin !! </p>
          <Link
            className="border-b text-xs border-zinc-100 w-fit mx-auto pb-1 hover:border-zinc-300 hover:text-zinc-300"
            passHref={true}
            href="/"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
