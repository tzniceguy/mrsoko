import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bottom-0 p-6">
      <div className="flex gap-6">
        <div>
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={140}
            height={25}
            priority
          />
        </div>
        <div>
          <span>Copyright</span>
        </div>
        <div>SOCIALS</div>
      </div>
    </footer>
  );
}
