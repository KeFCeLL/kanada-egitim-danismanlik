import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Kanada Kolay Vize Logo"
            width={120}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header; 