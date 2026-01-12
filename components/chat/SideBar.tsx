import { Settings } from "lucide-react";
import { House } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { MessageCirclePlus } from "lucide-react";
import { MessageCircleMore } from "lucide-react";

import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="h-dvh w-fit  p-2 md:p-8 backdrop-blur-3xl flex justify-between items-center flex-col gap-8 border-r border-gray bg-background/60">
      <div className="logo">
        <Link href="/chat">
          <MessageCircleMore
            width={70}
            height={70}
            className="size-8 md:size-17.5"
          />
        </Link>
      </div>
      <ul className="nav flex flex-col gap-6">
        <li>
          <Link href="/" className="icon active">
            <House className="size-4 md:size-auto" />
          </Link>
        </li>
        <li>
          <Link href="/chat" className="icon">
            <NotebookPen className="size-4 md:size-auto" />
          </Link>
        </li>
        <li>
          <Link href="/chat/new" className="icon">
            <MessageCirclePlus className="size-4 md:size-auto" />
          </Link>
        </li>
      </ul>
      <div className="actions">
        <ul>
          <li>
            <Link href="/settings">
              <Settings />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
