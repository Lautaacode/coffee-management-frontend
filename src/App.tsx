import { Routes, Route, Navigate } from 'react-router-dom'; 
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './features/admin/AdminDashboard';
import CashierDashboard from './features/cashier/pages/CashierDashboard';
import { CookDashboard } from './features/cook/CookDashboard';
import  WaiterDashboard  from './features/waiter/WaiterDashboard';
import { DashboardLayout } from './layouts/DashboardLayout';

function App() {
  return (
    <Routes>
      {/* Pantalla de Entrada principal */}
      <Route path="/login" element={<LoginPage />} />

      {/* Módulos independientes envueltos en el Layout Global */}
      <Route path="/admin" element={
        <DashboardLayout rolName="Administración">
          <AdminDashboard />
        </DashboardLayout>
      } />
      
      <Route path="/cashier" element={
        <DashboardLayout rolName="Caja / Facturación">
          <CashierDashboard />
        </DashboardLayout>
      } />
      
      <Route path="/cook" element={
        <DashboardLayout rolName="Cocina / Barista">
          <CookDashboard />
        </DashboardLayout>
      } />
      
      <Route path="/waiter" element={
        <DashboardLayout rolName="Mesero / Mozo">
          <WaiterDashboard />
        </DashboardLayout>
      } />

      {/* Comodín de redirección */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;