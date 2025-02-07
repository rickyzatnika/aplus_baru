"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!username || !password) {
      return toast.error("Username and password is required!");
    }
    try {

      const res = await signIn("credentials", {
        username: username,
        password: password,
        redirect: false,
      });
      if (res.ok) {
        setLoading(false);
        router.push("/dashboard");
      } else {
        toast.error("Invalid Credentials");
        setLoading(false);
      }
      return;
    } catch (error) {
      setLoading(false);
      return toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col p-8 pt-16 md:p-14 gap-4 w-full"
    >
      <input
        type="text"
        placeholder="username"
        name="username"
        className="py-3 px-4 rounded  border-none outline-none bg-white-200/80 placeholder:text-zinc-500"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="py-3 px-4 rounded  border-none outline-none bg-white-200/80 placeholder:text-zinc-500"
      />
      <button
        disabled={loading ? true : false}
        className="text-zinc-50 bg-gradient-to-tr from-red-600 rounded to-orange-500 py-2 hover:text-zinc-100 hover:bg-red-500"
      >
        {loading ? (
          <div className="flex gap-2 items-center justify-center">
            <span>logging in..</span>
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        ) : (
          <span>Login</span>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
