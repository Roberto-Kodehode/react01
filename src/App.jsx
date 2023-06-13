// import { useState } from 'react'
// import React from "react";
import Card from "./Components/Card/Card";
import AllArticles from "./Data/Articles";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Blågg</h1>
      </header>

      {
        <main>
          {AllArticles.map((article) => (
            <Card
              key={article.slug}
              author={article.author}
              username={article.author.username}
              createdAt={article.createdAt}
              favoritesCount={article.favoritesCount}
              title={article.title}
              body={article.body}
            />
          ))}
        </main>
      }

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
