"use client";

import Link from "next/link";
import style from "./authLinks.module.css";
import { useState, useEffect } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  // Below code to make sure once we move from mobile to desktop size, even if we have left the miniMenu open we close it for next time screen changes
  // Choose the screen size
  const handleResize = () => {
    console.log("Called");
    if (window.innerWidth > 640) {
      setOpen(false);
    }
  };
  // Create an event listener for screen size changes
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={style.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={style.link}>
            Write
          </Link>
          <span className={style.link}>Logout</span>
        </>
      )}
      <div className={style.miniMenu} onClick={() => setOpen((prev) => !prev)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
        {open && (
          <div className={style.responsiveMenu}>
            <Link href="/">Homepage</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            {status === "notauthenticated" ? (
              <Link href="/login">Login</Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span className="cursor-pointer">Logout</span>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
