import React from 'react';
import type { Mesa } from './GrillaMesas';

interface ModalCobroProps {
  mesa: Mesa;
  onClose: () => void;
}

export const ModalCobro: React.FC<ModalCobroProps> = ({ mesa, onClose }) => {

  const totalACobrar = mesa.id === 3 ? 3400 : 2100;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '30px',
        borderRadius: '12px',
        width: '400px',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
        border: '1px solid #34495e'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Mesa #{mesa.id}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#bdc3c7', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
        </div>

        <p style={{ color: '#bdc3c7', marginBottom: '10px' }}>Estado: <span style={{ color: '#f1c40f', fontWeight: 'bold' }}>{mesa.estado}</span></p>
        
        <div style={{ backgroundColor: '#1a252f', padding: '15px', borderRadius: '6px', marginBottom: '25px', textAlign: 'center' }}>
          <span style={{ fontSize: '1rem', color: '#bdc3c7' }}>Total a cobrar</span>
          <h1 style={{ fontSize: '2.5rem', color: '#2ecc71', margin: '5px 0' }}>${totalACobrar.toLocaleString('es-AR')}</h1>
        </div>

        <h4 style={{ marginBottom: '10px' }}>Seleccione método de pago:</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            style={{ padding: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#2ecc71', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => { alert('Pago en Efectivo Procesado'); onClose(); }}
          >
            💵 Efectivo
          </button>
          <button 
            style={{ padding: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#3498db', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => { alert('Pago con Mercado Pago Procesado'); onClose(); }}
          >
            📱 Mercado Pago / Tarjeta
          </button>
          <button 
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #7f8c8d', backgroundColor: 'transparent', color: '#bdc3c7', cursor: 'pointer', marginTop: '5px' }}
            onClick={() => alert('Imprimiendo ticket de control...')}
          >
            🖨️ Imprimir Ticket Pre-cuenta
          </button>
        </div>
      </div>
    </div>
  );
};