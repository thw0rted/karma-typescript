import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class NameService {
    public getName() { return "A Simple Test"; }
}
