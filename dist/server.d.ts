import SocketIO from 'socket.io';
export declare class APIServer {
    server: any;
    io: SocketIO.Server;
    stop(): Promise<any>;
    start(): Promise<void>;
}
