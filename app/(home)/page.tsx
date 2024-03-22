// import PostList from "@/components/posts/post-list";
import ProfileBanner from "@/components/profile/profile-banner";

const HomePage = () => {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <ProfileBanner />
      <h1 className="text-3xl font-bold text-blogThickRed mt-12">
        Recent Posts
      </h1>
      {/* <PostList /> */}
    </div>
  );
};

export default HomePage;
