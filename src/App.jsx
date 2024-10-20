import { useState } from "react";
import Counter from "./components/Counter";
import Footer from "./components/footer";
import Header from "./components/Header";
import Shop from "./components/Shop";

function App() {
  const [count, setCount] = useState(0);
  const [boost, setBoost] = useState(1);

  function plusCount() {
    setCount((prev) => prev + boost);
  }

  function minusCount(price) {
    setCount((prev) => prev - price);
  }

  return (
    <>
      <Header />
      <main className="main">
        <Counter count={count} plusCount={plusCount} />
        <Shop
          count={count}
          boost={boost}
          setBoost={setBoost}
          minusCount={minusCount}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
