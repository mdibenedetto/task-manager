webpackJsonp(["tasks.module"],{

/***/ "../../../../../src/app/tasks/task-detail/task-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-detail/task-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n  <div class=\"card-header\">\n    {{ pageTitle + \": \" + task.title}}\n  </div>\n  <div class=\"card-block\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">Title:</div>\n      <div class=\"col-md-6\">{{task.title}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Description:</div>\n      <div class=\"col-md-6\">{{task.description}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Start Date:</div>\n      <div class=\"col-md-6\">{{task.startDate| date:'mediumDate'}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">End Date:</div>\n      <div class=\"col-md-6\">{{task.endDate| date:'mediumDate'}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Assigne:</div>\n      <div class=\"col-md-6\">{{task.assegne}}</div>\n    </div>\n\n  </div>\n  <div class=\"card-footer\">\n    <a class=\"btn btn-secondary\" queryParamsHandling=\"preserve\" [routerLink]=\"['/tasks']\">\n      <i class=\"fa fa-chevron-left\"></i> Back\n    </a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/tasks',task.id, 'edit']\" style=\"width:80px;margin-left:10px\">\n      Edit\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-detail/task-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskDetailComponent = (function () {
    function TaskDetailComponent(route) {
        this.route = route;
        this.pageTitle = 'Task Detail';
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.task = this.route.snapshot.data['task'];
        if (!this.task.id) {
            this.pageTitle = 'Add Task';
        }
        else {
            this.pageTitle = "Edit Task: " + this.task.title;
        }
    };
    TaskDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'task-detail',
            template: __webpack_require__("../../../../../src/app/tasks/task-detail/task-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-detail/task-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-edit-guard/task-edit-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskEditGuardService = (function () {
    function TaskEditGuardService() {
    }
    TaskEditGuardService.prototype.canDeactivate = function (component) {
        if (component.isDirty) {
            var taskTitle = component.task.title || 'New Task';
            return confirm("Navigate away and lose all changes to " + taskTitle);
        }
        return true;
    };
    TaskEditGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TaskEditGuardService);
    return TaskEditGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-edit-info/task-edit-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-edit-info/task-edit-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <div class=\"container\">\n    <form name=\"task\" #taskForm=\"ngForm\">\n      <fieldset>\n        <legend>Basic Task Information</legend>\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': title.invalid && title.touched && title.dirty}\">\n          <label class=\"col-2 col-form-label\">Title </label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"text\" required [(ngModel)]=\"task.title\" #title=\"ngModel\" name=\"title\" />\n          </div>\n          <span class=\"col-10 offset-2 form-text\" *ngIf=\"title.invalid && title.touched && title.dirty\">Title is required</span>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Description </label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"task.description\" name=\"description\" />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Start Date </label>\n          <div class=\"col-10\">\n            <mat-form-field class=\"col-2 form-control\">\n              <input name=\"startDate\" matInput [matDatepicker]=\"startDate\" [(ngModel)]=\"task.startDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">End Date</label>\n          <div class=\"col-10\">\n            <mat-form-field class=\"col-2 form-control\">\n              <input name=\"endDate\" matInput [matDatepicker]=\"endDate\" [(ngModel)]=\"task.endDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Assignee</label>\n          <div class=\"col-10\">\n            <mat-form-field class=\"col-4 form-control\">\n              <mat-select name=\"category\" [(ngModel)]=\"task.assigneeId\">\n                <mat-option value=\"0\">None</mat-option>\n                <mat-option *ngFor=\"let item of assigneeUsers\" [value]=\"item.id\">\n                  {{ item.fullName }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-edit-info/task-edit-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskEditInfoComponent = (function () {
    function TaskEditInfoComponent(route) {
        this.route = route;
        this.assigneeUsers = [
            {
                userName: "michele@taskmanager.tax", fullName: "Michele Dibenedetto",
                passWord: "", id: 1, isAdmin: true
            },
            {
                userName: "miguel@taskmanager.tax", fullName: "Miguel Tester",
                passWord: "", id: 2, isAdmin: false
            },
            {
                userName: "patrick@taskmanager.tax", fullName: "Patrick Tester",
                passWord: "", id: 3, isAdmin: false
            },
            {
                userName: "aitor@taskmanager.tax", fullName: "Aitor Tester",
                passWord: "", id: 4, isAdmin: false
            },
            {
                userName: "gerard@taskmanager.tax", fullName: "Gerard Tester",
                passWord: "", id: 5, isAdmin: false
            },
        ];
    }
    TaskEditInfoComponent.prototype.formValuesChage = function (e) {
        console.warn(e);
        console.warn(this.taskForm.invalid);
    };
    TaskEditInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.task = data['task'];
            _this.taskForm && _this.taskForm.reset();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */])
    ], TaskEditInfoComponent.prototype, "taskForm", void 0);
    TaskEditInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'task-edit-info',
            template: __webpack_require__("../../../../../src/app/tasks/task-edit-info/task-edit-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-edit-info/task-edit-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TaskEditInfoComponent);
    return TaskEditInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-edit-tags/task-edit-tags.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-edit-tags/task-edit-tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <div class=\"container\">\n    <form name=\"task\" #form=\"ngForm\">\n      <fieldset>\n        <legend>Task Search Tags</legend>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': task.categoryId==0}\">\n          <label class=\"col-2 col-form-label\">Category</label>\n          <div class=\"col-4\">\n            <mat-form-field class=\"form-control\" required>\n              <mat-select name=\"category\" [(ngModel)]=\"task.categoryId\">\n                <mat-option value=\"0\">None</mat-option>\n                <mat-option *ngFor=\"let item of categories\" [value]=\"item.id\">\n                  {{ item.description }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <span class=\"col-8 offset-2 form-text\" *ngIf=\"task.categoryId==''\">Category is required</span>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Search Tags </label>\n          <div class=\"col-4\">\n            <input class=\"form-control\" type=\"text\" name=\"tags\" />\n          </div>\n          <button class=\"btn btn-secondary\">Add</button>          \n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-edit-tags/task-edit-tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditTagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskEditTagsComponent = (function () {
    function TaskEditTagsComponent(route) {
        this.route = route;
        this.categories = [
            { id: 1, description: "Bug" },
            { id: 2, description: "Epic" },
            { id: 3, description: "Story" },
            { id: 4, description: "Improvement" }
        ];
    }
    TaskEditTagsComponent.prototype.formValuesChage = function (e) {
        console.warn(e);
        console.warn(this.taskForm.invalid);
    };
    TaskEditTagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.task = data["task"];
            _this.taskForm && _this.taskForm.reset();
            console.log(_this.task);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */])
    ], TaskEditTagsComponent.prototype, "taskForm", void 0);
    TaskEditTagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "task-edit-tags",
            template: __webpack_require__("../../../../../src/app/tasks/task-edit-tags/task-edit-tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-edit-tags/task-edit-tags.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TaskEditTagsComponent);
    return TaskEditTagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-edit/task-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wizard a:last-child {\n    border-radius: 0 8px 0px 0;\n}\n\n.wizard a {\n    background: #efefef;\n    display: inline-block;\n    margin-right: 5px;\n    min-width: 150px;\n    outline: none;\n    padding: 10px 40px 10px;\n    position: relative;\n    text-decoration: none;\n}\n\n.wizard .active {\n    background: #007ACC;\n    color: #fff;\n}\n\n.wizard .active:after {\n    border-left-color: #007ACC;\n}\n\n.wizard a:before {\n    width: 0;\n    height: 0;\n    border-top: 20px inset transparent;\n    border-bottom: 20px inset transparent;\n    border-left: 20px solid #fff;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    left: 0;\n}\n\n.wizard a:first-child:before,\n.wizard a:last-child:after {\n    border: none;\n}\n\n.wizard a:after {\n    width: 0;\n    height: 0;\n    border-top: 20px inset transparent;\n    border-bottom: 20px inset transparent;\n    border-left: 21px solid #efefef;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: -20px;\n    z-index: 2;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-edit/task-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n  <div class=\"card-block\">\n    <div class=\"wizard\">\n      <nav class=\"nav nav-pills\">\n        <a [routerLink]=\"['info']\" class=\"nav-link\" routerLinkActive=\"active\">\n        Basic Information\n       <i [ngClass]=\"{'fa fa-exclamation-circle text-danger' : !isValid('info')}\" ></i>\n      </a>\n        <a [routerLink]=\"['tags']\" class=\"nav-link\" routerLinkActive=\"active\">\n        Search Tags\n          <i [ngClass]=\"{'fa fa-exclamation-circle text-danger' : !isValid('tags')}\" ></i>\n      </a>\n      </nav>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"card-footer\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-2\">\n        <button class=\"btn btn-primary\" type=\"button\" style=\"width:80px;margin-right:10px\" (click)=\"save()\" [disabled]=\"!isValid()\">Save</button>\n        <!--[disabled]=\"form.invalid\"-->\n        <a class=\"btn btn-secondary\" href=\"#\" [routerLink]=\"['/tasks']\">Cancel</a>\n        <a *ngIf=\"task.id > 0\" class=\"btn btn-secondary\" (click)=\"delete()\">Delete</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-edit/task-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service_task_service__ = __webpack_require__("../../../../../src/app/tasks/task-service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_service_message_service__ = __webpack_require__("../../../../../src/app/messages/message-service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditComponent = (function () {
    function TaskEditComponent(taskService, messageService, route, router) {
        this.taskService = taskService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Task Edit';
        this.errorMessage = '';
        this.dataIsValid = {};
    }
    Object.defineProperty(TaskEditComponent.prototype, "task", {
        get: function () {
            return this.currentTask;
        },
        set: function (value) {
            this.currentTask = value;
            this.originalTask = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    TaskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.onTaskRetrieved(data['task']);
        });
    };
    Object.defineProperty(TaskEditComponent.prototype, "isDirty", {
        get: function () {
            return JSON.stringify(this.originalTask) !== JSON.stringify(this.currentTask);
        },
        enumerable: true,
        configurable: true
    });
    TaskEditComponent.prototype.isValid = function (path) {
        var _this = this;
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(function (d) { return _this.dataIsValid[d] === true; }));
    };
    TaskEditComponent.prototype.onTaskRetrieved = function (task) {
        this.task = this.route.snapshot.data['task'];
        if (this.task.id === 0) {
            this.pageTitle = 'Add Task';
        }
        else {
            this.pageTitle = "Edit Task: " + this.task.title;
        }
    };
    TaskEditComponent.prototype.reset = function () {
        this.dataIsValid = null;
        this.currentTask = null;
        this.originalTask = null;
    };
    TaskEditComponent.prototype.save = function () {
        var _this = this;
        if (this.isValid(null)) {
            this.taskService.saveTask(this.task)
                .subscribe(function () { return _this.onSaveComplete(_this.task.title + " was saved"); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    TaskEditComponent.prototype.delete = function () {
        var _this = this;
        if (this.task.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the task: " + this.task.title + "?")) {
                this.taskService.removeTask(this.task.id)
                    .subscribe(function () { return _this.onSaveComplete(_this.task.title + " was deleted"); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    TaskEditComponent.prototype.onSaveComplete = function (message) {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.reset();
        this.router.navigate(['/tasks']);
    };
    TaskEditComponent.prototype.validate = function () {
        this.dataIsValid = {};
        this.dataIsValid['info'] = this.task.title && (this.task.title !== '' && !this.task.title.startsWith(' '));
        this.dataIsValid['tags'] = this.task.categoryId && this.task.categoryId > 0;
    };
    TaskEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'task-edit',
            template: __webpack_require__("../../../../../src/app/tasks/task-edit/task-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-edit/task-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__task_service_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__messages_message_service_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-filter/task-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskFilterPipe = (function () {
    function TaskFilterPipe() {
    }
    TaskFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (task) {
            return (task.title || '').toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    TaskFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'taskFilter'
        })
    ], TaskFilterPipe);
    return TaskFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-list-item/task-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-list-item/task-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">{{task?.title}}</div>\n  <div class=\"col-3\">{{task?.description}}</div>\n  <div class=\"col-3\">{{task?.startDate| date: 'dd/MM/yyyy'}}</div>\n  <div class=\"col-3\">{{task?.endDate| date: 'dd/MM/yyyy'}}</div>  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-list-item/task-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskListItemComponent = (function () {
    function TaskListItemComponent() {
    }
    TaskListItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TaskListItemComponent.prototype, "task", void 0);
    TaskListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'task-list-item',
            template: __webpack_require__("../../../../../src/app/tasks/task-list-item/task-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-list-item/task-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskListItemComponent);
    return TaskListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-list-toolbar/task-list-toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-list-toolbar/task-list-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"search()\" href=\"javascript:void(0)\">Search Tasks</a>\n    </li>\n    <li class=\"nav-item\"> \n        <a class=\"nav-link\" [class.disabled]=\"selectedId == -1\" (click)=\"delete()\" href=\"javascript:void(0)\">Delete Task</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link \" [class.disabled]=\"selectedId == -1\" [routerLink]=\"['/tasks',selectedId,'edit']\" href=\"javascript:void(0)\">Update Task</a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-list-toolbar/task-list-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskListToolbarComponent = (function () {
    function TaskListToolbarComponent() {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedId = -1;
    }
    TaskListToolbarComponent.prototype.delete = function () {
        this.onDelete.emit();
    };
    TaskListToolbarComponent.prototype.search = function () {
        this.onSearch.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskListToolbarComponent.prototype, "onDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskListToolbarComponent.prototype, "onSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], TaskListToolbarComponent.prototype, "selectedId", void 0);
    TaskListToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'task-list-toolbar',
            template: __webpack_require__("../../../../../src/app/tasks/task-list-toolbar/task-list-toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-list-toolbar/task-list-toolbar.component.css")],
            styles: [':host{display:block}']
        })
    ], TaskListToolbarComponent);
    return TaskListToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .task-list {\n    max-width: 800ppx;\n}\n\n.row.header {\n    font-weight: bold;\n}\n\n.table tr {\n    cursor: pointer;\n} */\n\n\n/*.table tr.active td {\n    background-color: #123456 !important;\n    color: white;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n  <div class=\"card-header\">\n    <div class=\"container\">\n      {{pageTitle}} - total tasks: {{tasks?.length}}\n    </div>\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-block\"> \n      <div class=\"form-inline mb-2 mt-2\">\n          <div class=\"col-2\">\n            <button class=\"btn btn-primary\" (click)=\"searchTasks($event)\">\n              Refresh\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <label class=\"col-form-label\">Filter by:</label>\n          </div>\n          <div class=\"col-3\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"listFilter\" placeholder=\"type task title\">\n          </div>\n        </div>\n    </div>\n    <div class=\"container\">\n      <table class=\"table table-hover table-striped\">\n        <!--<colgroup>\n        <col class=\"col-md-1\">\n        <col class=\"col-md-3\">\n        <col class=\"col-md-4\">\n        <col class=\"col-md-2\">\n        <col class=\"col-md-2\">\n    </colgroup>-->\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Title</th>\n            <th>Description</th>\n            <th>Start date</th>\n            <th>End date</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let task of tasks | taskFilter:listFilter;let i = index;\" (click)=\"setSelectedRow(i)\" [class.active]=\"i == selectedRow\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>\n              <a [routerLink]=\"['/tasks',task.id]\" [queryParams]=\"{filterBy:listFilter}\">{{task.title}}</a>\n            </td>\n            <td>{{task.description}}</td>\n            <td>{{task.startDate| date: 'dd/MM/yyyy'}}</td>\n            <td>{{task.endDate| date: 'dd/MM/yyyy'}}</td>\n            <td>\n              <a class=\"btn btn-primary\" href=\"#\" role=\"button\" [routerLink]=\"['/tasks',task.id,'edit']\">Edit</a>\n            </td>\n            <td>\n              <button class=\"btn btn-danger\" (click)=\"removeTask(task.id)\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"card-footer\"> total tasks: {{tasks?.length}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service_task_service__ = __webpack_require__("../../../../../src/app/tasks/task-service/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = (function () {
    function TaskListComponent(taskService, route) {
        this.taskService = taskService;
        this.route = route;
        this.pageTitle = 'Task List';
        this.selectedRow = -1;
        this.selectedId = -1;
        this.listFilter = '';
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.searchTasks();
    };
    TaskListComponent.prototype.searchTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.listFilter = _this.route.snapshot.queryParams['filterBy'] || '';
        }, function (error) {
            console.error("Error Server: " + error);
        });
    };
    TaskListComponent.prototype.removeTask = function (id) {
        var _this = this;
        this.taskService.removeTask(id).subscribe(function (data) {
            console.log(data);
            _this.searchTasks();
        }, function (err) {
            console.log(err);
        });
    };
    TaskListComponent.prototype.setSelectedRow = function (index) {
        this.selectedId = this.tasks[index].id;
        this.selectedRow = (index === this.selectedRow) ? -1 : index;
    };
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'task-list',
            template: __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__task_service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-resolver/task-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_service_task_service__ = __webpack_require__("../../../../../src/app/tasks/task-service/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskResolver = (function () {
    function TaskResolver(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    TaskResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        if (isNaN(id)) {
            console.warn("Task id is not a number:" + id);
            this.router.navigate(['/tasks']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null);
        }
        return this.taskService.findTask(+id)
            .map(function (task) {
            if (task) {
                return task;
            }
            console.log("task was not found " + id);
            _this.router.navigate(['/tasks']);
            return null;
        })
            .catch(function (error) {
            console.warn("Server erro retriving " + error);
            _this.router.navigate(['/tasks']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    TaskResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__task_service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], TaskResolver);
    return TaskResolver;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-service/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_common_service__ = __webpack_require__("../../../../../src/app/common/common-service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskService = (function (_super) {
    __extends(TaskService, _super);
    function TaskService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.task = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        _this.tasks = new Array();
        _this.URL = _this.BASE_URL + "/tasks";
        _this.task.subscribe(function (t) {
            _this.tasks.push(t);
        });
        return _this;
    }
    TaskService.prototype.findTask = function (id) {
        if (id === 0) {
            var emptyTask = { id: 0 };
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(emptyTask);
        }
        return this.http
            .get(this.URL + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TaskService.prototype.getTasks = function (filterBy) {
        var baseUrl = filterBy ? this.URL + "?" + filterBy : this.URL;
        return this.http
            .get(this.URL)
            .map(function (res) { return res || []; })
            .catch(this.handleError);
    };
    TaskService.prototype.saveTask = function (task) {
        return !task.id ? this.addTask(task) : this.updateTask(task);
    };
    TaskService.prototype.addTask = function (task) {
        return this.http
            .post(this.URL, task, this.options)
            .map(function (res) { return res; })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    TaskService.prototype.updateTask = function (body) {
        return this.http
            .put(this.URL + "/" + body["id"], body, this.options)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    TaskService.prototype.removeTask = function (id) {
        return this.http
            .delete(this.URL + "/" + id, this.options)
            .catch(this.raiseServerError);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}(__WEBPACK_IMPORTED_MODULE_5_app_common_common_service__["a" /* CommonService */]));



