const PersonalInfo = ({ register, formState, formSetup }) => {
  return (
    <div className={formSetup === 1 ? "block" : "hidden"}>
      <div className="p-6">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          Personal Info
        </h1>
        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">Name</span>
          <input
            className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
            placeholder="eg: Elon Musk"
            {...register("name", {
              required: { value: true, message: "enter your name" },
            })}
          />
          {formState.errors.name && (
            <p className="text-red-600 text-sm mt-2">
              {formState.errors.name.message}
            </p>
          )}
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Gender</span>
          <div className="flex ">
            <div className="xl:w-[25rem]">
              <select
                className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
                aria-label="Select Gender"
                {...register("gender")}
              >
                <option value="male" defaultValue>
                  Male
                </option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Username</span>
          <input
            className="border rounded p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="eg: elonmusk01"
            {...register("username", {
              required: { value: true, message: "enter your username" },
            })}
          />
          {formState.errors.username && (
            <p className="text-red-600 text-sm mt-2">
              {formState.errors.username.message}
            </p>
          )}
        </label>
      </div>
      {/* <p className="mt-1">
            <a
              className="text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline"
              href="./create-account.html"
            >
              Already have account? Login
            </a>
          </p> */}
    </div>
  );
};

export default PersonalInfo;
