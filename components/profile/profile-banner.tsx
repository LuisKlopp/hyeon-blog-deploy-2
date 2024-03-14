import Image from "next/image";
import profileImage from "@/public/me3.png";
import LucideIcon from "@/components/lucide-icon";
import { INFORMATION_ITEMS } from "./constants/Information.constants";
import Link from "next/link";

const ProfileBanner = () => {
  return (
    <div className="w-full flex justify-center mt-8 py-8 gap-16 max-[550px]:flex-col max-[550px]:items-center">
      <Image
        alt="It's me"
        src={profileImage}
        className="rounded-3xl w-[200px] h-auto"
        priority
      />
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-4xl font-semibold text-[#6b6b6b] dark:text-[#bfbfbf]">
            Ryu Hyeon
          </span>
          <div className="pt-2">
            프론트엔드 개발자{" "}
            <span className="text-xl font-bold">
              류현
            </span>
            입니다.
            <br />
            블로그에 방문해주셔서 감사합니다.
            <br />
            유익한 정보를 공유하고 싶습니다.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {INFORMATION_ITEMS.map((item) => {
            const { iconName, label, isLinked } =
              item;
            return (
              <div
                className="flex gap-2"
                key={iconName}
              >
                <LucideIcon name={iconName} />
                {isLinked ? (
                  <Link
                    className="cursor-pointer hover:underline"
                    href={label}
                    target="_blank"
                  >
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
