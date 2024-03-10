import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Chats from "./pages/Chats";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Test from "./pages/Test";

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="w-1/2 mx-auto">
        {/* <Post /> */}
        <Home/>
        {/* <Profile/> */}
        {/* <Chats /> */}
        {/* <Test /> */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 10000,
          }}
        />
      </div>
    </>
  );
};

export default Body;
