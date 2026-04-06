import React, { useState } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

function App() {
  const [items, setItems] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newItems = files.map((file) => ({
      id: URL.createObjectURL(file),
      image: URL.createObjectURL(file),
      price: "",
      description: "",
    }));
    setItems([...items, ...newItems]);
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const whatsappLink = (item) => {
    const text = `Hola! Me interesa: ${item.description} Precio: ${item.price}`;
    return `https://wa.me/5492954821909?text=${encodeURIComponent(text)}`;
  };

  return (
    <div style={{padding:20,fontFamily:"sans-serif"}}>
      <h1 style={{textAlign:"center"}}>Gise Style ♡</h1>

      <input type="file" multiple onChange={handleUpload} />

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:20}}>
        {items.map(item => (
          <div key={item.id} style={{border:"1px solid #ccc",padding:10}}>
            <img src={item.image} style={{width:"100%"}} />
            <input placeholder="Descripción" onChange={(e)=>updateItem(item.id,"description",e.target.value)} />
            <input placeholder="Precio" onChange={(e)=>updateItem(item.id,"price",e.target.value)} />
            <a href={whatsappLink(item)} target="_blank">
              <button>Comprar</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
