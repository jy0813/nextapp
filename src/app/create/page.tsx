'use client'

import { useRouter } from "next/navigation";
import React from "react";

export default function Create() {
  const router = useRouter();
  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const title = formData.get('title') as string;
      const body = formData.get('body') as string;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, body})
      }
      fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, options)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          const lastid = result.id;
          router.refresh();
          router.push(`/read/${lastid}`);
        })
    }}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  )
}