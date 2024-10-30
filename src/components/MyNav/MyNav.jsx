import ListItem from "../ListItem/ListItem";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

    

const MyNav = () => {
    const routes = [
      { id: 1, name: "Home", path: "/home" },
      { id: 2, name: "About", path: "/about" },
      { id: 3, name: "Services", path: "/services" },
      { id: 4, name: "Contact", path: "/contact" },
      { id: 5, name: "Blog", path: "/blog" },
    ];

    const [open, setOpen] = useState(true);


  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl font-bold p-3 cursor-pointer"
      >
        {open ? <RiMenu3Fill></RiMenu3Fill> : <RxCross1></RxCross1>}
      </div>
      <ul
        className={`md:flex absolute md:static duration-500 bg-teal-600 text-black items-center justify-start gap-6 text-lg cursor-pointer rounded-lg border md:rounded-none py-3 md:py-6 md:border-none ${
          open ? "-left-52" : "left-0"
        }`}
      >
        {routes.map((route) => (
          <ListItem route={route} key={route.id}></ListItem>
        ))}
      </ul>
    </nav>
  );
};

export default MyNav;
