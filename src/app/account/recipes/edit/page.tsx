import { redirect } from "next/navigation";

export default function AccountView() {
  redirect("/account/recipes");

  return (
    <>
    </>
  );
}