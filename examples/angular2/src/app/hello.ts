import { Component, Input } from "@angular/core";
// Testing a type only import
import { Properties } from 'csstype'

@Component({
    selector: "app-hello",
    styleUrls: ["../assets/style/main.css", "../assets/style/main.less", "../assets/style/main.scss"],
    templateUrl: "hello.html"
})
export class HelloComponent {
    @Input() color = "blue";
    public title = "Hello :)";
}
