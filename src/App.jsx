import { Suspense } from "react";
import "./App.css";
import Navbar from "./componets/Navbar/Navbar";
import Pricing from "./componets/PricingOptions/Pricing";




const pricingDataPromise = fetch('/PricingData.json').then(res => res.json())

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback={<p>Data is loading...</p>}>
          <Pricing pricingDataPromise={pricingDataPromise}> </Pricing>
        </Suspense>
      </main>
    </>
  );
}

export default App;
