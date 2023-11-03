import app from "@app";
import { Server } from "http";

const PORT = process.env.PORT || 4000;

const server: Server = app.listen(PORT, (): void => {
    const addressInfo = server.address();
  console.log(
    `⚡️[server]: is running on http://${addressInfo["address"]}:${PORT}`
  );
});

// Handle shutdown gracefully
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
