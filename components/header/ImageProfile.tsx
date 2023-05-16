import { useSession } from "next-auth/react";
import Image from "next/image";

const LilProfile = ({ height, width, classname }) => {
  const { data: session, status } = useSession();
  return (
    <div>
      <Image
        className={classname ? classname : "rounded-full"}
        src={`${session?.user?.image}`}
        height={height ? height : 50}
        width={width ? width : 50}
        alt={session?.user?.name}
      />
    </div>
  );
};

export default LilProfile;
