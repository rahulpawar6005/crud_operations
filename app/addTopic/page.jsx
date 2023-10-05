"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  // console.log("hi!")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required...");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Faild to create a topics");
      }
    } catch (error) {}
  };
  return (
    <>
      <form onSubmit={handelSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-8 py-2 mx-5"
          type="text"
          placeholder="Topic Title"
        ></input>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-8 py-2 mx-5"
          type="text"
          placeholder="Topic Description"
        ></input>

        <button
          type="submit"
          className="bg-green-500 border border-slate-500 py-1 mx-5 text-white text-bold w-36 rounded-lg"
        >
          Add Topics
        </button>
      </form>
    </>
  );
}
