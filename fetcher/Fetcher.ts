import { useRouter } from "next/router";
export default async function Fetcher(url, method, data) {
  const Router = useRouter();
  if (method === "post") {
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      await Router.push("/invitations");
    } catch (e) {
      console.log(e);
    }
  }
}
