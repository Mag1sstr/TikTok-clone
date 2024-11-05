import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Header from "./components/Header/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./components/AppRoutes";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="conteiner">
        <AppRoutes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
