import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import "./i18n/i18n";
import TranslationLoader from "./components/ui/TranslationLoader";

// Lazy load your routes for additional performance
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const App = () => {
  return (
    <BrowserRouter>
      <TranslationLoader>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </TranslationLoader>
    </BrowserRouter>
  );
};

export default App;