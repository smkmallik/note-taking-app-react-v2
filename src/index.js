import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ArchiveProvider, AuthProvider, DeleteProvider, FilterProvider, NoteProvider } from "./context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <NoteProvider>
            <DeleteProvider>
              <ArchiveProvider>
                <App />
              </ArchiveProvider>
            </DeleteProvider>
          </NoteProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
