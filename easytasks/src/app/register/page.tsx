"use client";

import { formFields } from "@/utils/register/form";
import { Errors, FormFields } from "@/utils/types/interfaces-form";
import validate from "@/utils/validates/validate";
import Link from "next/link";
import { FormEvent, useState } from "react";
import ReactPasswordChecklist from "react-password-checklist";

const Register = () => {
  const [form, setForm] = useState<FormFields>({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });

  const [passwordAgain, setPasswordAgain] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    const newErrors = validate({ fieldName: name, fieldValue: value }, errors);
    setErrors(newErrors);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
    console.log("ERRORES......", newErrors);

    if (valid) {
      alert("Registro exitoso ✅");
    } else {
      alert("❗ Hay errores en el formulario.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-register flex flex-col justify-center items-center lg:flex-row lg:items-start p-5 lg:p-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl z-10 bg-white p-5 rounded-xl mt-10 shadow-lg"
      >
        <div className="flex flex-col justify-center lg:flex-row gap-10">
          <div className="w-full lg:w-3/4 flex flex-col justify-center mt-6">
            <div className="text-4xl font-bold mb-4 text-orange text-center">
              Registrarse
            </div>
            <div className="text-lg text-gray-600 mb-6 font-bold text-center">
              ÚNETE A NOSOTROS
            </div>
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
            <div className="flex flex-col mb-4">
              <label
                htmlFor="repeatPassword"
                className="mb-2 font-bold text-gray-700"
              >
                Repetir contraseña:
              </label>
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                onChange={(e) => setPasswordAgain(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
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
                form.password !== passwordAgain
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
