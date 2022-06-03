import React from 'react'

export default function testChat({ socket }) {
    const socket = io.connect("http://localhost:3000/%22);

//event listeners
socket.on("history_response", (data) => {
        console.log(data);
    });
    socket.on("new_message", (data) => {
        console.log(data);
    });


    //event emitters
    socket.emit("join", {
        userId: "asdadsadas",
        group: "123123",
        name: "Dinura",
    });
    socket.emit("history");

    setInterval(() => {
        socket.emit("message", { message: "Hello world" });
    }, 3500);

    return (
        <div>
            hi
        </div>
    )
}

