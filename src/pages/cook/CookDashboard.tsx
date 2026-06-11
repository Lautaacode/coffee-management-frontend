import React, { useState } from 'react';

interface PedidoCocina {
  id: number;
  mesa: number;
  items: string[];
  estado: 'pendiente' | 'preparando' | 'listo';
  tiempoMinutos: number;
}

const styles = {
  container: {
    padding: '24px',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', sans-serif"
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px'
  },
  column: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid #334155'
  },
  card: {
    backgroundColor: '#0f172a',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '12px',
    borderLeft: '5px solid #3498db'
  },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'opacity 0.2s'
  }
};

export const CookDashboard: React.FC = () => {
  const [pedidos, setPedidos] = useState<PedidoCocina[]>([
    { id: 101, mesa: 3, items: ['2x Café con leche', '1x Medialuna de grasa'], estado: 'pendiente', tiempoMinutos: 4 },
    { id: 102, mesa: 8, items: ['1x Submarino', '1x Tostado Jamón y Queso'], estado: 'preparando', tiempoMinutos: 12 },
    { id: 103, mesa: 2, items: ['1x Capuccino', '1x Porción Lemon Pie'], estado: 'pendiente', tiempoMinutos: 1 },
    { id: 104, mesa: 5, items: ['1x Licuado de Frutilla', '1x Tostado J&Q'], estado: 'listo', tiempoMinutos: 15 }
  ]);

  const cambiarEstado = (id: number, nuevoEstado: 'pendiente' | 'preparando' | 'listo') => {
    setPedidos(prev => prev.map(p => p.id === id ? { ...p, estado: nuevoEstado } : p));
  };

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0 }}>Monitor de Pedidos - Cocina</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Pantalla activa para Jefes de Cocina y Baristas</p>
        </div>
        <div style={{ backgroundColor: '#f59e0b', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', color: '#000' }}>
          Pedidos en cola: {pedidos.filter(p => p.estado !== 'listo').length}
        </div>
      </div>

      <div style={styles.grid}>
        {/* Columna Pendientes */}
        <div style={styles.column}>
          <h3 style={{ marginTop: 0, color: '#94a3b8', textTransform: 'uppercase' }}>Pendientes</h3>
          {pedidos.filter(p => p.estado === 'pendiente').map(p => (
            <div key={p.id} style={{ ...styles.card, borderLeftColor: '#ef4444' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '1.2rem' }}>Mesa #{p.mesa}</strong>
                <span style={{ color: '#ef4444' }}>Hace {p.tiempoMinutos} min</span>
              </div>
              <ul style={{ paddingLeft: '20px', color: '#cbd5e1' }}>{p.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
              <button style={{ ...styles.button, backgroundColor: '#3b82f6', color: 'white' }} onClick={() => cambiarEstado(p.id, 'preparando')}>Empezar a Preparar</button>
            </div>
          ))}
        </div>

        {/* Columna En Marcha */}
        <div style={styles.column}>
          <h3 style={{ marginTop: 0, color: '#94a3b8', textTransform: 'uppercase' }}>En Marcha</h3>
          {pedidos.filter(p => p.estado === 'preparando').map(p => (
            <div key={p.id} style={{ ...styles.card, borderLeftColor: '#f59e0b' }}>
              <strong>Mesa #{p.mesa}</strong>
              <ul style={{ paddingLeft: '20px', color: '#cbd5e1' }}>{p.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
              <button style={{ ...styles.button, backgroundColor: '#10b981', color: 'white' }} onClick={() => cambiarEstado(p.id, 'listo')}>Marcar como Listo</button>
            </div>
          ))}
        </div>

        {/* Columna Listos */}
        <div style={styles.column}>
          <h3 style={{ marginTop: 0, color: '#94a3b8', textTransform: 'uppercase' }}>Listos</h3>
          {pedidos.filter(p => p.estado === 'listo').map(p => (
            <div key={p.id} style={{ ...styles.card, borderLeftColor: '#10b981', opacity: 0.8 }}>
              <strong>Mesa #{p.mesa}</strong>
              <ul style={{ paddingLeft: '20px', color: '#94a3b8', textDecoration: 'line-through' }}>{p.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookDashboard;