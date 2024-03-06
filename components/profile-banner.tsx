import Image from "next/image";
import profileImage from "../public/me2.png";

const Profile = () => {
  return (
    <div className="w-full flex justify-between pt-8">
      <div />
      <Image
        alt="It's me"
        src={profileImage}
        className="rounded-3xl w-[200px] h-auto"
        priority
      />
    </div>
  );
};

export default Profile;
