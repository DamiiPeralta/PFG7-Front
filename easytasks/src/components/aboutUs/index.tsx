import Image from "next/image.js";

const AboutUs = () => {
  return (
    <div
      id="section-about"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-color3 via-color4 to-color5 h-auto py-7 w-full text-xl md:text-2xl "
    >
      <h2 className="text-4xl font-bold mb-6 text-center">¿Quiénes somos?</h2>
      <h3 className="text-2xl w-9/12 my-3 text-center">
        Somos un grupo de desarrolladores que busca mejorar su productividad sin
        morir en el intento! 😄
      </h3>
      <p className="text-2xl w-7/12 my-3 text-center">
        Creemos firmemente que podemos alcanzar nuestros objetivos profesionales
        sin sobrecargarnos y cuidando nuestra salud mental. Nuestro enfoque se
        centra en el trabajo en equipo, no solo para lograr metas, sino también
        como un mecanismo de apoyo mutuo que previene el agotamiento y la
        soledad laboral.
      </p>
      <p className="text-2xl w-9/12 mt-12 my-3 text-white text-center">
        En EasyTasks, nuestra misión es crear un entorno donde la eficiencia y
        el bienestar vayan de la mano.
      </p>
      <div className="flex flex-wrap justify-center text-white mt-4 gap-4">
        {[
          { href: "https://www.linkedin.com/in/damian-peralta-4bb258215", src: "/aboutUsImg/iconoDamy.svg", name: "Damy" },
          { href: "https://www.linkedin.com/in/cristian-gabriel-araya-salattino", src: "/aboutUsImg/iconoGaby.svg", name: "Gaby" },
          { href: "https://www.linkedin.com/in/alejandro-campaya", src: "/aboutUsImg/iconoAle.svg", name: "Ale" },
          { href: "https://www.linkedin.com/in/delfinamerlo", src: "/aboutUsImg/iconoDelfi.svg", name: "Delfi" },
          { href: "https://www.linkedin.com/in/keilaygonzalez", src: "/aboutUsImg/iconoYese.svg", name: "Yese" },
          { href: "https://www.linkedin.com/in/samanta-driuzzi", src: "/aboutUsImg/iconoSamy.svg", name: "Samy" },
        ].map((person) => (
          <a
            key={person.name}
            className="flex flex-col items-center mx-4 overflow-hidden w-full sm:w-auto transition-transform duration-300 transform hover:scale-125"
            href={person.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={person.src} width={100} height={100} alt={person.name} />
            <p className="hover:underline">{person.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
