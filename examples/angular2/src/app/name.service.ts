import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class NameService {
    public alive = true;

    public getName() { return "A Simple Test"; }
}
