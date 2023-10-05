import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicsByID = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch selected data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function editTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicsByID(id);
  const { title, description } = topic;
  console.log("id:", id);
  return <EditTopicForm id={id} title={title} description={description}  />;
}
