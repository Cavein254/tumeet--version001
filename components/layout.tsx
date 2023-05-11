import { useSession } from "next-auth/react";
import type { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className="w-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
