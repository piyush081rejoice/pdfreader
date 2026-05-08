import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

// Simple router for now - will be enhanced once routes are properly set up
export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
