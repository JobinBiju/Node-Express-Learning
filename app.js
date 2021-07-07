import { createServer } from 'http';

import { handler } from './routes';

const server = createServer(handler);

server.listen(3000);
