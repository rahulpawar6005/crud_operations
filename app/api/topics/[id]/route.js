import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


//update perticular topic
export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

//Get perticular topic ==========>>>>>>>>>>
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
// export async function DELETE(request,{params}){
//     const {id} = params;
//     await connectMongoDB();
//     await Topic.findByIdAndDelete({_id:id});
//     return NextResponse.json("Deleted succesfully...", {status:200})
// }