import Image from "next/image";
import profileImage from "../public/me2.png";

const ProfileImage = () => {
  return (
    <Image
      alt="It's me"
      src={profileImage}
      className="rounded-3xl w-[200px] h-auto"
      priority
    />
  );
};

export default ProfileImage;
