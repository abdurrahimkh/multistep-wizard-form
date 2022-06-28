import { useState } from "react";
import Credentials from "./Credentials";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import RenderButton from "./RenderButton";
import { useForm } from "react-hook-form";
const Register = () => {
  const [formSetup, setFormSetup] = useState(0);
  const { register, watch, formState, handleSubmit } = useForm({ mode: "all" });
  const maxSteps = 3;

  const nextPage = () => {
    setFormSetup(current => current + 1);
  };
  const prevPage = () => {
    setFormSetup(current => current - 1);
  };

  const submitForm = data => {
    window.alert(JSON.stringify(data, null, 2));
  };
  return (
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex space-x-3 ml-3 mt-2">
            {formSetup > 0 && (
              <button
                className="hover:text-blue-600 text-2xl"
                type="button"
                onClick={() => prevPage()}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M249.38 336L170 256l79.38-80m-68.35 80H342"
                  ></path>
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  ></path>
                </svg>
              </button>
            )}
            <p className="text-sm text-gray-600">
              Step {formSetup + 1} of {maxSteps}
            </p>
          </div>
          {formSetup >= 0 && (
            <Credentials
              register={register}
              formState={formState}
              formSetup={formSetup}
            />
          )}
          {formSetup >= 1 && (
            <PersonalInfo
              register={register}
              formState={formState}
              formSetup={formSetup}
            />
          )}
          {formSetup >= 2 && (
            <AcademicInfo
              register={register}
              formState={formState}
              formSetup={formSetup}
            />
          )}
          <RenderButton
            formSetup={formSetup}
            nextPage={nextPage}
            formState={formState}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;