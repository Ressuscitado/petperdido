export default function AnunciarPet() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-t from-sky-400 to-white text-center">
      <h1 className="text-3xl sm:text-2xl font-bold text-sky-600 mb-6">Anunciar um Pet Perdido</h1>
      <p className="text-lg sm:text-base text-gray-700 max-w-2xl sm:max-w-full px-4">
        Para anunciar um pet perdido, envie um e-mail para <b>igorengenheirodesoftware@gmail.com</b> com as seguintes informações:
      </p>
      <ul className="mt-4 text-gray-600 text-lg sm:text-base text-left list-disc list-inside px-4">
        <li>Nome do pet</li>
        <li>Espécie e raça</li>
        <li>Local onde foi visto pela última vez</li>
        <li>Foto do pet</li>
        <li>Número para contato</li>
      </ul>
      <p className="text-gray-700 max-w-2xl sm:max-w-full mt-6 px-4">
        Ao encaminhar o e-mail, você concorda que as informações fornecidas poderão ser publicadas no site.
      </p>
      <a
        href="mailto:igorengenheirodesoftware@gmail.com?subject=Anunciar Pet Perdido"
        className="mt-6 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition"
      >
        Enviar E-mail
      </a>
    </div>
  );
}
