import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Client = new QueryClient({});
const App = () => {
  return (
    <div>
      <QueryClientProvider></QueryClientProvider>
    </div>
  );
};

export default App;
