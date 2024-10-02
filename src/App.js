import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  const Home = lazy(() => import("./components/Home"));

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
