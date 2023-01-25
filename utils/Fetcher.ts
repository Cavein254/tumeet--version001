export default async function Fetcher(url, method, data) {
  if (method === "post") {
    try {
      console.log("On try");
      await fetch(url, {
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.log("On catch");

      console.log(e);
    }
  }
}
