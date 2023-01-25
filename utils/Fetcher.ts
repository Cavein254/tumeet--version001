export default async function Fetcher(url, method, data) {
  if (method === "post") {
    try {
      await fetch(url, {
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
