import Header from "./components/Header/Header";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

import Demo from "./screens/Demo";
import { VirtualPath } from "./types/screens";
import { useAppSelector } from "./hooks/useAppDispatch";

function App() {
  const { path } = useAppSelector((state) => state.virtualRouter);

  return (
    <div className="App">
      <Header />
      {path === VirtualPath.HOME ? (
        <Home />
      ) : path === VirtualPath.DEMO ? (
        <Demo />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default App;
