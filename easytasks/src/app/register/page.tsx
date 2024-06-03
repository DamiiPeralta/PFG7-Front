"use client";

import Logo from "@/components/logo";
import { formFields } from "@/utils/register/form";
import { Errors, FormFields } from "@/utils/types/interfaces-form";
import validate from "@/utils/validates/validate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import ReactPasswordChecklist from "react-password-checklist";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormFields>({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });
  const [passwordAgain, setPasswordAgain] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    const newErrors = validate({ fieldName: name, fieldValue: value }, errors);
    setErrors(newErrors);
  };

  //aqui una vez que el usuario se registra y es exitoso es donde llama a la funcion registeUser dentro del componente Register.

  const registerUser = (userData: FormFields) => {
    localStorage.setItem("user", JSON.stringify(userData));
    alert("usuario registrado exitosamente");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;
    const newErrors: Errors = {};

    Object.keys(form).forEach((fieldName) => {
      const fieldErrors = validate(
        { fieldName, fieldValue: form[fieldName as keyof FormFields] },
        newErrors
      );
      if (Object.keys(fieldErrors).length > 0) {
        valid = false;
        newErrors[fieldName] = fieldErrors[fieldName];
      }
    });

    setErrors(newErrors);

    if (valid) {
      try {
        const response = await fetch(`${API_URL}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          const result = await response.json();

          registerUser(form); //aqui almacena los datos del usuario en localstorage

          // Optionally redirect to login page or perform other actions
          router.push("/login");
        } else {
          const error = await response.json();

          alert("Error en el registro. Por favor, intenta nuevamente.");
        }
      } catch (error) {
        alert("Error en el registro. Por favor, intenta nuevamente.");
      }
    } else {
      alert("❗ Hay errores en el formulario.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-register flex flex-col justify-center items-center lg:flex-row lg:items-start p-5 lg:p-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl z-10 bg-white p-5 rounded-xl mt-10 shadow-lg"
      >
        <div className="flex flex-col justify-center lg:flex-row gap-10">
          <div className="w-full lg:w-3/4 flex flex-col justify-center mt-6">
            <Logo />
            <hr className="border-gray-300 w-1/2 mb-8 ml-[25%]" />

            {formFields.map((field) => (
              <div key={field.name} className="flex flex-col mb-4">
                <label
                  htmlFor={field.name}
                  className="mb-2 font-bold text-gray-700"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={form[field.name as keyof FormFields]}
                  onChange={handleInputChange}
                  required={field.required}
                  className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-orange"
                />
                {errors[field.name] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="flex flex-col mb-4 relative">
              <label
                htmlFor="password"
                className="mb-2 font-bold text-gray-700"
              >
                Contraseña:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={form.password}
                onChange={handleInputChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full pr-10"
              />
              <Image
                src={
                  showPassword
                    ? "/register/eyes-open.png"
                    : "/register/eyes-closed.png"
                }
                width={30}
                height={30}
                alt="Toggle Password Visibility"
                className="absolute right-3 top-10 cursor-pointer"
                onClick={toggleShowPassword}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 relative">
              <label
                htmlFor="repeatPassword"
                className="mb-2 font-bold text-gray-700"
              >
                Repetir contraseña:
              </label>
              <input
                type={showRepeatPassword ? "text" : "password"}
                name="repeatPassword"
                id="repeatPassword"
                onChange={(e) => setPasswordAgain(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full pr-10"
              />
              <Image
                src={
                  showRepeatPassword
                    ? "/register/eyes-open.png"
                    : "/register/eyes-closed.png"
                }
                width={30}
                height={30}
                alt="Toggle Repeat Password Visibility"
                className="absolute right-3 top-10 cursor-pointer"
                onClick={toggleShowRepeatPassword}
              />
            </div>
            <ReactPasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={form.password}
              valueAgain={passwordAgain}
              messages={{
                minLength: "La contraseña tiene más de 8 caracteres.",
                specialChar: "La contraseña tiene caracteres especiales.",
                number: "La contraseña tiene un número.",
                capital: "La contraseña tiene una letra mayúscula.",
                match: "Las contraseñas coinciden.",
              }}
            />
            <button
              type="submit"
              className="w-full bg-color-button hover:bg-color-button-hover text-black text-xl font-bold py-3 px-6 rounded-lg mt-4 disabled:opacity-50"
              disabled={
                Object.keys(errors).length > 0 ||
                form.password !== passwordAgain ||
                !form.password ||
                !passwordAgain
              }
            >
              Registrarse
            </button>
            <div className="flex flex-row justify-center mt-4">
              <div className="text-sm text-gray-500 font-bold mr-2">
                ¿YA ESTÁS REGISTRADO?
              </div>
              <div className="text-sm hover:text-blue-dark text-orange font-bold">
                <Link href="/login">INGRESA AQUÍ</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
