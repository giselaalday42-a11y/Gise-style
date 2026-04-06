import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";


export default function FeriaRopaPage() {
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
const text = Hola! Me interesa esta prenda:%0A${item.description}%0APrecio: ${item.price};
return https://wa.me/5492954821909?text=${text};
};


return (




Gise Style ♡




Ropa de segunda mano • Elegí, consultá y comprá por WhatsApp




  <div className="flex justify-center mb-6">
    <label className="cursor-pointer">
      <input
        type="file"
        multiple
        className="hidden"
        onChange={handleUpload}
      />
      <Button className="flex gap-2">
        <Upload size={18} /> Subir fotos
      </Button>
    </label>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {items.map((item) => (
      <Card key={item.id} className="rounded-2xl shadow">
        <CardContent className="p-2">
          <img
            src={item.image}
            alt="Prenda de ropa"
            className="w-full h-48 object-cover rounded-xl mb-2"
          />

          <input
            type="text"
            placeholder="Descripción (ej: Remera Nike talle M)"
            value={item.description}
            onChange={(e) => updateItem(item.id, "description", e.target.value)}
            className="w-full mb-1 p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Precio (ej: $8000)"
            value={item.price}
            onChange={(e) => updateItem(item.id, "price", e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />

          <a href={whatsappLink(item)} target="_blank">
            <Button className="w-full">Consultar por WhatsApp</Button>
          </a>
        </CardContent>
      </Card>
    ))}
  </div>
</div>



);
}

