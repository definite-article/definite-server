import Hapi from 'hapi';
import SocketIO from 'socket.io';

const PORT = parseInt(process.env.PORT, 10) || 3000;

export class APIServer {
  server = new Hapi.Server({ port: PORT });
  io: SocketIO.Server;
  async stop() {
    console.log('stopping');
    return this.server.stop();
  }
  async start() {
    await this.server.start();
    this.io = SocketIO(this.server.listener);
    console.log(`listening on ${PORT}`);
  }
}
