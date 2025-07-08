export default function Contato() {
  return (
    <div className="min-h-screen bg-white text-blue-900 p-8">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Entre em Contato</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Nome" className="w-full border p-2 rounded" />
        <input type="email" placeholder="E-mail" className="w-full border p-2 rounded" />
        <input type="tel" placeholder="Telefone" className="w-full border p-2 rounded" />
        <input type="file" className="w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}
