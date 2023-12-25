import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="max-w-screen-xl mx-auto">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </div>
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>
);
