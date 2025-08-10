//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store, persistor } from './redux/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './components/ThemeProvider.tsx'
import "@fontsource/inter";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
  <PersistGate persistor={ persistor } loading={null} >
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </PersistGate>
  </Provider>
);
