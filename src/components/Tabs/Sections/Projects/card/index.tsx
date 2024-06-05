import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../../ui/card";

import { ProjectCardProps } from "./types";

export const ProjectCard = (props: ProjectCardProps) => {
  const {
    data: { title, description, link },
  } = props;
  return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl mb-1 font-medium text-gray-900">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
        <ScrollArea className="h-[120px]">
          <p className="max-w-xs text-sm font-normal text-gray-500 ">
            {description}
          </p>
        </ScrollArea>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <a href={link} target="_blank" rel="noreferrer">
              Acessar
            </a>
          </Button>
        </CardFooter>
      </Card>
  );
};
