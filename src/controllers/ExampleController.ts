import {controller, httpGet, BaseHttpController} from "inversify-express-utils";

@controller("/")
class ExampleController extends BaseHttpController {
    @httpGet("/")
    public async get() {
        return this.ok({
            foo: 'bar'
        });
    }
}