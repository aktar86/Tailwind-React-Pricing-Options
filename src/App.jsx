import { Suspense } from "react";
import "./App.css";
import Navbar from "./componets/Navbar/Navbar";
import Pricing from "./componets/PricingOptions/Pricing";
import Resultcharts from "./componets/ResultCharts/Resultcharts";
import axios from "axios";
import MarktsCharts from "./componets/MarksChart/MarktsCharts";





const pricingDataPromise = fetch('/PricingData.json').then(res => res.json())

 
const marksPromise = axios.get('StudentMark.json')

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
      <Suspense fallback={<p>Data is loading...</p>}>
        <MarktsCharts marksPromise={marksPromise}></MarktsCharts>
      </Suspense>
      <Resultcharts></Resultcharts>
    </>
  );
}

export default App;
