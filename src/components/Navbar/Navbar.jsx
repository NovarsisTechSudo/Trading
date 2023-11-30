import React from "react";

const Navbar = () => {
  const Links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/" },
    { name: "Service", url: "/" },
    { name: "pages", url: "/" },
    { name: "News", url: "/" },
    { name: "Contact", url: "/" },
  ];

  return <nav>
    <ul className="hidden lg:flex items-center text-white">
        {
            Links.map((url)=>{
                return(
                    <li key={url.name} className="text-xl hover:underline pr-10 font-semibold hover:text-[#D49539] cursor-pointer">{url.name}</li>
                )

            })
        }
    </ul>
  </nav>
};

export default Navbar;
