import React, { useState } from "react";
import "./App.css";
import Page from "./Page";
import Navbar from "./shared/component/Navbar";

function App() {
  const [count] = useState<number>(0);

  const handleIt = (e: React.ChangeEvent<HTMLInputElement>, v: number) => {
    console.log(e, v);
  };

  /** Curried function */
  const handleIt2 = (v: number) => {
    return (e: any) => console.log(e, v);
  };

  const handleIt3 = (v: number) => (e: any) => console.log(e, v);

  return (
    <main>
      <Navbar count={count} />
      <Article />
      {/** Page */}
      <Page />

      <div>
        <input onChange={(e) => handleIt(e, 1)} />
        <input onChange={handleIt3(2)} />
      </div>
    </main>
  );
}

export default App;

function Article({}) {
  return (
    <article>
      <h1>Home</h1>
      <div className="card">
        <h2>Title</h2>
        <p>Body</p>
      </div>
    </article>
  );
}
