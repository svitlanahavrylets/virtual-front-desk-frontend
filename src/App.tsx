import { useEffect } from "react";
import { getSessionToken } from "./api/api";
import Worksheet from "./pages/Worksheet";

function App() {
  useEffect(() => {
    getSessionToken();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Worksheet />
    </div>
  );
}

export default App;
