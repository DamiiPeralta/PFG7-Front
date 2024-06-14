"use client";
import { useEffect, useState, ChangeEvent } from "react";
import socket from "../../socket";
const ChatPage = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    useEffect(() => {
        socket.on("message", (message: string) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Cleanup function to remove the event listener
        return () => {
            socket.off("message");
        };
    }, []);

    const sendMessage = () => {
        socket.emit("message", input);
        setInput("");
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <div className="bg-[#B4B3EA] py-10">
                <h2 className="text-2xl font-bold text-left text-black ml-6 mt-14">¡Chat!</h2>
            </div>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatPage;
