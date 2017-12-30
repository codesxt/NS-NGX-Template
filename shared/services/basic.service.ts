import { Injectable } from "@angular/core";

@Injectable()
export class BasicService {
    private item = {
      message : "This is a basic object."
    }

    getSomething(): any {
        return this.item;
    }
}
