import React, { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "@/router";
import MYAppHeader from "./components/app-header";
import MYAppFooter from "./components/app-footer";
import AppPlayerBar from "./pages/player/app-player-bar";
import store from "@/store";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MYAppHeader />
        <Suspense fallback={<div>Page loading</div>}>{renderRoutes(routes)}</Suspense>
        <MYAppFooter />
        <AppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
