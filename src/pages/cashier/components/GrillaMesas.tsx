export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

export interface Mesa {
  id: number;
  estado: 'Libre' | 'Ocupada' | 'En Pago';
  productos: Producto[]; 
}

interface GrillaMesasProps {
  mesas: Mesa[];
  onSeleccionarMesa: (mesa: Mesa) => void;
}


export const GrillaMesas: React.FC<GrillaMesasProps> = ({ mesas, onSeleccionarMesa }) => {
  const getBackgroundColor = (estado: string) => {
    switch (estado) {
      case 'Libre': return '#27ae60';   
      case 'Ocupada': return '#e67e22'; 
      case 'En Pago': return '#c0392b'; 
      default: return '#7f8c8d';        
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {mesas.map(m => (
        <button 
          key={m.id} 
          onClick={() => onSeleccionarMesa(m)}
          style={{ 
            backgroundColor: getBackgroundColor(m.estado), 
            padding: '20px', 
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease' 
          }}
        >
          Mesa {m.id}
          <div style={{ fontSize: '0.75rem', marginTop: '5px', opacity: 0.9 }}>
            {m.estado}
          </div>
        </button>
      ))}
    </div>
  );
};