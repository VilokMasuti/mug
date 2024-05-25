/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Form = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation check
    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    emailjs
      .send(
        "service_q1shqjq",
        "template_jc68k0f",
        {
          from_name: form.name,
          to_name: "vilok",
          from_email: form.email,
          to_email: "shubhammasuti0@gmail.com",
          message: form.message,
        },
        "tDeoUlPUdHcqqqfGa"
      )
      .then(
        () => {
          toast.success("🪈 Hare Krishna!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          toast.warn("Ahh, something went wrong. Please try again.", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <>
      <span>
        <h1 className="max-md:text-xl text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mt-24 tracking-widest max-md:pb-1 relative z-20">
          ＣＯＮＮＥＣＴ ＷＩＴＨ ＭＥ
        </h1>
        <p className="max-md:text-[10px] text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-9">
          LET'S BUILD SOMETHING UNIQUE
        </p>
      </span>

      <div className="w-[390px]  max-h-screen max-md:w-[290px] flex flex-wrap ml-[620px] max-md:mt-[-20px] pt-10 max-md:ml-14">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col">
            <span className="font-medium text-center mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none text-black font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white text-center font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium text-center mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="py-4 px-6 placeholder:text-secondary text-black rounded-md h-24 outline-none border-none overflow-hidden font-medium"
            />
          </label>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit
          </button>
          <ToastContainer className="fixed top-0 right-0 mt-4 mr-4 transition-all duration-700 ease-in-out" />
        </form>
        <div className="flex flex-col gap-36   max-md:hidden animate-pulse duration-1000 ">
          <Link href={"https://www.linkedin.com/in/vilok-masuti-99aab8252/"}>
            <AiFillLinkedin className="" size={"30"} />
          </Link>
          <Link href={"https://github.com/VilokMasuti"}>
            <AiFillGithub size={"30"} />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <FaInstagram size={"30"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Form;
