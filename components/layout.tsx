import { useSession } from "next-auth/react";
import type { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Header1 from "./header1";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className="w-screen">
      <Header1 />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
