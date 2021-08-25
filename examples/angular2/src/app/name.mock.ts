import type { NameService } from "./name.service"


export interface MockNameService extends NameService {
    nameValue?: string;
}

export const DEFAULT_MOCK_NAME = "A Mocked Name";

export function mockNameService(useThis: boolean): jasmine.SpyObj<MockNameService> {
    // DEBUG: Prove the method is called exactly once for a given spec
    console.log("Mock Name Service created");

    const ret = jasmine.createSpyObj<MockNameService>("Name Service", ["getName"]);
    function getName(this: MockNameService) {
        if (this !== ret) {
            console.error("OH NO! getName was called on a different object!")
        }

        if (useThis) {
            return this.nameValue ?? DEFAULT_MOCK_NAME;
        } else {
            ret.nameValue ?? DEFAULT_MOCK_NAME;
        }
    }
    ret.getName.and.callFake(getName);
    return ret;
}
