const PostCart = () => {
  return (
    <div className="flex flex-col w-full gap-1">
      <div
        className="bg-cover bg-center aspect-square transition-all rounded-lg"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80)",
        }}
      />
      <h1 className="dark:text-white text-sm">caption here</h1>
      <div className="flex gap-1">
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
          133 likes
        </span>
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
          10 comments
        </span>
      </div>
    </div>
  );
};

export default PostCart;
