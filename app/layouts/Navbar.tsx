import { Link, NavLink } from "@remix-run/react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiTwotoneShopping } from "react-icons/ai";

import { withCart } from "~/providers/CartProvider";

function Navbar({ total }: { total: number }) {
  const links: Array<{ label: string; url: string }> = [
    {
      label: "Plants",
      url: "/plants",
    },
    {
      label: "Decoration",
      url: "/decoration",
    },
    {
      label: "Blog",
      url: "/blog",
    },
  ];
  return (
    <nav className="z-100 container mx-auto flex items-center justify-between bg-white px-8 py-6 shadow md:bg-transparent md:py-12 md:shadow-none">
      <Link to="/">
        <div className="logo text-xl font-medium">
          <span className="font-serif">Vera Verto.</span>
        </div>
      </Link>
      <div className="navbar-nav hidden space-x-10 md:flex">
        {links.map((link, index) => (
          <NavLink key={index} to={link.url} className="navlink">
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
      <div className="extra flex items-center space-x-5 sm:space-x-8">
        <a>Login</a>
        <NavLink to="/checkout">
          <div className="cart" data-cart={total}>
            <AiTwotoneShopping size={24} />
          </div>
        </NavLink>
        <BiMenuAltRight size={24} />
      </div>
      <style>
        {`
        .cart {
          position: relative;
        }
        .cart:after {
          content: attr(data-cart);
          background-color: red;
          width: 22px;
          height: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          border-radius: 50%;
          position: absolute;
          right: 0;
          top: 0;
          transform: translateX(50%) translateY(-50%);
        }
        `}
      </style>
    </nav>
  );
}

export default withCart(Navbar);
