import { useSession } from "next-auth/react";
import Image from "next/image";

const LilProfile = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <Image
        className="rounded-full"
        src={session?.user?.image}
        height={50}
        width={50}
      />
    </div>
  );
};

export default LilProfile;
