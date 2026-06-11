import React, { useState } from 'react';

interface ModalNuevoUsuarioProps {
  onClose: () => void;
}

export const ModalNuevoUsuario: React.FC<ModalNuevoUsuarioProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    email: '',
    password: '',
    rol: 'waiter'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const dniLimpio = formData.dni.replace(/\s+/g, '').replace(/\./g, '');
    if (isNaN(Number(dniLimpio))) {
      alert('Por favor, ingresa un DNI válido (solo números).');
      return;
    }

    alert(`Usuario registrado con éxito:\nNombre: ${formData.nombre}\nRol: ${formData.rol}`);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#2c3e50', color: 'white', padding: '25px',
        borderRadius: '12px', width: '450px', boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
        border: '1px solid #34495e', fontFamily: 'sans-serif'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Registrar Nuevo Personal</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#bdc3c7', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.85rem', color: '#bdc3c7' }}>Nombre Completo</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #34495e', backgroundColor: '#1a252f', color: 'white' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.85rem', color: '#bdc3c7' }}>DNI (sin puntos)</label>
            <input type="text" name="dni" value={formData.dni} onChange={handleChange} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #34495e', backgroundColor: '#1a252f', color: 'white' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.85rem', color: '#bdc3c7' }}>Correo Electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #34495e', backgroundColor: '#1a252f', color: 'white' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.85rem', color: '#bdc3c7' }}>Contraseña Temporal</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #34495e', backgroundColor: '#1a252f', color: 'white' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.85rem', color: '#bdc3c7' }}>Rol del Empleado</label>
            <select name="rol" value={formData.rol} onChange={handleChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #34495e', backgroundColor: '#1a252f', color: 'white', cursor: 'pointer' }}>
              <option value="waiter">Mesero</option>
              <option value="cashier">Cajero</option>
              <option value="cook">Cocinero</option>
              <option value="admin">Gerente</option>
            </select>
          </div>

          <button type="submit" style={{ padding: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#2ecc71', color: 'white', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
            Guardar Empleado
          </button>
        </form>
      </div>
    </div>
  );
};