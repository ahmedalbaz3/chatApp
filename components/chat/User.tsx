import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import { CheckCheck } from "lucide-react";

const User = ({
  id,
  image,
  name,
  time,
  message,
  typing,
  online,
  delivered,
  saw,
  onClick,
}: {
  id: number;
  image: string;
  name: string;
  time: string;
  message: string;
  typing: boolean;
  delivered: boolean;
  online: boolean;
  saw: boolean;
  onClick?: (id: number) => void;
}) => {
  return (
    <div
      className="user flex items-center gap-4 bg-background/60 p-3 rounded-lg cursor-pointer hover:bg-accent/80 transition-colors"
      onClick={() => onClick && onClick(id)}
    >
      <div className={`avatar relative ${online ? "avatar-online" : ""}`}>
        <Avatar className={`size-12 `}>
          <AvatarImage src={image} alt="user" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1">
        <div className="top flex justify-between items-center mb-1">
          <h3>{name}</h3>
          <p className="text-sm text-gray whitespace-nowrap">{time}</p>
        </div>
        <div className="bottom flex justify-between items-center mb-1">
          {typing ? (
            <p className="text-sm text-green-600">Typing...</p>
          ) : (
            <p className="text-sm text-gray">{message}</p>
          )}
          {typing ? (
            ""
          ) : delivered ? (
            <CheckCheck
              className={`inline-block ml-2 size-4 ${
                saw ? "text-blue-500" : "text-gray"
              }`}
            />
          ) : (
            <Check className="inline-block ml-2 size-4 text-gray" />
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
