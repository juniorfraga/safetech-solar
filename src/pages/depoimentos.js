export default function Depoimentos() {
  return (
    <div className="min-h-screen bg-white text-blue-900 p-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">O que dizem nossos clientes</h1>
      <div className="space-y-6">
        <div>
          <p className="italic">“Instalar energia solar com a SafeTech foi uma das melhores decisões que já tomei.”</p>
          <p className="font-bold">– Carlos Andrade</p>
        </div>
        <div>
          <p className="italic">“Equipe super atenciosa e profissional. Recomendo de olhos fechados!”</p>
          <p className="font-bold">– Juliana Meireles</p>
        </div>
        <div>
          <p className="italic">“Energia limpa e atendimento excelente. Já indiquei para vários amigos.”</p>
          <p className="font-bold">– Rafael Souza</p>
        </div>
      </div>
    </div>
  );
}
