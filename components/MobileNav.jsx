"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  { name: "anasayfa", path: "/" },
  { name: "hizmetlerim", path: "/hizmetlerim" },
  { name: "hakkimda", path: "/hakkimda" },
  { name: "islerim", path: "/islerim" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold ">
              İskender<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={` ${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } hover:text-accent capitalize font-medium transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
