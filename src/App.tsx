import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LoginPage
  from "./features/auth/pages/LoginPage";

import DashboardPage
  from "./features/dashboard/pages/DashboardPage";

import ProductsPage
  from "./features/product/pages/ProductsPage";

import ProtectedRoute
  from "./core/routes/ProtectedRoute";

import DashboardLayout
  from "./shared/layouts/DashboardLayout";
import CreateProductPage from "./features/product/pages/CreateProductPage";
import EditProductPage from "./features/product/pages/EditProductPage";
import TablesPage from "./features/tables/pages/TablesPage";
import OrdersPage from "./features/orders/pages/OrdersPage";
import OrderDetailsPage from "./features/orderitem/pages/OrderItemsPage";
import KitchenPage from "./features/orders/pages/KitchenPage";
import PaymentsPage from "./features/payment/pages/PaymentsPage";
import UsersPage from "./features/users/pages/UsersPage";

import CreateSupplyPage from "./features/supply/pages/CreateSupplyPage";
import EditSupplyPage from "./features/supply/pages/EditSupplyPage";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={
          <Navigate
            to="/login"
          />
        }
      />

      <Route
        path="/login"
        element={
          <LoginPage />
        }
      />

      <Route
        element={
          <ProtectedRoute>

            <DashboardLayout />

          </ProtectedRoute>
        }
      >

        <Route
          path="/dashboard"
          element={
            <DashboardPage />
          }
        />
        <Route
          path="/users"
          element={
            <UsersPage />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage />
          }
        />
        <Route
          path="/products/create"
          element={
            <CreateProductPage />
          }
        />

        <Route
          path="/products/edit/:id"
          element={
            <EditProductPage />
          }
        />
        {/* <Route
          path="/supplies"
          element={
            <SuppliesPage />
          }
        /> */}

        <Route
          path="/supplies/create"
          element={
            <CreateSupplyPage />
          }
        />

        <Route
          path="/supplies/edit/:id"
          element={
            <EditSupplyPage />
          }
        />
        <Route
          path="/payments"
          element={
            <PaymentsPage />
          }
        />
        <Route
          path="/tables"
          element={
            <TablesPage />
          }
        />
        <Route
          path="/orders"
          element={
            <OrdersPage />
          }
        />
        <Route
          path="/orders/:id"
          element={
            <OrderDetailsPage />
          }
        />
        <Route
          path="/kitchen"
          element={
            <KitchenPage />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;