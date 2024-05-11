import ImagePostCard from "../components/ImagePostCard";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  return (
    <div className="pt-36 flex flex-col gap-3">
      <ProfileCard />
      <div className="grid grid-cols-3 gap-3 ">
        <ImagePostCard>
          <div className="flex flex-row gap-1">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              133 likes
            </span>
            <span className="inline-flex  items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              10 comments
            </span>
          </div>
        </ImagePostCard>
        <ImagePostCard>
          <div className="flex flex-row gap-1">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              133 likes
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              10 comments
            </span>
          </div>
        </ImagePostCard>
        <ImagePostCard>
          <div className="flex flex-row gap-1">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              133 likes
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              10 comments
            </span>
          </div>
        </ImagePostCard>
        <ImagePostCard>
          <div className="flex flex-row gap-1">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              133 likes
            </span>
            <span className="inline-flex  items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              10 comments
            </span>
          </div>
        </ImagePostCard>
        <ImagePostCard>
          <div className="flex flex-row gap-1">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              133 likes
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
              10 comments
            </span>
          </div>
        </ImagePostCard>
      </div>
    </div>
  );
};

export default Profile;
