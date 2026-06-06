import React, { useState } from 'react';

type TabType = 'general' | 'personal' | 'reportes';

const inputStyle: React.CSSProperties = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #334155',
  backgroundColor: '#0f172a',
  color: '#f8fafc',
  fontSize: '0.95rem',
  width: '100%',
  boxSizing: 'border-box'
};

export const AdminDashboard: React.FC = () => {
  const [tabActiva, setTabActiva] = useState<TabType>('general');
  const [modalAbierto, setModalAbierto] = useState<boolean>(false);
  
  const [personal] = useState({ meseros: 3, cocineros: 2, cajeros: 1 });
  
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [puesto, setPuesto] = useState('Mesero');

  const esMovil = window.innerWidth < 768;

  const handleRegistrar = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registrando a: ${nombre}\nDNI: ${dni}\nRol: ${puesto}`);
    setNombre(''); setDni(''); setCorreo(''); setPassword(''); setPuesto('Mesero');
    setModalAbierto(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: esMovil ? 'column' : 'row', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>

      {/* SIDEBAR */}
      <div style={{ width: esMovil ? '100%' : '240px', backgroundColor: '#1e293b', padding: '20px', borderRight: '1px solid #334155' }}>
        <h3 style={{ color: '#94a3b8', marginBottom: '30px' }}>ADMIN PANEL</h3>
        {(['general', 'personal', 'reportes'] as TabType[]).map((tab) => (
          <button 
            key={tab}
            onClick={() => setTabActiva(tab)}
            style={{ display: 'block', width: '100%', padding: '12px', marginBottom: '10px', backgroundColor: tabActiva === tab ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: '600' }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ flex: 1, padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: esMovil ? '1.2rem' : '1.5rem' }}>Gestión {tabActiva.charAt(0).toUpperCase() + tabActiva.slice(1)}</h2>
          <button onClick={() => setModalAbierto(true)} style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            {esMovil ? '+' : '+ Nuevo Personal'}
          </button>
        </div>

        {tabActiva === 'general' && (
           <div style={{ 
             display: 'grid', 
             gridTemplateColumns: esMovil ? '1fr' : 'repeat(3, 1fr)', 
             gap: '20px' 
           }}>
             {/* Tarjeta Ventas */}
             <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '16px', border: '1px solid #334155' }}>
               <p style={{ color: '#94a3b8', margin: '0 0 10px 0' }}>Ventas del Día</p>
               <h1 style={{ color: '#10b981', margin: '5px 0' }}>$12,345</h1>
             </div>

             {/* Tarjeta Personal */}
             <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '16px', border: '1px solid #334155' }}>
               <p style={{ color: '#94a3b8', margin: '0 0 10px 0' }}>Personal Activo</p>
               <div style={{ fontSize: '0.9rem' }}>
                  <p style={{ margin: '5px 0' }}>Meseros: <strong>{personal.meseros}</strong></p>
                  <p style={{ margin: '5px 0' }}>Cocineros: <strong>{personal.cocineros}</strong></p>
                  <p style={{ margin: '5px 0' }}>Cajeros: <strong>{personal.cajeros}</strong></p>
               </div>
             </div>

             {/* Tarjeta Pedidos */}
             <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '16px', border: '1px solid #334155' }}>
               <p style={{ color: '#94a3b8', margin: '0 0 10px 0' }}>Pedidos Recientes</p>
               <div style={{ fontSize: '0.85rem' }}>
                 <p style={{ margin: '5px 0' }}>Mesa 3 - Pedido #21</p>
                 <p style={{ margin: '5px 0' }}>Mesa 8 - Pedido #18</p>
               </div>
             </div>
           </div>
        )}
      </div>

      {/* MODAL */}
      {modalAbierto && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', width: '100%', maxWidth: '400px', border: '1px solid #334155' }}>
            <h3 style={{ marginTop: 0 }}>Registrar Nuevo Personal</h3>
            <form onSubmit={handleRegistrar} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input type="text" placeholder="Nombre Completo" value={nombre} onChange={e => setNombre(e.target.value)} style={inputStyle} required />
              <input type="text" placeholder="DNI (sin puntos)" value={dni} onChange={e => setDni(e.target.value)} style={inputStyle} required />
              <input type="email" placeholder="Correo Electrónico" value={correo} onChange={e => setCorreo(e.target.value)} style={inputStyle} required />
              <input type="password" placeholder="Contraseña Temporal" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} required />
              <select value={puesto} onChange={e => setPuesto(e.target.value)} style={inputStyle}>
                <option value="Mesero">Mesero</option>
                <option value="Cajero">Cajero</option>
                <option value="Cocinero">Cocinero</option>
                <option value="Gerente">Gerente</option>
              </select>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setModalAbierto(false)} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: '#475569' }}>Cancelar</button>
                <button type="submit" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#10b981', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Guardar Empleado</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;