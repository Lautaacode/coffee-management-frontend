import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const [rol, setRol] = useState('admin');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirección dinámica según el rol seleccionado
    if (rol === 'admin') navigate('/admin');
    else if (rol === 'cashier') navigate('/cashier');
    else if (rol === 'cook') navigate('/cook');
    else if (rol === 'waiter') navigate('/waiter');
  };

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#1a252f', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#2c3e50', padding: '40px', borderRadius: '12px',
        width: '360px', boxShadow: '0px 8px 24px rgba(0,0,0,0.3)', 
        textAlign: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '1.8rem', margin: '0 0 10px 0' }}>☕ Coffe-Management</h1>
        <p style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '30px' }}>Inicia sesión para acceder a tu puesto</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
            <label style={{ color: '#bdc3c7', fontSize: '0.85rem' }}>Usuario / Email</label>
            <input type="text" disabled placeholder="empleado@cafeteria.com" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #34495e', backgroundColor: '#1a252f', color: '#7f8c8d', cursor: 'not-allowed' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
            <label style={{ color: '#bdc3c7', fontSize: '0.85rem' }}>Simular Puesto de Trabajo</label>
            <select 
              value={rol} 
              onChange={(e) => setRol(e.target.value)}
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #34495e', backgroundColor: '#1a252f', color: 'white', cursor: 'pointer', fontSize: '1rem' }}
            >
              <option value="admin">Gerente / Administrador 👑</option>
              <option value="cashier">Cajero / Facturación 💵</option>
              <option value="cook">Cocinero / Barista 🍳</option>
              <option value="waiter">Mesero / Mozo 📱</option>
            </select>
          </div>

          <button type="submit" style={{ padding: '14px', borderRadius: '6px', border: 'none', backgroundColor: '#e67e22', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '10px', transition: 'background 0.2s' }}>
            Ingresar al Panel
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;