export default function SlugGenerator(text) {
  let num = Math.floor(Math.random() * 100000);
  let textOne = text + " " + num;
  const slug = textOne.split(" ").join("-").toLowerCase();
  return slug;
}
