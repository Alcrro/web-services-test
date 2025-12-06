"use client";
import Button from "@/shared/ui/Button";
import { FormEvent } from "react";
import Title from "../login/components/Title";

const API = process.env.NEXT_PUBLIC_API!;
const page = () => {
  const actionSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    await fetch(`${API}/api/auth/sign-up`, {
      method: "POST",
      headers: { "Contend-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
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
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="bg-(--color-bg-section) p-2 rounded-lg"
            />
          </div>{" "}
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
