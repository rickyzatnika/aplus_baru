"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { toast } from "react-toastify";

const RegisterForm = () => {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {

    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const passwordRepeat = e.target[3].value;

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          passwordRepeat,
        })
      })



      if (password !== passwordRepeat) {
        setLoading(false);
        const errorData = await res.json();
        return toast.error(errorData.message);
      }

      if (res.status === 201) {

        const timeoutId = setTimeout(() => {
          setLoading(false);
          e.target.reset();
          toast.success("Your registered now");

          router.push("/login");
        }, 3000);

        return () => clearTimeout(timeoutId);
      } else {
        const errorData = await res.json();
        toast.error(errorData.message);
        setLoading(false);
      }

    } catch (error) {
      setLoading(false);
      return toast.error(error.message);

    }

  }



  return (
    <form className="flex flex-col p-8 pt-16 md:p-14 gap-4 w-full" onSubmit={handleRegister}>
      <input required type="text" placeholder="username" name="username" className="py-3 px-4 rounded  border-none outline-none bg-white-200/80 placeholder:text-zinc-500" />
      <input required type="email" placeholder="email" name="email" className="py-3 px-4 rounded  border-none outline-none bg-white-200/80 placeholder:text-zinc-500" />
      <input required type="password" placeholder="password" name="password" className="py-3 px-4 rounded  border-none outline-none bg-white-200/80 placeholder:text-zinc-500" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        className="py-3 px-4 rounded  border-none outline-none bg-white-200/80 placeholder:text-zinc-500"
      />
      <button disable={loading ? true : false} type="submit" className="text-zinc-50 bg-gradient-to-tr from-red-600 rounded to-orange-500 py-2 hover:text-zinc-100 hover:bg-red-500">
        {loading ? 
        <div className="flex gap-2 items-center justify-center">
          <span>please wait..</span>
          <span className="loading loading-spinner loading-sm"></span>
        </div> : <span>Register</span>}
      </button>

      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;