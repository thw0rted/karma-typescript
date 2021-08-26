import type { NameService } from "./name.service"


export interface MockNameService extends NameService {
    mockValues: {
        nameValue?: string;
        aliveValue?: boolean;
    }
}

export const DEFAULT_MOCK_NAME = "A Mocked Name";

export function mockNameService(useThis: boolean): jasmine.SpyObj<MockNameService> {
    // DEBUG: Prove the method is called exactly once for a given spec
    console.log("Mock Name Service created");

    const ret = jasmine.createSpyObj<MockNameService>("Name Service", ["getName"], {alive: true});
    ret.mockValues = {};
    function getName(this: MockNameService) {
        if (this !== ret) {
            console.error("OH NO! getName was called on a different object!")
        }

        if (useThis) {
            return this.mockValues.nameValue ?? DEFAULT_MOCK_NAME;
        } else {
            ret.mockValues.nameValue ?? DEFAULT_MOCK_NAME;
        }
    }
    ret.getName.and.callFake(getName);

    const pd = Object.getOwnPropertyDescriptor(ret, "alive");
    if (pd.get) {
        console.log("Live property has descriptor", pd);
        (pd.get as jasmine.Spy<() => boolean>).and.callFake(function(this:MockNameService) {
            if (useThis) {
                return this.mockValues.aliveValue ?? true;
            } else {
                return ret.mockValues.aliveValue ?? true;
            }
        });
    } else {
        console.error("OH NO! ret.alive isn't actually a spy!");
    }

    return ret;
}
