'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.APIServer = undefined;

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = parseInt(process.env.PORT, 10) || 3000;
class APIServer {
    constructor() {
        this.server = new _hapi2.default.Server({ port: PORT });
    }
    async stop() {
        console.log('stopping');
        return this.server.stop();
    }
    async start() {
        await this.server.start();
        this.io = (0, _socket2.default)(this.server.listener);
        console.log(`listening on ${PORT}`);
    }
}
exports.APIServer = APIServer;