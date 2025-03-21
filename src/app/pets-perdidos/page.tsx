import { pets } from "@/app/data/pets";
import Image from "next/image";

export default function AnunciarPet() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-t from-sky-400 to-white">
      <h1 className="text-2xl font-bold text-white mb-6 bg-sky-600 p-3 rounded-md">Pets Perdidos</h1>

      {/* Lista de pets cadastrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white shadow-md rounded-lg p-4">
            <Image 
              src={pet.imagem} 
              alt={pet.nome} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-sky-600 font-bold mt-3">{pet.nome}</h2>
            <p className="text-gray-600">{pet.especie} - {pet.raca}</p>
            <p className="text-gray-500">📍 {pet.localizacao}</p>
            <p className="text-gray-700 mt-2">{pet.descricao}</p>
            <p className="text-sky-500 font-bold mt-3">📞 {pet.contato}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
