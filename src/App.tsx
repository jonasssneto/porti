import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavigateTabs } from "./components/Tabs";
import { ThemeProvider } from "./components/Theme/Provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-full flex-col p-8 min-h-screen">
        <div>
          <Header />
        </div>
        <NavigateTabs />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
