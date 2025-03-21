import Image from "next/image";
import Link from "next/link";
import { Shadows_Into_Light } from 'next/font/google';

const shadowsIntoLight = Shadows_Into_Light({ subsets: ['latin'], weight: '400' });

export default function Header() {
  return (
    <header className="flex items-center justify-center py-4">
      <Link href="/">
        <div className="relative w-30 h-30 bg-gray-200 rounded-full">
          <Image 
            src="/assets/logo.jpg" 
            alt="Logo do site" 
            fill
            className="object-contain rounded-full" 
          />
        </div>
        
      </Link>
      <div className={`${shadowsIntoLight.className} text-2xl font-bold text-sky-500 ml-2`}>
        Pet Perdido <br />Pet Encontrado
      </div>
    </header>
  );
}
