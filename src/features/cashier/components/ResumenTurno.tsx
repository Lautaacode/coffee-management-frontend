import React from 'react';

export const ResumenTurno: React.FC = () => {

  const datosCaja = {
    total: 32150,
    efectivo: 15800,
    digital: 16350,
    turno: "08:00 AM",
    cajero: "Elena P."
  };

  return (
    <div style={{ backgroundColor: '#2c3e50', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Resumen de Turno</h3>
      <h2 style={{ fontSize: '2rem', color: '#2ecc71', margin: '10px 0' }}>
        ${datosCaja.total.toLocaleString('es-AR')}
      </h2>
      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Ventas Turno {datosCaja.cajero}</p>
      
      <div style={{ margin: '15px 0', borderLeft: '4px solid #2ecc71', paddingLeft: '10px' }}>
        <span>● Caja Abierta - Turno {datosCaja.turno}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.9rem' }}>
        <div>Efectivo: <strong>${datosCaja.efectivo.toLocaleString('es-AR')}</strong></div>
        <div>Mercado Pago/Tarjeta: <strong>${datosCaja.digital.toLocaleString('es-AR')}</strong></div>
      </div>
    </div>
  );
};