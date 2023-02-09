import { buildServer } from "@/server/";

async function server() {
  const app = await buildServer();
  const { PORT, HOST,  } = app.config;
  try {
    await app.listen({ port: PORT, host: HOST });
  } catch (error: unknown) {
    app.log.error(error, 'error while booting app');
    process.exit(1);
  }
}

server();
