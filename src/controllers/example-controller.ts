/** @format */

import { controller, httpGet, BaseHttpController } from 'inversify-express-utils';

@controller('/')
export class ExampleController extends BaseHttpController {
    @httpGet('/')
    public async get()  {
        return this.ok({
            foo: 'bar',
        });
    }
}
