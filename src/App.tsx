import React from "react";
import Header from "./components/Header/Header";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import { VirtualRoute } from "./types/screens";

function App() {
  const [virtualRoute, setVirtualRoute] = React.useState<VirtualRoute>(
    VirtualRoute.HOME
  );

  const ScreenRouter = (route: VirtualRoute) => {
    switch (route) {
      case VirtualRoute.HOME:
        return <Home onChangeRoute={onChangeRoute} />;
      default:
        return <NotFound onChangeRoute={onChangeRoute} />;
    }
  };

  const onChangeRoute = (route: VirtualRoute) => {
    setVirtualRoute(route);
  };

  return (
    <div className="App">
      <Header />
      {ScreenRouter(virtualRoute)}
    </div>
  );
}

export default App;
