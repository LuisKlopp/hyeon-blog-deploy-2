import { PostCard } from "./post-card";
import { posts } from "@/.velite";

const PostList = () => {
  const displayPosts = posts;
  return (
    <>
      {displayPosts?.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
          {displayPosts.map((post) => {
            const {
              slug,
              date,
              title,
              description,
            } = post;
            return (
              <li key={slug}>
                <PostCard
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </>
  );
};

export default PostList;
