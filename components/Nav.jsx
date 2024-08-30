"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "anasayfa", path: "/" },
  { name: "hizmetlerim", path: "/hizmetlerim" },
  { name: "hakkımda", path: "/hakkimda" },
  { name: "İşlerim", path: "/islerim" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 items-center">
      {Links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            pathname === link.path && "text-accent border-b-2 border-accent"
          } hover:text-accent capitalize font-medium transition-all `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
