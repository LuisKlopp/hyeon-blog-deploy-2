import Image from "next/image";
import profileImage from "@/public/me3.png";
import ProfileIntroduction from "./profile-introduction";

const ProfileBanner = () => {
  return (
    <div className="w-full flex justify-center py-8 gap-16 max-[550px]:flex-col max-[550px]:items-center">
      <ProfileIntroduction />
      <Image
        alt="It's me"
        src={profileImage}
        className="rounded-3xl w-[200px] h-auto"
        priority
      />
    </div>
  );
};

export default ProfileBanner;
