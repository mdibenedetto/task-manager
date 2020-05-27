function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,a=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/mPg":function(t,e,n){"use strict";n.r(e),n.d(e,"TasksModule",(function(){return st}));var a,i,r,c=n("3Pt+"),s=n("ofXK"),o=n("tyNb"),l=n("XNiG"),b=n("LRne"),u=n("z6cu"),d=n("lJxs"),f=n("JIr8"),k=n("03OC"),h=n("fXoL"),p=n("tk/3"),v=((r=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){var a;return _classCallCheck(this,n),(a=e.call(this)).http=t,a.task=new l.a,a.tasks=new Array,a.URL=a.BASE_URL+"/tasks",a.task.subscribe((function(t){a.tasks.push(t)})),a}return _createClass(n,[{key:"findTaskTypes",value:function(){return this.http.get(this.BASE_URL+"/taskTypes")}},{key:"findTask",value:function(t){return 0===t?Object(b.a)({id:0}):this.http.get("".concat(this.URL,"/").concat(t)).pipe(Object(d.a)(this.extractData),Object(f.a)(this.handleError))}},{key:"getTasks",value:function(t){return this.http.get(this.URL).pipe(Object(d.a)((function(t){return t||[]})),Object(f.a)(this.handleError))}},{key:"saveTask",value:function(t){return t.id?this.updateTask(t):this.addTask(t)}},{key:"addTask",value:function(t){return this.http.post(this.URL,t,this.options).pipe(Object(d.a)((function(t){return t})),Object(f.a)((function(t){return Object(u.a)(t.json().error||"Server error")})))}},{key:"updateTask",value:function(t){return this.http.put("".concat(this.URL,"/").concat(t.id),t,this.options).pipe(Object(f.a)((function(t){return Object(u.a)(t.json().error||"Server error")})))}},{key:"removeTask",value:function(t){return this.http.delete("".concat(this.URL,"/").concat(t),this.options).pipe(Object(f.a)(this.raiseServerError))}}]),n}(k.a)).\u0275fac=function(t){return new(t||r)(h.Zb(p.b))},r.\u0275prov=h.Mb({token:r,factory:r.\u0275fac}),r),g=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canDeactivate",value:function(t){return!t.isDirty||confirm("Navigate away and lose all changes to ".concat(t.task.title||"New Task"))}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275prov=h.Mb({token:i,factory:i.\u0275fac}),i),y=((a=function(){function t(e,n){_classCallCheck(this,t),this.taskService=e,this.router=n}return _createClass(t,[{key:"resolve",value:function(t,e){var n=this,a=t.params.id;return a&&"new"!==a||(a=0),isNaN(a)?(console.warn("Task id is not a number:".concat(a)),this.router.navigate(["/tasks"]),Object(b.a)(null)):this.taskService.findTask(+a).pipe(Object(d.a)((function(t){return t||(console.log("task was not found ".concat(a)),n.router.navigate(["/tasks"]),null)})),Object(f.a)((function(t){return console.warn("Server erro retriving ".concat(t)),n.router.navigate(["/tasks"]),Object(b.a)(null)})))}}]),t}()).\u0275fac=function(t){return new(t||a)(h.Zb(v),h.Zb(o.g))},a.\u0275prov=h.Mb({token:a,factory:a.\u0275fac}),a),m=n("AmtN"),U=n("JkhQ"),V=n("kmnG"),C=n("qFsG"),O=n("iadO"),_=n("d3UM"),T=n("FKr1");function w(t,e){1&t&&(h.Vb(0,"span",22),h.yc(1,"Title is required"),h.Ub())}function E(t,e){if(1&t&&(h.Vb(0,"mat-option",23),h.yc(1),h.Ub()),2&t){var n=e.$implicit;h.lc("value",n.id),h.Eb(1),h.Ac(" ",n.fullName," ")}}var M,P=function(t){return{"has-danger":t}},x=((M=function(){function t(e){_classCallCheck(this,t),this.userService=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.loadForm(),this.loadUsers()}},{key:"loadForm",value:function(){this.taskForm&&this.taskForm.reset()}},{key:"loadUsers",value:function(){var t=this;this.userService.findUsers().subscribe((function(e){t.assigneeUsers=e}))}}]),t}()).\u0275fac=function(t){return new(t||M)(h.Qb(U.a))},M.\u0275cmp=h.Kb({type:M,selectors:[["task-edit-info"]],viewQuery:function(t,e){var n;1&t&&h.Cc(c.j,!0),2&t&&h.pc(n=h.ec())&&(e.taskForm=n.first)},inputs:{task:"task"},decls:46,vars:14,consts:[[1,"card-block"],[1,"container"],["name","task"],["taskForm","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-10"],["type","text","required","","name","title",1,"form-control",3,"ngModel","ngModelChange"],["title","ngModel"],["class","col-10 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","description",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-2","form-control"],["name","startDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["startDate",""],["name","endDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["endDate",""],[1,"col-4","form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"col-10","offset-2","form-text"],[3,"value"]],template:function(t,e){if(1&t&&(h.Vb(0,"div",0),h.Vb(1,"div",1),h.Vb(2,"form",2,3),h.Vb(4,"fieldset"),h.Vb(5,"legend"),h.yc(6,"Basic Task Information"),h.Ub(),h.Vb(7,"div",4),h.Vb(8,"label",5),h.yc(9,"Title "),h.Ub(),h.Vb(10,"div",6),h.Vb(11,"input",7,8),h.dc("ngModelChange",(function(t){return e.task.title=t})),h.Ub(),h.Ub(),h.xc(13,w,2,0,"span",9),h.Ub(),h.Vb(14,"div",10),h.Vb(15,"label",5),h.yc(16,"Description "),h.Ub(),h.Vb(17,"div",6),h.Vb(18,"input",11),h.dc("ngModelChange",(function(t){return e.task.description=t})),h.Ub(),h.Ub(),h.Ub(),h.Vb(19,"div",10),h.Vb(20,"label",5),h.yc(21,"Start Date "),h.Ub(),h.Vb(22,"div",6),h.Vb(23,"mat-form-field",12),h.Vb(24,"input",13),h.dc("ngModelChange",(function(t){return e.task.startDate=t})),h.Ub(),h.Rb(25,"mat-datepicker-toggle",14),h.Rb(26,"mat-datepicker",null,15),h.Ub(),h.Ub(),h.Ub(),h.Vb(28,"div",10),h.Vb(29,"label",5),h.yc(30,"End Date"),h.Ub(),h.Vb(31,"div",6),h.Vb(32,"mat-form-field",12),h.Vb(33,"input",16),h.dc("ngModelChange",(function(t){return e.task.endDate=t})),h.Ub(),h.Rb(34,"mat-datepicker-toggle",14),h.Rb(35,"mat-datepicker",null,17),h.Ub(),h.Ub(),h.Ub(),h.Vb(37,"div",10),h.Vb(38,"label",5),h.yc(39,"Assignee"),h.Ub(),h.Vb(40,"div",6),h.Vb(41,"mat-form-field",18),h.Vb(42,"mat-select",19),h.dc("ngModelChange",(function(t){return e.task.assigneeId=t})),h.Vb(43,"mat-option",20),h.yc(44,"None"),h.Ub(),h.xc(45,E,2,2,"mat-option",21),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Ub()),2&t){var n=h.qc(12),a=h.qc(27),i=h.qc(36);h.Eb(7),h.lc("ngClass",h.nc(12,P,n.invalid&&n.touched&&n.dirty)),h.Eb(4),h.lc("ngModel",e.task.title),h.Eb(2),h.lc("ngIf",n.invalid&&n.touched&&n.dirty),h.Eb(5),h.lc("ngModel",e.task.description),h.Eb(6),h.lc("matDatepicker",a)("ngModel",e.task.startDate),h.Eb(1),h.lc("for",a),h.Eb(8),h.lc("matDatepicker",i)("ngModel",e.task.endDate),h.Eb(1),h.lc("for",i),h.Eb(8),h.lc("ngModel",e.task.assigneeId),h.Eb(3),h.lc("ngForOf",e.assigneeUsers)}},directives:[c.n,c.i,c.j,s.i,c.b,c.l,c.h,c.k,s.k,V.b,C.b,O.b,O.d,V.e,O.a,_.a,T.i,s.j],styles:[""]}),M);function S(t,e){if(1&t&&(h.Vb(0,"mat-option",15),h.yc(1),h.Ub()),2&t){var n=e.$implicit;h.lc("value",n.id),h.Eb(1),h.Ac(" ",n.description," ")}}function I(t,e){1&t&&(h.Vb(0,"span",16),h.yc(1,"Category is required"),h.Ub())}var R,j=function(t){return{"has-danger":t}},D=((R=function(){function t(e){_classCallCheck(this,t),this.taskService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.taskService.findTaskTypes().subscribe((function(e){return t.categories=e}))}}]),t}()).\u0275fac=function(t){return new(t||R)(h.Qb(v))},R.\u0275cmp=h.Kb({type:R,selectors:[["task-edit-tags"]],viewQuery:function(t,e){var n;1&t&&h.Cc(c.j,!0),2&t&&h.pc(n=h.ec())&&(e.taskForm=n.first)},inputs:{task:"task"},decls:24,vars:6,consts:[[1,"card-block"],[1,"container"],["name","task"],["form","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-4"],["required","",1,"form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["class","col-8 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","tags",1,"form-control"],[1,"btn","btn-secondary"],[3,"value"],[1,"col-8","offset-2","form-text"]],template:function(t,e){1&t&&(h.Vb(0,"div",0),h.Vb(1,"div",1),h.Vb(2,"form",2,3),h.Vb(4,"fieldset"),h.Vb(5,"legend"),h.yc(6,"Task Search Tags"),h.Ub(),h.Vb(7,"div",4),h.Vb(8,"label",5),h.yc(9,"Category"),h.Ub(),h.Vb(10,"div",6),h.Vb(11,"mat-form-field",7),h.Vb(12,"mat-select",8),h.dc("ngModelChange",(function(t){return e.task.categoryId=t})),h.Vb(13,"mat-option",9),h.yc(14,"None"),h.Ub(),h.xc(15,S,2,2,"mat-option",10),h.Ub(),h.Ub(),h.Ub(),h.xc(16,I,2,0,"span",11),h.Ub(),h.Vb(17,"div",12),h.Vb(18,"label",5),h.yc(19,"Search Tags "),h.Ub(),h.Vb(20,"div",6),h.Rb(21,"input",13),h.Ub(),h.Vb(22,"button",14),h.yc(23,"Add"),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Ub()),2&t&&(h.Eb(7),h.lc("ngClass",h.nc(4,j,0==e.task.categoryId)),h.Eb(5),h.lc("ngModel",e.task.categoryId),h.Eb(3),h.lc("ngForOf",e.categories),h.Eb(1),h.lc("ngIf",0==e.task.categoryId))},directives:[c.n,c.i,c.j,s.i,V.b,_.a,c.h,c.k,T.i,s.j,s.k],styles:[""]}),R);function F(t,e){if(1&t&&(h.Vb(0,"div"),h.Rb(1,"task-edit-info",14),h.Ub()),2&t){var n=h.gc();h.Eb(1),h.lc("task",n.task)}}function L(t,e){if(1&t&&(h.Vb(0,"div"),h.Vb(1,"task-edit-tags",14),h.yc(2,">"),h.Ub(),h.Ub()),2&t){var n=h.gc();h.Eb(1),h.lc("task",n.task)}}function z(t,e){if(1&t){var n=h.Wb();h.Vb(0,"a",15),h.dc("click",(function(){return h.rc(n),h.gc().delete()})),h.yc(1,"Delete"),h.Ub()}}var A,N,q=function(t){return{active:t}},Q=function(t){return{"fa fa-exclamation-circle text-danger":t}},B=function(){return["/tasks"]},J=((N=function(){function t(e,n,a,i){_classCallCheck(this,t),this.taskService=e,this.messageService=n,this.route=a,this.router=i,this.pageTitle="Task Edit",this.errorMessage="",this.currentTab="info",this.dataIsValid={}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.data.subscribe((function(e){t.onTaskRetrieved(e.task)}))}},{key:"isValid",value:function(t){var e=this;return this.validate(),t?this.dataIsValid[t]:this.dataIsValid&&Object.keys(this.dataIsValid).every((function(t){return!0===e.dataIsValid[t]}))}},{key:"onTaskRetrieved",value:function(t){this.task=this.route.snapshot.data.task,this.pageTitle=0===this.task.id?"Add Task":"Edit Task: ".concat(this.task.title)}},{key:"reset",value:function(){this.dataIsValid=null,this.currentTask=null,this.originalTask=null}},{key:"save",value:function(){var t=this;this.isValid(null)?this.taskService.saveTask(this.task).subscribe((function(){return t.onSaveComplete("".concat(t.task.title," was saved"))}),(function(e){return t.errorMessage=e})):this.errorMessage="Please correct the validation errors."}},{key:"delete",value:function(){var t=this;0===this.task.id?this.onSaveComplete():confirm("Really delete the task: ".concat(this.task.title,"?"))&&this.taskService.removeTask(this.task.id).subscribe((function(){return t.onSaveComplete("".concat(t.task.title," was deleted"))}),(function(e){return t.errorMessage=e}))}},{key:"onSaveComplete",value:function(t){t&&this.messageService.addMessage(t),this.reset(),this.router.navigate(["/tasks"])}},{key:"validate",value:function(){this.dataIsValid={},this.dataIsValid.info=this.task.title&&""!==this.task.title&&!this.task.title.startsWith(" ")}},{key:"task",get:function(){return this.currentTask},set:function(t){this.currentTask=t,this.originalTask=Object.assign({},t)}},{key:"isDirty",get:function(){return JSON.stringify(this.originalTask)!==JSON.stringify(this.currentTask)}}]),t}()).\u0275fac=function(t){return new(t||N)(h.Qb(v),h.Qb(m.a),h.Qb(o.a),h.Qb(o.g))},N.\u0275cmp=h.Kb({type:N,selectors:[["task-edit"]],decls:22,vars:16,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"wizard"],[1,"nav","nav-pills"],[1,"nav-link",3,"ngClass","click"],[3,"ngClass"],[4,"ngIf"],[1,"card-footer"],[1,"row"],[1,"col-md-6","col-md-offset-2","footer-body"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["href","#",1,"btn","btn-secondary",3,"routerLink"],["class","btn btn-secondary",3,"click",4,"ngIf"],[3,"task"],[1,"btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(h.Vb(0,"div",0),h.Vb(1,"div",1),h.yc(2),h.Ub(),h.Vb(3,"div",2),h.Vb(4,"div",3),h.Vb(5,"nav",4),h.Vb(6,"a",5),h.dc("click",(function(){return e.currentTab="info"})),h.yc(7," Basic Information "),h.Rb(8,"i",6),h.Ub(),h.Vb(9,"a",5),h.dc("click",(function(){return e.currentTab="tags"})),h.yc(10," Search Tags "),h.Rb(11,"i"),h.Ub(),h.Ub(),h.Ub(),h.xc(12,F,2,1,"div",7),h.xc(13,L,3,1,"div",7),h.Ub(),h.Vb(14,"div",8),h.Vb(15,"div",9),h.Vb(16,"div",10),h.Vb(17,"button",11),h.dc("click",(function(){return e.save()})),h.yc(18," Save "),h.Ub(),h.Vb(19,"a",12),h.yc(20,"Cancel"),h.Ub(),h.xc(21,z,2,0,"a",13),h.Ub(),h.Ub(),h.Ub(),h.Ub()),2&t&&(h.Eb(2),h.Ac(" ",e.pageTitle," "),h.Eb(4),h.lc("ngClass",h.nc(9,q,"info"==e.currentTab)),h.Eb(2),h.lc("ngClass",h.nc(11,Q,!e.isValid("info"))),h.Eb(1),h.lc("ngClass",h.nc(13,q,"tags"==e.currentTab)),h.Eb(3),h.lc("ngIf","info"==e.currentTab),h.Eb(1),h.lc("ngIf","tags"==e.currentTab),h.Eb(4),h.lc("disabled",!e.isValid(null)),h.Eb(2),h.lc("routerLink",h.mc(15,B)),h.Eb(2),h.lc("ngIf",e.task.id>0))},directives:[s.i,s.k,o.i,x,D],styles:['form[_ngcontent-%COMP%]{padding:10px}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 8px 0 0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#efefef;display:inline-block;margin-right:5px;min-width:150px;outline:none;padding:10px 40px;position:relative;text-decoration:none;cursor:pointer}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#007acc;color:#fff}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after{border-left-color:#007acc}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:20px solid #fff;position:absolute;content:"";top:0;left:0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{border:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:21px solid #efefef;position:absolute;content:"";top:0;right:-20px;z-index:2}.footer-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:5px}']}),N),K=((A=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e){return(e=e?e.toLocaleLowerCase():null)?t.filter((function(t){return-1!==(t.title||"").toLocaleLowerCase().indexOf(e)})):t}}]),t}()).\u0275fac=function(t){return new(t||A)},A.\u0275pipe=h.Pb({name:"taskFilter",type:A,pure:!0}),A),$=function(t){return["/tasks",t,"view"]},G=function(t){return{filterBy:t}},W=function(t){return["/tasks",t,"edit"]};function X(t,e){if(1&t){var n=h.Wb();h.Vb(0,"tr",13),h.dc("click",(function(){h.rc(n);var t=e.index;return h.gc().setSelectedRow(t)})),h.Vb(1,"th",14),h.yc(2),h.Ub(),h.Vb(3,"td"),h.Vb(4,"a",15),h.yc(5),h.Ub(),h.Ub(),h.Vb(6,"td"),h.yc(7),h.Ub(),h.Vb(8,"td"),h.yc(9),h.hc(10,"date"),h.Ub(),h.Vb(11,"td"),h.yc(12),h.hc(13,"date"),h.Ub(),h.Vb(14,"td",16),h.yc(15),h.Ub(),h.Vb(16,"td"),h.Vb(17,"a",17),h.yc(18,"Edit"),h.Ub(),h.Ub(),h.Vb(19,"td"),h.Vb(20,"button",18),h.dc("click",(function(){h.rc(n);var t=e.$implicit;return h.gc().removeTask(t.id)})),h.yc(21," Delete "),h.Ub(),h.Ub(),h.Ub()}if(2&t){var a=e.$implicit,i=e.index,r=h.gc();h.Hb("active",i==r.selectedRow),h.Eb(2),h.zc(i+1),h.Eb(2),h.lc("routerLink",h.nc(17,$,a.id))("queryParams",h.nc(19,G,r.listFilter)),h.Eb(1),h.zc(a.title),h.Eb(2),h.zc(a.description),h.Eb(2),h.zc(h.ic(10,11,a.startDate,"dd/MM/yyyy")),h.Eb(3),h.zc(h.ic(13,14,a.endDate,"dd/MM/yyyy")),h.Eb(3),h.zc(a.assigneeId),h.Eb(2),h.lc("routerLink",h.nc(21,W,a.id))}}var Z,H,Y,tt=((Z=function(){function t(e,n){_classCallCheck(this,t),this.taskService=e,this.route=n,this.selectedRow=-1,this.selectedId=-1,this.listFilter=""}return _createClass(t,[{key:"ngOnInit",value:function(){this.searchTasks()}},{key:"searchTasks",value:function(){var t=this;this.taskService.getTasks().subscribe((function(e){t.tasks=e,t.listFilter=t.route.snapshot.queryParams.filterBy||""}),(function(t){console.error("Error Server: ".concat(t))}))}},{key:"removeTask",value:function(t){var e=this;this.taskService.removeTask(t).subscribe((function(t){e.searchTasks()}),(function(t){console.log(t)}))}},{key:"setSelectedRow",value:function(t){this.selectedId=this.tasks[t].id,this.selectedRow=t===this.selectedRow?-1:t}}]),t}()).\u0275fac=function(t){return new(t||Z)(h.Qb(v),h.Qb(o.a))},Z.\u0275cmp=h.Kb({type:Z,selectors:[["task-list"]],decls:38,vars:7,consts:[[1,"card","card-default"],[1,"card-header"],[1,"container"],[1,"card-block"],[1,"form-inline","mb-2","mt-2"],[1,"col-2"],[1,"btn","btn-primary",3,"click"],[1,"col-form-label"],[1,"col-3"],["type","text","placeholder","type task title",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","table-hover","table-striped"],[3,"active","click",4,"ngFor","ngForOf"],[1,"card-footer"],[3,"click"],["scope","row"],[3,"routerLink","queryParams"],["align","center"],["href","#","role","button",1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(h.Vb(0,"div",0),h.Vb(1,"div",1),h.Vb(2,"div",2),h.yc(3),h.Ub(),h.Ub(),h.Vb(4,"div",3),h.Vb(5,"div",3),h.Vb(6,"div",4),h.Vb(7,"div",5),h.Vb(8,"button",6),h.dc("click",(function(){return e.searchTasks()})),h.yc(9," Refresh "),h.Ub(),h.Ub(),h.Vb(10,"div",5),h.Vb(11,"label",7),h.yc(12,"Filter by:"),h.Ub(),h.Ub(),h.Vb(13,"div",8),h.Vb(14,"input",9),h.dc("ngModelChange",(function(t){return e.listFilter=t})),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Vb(15,"div",2),h.Vb(16,"table",10),h.Vb(17,"thead"),h.Vb(18,"tr"),h.Vb(19,"th"),h.yc(20,"#"),h.Ub(),h.Vb(21,"th"),h.yc(22,"Title"),h.Ub(),h.Vb(23,"th"),h.yc(24,"Description"),h.Ub(),h.Vb(25,"th"),h.yc(26,"Start date"),h.Ub(),h.Vb(27,"th"),h.yc(28,"End date"),h.Ub(),h.Vb(29,"th"),h.yc(30,"Assegnee Id"),h.Ub(),h.Rb(31,"th"),h.Rb(32,"th"),h.Ub(),h.Ub(),h.Vb(33,"tbody"),h.xc(34,X,22,23,"tr",11),h.hc(35,"taskFilter"),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Vb(36,"div",12),h.yc(37),h.Ub(),h.Ub()),2&t&&(h.Eb(3),h.Ac("Task List - total tasks: ",null==e.tasks?null:e.tasks.length,""),h.Eb(11),h.lc("ngModel",e.listFilter),h.Eb(20),h.lc("ngForOf",h.ic(35,4,e.tasks,e.listFilter)),h.Eb(3),h.Ac("total tasks: ",null==e.tasks?null:e.tasks.length,""))},directives:[c.b,c.h,c.k,s.j,o.i],pipes:[K,s.d],styles:[""]}),Z),et=function(){return["/tasks"]},nt=function(t){return["/tasks",t,"edit"]},at=((H=function(){function t(e){_classCallCheck(this,t),this.route=e,this.pageTitle="Task Detail"}return _createClass(t,[{key:"ngOnInit",value:function(){this.task=this.route.snapshot.data.task,this.pageTitle=this.task.id?"Edit Task: ".concat(this.task.title):"Add Task"}}]),t}()).\u0275fac=function(t){return new(t||H)(h.Qb(o.a))},H.\u0275cmp=h.Kb({type:H,selectors:[["task-detail"]],decls:37,vars:17,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"row"],[1,"col-md-2","label"],[1,"col-md-6"],[1,"card-footer"],["queryParamsHandling","preserve",1,"btn","btn-secondary",3,"routerLink"],[1,"fa","fa-chevron-left"],[1,"btn","btn-primary",2,"width","80px","margin-left","10px",3,"routerLink"]],template:function(t,e){1&t&&(h.Vb(0,"div",0),h.Vb(1,"div",1),h.yc(2),h.Ub(),h.Vb(3,"div",2),h.Vb(4,"div",3),h.Vb(5,"div",4),h.yc(6,"Title:"),h.Ub(),h.Vb(7,"div",5),h.yc(8),h.Ub(),h.Ub(),h.Vb(9,"div",3),h.Vb(10,"div",4),h.yc(11,"Description:"),h.Ub(),h.Vb(12,"div",5),h.yc(13),h.Ub(),h.Ub(),h.Vb(14,"div",3),h.Vb(15,"div",4),h.yc(16,"Start Date:"),h.Ub(),h.Vb(17,"div",5),h.yc(18),h.hc(19,"date"),h.Ub(),h.Ub(),h.Vb(20,"div",3),h.Vb(21,"div",4),h.yc(22,"End Date:"),h.Ub(),h.Vb(23,"div",5),h.yc(24),h.hc(25,"date"),h.Ub(),h.Ub(),h.Vb(26,"div",3),h.Vb(27,"div",4),h.yc(28,"Assigne:"),h.Ub(),h.Vb(29,"div",5),h.yc(30),h.Ub(),h.Ub(),h.Ub(),h.Vb(31,"div",6),h.Vb(32,"a",7),h.Rb(33,"i",8),h.yc(34," Back "),h.Ub(),h.Vb(35,"a",9),h.yc(36," Edit "),h.Ub(),h.Ub(),h.Ub()),2&t&&(h.Eb(2),h.Ac(" ",e.pageTitle+": "+e.task.title," "),h.Eb(6),h.zc(e.task.title),h.Eb(5),h.zc(e.task.description),h.Eb(5),h.zc(h.ic(19,8,e.task.startDate,"mediumDate")),h.Eb(6),h.zc(h.ic(25,11,e.task.endDate,"mediumDate")),h.Eb(6),h.zc(e.task.assigneeId),h.Eb(2),h.lc("routerLink",h.mc(14,et)),h.Eb(3),h.lc("routerLink",h.nc(15,nt,e.task.id)))},directives:[o.i],pipes:[s.d],styles:[".card-block[_ngcontent-%COMP%]{padding:10px}.label[_ngcontent-%COMP%]{font-weight:700}"]}),H),it=n("CP11"),rt={component:J,canDeactivate:[g],resolve:{task:y}},ct=[{path:"",component:tt},{path:":id/view",component:at,resolve:{task:y}},Object.assign({path:"new"},rt),Object.assign({path:":id/edit"},rt)],st=((Y=function t(){_classCallCheck(this,t)}).\u0275mod=h.Ob({type:Y}),Y.\u0275inj=h.Nb({factory:function(t){return new(t||Y)},providers:[v,y,g],imports:[[it.a,o.j,c.d,s.b,o.j.forChild(ct)]]}),Y)}}]);