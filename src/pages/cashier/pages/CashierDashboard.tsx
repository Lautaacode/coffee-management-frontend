import React, { useState } from 'react';
import { ResumenTurno } from '../components/ResumenTurno';
import { GrillaMesas, type Mesa } from '../components/GrillaMesas';
import { ModalCobro } from '../components/ModalCobro';

const CashierDashboard: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>([
    { id: 1, estado: 'Libre', productos: [] },
    { id: 2, estado: 'Ocupada', productos: [] },
    { id: 3, estado: 'Libre', productos: [] },
    { id: 4, estado: 'En Pago', productos: [] },
  ]);
  const [mesaSeleccionada, setMesaSeleccionada] = useState<Mesa | null>(null);

  const cambiarEstadoMesa = (nuevoEstado: 'Libre' | 'Ocupada' | 'En Pago') => {
    if (!mesaSeleccionada) return;
    setMesas(prevMesas => 
      prevMesas.map(m => m.id === mesaSeleccionada.id ? { ...m, estado: nuevoEstado } : m)
    );
    setMesaSeleccionada(null);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row', 
      minHeight: '100vh', 
      backgroundColor: '#0f172a', 
      color: '#f8fafc', 
      fontFamily: 'sans-serif' 
    }}>
      
      {/* Sidebar estilo oscuro */}
      <aside style={{ width: isMobile ? '100%' : '240px', backgroundColor: '#1e293b', padding: '20px', borderRight: '1px solid #334155' }}>
        <h4 style={{ color: '#94a3b8', marginBottom: '5px' }}>Elena P.</h4>
        <p style={{ fontSize: '0.85rem', color: '#38bdf8' }}>Cajero</p>
      </aside>

      <main style={{ flex: 1, padding: '30px' }}>
        <h2 style={{ marginBottom: '25px' }}>Dashboard de Caja - Monitor de Cobro</h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ResumenTurno />
            
            {/* Panel de Control Dinámico con estilo de tarjeta */}
            {mesaSeleccionada && (
              <div style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '16px', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)' }}>
                <h3 style={{ marginTop: 0 }}>Control Mesa #{mesaSeleccionada.id}</h3>
                <p style={{ color: '#94a3b8' }}>Estado actual: <strong style={{ color: '#f8fafc' }}>{mesaSeleccionada.estado}</strong></p>
                
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                  {mesaSeleccionada.estado === 'Libre' && (
                    <button onClick={() => cambiarEstadoMesa('Ocupada')} style={{ padding: '12px 20px', backgroundColor: '#3b82f6', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                      ✅ Ocupar Mesa
                    </button>
                  )}
                  {mesaSeleccionada.estado === 'Ocupada' && (
                    <button onClick={() => cambiarEstadoMesa('En Pago')} style={{ padding: '12px 20px', backgroundColor: '#eab308', border: 'none', borderRadius: '8px', color: '#0f172a', fontWeight: 'bold', cursor: 'pointer' }}>
                      💳 Pasar a "En Pago"
                    </button>
                  )}
                  {mesaSeleccionada.estado === 'En Pago' && (
                    <button onClick={() => cambiarEstadoMesa('Libre')} style={{ padding: '12px 20px', backgroundColor: '#ef4444', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                      ❌ Cancelar y Liberar
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <GrillaMesas 
              mesas={mesas} 
              onSeleccionarMesa={(m) => setMesaSeleccionada(m)} 
            />
          </div>
        </div>
      </main>

      {mesaSeleccionada?.estado === 'En Pago' && (
        <ModalCobro mesa={mesaSeleccionada} onClose={() => setMesaSeleccionada(null)} />
      )}
    </div>
  );
};

export default CashierDashboard;