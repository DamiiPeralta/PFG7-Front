/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("The email is not valid")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data: any) => {
    try {
      // nos acordamos que aqui va  al endpoint del backend para iniciar sesión
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        //nos  duponemos que el backend responde con el usuario autenticado
        const result = await response.json();
        console.log("Login successful:", result);
        // Redirigir al usuario a la página principal u otra página  que nos plasca poner
      } else {
        // aqui se maneja errores de autenticación
        const error = await response.json();
        setLoginError(error.message || "Incorrect Credentials");
      }
    } catch (error) {
      setLoginError("Error connecting to the Server");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#5F98DF] via-[#9679C6] to-[#4A48A4] mt-20">
      <div className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <img src="/logo.svg" alt="EasyTasks Logo" className="mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-gray-900">EasyTasks</h2>
        </div>
        {loginError && (
          <p className="mt-2 text-sm text-red-600">{loginError}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={`block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              >
                <Image
                  src={
                    showPassword
                      ? "/login/OjosAbiertos.svg"
                      : "/login/OjosCerrados.svg"
                  }
                  alt="Hide and Show password"
                  width={24}
                  height={24}
                />
              </span>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#329FA6] hover:bg-[#267d84] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">O</span>
          </div>
          <div>
            <button
              type="button"
              className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaGoogle className="mr-2" /> Ingresar con Google
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            <span>You do not have an account? </span>
            <Link
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Registrarse aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
