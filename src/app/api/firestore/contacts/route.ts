// app/api/firestore/route.js
import { Firestore } from "@google-cloud/firestore";
import { NextRequest, NextResponse } from "next/server";

// Inicialize o Firestore
const firestore = new Firestore({
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    await firestore.collection("contacts").add(data);
    return NextResponse.json(
      { message: "Information was sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
