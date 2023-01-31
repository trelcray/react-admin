import { Routes, Route } from "react-router-dom";
import { Topbar } from "./pages/global/Topbar";
import { Sidebar } from "./pages/global/Sidebar";
import { DashBoard } from "./pages/dashboard";
/* import { Team } from "./pages/team";
import { InVoices } from "./pages/inVoices";
import { Contacts } from "./pages/contacts";
import { Bar } from "./pages/bar";
import { Form } from "./pages/form";
import { Line } from "./pages/line";
import { Pie } from "./pages/pie";
import { FAQ } from "./pages/faq";
import { Geography } from "./pages/geography";
import { Calendar } from "./pages/calendar"; */

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      {/* <Route path="/team" element={<Team />} />
              <Route path="/inVoices" element={<InVoices />} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} /> */}
    </Routes>
  );
}
