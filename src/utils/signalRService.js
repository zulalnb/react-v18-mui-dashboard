import {
  HttpTransportType,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

const BASE_URL = import.meta.env.VITE_WEB_SOCKET_BASE_URL;

const setupSignalRConnection = async () => {
  const connection = new HubConnectionBuilder()
    .withUrl(`${BASE_URL}/carts-hub`, {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets,
    })
    .configureLogging(LogLevel.Information)
    .build();

  connection.on("ReceiveMessage", (message) => {
    console.log("Received message:", message);
  });

  try {
    await connection.start();
    console.log("SignalR Connected!");
  } catch (err) {
    console.error("SignalR Connection Error:", err);
  }

  return connection;
};

export default setupSignalRConnection;
