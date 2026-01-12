"use client";
import SideBar from "@/components/chat/SideBar";
import User from "@/components/chat/User";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FileImage,
  File,
  Pin,
  CheckCheck,
  Check,
  Send,
  Paperclip,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface IUser {
  name: string;
  image: string;
  status: "online" | "offline";
}

interface IMessage {
  id: number;
  type: string;
  text: string;
  time: string;
  status: string;
}

interface DataLoaded {
  user: IUser;
  messages: IMessage[];
}

const data = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Ahmed Elbaz",
    time: "4:30 pm",
    message: "How Are You?",
    delivered: true,
    typing: false,
    online: true,
    saw: false,
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Sarah Chen",
    time: "4:32 pm",
    message: "Did you see the latest update?",
    delivered: true,
    typing: true,
    online: true,
    saw: true,
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Jordan Smith",
    time: "3:15 pm",
    message: "Catch you later!",
    delivered: true,
    typing: false,
    online: false,
    saw: true,
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Elena Rodriguez",
    time: "2:45 pm",
    message: "The meeting is at 5.",
    delivered: true,
    typing: false,
    online: true,
    saw: false,
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Marcus Thorne",
    time: "Yesterday",
    message: "Thanks for the help!",
    delivered: true,
    typing: false,
    online: false,
    saw: true,
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Amina Mansour",
    time: "11:20 am",
    message: "Can you send the file?",
    delivered: false,
    typing: false,
    online: false,
    saw: false,
  },
  {
    id: 7,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Liam Wilson",
    time: "9:05 am",
    message: "Good morning!",
    delivered: true,
    typing: false,
    online: true,
    saw: true,
  },
  {
    id: 8,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Priya Kapoor",
    time: "Just now",
    message: "I'm almost there.",
    delivered: true,
    typing: true,
    online: true,
    saw: false,
  },
  {
    id: 9,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "David Park",
    time: "Sunday",
    message: "Check this out.",
    delivered: true,
    typing: false,
    online: false,
    saw: true,
  },
  {
    id: 10,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Sophie Muller",
    time: "12:00 pm",
    message: "Let's grab lunch.",
    delivered: true,
    typing: false,
    online: true,
    saw: true,
  },
];

const messages = [
  {
    id: 1,
    type: "receiver",
    text: "Hey! Did you finish the dashboard UI?",
    time: "4:30 pm",
    status: "seen",
  },
  {
    id: 2,
    type: "sender",
    text: "Almost done, just fixing the scroll issue.",
    time: "4:31 pm",
    status: "seen",
  },
  {
    id: 3,
    type: "receiver",
    text: "Great! Is it using Tailwind?",
    time: "4:32 pm",
    status: "seen",
  },
  {
    id: 4,
    type: "sender",
    text: "Yes, and I'm using Shadcn for the avatars.",
    time: "4:32 pm",
    status: "seen",
  },
  {
    id: 5,
    type: "receiver",
    text: "Perfect. Don't forget to make it responsive.",
    time: "4:33 pm",
    status: "seen",
  },
  {
    id: 6,
    type: "sender",
    text: "Working on the mobile view right now.",
    time: "4:35 pm",
    status: "seen",
  },
  {
    id: 7,
    type: "receiver",
    text: "Send me a screenshot when you're ready.",
    time: "4:36 pm",
    status: "seen",
  },
  {
    id: 8,
    type: "sender",
    text: "Sure thing, give me 10 minutes.",
    time: "4:37 pm",
    status: "seen",
  },
  {
    id: 9,
    type: "receiver",
    text: "I'll be waiting in the meeting room.",
    time: "4:38 pm",
    status: "seen",
  },
  {
    id: 10,
    type: "sender",
    text: "On my way! 🏃‍♂️",
    time: "4:40 pm",
    status: "seen",
  },
  {
    id: 11,
    type: "receiver",
    text: "Wait, did you bring your charger?",
    time: "4:41 pm",
    status: "seen",
  },
  {
    id: 12,
    type: "sender",
    text: "Yes, got the MacBook one and a Type-C.",
    time: "4:42 pm",
    status: "seen",
  },
  {
    id: 13,
    type: "receiver",
    text: "Perfect, my laptop is at 5%.",
    time: "4:42 pm",
    status: "seen",
  },
  {
    id: 14,
    type: "sender",
    text: "I'm outside the room now.",
    time: "4:45 pm",
    status: "seen",
  },
  {
    id: 15,
    type: "receiver",
    text: "I don't see you, are you at Room 302?",
    time: "4:46 pm",
    status: "seen",
  },
  {
    id: 16,
    type: "sender",
    text: "Ah, I went to 203 by mistake. Coming up.",
    time: "4:47 pm",
    status: "seen",
  },
  {
    id: 17,
    type: "receiver",
    text: "Classic Ahmed lol.",
    time: "4:47 pm",
    status: "seen",
  },
  {
    id: 18,
    type: "sender",
    text: "Haha, okay I'm actually here now.",
    time: "4:49 pm",
    status: "seen",
  },
  {
    id: 19,
    type: "receiver",
    text: "The client is asking if we can change the primary blue.",
    time: "5:15 pm",
    status: "seen",
  },
  {
    id: 20,
    type: "sender",
    text: "To what? We spent hours on that shade.",
    time: "5:16 pm",
    status: "seen",
  },
  {
    id: 21,
    type: "receiver",
    text: "They want something 'more energetic'. Maybe a darker indigo?",
    time: "5:17 pm",
    status: "seen",
  },
  {
    id: 22,
    type: "sender",
    text: "I can try #4F46E5. It's a solid indigo.",
    time: "5:18 pm",
    status: "seen",
  },
  {
    id: 23,
    type: "receiver",
    text: "Let's see it on the live preview.",
    time: "5:20 pm",
    status: "seen",
  },
  {
    id: 24,
    type: "sender",
    text: "Just pushed the code to the dev branch.",
    time: "5:25 pm",
    status: "seen",
  },
  {
    id: 25,
    type: "receiver",
    text: "That looks way better actually. Good call.",
    time: "5:26 pm",
    status: "seen",
  },
  {
    id: 26,
    type: "sender",
    text: "Glad they like it. Anything else?",
    time: "5:28 pm",
    status: "delivered",
  },
  {
    id: 27,
    type: "receiver",
    text: "Can you check the padding on the cards?",
    time: "5:30 pm",
    status: "delivered",
  },
  {
    id: 28,
    type: "sender",
    text: "Sure, let me check the CSS grid layout.",
    time: "5:32 pm",
    status: "sent",
  },
  {
    id: 29,
    type: "receiver",
    text: "Thanks! I'll tell the manager we are almost ready.",
    time: "5:33 pm",
    status: "sent",
  },
  {
    id: 30,
    type: "sender",
    text: "Done. Refresh the page now!",
    time: "5:35 pm",
    status: "sent",
  },
];

