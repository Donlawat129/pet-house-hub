import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

/*
 * Navigation Bar – pastel gradient + glass + sticky.
 * - Responsive: hamburger menu on mobile
 * - Active route highlight
 * - CTA button (Explore)
 * - Matches your hero theme: soft gradient + rounded-2xl + blur
 */

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // กำหนดเมนูหลัก (แก้/เพิ่มได้ตามต้องการ)
  const links = useMemo(
    () => [
      { to: "/", label: "หน้าแรก" },
      { to: "/pets", label: "สัตว์ทั้งหมด" },
      { to: "/guides", label: "คู่มือเลี้ยง" },
      { to: "/about", label: "เกี่ยวกับเรา" },
      { to: "/contact", label: "ติดต่อ" },
    ],
    []
  );

  // ฟังก์ชันเช็ค active route
  const isActive = (to: string) =>
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to));

  return (
    <header
      className="
        sticky top-0 z-50
        px-4 sm:px-6 lg:px-10
        pt-4
      "
    >
      <nav
        className="
          mx-auto max-w-6xl
          rounded-2xl
          shadow-sm
          backdrop-blur-md
          border border-white/40
          bg-white/30
          /* ไล่เฉดพาสเทลอ่อนเข้ากับภาพ */
          bg-gradient-to-r from-cyan-50/70 via-pink-50/70 to-green-50/70
        "
        aria-label="Main"
      >
        {/* แถวบน */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              {/* โลโก้ไอคอนน่ารัก ๆ (SVG เบา ๆ) */}
              <span
                className="
                  inline-flex h-9 w-9 items-center justify-center
                  rounded-xl
                  shadow
                  bg-gradient-to-br from-sky-200 to-pink-200
                  border border-white/60
                "
                aria-hidden
              >
                🐾
              </span>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-sky-700">
                Pet House
              </span>
            </Link>
          </div>

          {/* เมนู Desktop */}
          <ul className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={[
                    "px-3 py-2 rounded-lg text-sm font-medium transition",
                    "hover:bg-white/60 hover:shadow",
                    isActive(l.to)
                      ? "bg-white/70 text-sky-700 shadow"
                      : "text-slate-600"
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              to="/pets"
              className="
                hidden sm:inline-flex items-center
                px-4 py-2 text-sm font-semibold
                rounded-xl
                text-white shadow
                transition
                hover:opacity-95
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300
                bg-gradient-to-r from-sky-400 via-pink-400 to-green-400
              "
            >
              Explore
            </Link>

            {/* ปุ่มเปิดเมนูมือถือ */}
            <button
              className="
                md:hidden inline-flex items-center justify-center
                h-10 w-10 rounded-lg
                border border-white/60
                bg-white/50
                hover:bg-white/70
                transition
              "
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className="h-5 w-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {open ? (
                  // X icon
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  // Hamburger icon
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* เมนู Mobile (slide down) */}
        {open && (
          <div className="md:hidden px-3 pb-3">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={[
                      "block w-full px-3 py-2 rounded-lg text-base transition",
                      "hover:bg-white/70 hover:shadow",
                      isActive(l.to)
                        ? "bg-white/80 text-sky-700 shadow"
                        : "text-slate-700"
                    ].join(" ")}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/pets"
                  className="
                    inline-flex items-center justify-center w-full
                    px-4 py-2 text-sm font-semibold
                    rounded-xl
                    text-white shadow
                    transition
                    hover:opacity-95
                    bg-gradient-to-r from-sky-400 via-pink-400 to-green-400
                  "
                  onClick={() => setOpen(false)}
                >
                  Explore
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
