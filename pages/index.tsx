import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <h3 className="bg-red-600 font-extrabold text-9xl">
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </h3>
    </Layout>
  );
}