const page = () => {
  const [contextMenu, setContextMenu] = useState<{
    show: boolean;
    x: number;
    y: number;
    targetId: number | null;
  }>({
    show: false,
    x: 0,
    y: 0,
    targetId: null,
  });

  const handleContextMenu = ({
    e,
    id,
  }: {
    e: React.MouseEvent;
    id: number;
  }) => {
    e.preventDefault(); // Prevents the default browser menu
    setContextMenu({
      show: true,
      x: e.pageX,
      y: e.pageY,
      targetId: id,
    });
  };

  const closeMenu = () => setContextMenu({ ...contextMenu, show: false });

  // Close menu when clicking anywhere else
  useEffect(() => {
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [contextMenu]);

  // ================================================================================

  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const [chatOpen, setChatOpen] = useState(true);
  const [dataLoaded, setDataLoaded] = useState({} as DataLoaded);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "auto",
    });
    setMounted(true);
  }, [dataLoaded]);

  const handleOpenChat = ({ id }: { id: number }) => {
    setChatOpen(true);
    setDataLoaded({
      user: {
        name: data.find((user) => user.id === id)?.name || "Unknown User",
        image:
          data.find((user) => user.id === id)?.image ||
          "https://github.com/shadcn.png",
        status: data.find((user) => user.id === id)?.online
          ? "online"
          : "offline",
      },
      messages: messages,
    });
  };

  return (
    <main className="chat h-dvh flex ">
      <SideBar />
      <section className="flex-1 bg-primary m-3 md:m-5 rounded-xl flex overflow-hidden">
        <div className="messages flex-1 md:flex-4 xl:flex-2 p-3 md:p-6 bg-background/50 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Messages</h2>
          <div className="users-m relative h-full overflow-y-auto flex flex-col gap-4">
            {data.map((user, index) => (
              <User
                id={user.id}
                key={index}
                image={user.image}
                name={user.name}
                time={user.time}
                message={user.message}
                delivered={user.delivered}
                typing={user.typing}
                online={user.online}
                saw={user.saw}
                onClick={() => handleOpenChat({ id: user.id })}
              />
            ))}
          </div>
        </div>
        <div className="chat max-md:hidden md:flex-6  flex flex-col relative">
          <div className="chat-content">
            {chatOpen && dataLoaded.user ? (
              <>
                <div className="header bg-background p-6 flex justify-between items-center border rounded-tr-xl border-gray">
                  <div className="person flex gap-4 ">
                    <Avatar className={`size-12 `}>
                      <AvatarImage src={dataLoaded.user.image} alt="user" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="identity">
                      <h3 className="text-lg font-bold">
                        {dataLoaded.user.name}
                      </h3>
                      <p className="text-sm text-black">
                        <span
                          className={`size-2 rounded-full ${
                            dataLoaded.user.status === "online"
                              ? "bg-green-500"
                              : "bg-gray-500"
                          } inline-block mr-1`}
                        ></span>{" "}
                        {dataLoaded.user.status}
                      </p>
                    </div>
                  </div>
                  <div className="action flex">
                    <FileImage className="size-6 mr-4 cursor-pointer hover:text-accent duration-200" />
                    <File className="size-6 mr-4 cursor-pointer hover:text-accent duration-200" />
                    <Pin className="size-6 mr-4 cursor-pointer hover:text-accent duration-200" />
                  </div>
                </div>
                <div
                  ref={containerRef}
                  tabIndex={0}
                  className={`body flex-1 p-5 pb-55 text-background overflow-y-auto flex flex-col justify-start h-dvh ${
                    mounted ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {dataLoaded.messages.map((msg) => {
                    if (msg.type === "receiver") {
                      return (
                        <div
                          key={msg.id}
                          className="reciver flex justify-start mb-4 flex-col items-start"
                        >
                          <p
                            className="user p-2 bg-black text-white rounded-lg cursor-default"
                            tabIndex={0}
                            onContextMenu={(e) =>
                              handleContextMenu({ e, id: msg.id })
                            }
                          >
                            {msg.text}
                          </p>
                          <span className="text-sm ">{msg.time}</span>
                          {contextMenu.show && (
                            <div
                              className="fixed z-50 bg-background border border-gray rounded-lg w-48 py-2 animate-in fade-in zoom-in duration-100"
                              style={{
                                top: contextMenu.y,
                                left: contextMenu.x,
                              }}
                            >
                              <ul className="flex flex-col text-sm text-foreground">
                                <li
                                  className="px-4 py-2 hover:bg-accent hover:text-white cursor-pointer flex items-center gap-2"
                                  onClick={() =>
                                    console.log(
                                      "Reply to",
                                      contextMenu.targetId
                                    )
                                  }
                                >
                                  Reply
                                </li>
                                <li
                                  className="px-4 py-2 hover:bg-accent hover:text-white cursor-pointer"
                                  onClick={() => console.log("Copy text")}
                                >
                                  Copy Text
                                </li>
                                <hr className="my-1 border-gray" />
                                <li
                                  className="px-4 py-2 hover:bg-destructive hover:text-white cursor-pointer text-red-500"
                                  onClick={() =>
                                    console.log("Delete", contextMenu.targetId)
                                  }
                                >
                                  Delete Message
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={msg.id}
                          className="sender flex items-end mb-4 flex-col"
                        >
                          <div className="text py-2 px-3 bg-background text-black rounded-lg relative flex flex-col items-end">
                            <p
                              className="user cursor-default"
                              tabIndex={0}
                              onContextMenu={(e) =>
                                handleContextMenu({ e, id: msg.id })
                              }
                            >
                              {msg.text}
                            </p>
                            <div className="state ">
                              {msg.status === "seen" ? (
                                <CheckCheck className="inline-block ml-2 size-4 text-blue-500 " />
                              ) : msg.status === "delivered" ? (
                                <CheckCheck className="inline-block ml-2 size-4 text-gray " />
                              ) : (
                                <Check className="inline-block ml-2 size-4 text-gray " />
                              )}
                            </div>
                          </div>
                          <span className="text-sm">{msg.time}</span>
                          {contextMenu.show && (
                            <div
                              className="fixed z-50 bg-background border border-gray rounded-lg w-48 py-2 animate-in fade-in zoom-in duration-100"
                              style={{
                                top: contextMenu.y,
                                left: contextMenu.x,
                              }}
                            >
                              <ul className="flex flex-col text-sm text-foreground">
                                <li
                                  className="px-4 py-2 hover:bg-accent hover:text-white cursor-pointer flex items-center gap-2"
                                  onClick={() =>
                                    console.log(
                                      "Reply to",
                                      contextMenu.targetId
                                    )
                                  }
                                >
                                  Reply
                                </li>
                                <li
                                  className="px-4 py-2 hover:bg-accent hover:text-white cursor-pointer"
                                  onClick={() => console.log("Copy text")}
                                >
                                  Copy Text
                                </li>
                                <hr className="my-1 border-gray" />
                                <li
                                  className="px-4 py-2 hover:bg-destructive hover:text-white cursor-pointer text-red-500"
                                  onClick={() =>
                                    console.log("Delete", contextMenu.targetId)
                                  }
                                >
                                  Delete Message
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    }
                  })}
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle message sending logic here
                  }}
                  className="write absolute w-[90%] bottom-5 left-[50%] -translate-x-[50%] mx-auto rounded-2xl bg-background border shadow-lg "
                >
                  <div className="input flex items-center ">
                    <button type="button" aria-label="Attach file">
                      <Paperclip className="size-6 m-4 cursor-pointer hover:text-accent duration-200" />
                    </button>

                    <Input
                      type="text"
                      placeholder="Write a Message"
                      className="outline-none border-none px-5 py-8 "
                    />

                    <button type="submit" aria-label="Send message">
                      <Send className="size-6 m-4 cursor-pointer hover:text-accent duration-200" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex items-center justify-center h-dvh">
                <p className="text-background text-2xl">
                  Select a chat to start messaging
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
