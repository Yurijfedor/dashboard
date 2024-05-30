import React, { lazy, Suspense } from "react";
import { Greeting } from "./greeting/Greeting";

const components = {
  dashboard: lazy(() => import("../pages/Dashboard")),
  product: lazy(() => import("../pages/Product")),
  customers: lazy(() => import("../pages/customersPage/Customers")),
  income: lazy(() => import("../pages/Income")),
  promote: lazy(() => import("../pages/Promote")),
  help: lazy(() => import("../pages/Help")),
};

export const PageRenderer = ({ page, user }) => {
  if (!components[page]) {
    return <div>Page "{page}" not found</div>;
  }

  const Component = components[page];
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Greeting user={user} />
      <Component />
    </Suspense>
  );
};
