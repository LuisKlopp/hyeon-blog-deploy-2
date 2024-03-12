import Image from "next/image";
import profileImage from "../../public/me3.png";

const ProfileBanner = () => {
  return (
    <div className="w-full flex justify-around mt-8 py-8">
      <Image
        alt="It's me"
        src={profileImage}
        className="rounded-3xl w-[200px] h-auto"
        priority
      />
      <div className="flex flex-col justify-evenly">
        <span className="text-4xl font-semibold text-blogThickRed">
          Introduction 🙋🏻‍♂️
        </span>
        <div>
          프론트엔드 개발자{" "}
          <span className="text-xl font-bold">
            류현
          </span>
          입니다.
          <br />
          오늘도 좋은 하루가 되시길 바랍니다.
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
