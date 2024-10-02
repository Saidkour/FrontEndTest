import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    values && navigate("/categories");
  };
  return (
    <>
      <div className="container  h-[100vh] flex m-auto justify-center place-items-center p-10">
        <div className=" w-[600px] md:w-[500px] shadow-sm  shadow-primary  backdrop-blur-sm">
          <h4 className="text-center text-primary font-bold p-4 "> LOGIN </h4>
          <form
            className="mb-0 space-y-6  p-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="flex text-sm font-medium text-primary"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  placeholder="Email@example.com"
                  className="w-full border bg-transparent border-primary   px-3 py-2  "
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="flex text-sm font-medium text-primary"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  placeholder="********"
                  className="w-full border bg-transparent focus:border-none  border-primary   px-3 py-2  shadow-sm"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-primary "
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
