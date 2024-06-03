"use client";
import { useAuth } from "../contextLogin/AuthContext";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

//recordar que se debe crear un archivo en app/ejemplo dashboard/page.tsx
//y desde este archivo que se crea se deberia colocar el boton de logout en la aplicacion o donde se vaya a implementar
