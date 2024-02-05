import { NextRequest, NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import db from "@/db/firebase";



export async function POST(req) {
  const { email, password } = await req.json();
  console.log(email, password);

  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();


    const response = NextResponse.json({
      success: true,
      message: "Login Hogaya",
    });
    response.cookies.set("token", token, { path: "/", httpOnly: true });

    return response;
  } catch (error) {
    console.error("Authentication error:", error);

    // Return an error response
    return NextResponse.json({ success: false, message: "Login failed" });
  }
}
