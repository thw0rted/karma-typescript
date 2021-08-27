import { TestBed } from "@angular/core/testing";
import { createHostFactory, SpectatorHost } from "@ngneat/spectator";

import { HelloComponent } from "./hello";


const createHost = createHostFactory({component: HelloComponent, declareComponent: false});

describe("HelloComponent Hosted test", () => {
    let host: SpectatorHost<HelloComponent>;

    beforeEach(() => {
        return TestBed
            .configureTestingModule({
                declarations: [HelloComponent]
            })
            .compileComponents()
            .then(() => {
                host = createHost("<app-hello color='red'></app-hello>");
            });
    });

    it("uses host color value", () => {
        let debugElement = host.query("h1") as HTMLHeadingElement;
        host.detectChanges();

        expect(debugElement.style.backgroundColor).toEqual("red");
    });
});
