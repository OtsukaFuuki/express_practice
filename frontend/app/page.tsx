"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("API call failed:", err);
        setMessage("APIとの通信に失敗しました");
      });
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Next.jsでExpress連携</h1>
      <p>{message}</p>
    </main>
  );
}
