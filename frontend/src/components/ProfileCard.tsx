const ProfileCard = () => {
  return (
    <div className="flex">
      <div className="flex gap-2">
        <img
          className="inline-block h-[3.375rem] w-[3.375rem] rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
        />
        <div>
          <h1 className="dark:text-white text-2xl font-semibold">Yash Verma</h1>
          <h1 className="dark:text-white text-sm opacity-50">@ okyash007</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
