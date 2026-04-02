function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const meses = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

export async function GET() {
  const dadosMensais = meses.map((mes) => ({
    mes,
    faturamento: Number(random(8000, 20000).toFixed(2)),
    pedidos: Math.floor(random(150, 400)),
    cancelados: Math.floor(random(5, 30)),
  }));

  const resumo = {
    faturamento: dadosMensais.reduce((acc, m) => acc + m.faturamento, 0),
    pedidos: dadosMensais.reduce((acc, m) => acc + m.pedidos, 0),
    pedidosHoje: Math.floor(random(10, 30)),
    ticketMedio: Number(random(30, 70).toFixed(2)),
    pedidosCancelados: dadosMensais.reduce((acc, m) => acc + m.cancelados, 0),
    taxaCrescimento: Number(random(-5, 20).toFixed(2)),
  };

  // const clientes = [
  //   {
  //     id: 1,
  //     nome: "João Silva",
  //     email: "joao@email.com",
  //     avatar: "https://i.pravatar.cc/150?img=1",
  //   },
  //   {
  //     id: 2,
  //     nome: "Maria Souza",
  //     email: "maria@email.com",
  //     avatar: "https://i.pravatar.cc/150?img=2",
  //   },
  //   {
  //     id: 3,
  //     nome: "Carlos Lima",
  //     email: "carlos@email.com",
  //     avatar: "https://i.pravatar.cc/150?img=3",
  //   },
  //   {
  //     id: 4,
  //     nome: "Ana Costa",
  //     email: "ana@email.com",
  //     avatar: "https://i.pravatar.cc/150?img=4",
  //   },
  // ];

  function gerarClientes(qtd: number) {
  return Array.from({ length: qtd }).map((_, i) => ({
    id: i + 1,
    nome: `Cliente ${i + 1}`,
    email: `cliente${i + 1}@email.com`,
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  }));
}

const clientes = gerarClientes(5);

  return Response.json({
    resumo,
    dadosMensais,
    clientes,
  });
}