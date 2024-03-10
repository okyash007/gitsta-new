import CardWrapper from "../components/CardWrapper";
import PostCart from "../components/PostCart";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  return (
    <div className="flex justify-center gap-2">
      <div className="flex flex-col flex-grow gap-2 pt-24">
        <CardWrapper>
          <div className="flex flex-col gap-3">
            <ProfileCard />
            <PostCart />
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flex flex-col gap-3">
            <ProfileCard />
            <PostCart />
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flex flex-col gap-3">
            <ProfileCard />
            <PostCart />
          </div>
        </CardWrapper>
      </div>
      <div className="h-fit flex flex-col gap-2 sticky top-0 pt-24">
        <CardWrapper>
          <ProfileCard />
        </CardWrapper>
        <CardWrapper>
          <ProfileCard />
        </CardWrapper>
        <CardWrapper>
          <ProfileCard />
        </CardWrapper>
        <CardWrapper>
          <ProfileCard />
        </CardWrapper>
        <CardWrapper>
          <ProfileCard />
        </CardWrapper>
      </div>
    </div>
  );
};

export default Home;
