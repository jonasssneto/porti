import { Timeline } from "./timeline";

export const About = () => {
  const education = [
    {
      date: "fev 2024 - jul 2026",
      title: "Unicesumar",
      description:
        "Análise e Desenvolvimento de Sistemas - Tecnólogo, Curitiba - PR",
    },
    {
      date: "jan 2021 - dez 2023",
      title: "TECPUC",
      description: "Ensino médio técnico em Informática, Curitiba - PR",
    },
  ];

  return (
    <div className="my-6">
      <p className="text-gray-500 text-justify">
        Sou um desenvolvedor dedicado, atualmente cursando Análise e
        Desenvolvimento de Sistemas e também estagiário na At Software Solution.
        Estou constantemente em busca de aprimorar minhas habilidades e
        conhecimentos no universo da tecnologia, sempre buscando evoluir e
        contribuir de forma significativa em projetos desafiadores.
      </p>
      <div className="my-6">
        <p className="font-medium text-gray-900 mb-4 text-lg">Formações</p>
        <Timeline events={education} />
      </div>
    </div>
  );
};
