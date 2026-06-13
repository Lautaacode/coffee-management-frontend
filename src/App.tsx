import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LoginPage
  from "./features/auth/pages/LoginPage";

import DashboardPage
  from "./features/dashboard/pages/DashboardPage";

import DashboardLayout
  from "./shared/layouts/DashboardLayout";

import ProtectedRoute
  from "./core/routes/ProtectedRoute";

import RoleGuard
  from "./core/routes/RoleGuard";

import UsersPage
  from "./features/users/pages/UsersPage";

import ProductsPage
  from "./features/product/pages/ProductsPage";

import SuppliesPage
  from "./features/supply/pages/SuppliesPage";



import TablesPage
  from "./features/tables/pages/TablesPage";

import OrdersPage
  from "./features/orders/pages/OrdersPage";

import OrderItemsPage
  from "./features/orderitem/pages/OrderItemsPage";

import PaymentsPage
  from "./features/payment/pages/PaymentsPage";

import KitchenPage
  from "./features/kitchen/pages/KitchenPage";
import ProductSuppliesPage from "./features/productsupply/pages/ProductSuppliesPage";

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

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER"
              ]}
            >

              <UsersPage />

            </RoleGuard>

          }

        />

        <Route

          path="/products"

          element={

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER"
              ]}
            >

              <ProductsPage />

            </RoleGuard>

          }

        />

        <Route

          path="/supplies"

          element={

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER"
              ]}
            >

              <SuppliesPage />

            </RoleGuard>

          }

        />

        <Route

          path="/product-supplies"

          element={

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER"
              ]}
            >

              <ProductSuppliesPage />

            </RoleGuard>

          }

        />

        <Route

          path="/tables"

          element={

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER",
                "WAITER"
              ]}
            >

              <TablesPage />

            </RoleGuard>

          }

        />

        <Route

          path="/orders"

          element={

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER",
                "WAITER"
              ]}
            >

              <OrdersPage />

            </RoleGuard>

          }

        />

        <Route

          path="/orders/:id"

          element={

            <OrderItemsPage />

          }

        />

        <Route

          path="/payments"

          element={

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER",
                "CASHIER"
              ]}
            >

              <PaymentsPage />

            </RoleGuard>

          }

        />

        <Route

          path="/kitchen"

          element={

            <RoleGuard
              roles={[
                "SUPER_ADMIN",
                "MANAGER",
                "COOK"
              ]}
            >

              <KitchenPage />

            </RoleGuard>

          }

        />

      </Route>

    </Routes>

  );

}

export default App;