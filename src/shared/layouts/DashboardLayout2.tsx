import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a252f', display: 'flex', flexDirection: 'column' }}>
      
      {/* Barra de Navegación / Topbar Global Responsiva */}
      <div style={{
        backgroundColor: '#2c3e50',
        padding: '10px 15px',
        display: 'flex',
        flexWrap: 'wrap',       
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',            
        borderBottom: '2px solid #34495e',
        color: 'white',
        fontFamily: 'sans-serif'
      }}>
        
        {/* Sección del Logo y el Rol */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          flexWrap: 'wrap'       
        }}>
          <span style={{ fontSize: '1.1rem' }}>☕</span>
          <strong style={{ letterSpacing: '0.5px', fontSize: '0.9rem' }}>COFFEE-MANAGEMENT</strong>
          <span style={{
            backgroundColor: '#e67e22',
            padding: '3px 8px',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap' 
          }}>
          </span>
        </div>
        
        {/* Botón de Salida Adaptado */}
        <button
          onClick={() => navigate('/login')}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '6px 14px',
            borderRadius: '6px',
            fontSize: '0.85rem', 
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginLeft: 'auto'   
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c0392b')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e74c3c')}
        >
          🚪 Cerrar Sesión
        </button>
      </div>

      {/* Contenido dinámico del Dashboard */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};