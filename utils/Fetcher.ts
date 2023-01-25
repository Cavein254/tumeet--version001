export default async function Fetcher(url, method, data) {
  if (method === "post") {
    try {
      // console.log("on fetcher", data);
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
