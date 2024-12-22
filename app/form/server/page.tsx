async function serverAction(formData: FormData) {
  "use server";
  console.log("server action", formData.get("address"));
}

export default function Page() {
  return (
    <form action={serverAction}>
      <input type="text" name="address" />
    </form>
  );
}
