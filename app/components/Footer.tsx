import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bottom-0 p-4 bg-sky-100">
      <div className="container mx-auto justify-between items-center flex gap-6">
        <div>
          <Image
            className="dark:invert"
            src="/groceries-round-svgrepo-com.svg"
            alt="logo"
            width={50}
            height={0}
            priority
          />
          <span className="text-gray-700 font-semibold">MrSoko</span>
        </div>
        <div className="text-gray-600 text-center md:text-left">
          <span> © {year}</span>
        </div>
        <div className="flex gap-3">
          <div>
            <Link href="https://www.facebook.com/mrsoko254">
              <Image
                src="/facebook-svgrepo-com.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div>
            <Link href="https://wa.me/254791111111">
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="Whatsapp"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/mrsoko254/">
              <Image
                src="/instagram-svgrepo-com.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
