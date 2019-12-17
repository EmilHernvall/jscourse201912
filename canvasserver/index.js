const WebSocket = require("ws");

const WIDTH = 100;
const HEIGHT = 100;
let image = [];
for (let i = 0; i < WIDTH*HEIGHT; i++) {
    image[i] = 0x669966;
}

const wss = new WebSocket.Server({ port: 8080 });

let clients = [];
wss.on("connection", (ws) => {
    clients.push(ws);

    console.log("Connection established");
    ws.send(JSON.stringify({
        eventType: "initialData",
        image: image,
    }));

    ws.on("message", (data) => {
        const incomingEvent = JSON.parse(data);
        for (const point of incomingEvent.points) {
            const idx = WIDTH * point.y + point.x;
            image[idx] = point.c;
        }

        for (const client of clients) {
            try {
                client.send(data);
            } catch (e) {}
        }
    });
});