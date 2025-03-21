import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 p-10 text-lg min-h-screen bg-gradient-to-t from-sky-400 to-white">
      <Header />

      {/* Container dos links */}
      <div className="flex flex-col flex-1 items-center justify-center gap-4 w-full">
        <Link 
          href="/pets-perdidos" 
          className="flex justify-center w-11/12 max-w-xs sm:w-96 md:w-[400px] lg:w-[500px] xl:w-[600px] text-white bg-sky-500 p-4 rounded-md transition-colors duration-300 hover:bg-sky-400"
        >
          🐶 Pets Perdidos
        </Link>
        <Link 
          href="/anunciar-pet" 
          className="flex justify-center w-11/12 max-w-xs sm:w-96 md:w-[400px] lg:w-[500px] xl:w-[600px] text-white bg-sky-500 p-4 rounded-md transition-colors duration-300 hover:bg-sky-400"
        >
          📢 Anunciar Pet
        </Link>
        <Link 
          href="/sobre-a-causa" 
          className="flex justify-center w-11/12 max-w-xs sm:w-96 md:w-[400px] lg:w-[500px] xl:w-[600px] text-white bg-sky-500 p-4 rounded-md transition-colors duration-300 hover:bg-sky-400"
        >
          ❤️ Sobre a Causa
        </Link>
      </div>

      {/* Footer fixo no final */}
      <footer className="py-4 text-center text-gray-600">
        Todos direitos reservados - IgorArtus
      </footer>
    </div>
  );
}
