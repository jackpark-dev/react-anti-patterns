import React from "react";

export default function Navbar({ count }: { count: number }) {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>{count}</li>
        <li>
          <div>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
