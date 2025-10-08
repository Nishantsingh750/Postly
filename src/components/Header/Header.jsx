import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "..";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-700 via-purple-800 to-black shadow-md sticky top-0 z-50 text-white">
      <Container>
        <nav className="flex items-center justify-between py-3 ">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-14 h-14 overflow-hidden rounded-full">
    <Logo width="56px" height="56px" />
  </div>
            <span className="text-lg text-white font-semibold tracking-wide hidden sm:block">
              Postly
            </span>
          </Link>

          {/* Hamburger Button */}
          <button
            className="sm:hidden flex flex-col space-y-1 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-5">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="text-sm sm:text-base font-medium px-4 py-2 rounded-full hover:bg-purple-600 transition"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>

      {/* Side Menu Overlay (Right Slide) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-lg shadow-2xl border-l border-white/20 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden z-40`}
      >
        <div className="flex flex-col items-start p-6 space-y-4 text-white">
          <button
            className="self-end text-gray-300 hover:text-white text-2xl mb-4"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {navItems.map(
            (item) =>
              item.active && (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.slug);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left text-lg px-4 py-2 rounded-md hover:bg-white/20 transition"
                >
                  {item.name}
                </button>
              )
          )}
          {authStatus && (
            <div className="mt-4">
              <LogoutBtn />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
