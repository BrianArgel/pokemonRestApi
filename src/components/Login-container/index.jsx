import React, { useEffect } from "react";
import usePasswordToggle from "@/hooks/usePasswordToogle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authThunk } from "@/redux/thunks/auth.thunk";
import { useNavigate } from "react-router-dom/dist";
import { useFormik } from "formik";
import { LoginValidate } from "@/utils/validateForm";
import { useNotification } from "@/context/notification.context";
import { NOTIFY_TYPES } from "@/const";
import { GENERAL_SUCCESS } from "@/const";

export const LoginContainer = () => {
  const { 
    error,
    success,
    accessToken,
    loading 
  } = useAppSelector((state) => state.authReducer);
  const { notify } = useNotification();
  const [inputType, TogglePasswordIcon] = usePasswordToggle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values) => {
      dispatch(authThunk(values));
    },
  });

  useEffect(() => {
    if (error) notify(error, NOTIFY_TYPES.ERROR);
  }, [error]);


  useEffect(() => {
    if (accessToken) {
      if(success) notify(GENERAL_SUCCESS.MESAGE, NOTIFY_TYPES.SUCCESS);
      navigate("/");
    }
  }, [accessToken]);


  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <form
            className="mb-4"
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4 relative">
              <label htmlFor="email" className="block text-xs mb-1">
                Username or Email
              </label>
              <input
                name="username"
                margin="normal"
                placeholder="Username or Email"
                autoFocus={true}
                value={formik.values.username}
                onChange={formik.handleChange}
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.username}
                </p>
              )}
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline "
                type={inputType}
                name="password"
                id="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
              {TogglePasswordIcon}
            </div>
            <button
              disabled={loading}
              className="bg-green-500  text-white text-sm font-bold px-4 py-2 rounded w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
