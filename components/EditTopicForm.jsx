"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setnewTitle] = useState(title);
  const [newDescription, setnewDescription] = useState(description);
  const router = useRouter();
  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      const done = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (done.ok) {
        router.refresh();
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="flex flex-col gap-3">
        <input
          onChange={(e) => setnewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-500 px-8 py-2 mx-5"
          type="text"
          placeholder="Topic Title"
        ></input>
        <input
          onChange={(e) => setnewDescription(e.target.value)}
          value={newDescription}
          className="border border-slate-500 px-8 py-2 mx-5"
          type="text"
          placeholder="Topic Description"
        ></input>

        <button
          onClick={handelsubmit}
          type="submit"
          className="bg-green-500 border border-slate-500 py-1 mx-5 text-white text-bold w-36 rounded-lg"
        >
          Update Topics
        </button>
      </form>
    </>
  );
};

export default EditTopicForm;