/***/ }),

/***/ "../../../../../src/app/tasks/tasks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_service_task_service__ = __webpack_require__("../../../../../src/app/tasks/task-service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_filter_task_filter_pipe__ = __webpack_require__("../../../../../src/app/tasks/task-filter/task-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_resolver_task_resolver_service__ = __webpack_require__("../../../../../src/app/tasks/task-resolver/task-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_list_toolbar_task_list_toolbar_component__ = __webpack_require__("../../../../../src/app/tasks/task-list-toolbar/task-list-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_edit_task_edit_component__ = __webpack_require__("../../../../../src/app/tasks/task-edit/task-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task_list_item_task_list_item_component__ = __webpack_require__("../../../../../src/app/tasks/task-list-item/task-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__task_detail_task_detail_component__ = __webpack_require__("../../../../../src/app/tasks/task-detail/task-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_edit_info_task_edit_info_component__ = __webpack_require__("../../../../../src/app/tasks/task-edit-info/task-edit-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_edit_tags_task_edit_tags_component__ = __webpack_require__("../../../../../src/app/tasks/task-edit-tags/task-edit-tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_edit_guard_task_edit_guard_service__ = __webpack_require__("../../../../../src/app/tasks/task-edit-guard/task-edit-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_ng_material_module__ = __webpack_require__("../../../../../src/app/common/ng-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { AuthGuardService } from '../user/auth-guard/auth-guard.service';


var TasksModule = (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__common_ng_material_module__["a" /* NGMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["h" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["h" /* RouterModule */].forChild([
                    // {
                    //   path: 'tasks',
                    //   canActivate:[AuthGuardService],
                    //   children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_9__task_list_task_list_component__["a" /* TaskListComponent */]
                    },
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_11__task_detail_task_detail_component__["a" /* TaskDetailComponent */],
                        resolve: { task: __WEBPACK_IMPORTED_MODULE_6__task_resolver_task_resolver_service__["a" /* TaskResolver */] }
                    },
                    {
                        path: ':id/edit',
                        component: __WEBPACK_IMPORTED_MODULE_8__task_edit_task_edit_component__["a" /* TaskEditComponent */],
                        canDeactivate: [__WEBPACK_IMPORTED_MODULE_14__task_edit_guard_task_edit_guard_service__["a" /* TaskEditGuardService */]],
                        resolve: { task: __WEBPACK_IMPORTED_MODULE_6__task_resolver_task_resolver_service__["a" /* TaskResolver */] },
                        children: [{
                                path: '',
                                redirectTo: 'info',
                                pathMatch: 'full'
                            },
                            {
                                path: 'info',
                                component: __WEBPACK_IMPORTED_MODULE_12__task_edit_info_task_edit_info_component__["a" /* TaskEditInfoComponent */]
                            },
                            {
                                path: 'tags',
                                component: __WEBPACK_IMPORTED_MODULE_13__task_edit_tags_task_edit_tags_component__["a" /* TaskEditTagsComponent */]
                            }]
                    }
                    //   ]
                    // },
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__task_list_toolbar_task_list_toolbar_component__["a" /* TaskListToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_edit_task_edit_component__["a" /* TaskEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__task_list_item_task_list_item_component__["a" /* TaskListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_edit_task_edit_component__["a" /* TaskEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__task_detail_task_detail_component__["a" /* TaskDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__task_edit_info_task_edit_info_component__["a" /* TaskEditInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__task_edit_tags_task_edit_tags_component__["a" /* TaskEditTagsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__task_filter_task_filter_pipe__["a" /* TaskFilterPipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__task_service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_6__task_resolver_task_resolver_service__["a" /* TaskResolver */], __WEBPACK_IMPORTED_MODULE_14__task_edit_guard_task_edit_guard_service__["a" /* TaskEditGuardService */]]
        })
    ], TasksModule);
    return TasksModule;
}());



/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_do__ = __webpack_require__("../../../../rxjs/_esm5/operator/do.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_do PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
//# sourceMappingURL=do.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _do;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_tap__ = __webpack_require__("../../../../rxjs/_esm5/operators/tap.js");
/** PURE_IMPORTS_START .._operators_tap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_tap__["a" /* tap */])(nextOrObserver, error, complete)(this);
}
//# sourceMappingURL=do.js.map 


/***/ })

});
//# sourceMappingURL=tasks.module.chunk.js.map