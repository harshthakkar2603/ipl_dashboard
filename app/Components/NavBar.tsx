// components/Navbar.tsx
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../Assets/ipl-logo-new-old.jpg'
import Image from 'next/image';

const navLinks = [
  "Matches",
  "Points Table",
  "Videos",
  "Teams",
  "News",
  "Fantasy",
  "Stats",
  "More"
];

export default function Navbar() {
  return (
    <header className="bg-[#001848] text-white text-sm">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt='LOGO' height={25} width={35}/>
          <a href='#'>BCCI.TV</a>
        </div>
        <div className="flex items-center space-x-4">
          <span className='text-gray-500'>Follow Us: </span>
          <a href='#'><FaXTwitter /></a>
          <a href='#'><FaInstagram /></a>
          <a href='#'><FaFacebookF /></a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-[#1e3a8a] px-6 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-6">
            <Link href='/'>Home</Link>
            {navLinks.map((link, index) => (
            <Link key={index} href={`/${link.toLowerCase().replace(/ /g, '-')}`}>
                <span className="hover:underline underline-offset-4">{link}</span>
            </Link>
            ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-orange-500 font-semibold">Fan Poll</div>
          <div className="text-orange-300 font-semibold">Viewers Choice</div>
          <FaSearch className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
