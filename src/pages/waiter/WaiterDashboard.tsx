import React, { useState } from 'react';
import { GrillaMesas, type Mesa, type Producto } from '../cashier/components/GrillaMesas';

const MENU_DISPONIBLE: Producto[] = [
  { id: 1, nombre: 'Café', precio: 1500 },
  { id: 2, nombre: 'Capuccino', precio: 1800 },
  { id: 3, nombre: 'Medialuna', precio: 600 },
  { id: 4, nombre: 'Tostado', precio: 2500 },
];

export const WaiterDashboard: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>([
    { id: 1, estado: 'Libre', productos: [] },
    { id: 2, estado: 'Libre', productos: [] },
    { id: 3, estado: 'Libre', productos: [] },
    { id: 4, estado: 'Libre', productos: [] },
  ]);
  const [mesaSeleccionada, setMesaSeleccionada] = useState<Mesa | null>(null);

  const agregarProducto = (producto: Producto) => {
    if (!mesaSeleccionada) return;
    setMesas(prev => prev.map(m => 
      m.id === mesaSeleccionada.id ? { ...m, productos: [...m.productos, producto], estado: 'Ocupada' } : m
    ));
    setMesaSeleccionada(prev => prev ? {...prev, productos: [...prev.productos, producto], estado: 'Ocupada'} : null);
  };

  const enviarACocina = () => {
    alert(`Comanda Mesa ${mesaSeleccionada?.id} enviada a cocina`);
    setMesaSeleccionada(null);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ padding: '20px', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Comanda Digital - Meseros</h1>

      {/* 1. Selección de Mesa */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>1. Seleccionar Mesa del Cliente</h3>
        <GrillaMesas mesas={mesas} onSeleccionarMesa={setMesaSeleccionada} />
      </section>

      {/* 2. Menú y Comanda */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '30px' }}>
        
        {/* Sección Menú */}
        <div style={{ flex: 2 }}>
          <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>2. Productos del Menú</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
            {MENU_DISPONIBLE.map(prod => (
              <button 
                key={prod.id} 
                onClick={() => agregarProducto(prod)}
                style={{ 
                  padding: '20px 10px', backgroundColor: '#1e293b', border: '1px solid #334155', 
                  borderRadius: '12px', color: '#e2e8f0', cursor: 'pointer', fontWeight: 'bold' 
                }}
              >
                {prod.nombre} <br/> 
                <span style={{ color: '#fbbf24' }}>${prod.precio}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sección Comanda */}
        {mesaSeleccionada && (
          <div style={{ 
            flex: 1, backgroundColor: '#1e293b', padding: '20px', 
            borderRadius: '16px', border: '1px solid #334155', height: 'fit-content' 
          }}>
            <h3>Comanda Mesa #{mesaSeleccionada.id}</h3>
            <div style={{ marginBottom: '15px', borderTop: '1px solid #334155', paddingTop: '10px' }}>
              {mesaSeleccionada.productos.map((p, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>{p.nombre}</span>
                  <span>${p.precio}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px', color: '#fbbf24' }}>
              Total: ${mesaSeleccionada.productos.reduce((a, b) => a + b.precio, 0)}
            </div>
            <button 
              onClick={enviarACocina}
              style={{ 
                display: 'block', width: '100%', padding: '15px', backgroundColor: '#e67e22', 
                border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' 
              }}
            >
              Enviar Pedido a Cocina
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaiterDashboard;