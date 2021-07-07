import { createServer } from 'http';

import { handler, someText } from './routes.js';

const server = createServer(handler);

server.listen(3000);
