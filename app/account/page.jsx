"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Demo login validation
    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("auth", "true");

      // redirect to profile page
      router.push("/account/profile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">

      <Card className="w-full max-w-sm shadow-lg">

        <CardHeader>
          <CardTitle>Login to your account</CardTitle>

          <CardDescription>
            Enter your email and password to continue
          </CardDescription>

          <CardAction>
            <Button variant="link" onClick={() => router.push("/register")}>
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="1234"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
                required
              />
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* SUBMIT BUTTON */}
            <Button type="submit" className="w-full">
              Login
            </Button>

          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">

          <Button
            variant="outline"
            className="w-full"
            onClick={() => alert("Google Login Coming Soon")}
          >
            Login with Google
          </Button>

        </CardFooter>

      </Card>

    </div>
  );
}