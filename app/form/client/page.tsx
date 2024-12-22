"use client";

function serverAction() {
  console.log("server action");
}

export default function Page() {
  return (
    <form action={serverAction}>
      <input type="text" name="address" />
    </form>
  );
}
