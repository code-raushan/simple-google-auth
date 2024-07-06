"use client";
import { GoogleLogin } from '@react-oauth/google';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log("failed");
        }}
      />
    </main>
  );
}
