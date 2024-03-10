import toast from "react-hot-toast";
import Toast from "../toast/Toast";

const Chats = () => {
  const userToast = () => {
    const toastId = toast.custom(
      <Toast>
        <div
          className="max-w-xs relative bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
          role="alert"
        >
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <img
                className="inline-block h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <button
                onClick={() => toast.remove(toastId)}
                type="button"
                className="absolute top-3 end-3 inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="ms-4 me-5">
              <h3 className="text-gray-800 font-medium text-sm dark:text-white">
                <span className="font-semibold">James</span> mentioned you in a
                comment
              </h3>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Nice work! Keep it up!
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400"
                >
                  Mark as read
                </button>
              </div>
            </div>
          </div>
        </div>
      </Toast>,
      { duration: Infinity }
    );
  };

  return (
    <div className="flex flex-col gap-2 py-2 h-screen">
      <div className="flex-grow bg-slate-600">hii</div>

      <div className="relative">
        <textarea
          id="hs-floating-textarea"
          className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2"
          placeholder="This is a textarea placeholder"
          defaultValue={""}
        />
        <label
          htmlFor="hs-floating-textarea"
          className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500"
        >
          Comment
        </label>
      </div>
    </div>
  );
};

export default Chats;
