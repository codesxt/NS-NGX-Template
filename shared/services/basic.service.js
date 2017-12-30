"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BasicService = (function () {
    function BasicService() {
        this.item = {
            message: "This is a basic object."
        };
    }
    BasicService.prototype.getSomething = function () {
        return this.item;
    };
    BasicService = __decorate([
        core_1.Injectable()
    ], BasicService);
    return BasicService;
}());
exports.BasicService = BasicService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2ljLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFEQTtRQUVZLFNBQUksR0FBRztZQUNiLE9BQU8sRUFBRyx5QkFBeUI7U0FDcEMsQ0FBQTtJQUtMLENBQUM7SUFIRyxtQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQVBRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtPQUNBLFlBQVksQ0FReEI7SUFBRCxtQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNpY1NlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbSA9IHtcbiAgICAgIG1lc3NhZ2UgOiBcIlRoaXMgaXMgYSBiYXNpYyBvYmplY3QuXCJcbiAgICB9XG5cbiAgICBnZXRTb21ldGhpbmcoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcbiAgICB9XG59XG4iXX0=