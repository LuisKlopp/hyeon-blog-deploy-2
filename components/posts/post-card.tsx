import Image from "next/image";
import CodeImage from "@/pubic/koplogo.png";

const PostCard = () => {
  return (
    <div className="h-40 flex justify-between border-2 border-black rounded-2xl overflow-hidden">
      <Image
        alt="post-image"
        src={CodeImage}
        className="rounded-tr-2xl rounded-br-2xl w-[200px] h-auto"
      />
      <div className="flex flex-col w-full h-full p-4 px-8 justify-around cursor-pointer">
        <span className="text-2xl font-semibold">
          Title입니다
        </span>
        <span className="text-sm">
          description입니다.description입니다.description입니다.description입니다.description입니다.
        </span>
        <div>
          <span>날짜입니다.</span>
          <span>조회수입니다.</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
