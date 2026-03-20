import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { changePassword } from "../../../services/userProfile";
import { HiLockClosed } from "react-icons/hi2";

const ProfilePasswordChangeCard = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const handleUpdatePassword = async (data) => {
    const res = await changePassword(data);
    const json = await res.json();

    if (res.status === 200) {
      toast.success("Password updated successfully");
      reset();
      navigate("/dashboard/user-profile");
    } else {
      toast.error(json.message || "Failed to update password");
    }
  };

  const newPassword = watch("new_password");

  return (
    <form
      onSubmit={handleSubmit(handleUpdatePassword)}
      className="flex flex-col gap-5 border border-gray-300 rounded-lg p-10 max-w-lg"
    >
      <div className="">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Old Password
        </label>
        <input
          {...register("old_password", {
            required: "Old password is required",
          })}
          type="password"
          className={`bg-gray-50 border ${
            errors.old_password ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none`}
          placeholder="Enter old password"
        />
        {errors.old_password && (
          <p className="mt-2 text-sm text-red-600">
            {errors.old_password.message}
          </p>
        )}
      </div>

      <div className="">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          New Password
        </label>
        <input
          {...register("new_password", {
            required: "New password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          type="password"
          className={`bg-gray-50 border ${
            errors.new_password ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none`}
          placeholder="Enter new password"
        />
        {errors.new_password && (
          <p className="mt-2 text-sm text-red-600">
            {errors.new_password.message}
          </p>
        )}
      </div>

      <div className="">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Confirm New Password
        </label>
        <input
          {...register("new_password_confirmation", {
            required: "Please confirm your new password",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          })}
          type="password"
          className={`bg-gray-50 border ${
            errors.new_password_confirmation ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none`}
          placeholder="Confirm new password"
        />
        {errors.new_password_confirmation && (
          <p className="mt-2 text-sm text-red-600">
            {errors.new_password_confirmation.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 sm:w-auto"
      >
        Change Password
        <HiLockClosed className="ml-2" />
      </button>
    </form>
  );
};

export default ProfilePasswordChangeCard;