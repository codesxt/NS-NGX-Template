"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basic_service_1 = require("../shared/services/basic.service");
var HomeComponent = (function () {
    function HomeComponent(basicService) {
        this.basicService = basicService;
        this.basicText = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.basicText = this.basicService.getSomething().message;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            templateUrl: "home/home.component.html",
        }),
        __metadata("design:paramtypes", [basic_service_1.BasicService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBZ0U7QUFPaEU7SUFFRSx1QkFDVSxZQUEyQjtRQUEzQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUZyQyxjQUFTLEdBQVksRUFBRSxDQUFDO0lBS3hCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUM1RCxDQUFDO0lBVlUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQUt5Qiw0QkFBWTtPQUgxQixhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhc2ljU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvYmFzaWMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGJhc2ljVGV4dCA6IHN0cmluZyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYmFzaWNTZXJ2aWNlIDogQmFzaWNTZXJ2aWNlXG4gICl7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5iYXNpY1RleHQgPSB0aGlzLmJhc2ljU2VydmljZS5nZXRTb21ldGhpbmcoKS5tZXNzYWdlO1xuICB9XG59XG4iXX0=