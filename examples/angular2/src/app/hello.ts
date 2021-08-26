import { ChangeDetectorRef, Component } from "@angular/core";
// Testing a type only import
import { Properties } from 'csstype'

import { NameService } from "./name.service";

@Component({
    selector: "app-hello",
    styleUrls: ["../assets/style/main.css", "../assets/style/main.less", "../assets/style/main.scss"],
    templateUrl: "hello.html"
})
export class HelloComponent {
    public title = "Hello :)";

    constructor(
        private cd: ChangeDetectorRef,
        public readonly nameService: NameService,
    ) { }

    public checkName() {
        this.title = this.nameService.getName();
        this.cd.markForCheck();
    }
}
