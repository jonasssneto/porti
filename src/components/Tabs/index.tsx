import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { About } from "./Sections/About";
import { Projects } from "./Sections/Projects";

export const NavigateTabs = () => {
  return (
    <Tabs defaultValue="about">
      <TabsList>
        <TabsTrigger value="about">Sobre</TabsTrigger>
        <TabsTrigger value="projects">Projetos</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <About />
      </TabsContent>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
    </Tabs>
  );
};
