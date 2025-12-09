"use client";
import Button from "@/shared/ui/Button";
import { FormEvent } from "react";
import Title from "./components/Title";
import { API_URL } from "@/shared/config/env";

const page = () => {
  const actionSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    const result = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ email, password }),
      credentials: "include", // <--- asta e cheia
    });
    await result.json();
  };
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] ">
      <Title />
      <form
        onSubmit={(e) => actionSubmit(e)}
        className="flex flex-col gap-2 w-full max-w-[260px]"
      >
        <div className="form flex flex-col justify-center gap-2 ">
          <div className="form_label flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="bg-(--color-bg-section) p-2 rounded-lg"
            />
          </div>
          <div className="form_label flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="bg-(--color-bg-section) p-2 rounded-lg"
            />
          </div>
        </div>
        <Button variant="primary" className="  mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default page;
