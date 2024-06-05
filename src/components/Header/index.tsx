import { ThemeToggle } from "../Theme/Toggle";
import { UserAvatar } from "./Avatar";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div>
          <UserAvatar />
          <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
            Jonas Neto
          </h1>
          <p className="text-gray-500">Desenvolver Backend</p>
        </div>
        <ThemeToggle />
      </div>
      <div className="border-b w-full my-2" />
    </>
  );
};
