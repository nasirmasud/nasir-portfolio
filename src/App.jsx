import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AllProjects from "./pages/AllProjects";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/all-projects' element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
