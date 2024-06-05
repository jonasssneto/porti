import { ProjectCard } from "./card";

export const Projects = () => {
  const projects = [
    {
      title: "Buysket 🛒",
      description:
        "O BuySket é uma solução prática para enfrentar as grandes filas e longos tempos de espera nos supermercados. Nossa cesta inteligente lê os produtos adicionados, gerando um código QR ou Pix para pagamento rápido ao final da compra. Além disso, oferece gestão de vendas e controle de estoque para administradores, melhorando a experiência dos clientes e a eficiência do estabelecimento.",
      link: "https://github.com/tcc-tecpuc-03/tcc-docker",
    },
    {
      title: "ChatIO 🚀",
      description:
        "Desenvolvi um sistema de chat em tempo real com Node.js, TypeScript, Socket.io e Prisma ORM. Aprendi a configurar comunicações em tempo real com Socket.io. Este projeto me proporcionou uma valiosa experiência, especialmente em comunicação em tempo real e integração.",
      link: "https://github.com/jonasssneto/chat-io",
    },
  ];
  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
          <ProjectCard data={project} />
        ))}
      </div>
    </div>
  );
};
