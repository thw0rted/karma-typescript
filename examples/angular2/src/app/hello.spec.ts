import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { mockNameService, MockNameService } from "./name.mock";
import { NameService } from "./name.service";

import { HelloComponent } from "./hello";


describe("HelloComponent", () => {

    let service: jasmine.SpyObj<MockNameService>;
    let fixture: ComponentFixture<HelloComponent>;

    beforeEach(() => {
        return TestBed
            .configureTestingModule({
                declarations: [HelloComponent],
                providers: [
                    // NOTE: change this to `true` to and the title test should pass
                    {provide: NameService, useValue: mockNameService(true)}
                ]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HelloComponent);
                service = TestBed.inject(NameService) as jasmine.SpyObj<MockNameService>;
            });
    });

    it("should display default mock title", () => {

        let debugElement = fixture.debugElement.query(By.css("h1"));
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toEqual("Hello :)");
    });

    fit("should display a specified mock title", () => {

        service.mockValues.nameValue = "Another Name";
        fixture.componentInstance.checkName();
        let debugElement = fixture.debugElement.query(By.css("h1"));
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toEqual("Another Name");
    });

    fit("should display whether the name service is alive", () => {

        service.mockValues.aliveValue = false;
        let debugElement = fixture.debugElement.query(By.css("p"));
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain("dead");
    });

    it("should display a different test title", () => {

        let debugElement = fixture.debugElement.query(By.css("h1"));

        fixture.componentInstance.title = "Test Title";
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toEqual("Test Title");
    });
});
