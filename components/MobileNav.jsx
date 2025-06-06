// "use client";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";

// const links = [
//   {
//     name: "Home",
//     path: "/",
//   },

//   {
//     name: "Resume",
//     path: "/resume",
//   },
//   {
//     name: "Work",
//     path: "/work",
//   },
//   {
//     name: "Contact",
//     path: "/contact",
//   },
// ];

// const MobileNav = () => {
//   const pathname = usePathname();

//   return (
//     <Sheet>
//       <SheetTrigger className="flex justify-center items-center">
//         <GiHamburgerMenu className="text-[32px] text-accent" />
//       </SheetTrigger>
//       <SheetContent className="flex flex-col">
//         <div className="mt-32 mb-40 text-center text-2xl">
//           <Link href="/">
//             <h1 className="text-4xl font-semibold">
//               Nayan<span className="text-accent">.</span>
//             </h1>
//           </Link>
//         </div>
//         <nav className="flex flex-col justify-center items-center gap-8">
//           {links.map((link, index) => {
//             return (
//               <Link
//                 href={link.path}
//                 key={index}
//                 className={`${link.path === pathname && 
//                     " text-accent border-b-2 border-accent"}
//                 text-xl capitalize hover:text-accent transition-all`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center md:hidden">
        <GiHamburgerMenu className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Nayan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setOpen(false)}
              className={`text-xl capitalize hover:text-accent transition-all ${
                link.path === pathname ? "text-accent border-b-2 border-accent" : ""
              }`}
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

