import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import "./i18n/i18n";
import TranslationLoader from "./components/ui/TranslationLoader";
import ScrollToTop from "./components/ui/ScrollToTop";

// Lazy load your routes for additional performance
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TranslationLoader>
        <AppRoutes />
      </TranslationLoader>
    </BrowserRouter>
  );
};

export default App;