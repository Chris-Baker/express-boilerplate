/** @format */

import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

// declare metadata by @controller annotation
import './controllers/example-controller';

// set up container
const container = new Container();

// set up bindings
//container.bind<FooService>('FooService').to(FooService);

// create server
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
    app.use(bodyParser.json());
});

const app = server.build();
app.listen(3000, () => console.log('Serving on port 3000'));
