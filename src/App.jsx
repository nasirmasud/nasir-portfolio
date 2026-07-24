import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AllProjects from "./pages/AllProjects";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/all-projects' element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
