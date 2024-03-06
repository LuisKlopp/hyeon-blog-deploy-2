import Image from "next/image";
import ProfileImage from "../public/me2.png";

const HomePage = () => {
  return (
    <>
      <Image
        alt="It's me"
        src={ProfileImage}
        width={200}
        className="rounded-3xl"
        priority
      />
    </>
  );
};

export default HomePage;
