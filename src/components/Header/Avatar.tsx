import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const UserAvatar = () => {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/jonasssneto.png" alt="@Jonasssneto" />
        <AvatarFallback>JN</AvatarFallback>
      </Avatar>
  
      </>
  );
};
