import { Routes, Route , Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Step6 from "./pages/Step6";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/step1" element={<Step1 />}></Route>
        <Route path="/step2" element={<Step2 />}></Route>
        <Route path="/step3" element={<Step3 />}></Route>
        <Route path="/step4" element={<Step4 />}></Route>
        <Route path="/step5" element={<Step5 />}></Route>
        <Route path="/step6" element={<Step6 />}></Route> 
      </Route>
   
    </Routes>
  );
}

export default App;
