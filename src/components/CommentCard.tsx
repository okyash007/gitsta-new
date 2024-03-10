const CommentCard = () => {
  return (
    <div className="flex gap-2 mt-4">
      <div className="min-w-8 flex flex-col items-center">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
        />
        <div className="flex-grow border-t-0 border-s dark:border-gray-700"></div>
      </div>
      <div>
        <h1 className="dark:text-white text-xs opacity-50">@okyash007</h1>
        <h1 className="dark:text-white text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
        <div className="flex gap-1 mt-2">
          <button
            type="button"
            className="py-1 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            show replies
          </button>
          <button
            type="button"
            className="py-1 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
