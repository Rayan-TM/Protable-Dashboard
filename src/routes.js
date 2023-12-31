import {
  DashboardSales,
  DashboardSupport,
  Chat,
  Login,
  NewContact,
  PasswordRecovery,
  PriceTable,
  Product,
  Products,
  Profile,
  Register,
  Todo,
  Contacts,
  NotFound,
  EditContact
} from "./pages";

import { PrivateRoute } from "./components";

const routes = [
  { path: "/", element: <PrivateRoute><DashboardSales /></PrivateRoute> },
  { path: "/dashboard_support", element: <PrivateRoute><DashboardSupport /></PrivateRoute> },
  { path: "/chat", element: <PrivateRoute><Chat /></PrivateRoute> },
  { path: "/login", element: <Login /> },
  { path: "/new_contact", element: <PrivateRoute><NewContact /></PrivateRoute> },
  { path: "/edit_contact/:contactID", element: <PrivateRoute><EditContact /></PrivateRoute>},
  { path: "/password_recovery", element: <PasswordRecovery /> },
  { path: "/price_table", element: <PrivateRoute><PriceTable /></PrivateRoute> },
  { path: "/product/:productID", element: <PrivateRoute><Product /></PrivateRoute> },
  { path: "/products", element: <PrivateRoute><Products /></PrivateRoute> },
  { path: "/profile", element: <PrivateRoute><Profile /></PrivateRoute> },
  { path: "/register", element: <Register /> },
  { path: "/todo", element: <PrivateRoute><Todo /></PrivateRoute> },
  { path: "/contacts", element: <PrivateRoute><Contacts /></PrivateRoute> },
  { path: "*", element: <NotFound /> },
];

export default routes;
