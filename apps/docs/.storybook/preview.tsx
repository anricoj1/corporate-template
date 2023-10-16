// react
import React from "react";

// tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// storybook
import { Decorator, Parameters } from "@storybook/react";

// acme
import "@acme/core/dist/index.css";
import "../stories/styles.css";

const queryClient = new QueryClient();

export const parameters: Parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: Decorator[] = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
];
