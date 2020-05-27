(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/mPg":function(t,e,s){"use strict";s.r(e),s.d(e,"TasksModule",(function(){return Z}));var i=s("3Pt+"),a=s("ofXK"),n=s("tyNb"),r=s("XNiG"),c=s("LRne"),o=s("z6cu"),b=s("lJxs"),l=s("JIr8"),d=s("03OC"),u=s("fXoL"),h=s("tk/3");let f=(()=>{class t extends d.a{constructor(t){super(),this.http=t,this.task=new r.a,this.tasks=new Array,this.URL=this.BASE_URL+"/tasks",this.task.subscribe(t=>{this.tasks.push(t)})}findTaskTypes(){return this.http.get(this.BASE_URL+"/taskTypes")}findTask(t){if(0===t){let t={id:0};return Object(c.a)(t)}return this.http.get(`${this.URL}/${t}`).pipe(Object(b.a)(this.extractData),Object(l.a)(this.handleError))}getTasks(t){return this.http.get(this.URL).pipe(Object(b.a)(t=>t||[]),Object(l.a)(this.handleError))}saveTask(t){return t.id?this.updateTask(t):this.addTask(t)}addTask(t){return this.http.post(this.URL,t,this.options).pipe(Object(b.a)(t=>t),Object(l.a)(t=>Object(o.a)(t.json().error||"Server error")))}updateTask(t){return this.http.put(`${this.URL}/${t.id}`,t,this.options).pipe(Object(l.a)(t=>Object(o.a)(t.json().error||"Server error")))}removeTask(t){return this.http.delete(`${this.URL}/${t}`,this.options).pipe(Object(l.a)(this.raiseServerError))}}return t.\u0275fac=function(e){return new(e||t)(u.Zb(h.b))},t.\u0275prov=u.Mb({token:t,factory:t.\u0275fac}),t})(),k=(()=>{class t{constructor(){}canDeactivate(t){return!t.isDirty||confirm(`Navigate away and lose all changes to ${t.task.title||"New Task"}`)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Mb({token:t,factory:t.\u0275fac}),t})(),g=(()=>{class t{constructor(t,e){this.taskService=t,this.router=e}resolve(t,e){let s=t.params.id;return s&&"new"!==s||(s=0),isNaN(s)?(console.warn(`Task id is not a number:${s}`),this.router.navigate(["/tasks"]),Object(c.a)(null)):this.taskService.findTask(+s).pipe(Object(b.a)(t=>t||(console.log(`task was not found ${s}`),this.router.navigate(["/tasks"]),null)),Object(l.a)(t=>(console.warn(`Server erro retriving ${t}`),this.router.navigate(["/tasks"]),Object(c.a)(null))))}}return t.\u0275fac=function(e){return new(e||t)(u.Zb(f),u.Zb(n.g))},t.\u0275prov=u.Mb({token:t,factory:t.\u0275fac}),t})();var p=s("AmtN"),v=s("JkhQ"),m=s("kmnG"),U=s("qFsG"),V=s("iadO"),y=s("d3UM"),T=s("FKr1");function M(t,e){1&t&&(u.Vb(0,"span",22),u.yc(1,"Title is required"),u.Ub())}function E(t,e){if(1&t&&(u.Vb(0,"mat-option",23),u.yc(1),u.Ub()),2&t){const t=e.$implicit;u.lc("value",t.id),u.Eb(1),u.Ac(" ",t.fullName," ")}}const w=function(t){return{"has-danger":t}};let C=(()=>{class t{constructor(t){this.userService=t}ngOnInit(){this.loadForm(),this.loadUsers()}loadForm(){this.taskForm&&this.taskForm.reset()}loadUsers(){this.userService.findUsers().subscribe(t=>{this.assigneeUsers=t})}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(v.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-edit-info"]],viewQuery:function(t,e){var s;1&t&&u.Cc(i.j,!0),2&t&&u.pc(s=u.ec())&&(e.taskForm=s.first)},inputs:{task:"task"},decls:46,vars:14,consts:[[1,"card-block"],[1,"container"],["name","task"],["taskForm","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-10"],["type","text","required","","name","title",1,"form-control",3,"ngModel","ngModelChange"],["title","ngModel"],["class","col-10 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","description",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-2","form-control"],["name","startDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["startDate",""],["name","endDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["endDate",""],[1,"col-4","form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"col-10","offset-2","form-text"],[3,"value"]],template:function(t,e){if(1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"form",2,3),u.Vb(4,"fieldset"),u.Vb(5,"legend"),u.yc(6,"Basic Task Information"),u.Ub(),u.Vb(7,"div",4),u.Vb(8,"label",5),u.yc(9,"Title "),u.Ub(),u.Vb(10,"div",6),u.Vb(11,"input",7,8),u.dc("ngModelChange",(function(t){return e.task.title=t})),u.Ub(),u.Ub(),u.xc(13,M,2,0,"span",9),u.Ub(),u.Vb(14,"div",10),u.Vb(15,"label",5),u.yc(16,"Description "),u.Ub(),u.Vb(17,"div",6),u.Vb(18,"input",11),u.dc("ngModelChange",(function(t){return e.task.description=t})),u.Ub(),u.Ub(),u.Ub(),u.Vb(19,"div",10),u.Vb(20,"label",5),u.yc(21,"Start Date "),u.Ub(),u.Vb(22,"div",6),u.Vb(23,"mat-form-field",12),u.Vb(24,"input",13),u.dc("ngModelChange",(function(t){return e.task.startDate=t})),u.Ub(),u.Rb(25,"mat-datepicker-toggle",14),u.Rb(26,"mat-datepicker",null,15),u.Ub(),u.Ub(),u.Ub(),u.Vb(28,"div",10),u.Vb(29,"label",5),u.yc(30,"End Date"),u.Ub(),u.Vb(31,"div",6),u.Vb(32,"mat-form-field",12),u.Vb(33,"input",16),u.dc("ngModelChange",(function(t){return e.task.endDate=t})),u.Ub(),u.Rb(34,"mat-datepicker-toggle",14),u.Rb(35,"mat-datepicker",null,17),u.Ub(),u.Ub(),u.Ub(),u.Vb(37,"div",10),u.Vb(38,"label",5),u.yc(39,"Assignee"),u.Ub(),u.Vb(40,"div",6),u.Vb(41,"mat-form-field",18),u.Vb(42,"mat-select",19),u.dc("ngModelChange",(function(t){return e.task.assigneeId=t})),u.Vb(43,"mat-option",20),u.yc(44,"None"),u.Ub(),u.xc(45,E,2,2,"mat-option",21),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub()),2&t){const t=u.qc(12),s=u.qc(27),i=u.qc(36);u.Eb(7),u.lc("ngClass",u.nc(12,w,t.invalid&&t.touched&&t.dirty)),u.Eb(4),u.lc("ngModel",e.task.title),u.Eb(2),u.lc("ngIf",t.invalid&&t.touched&&t.dirty),u.Eb(5),u.lc("ngModel",e.task.description),u.Eb(6),u.lc("matDatepicker",s)("ngModel",e.task.startDate),u.Eb(1),u.lc("for",s),u.Eb(8),u.lc("matDatepicker",i)("ngModel",e.task.endDate),u.Eb(1),u.lc("for",i),u.Eb(8),u.lc("ngModel",e.task.assigneeId),u.Eb(3),u.lc("ngForOf",e.assigneeUsers)}},directives:[i.n,i.i,i.j,a.i,i.b,i.l,i.h,i.k,a.k,m.b,U.b,V.b,V.d,m.e,V.a,y.a,T.i,a.j],styles:[""]}),t})();function O(t,e){if(1&t&&(u.Vb(0,"mat-option",15),u.yc(1),u.Ub()),2&t){const t=e.$implicit;u.lc("value",t.id),u.Eb(1),u.Ac(" ",t.description," ")}}function x(t,e){1&t&&(u.Vb(0,"span",16),u.yc(1,"Category is required"),u.Ub())}const I=function(t){return{"has-danger":t}};let S=(()=>{class t{constructor(t){this.taskService=t}ngOnInit(){this.taskService.findTaskTypes().subscribe(t=>this.categories=t)}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(f))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-edit-tags"]],viewQuery:function(t,e){var s;1&t&&u.Cc(i.j,!0),2&t&&u.pc(s=u.ec())&&(e.taskForm=s.first)},inputs:{task:"task"},decls:24,vars:6,consts:[[1,"card-block"],[1,"container"],["name","task"],["form","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-4"],["required","",1,"form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["class","col-8 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","tags",1,"form-control"],[1,"btn","btn-secondary"],[3,"value"],[1,"col-8","offset-2","form-text"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"form",2,3),u.Vb(4,"fieldset"),u.Vb(5,"legend"),u.yc(6,"Task Search Tags"),u.Ub(),u.Vb(7,"div",4),u.Vb(8,"label",5),u.yc(9,"Category"),u.Ub(),u.Vb(10,"div",6),u.Vb(11,"mat-form-field",7),u.Vb(12,"mat-select",8),u.dc("ngModelChange",(function(t){return e.task.categoryId=t})),u.Vb(13,"mat-option",9),u.yc(14,"None"),u.Ub(),u.xc(15,O,2,2,"mat-option",10),u.Ub(),u.Ub(),u.Ub(),u.xc(16,x,2,0,"span",11),u.Ub(),u.Vb(17,"div",12),u.Vb(18,"label",5),u.yc(19,"Search Tags "),u.Ub(),u.Vb(20,"div",6),u.Rb(21,"input",13),u.Ub(),u.Vb(22,"button",14),u.yc(23,"Add"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub()),2&t&&(u.Eb(7),u.lc("ngClass",u.nc(4,I,0==e.task.categoryId)),u.Eb(5),u.lc("ngModel",e.task.categoryId),u.Eb(3),u.lc("ngForOf",e.categories),u.Eb(1),u.lc("ngIf",0==e.task.categoryId))},directives:[i.n,i.i,i.j,a.i,m.b,y.a,i.h,i.k,T.i,a.j,a.k],styles:[""]}),t})();function D(t,e){if(1&t&&(u.Vb(0,"div"),u.Rb(1,"task-edit-info",14),u.Ub()),2&t){const t=u.gc();u.Eb(1),u.lc("task",t.task)}}function j(t,e){if(1&t&&(u.Vb(0,"div"),u.Vb(1,"task-edit-tags",14),u.yc(2,">"),u.Ub(),u.Ub()),2&t){const t=u.gc();u.Eb(1),u.lc("task",t.task)}}function P(t,e){if(1&t){const t=u.Wb();u.Vb(0,"a",15),u.dc("click",(function(){return u.rc(t),u.gc().delete()})),u.yc(1,"Delete"),u.Ub()}}const R=function(t){return{active:t}},F=function(t){return{"fa fa-exclamation-circle text-danger":t}},L=function(){return["/tasks"]};let _=(()=>{class t{constructor(t,e,s,i){this.taskService=t,this.messageService=e,this.route=s,this.router=i,this.pageTitle="Task Edit",this.errorMessage="",this.currentTab="info",this.dataIsValid={}}get task(){return this.currentTask}set task(t){this.currentTask=t,this.originalTask=Object.assign({},t)}ngOnInit(){this.route.data.subscribe(t=>{this.onTaskRetrieved(t.task)})}get isDirty(){return JSON.stringify(this.originalTask)!==JSON.stringify(this.currentTask)}isValid(t){return this.validate(),t?this.dataIsValid[t]:this.dataIsValid&&Object.keys(this.dataIsValid).every(t=>!0===this.dataIsValid[t])}onTaskRetrieved(t){this.task=this.route.snapshot.data.task,this.pageTitle=0===this.task.id?"Add Task":`Edit Task: ${this.task.title}`}reset(){this.dataIsValid=null,this.currentTask=null,this.originalTask=null}save(){this.isValid(null)?this.taskService.saveTask(this.task).subscribe(()=>this.onSaveComplete(`${this.task.title} was saved`),t=>this.errorMessage=t):this.errorMessage="Please correct the validation errors."}delete(){0===this.task.id?this.onSaveComplete():confirm(`Really delete the task: ${this.task.title}?`)&&this.taskService.removeTask(this.task.id).subscribe(()=>this.onSaveComplete(`${this.task.title} was deleted`),t=>this.errorMessage=t)}onSaveComplete(t){t&&this.messageService.addMessage(t),this.reset(),this.router.navigate(["/tasks"])}validate(){this.dataIsValid={},this.dataIsValid.info=this.task.title&&""!==this.task.title&&!this.task.title.startsWith(" ")}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(f),u.Qb(p.a),u.Qb(n.a),u.Qb(n.g))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-edit"]],decls:22,vars:16,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"wizard"],[1,"nav","nav-pills"],[1,"nav-link",3,"ngClass","click"],[3,"ngClass"],[4,"ngIf"],[1,"card-footer"],[1,"row"],[1,"col-md-6","col-md-offset-2","footer-body"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["href","#",1,"btn","btn-secondary",3,"routerLink"],["class","btn btn-secondary",3,"click",4,"ngIf"],[3,"task"],[1,"btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.yc(2),u.Ub(),u.Vb(3,"div",2),u.Vb(4,"div",3),u.Vb(5,"nav",4),u.Vb(6,"a",5),u.dc("click",(function(){return e.currentTab="info"})),u.yc(7," Basic Information "),u.Rb(8,"i",6),u.Ub(),u.Vb(9,"a",5),u.dc("click",(function(){return e.currentTab="tags"})),u.yc(10," Search Tags "),u.Rb(11,"i"),u.Ub(),u.Ub(),u.Ub(),u.xc(12,D,2,1,"div",7),u.xc(13,j,3,1,"div",7),u.Ub(),u.Vb(14,"div",8),u.Vb(15,"div",9),u.Vb(16,"div",10),u.Vb(17,"button",11),u.dc("click",(function(){return e.save()})),u.yc(18," Save "),u.Ub(),u.Vb(19,"a",12),u.yc(20,"Cancel"),u.Ub(),u.xc(21,P,2,0,"a",13),u.Ub(),u.Ub(),u.Ub(),u.Ub()),2&t&&(u.Eb(2),u.Ac(" ",e.pageTitle," "),u.Eb(4),u.lc("ngClass",u.nc(9,R,"info"==e.currentTab)),u.Eb(2),u.lc("ngClass",u.nc(11,F,!e.isValid("info"))),u.Eb(1),u.lc("ngClass",u.nc(13,R,"tags"==e.currentTab)),u.Eb(3),u.lc("ngIf","info"==e.currentTab),u.Eb(1),u.lc("ngIf","tags"==e.currentTab),u.Eb(4),u.lc("disabled",!e.isValid(null)),u.Eb(2),u.lc("routerLink",u.mc(15,L)),u.Eb(2),u.lc("ngIf",e.task.id>0))},directives:[a.i,a.k,n.i,C,S],styles:['form[_ngcontent-%COMP%]{padding:10px}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 8px 0 0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#efefef;display:inline-block;margin-right:5px;min-width:150px;outline:none;padding:10px 40px;position:relative;text-decoration:none;cursor:pointer}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#007acc;color:#fff}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after{border-left-color:#007acc}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:20px solid #fff;position:absolute;content:"";top:0;left:0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{border:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:21px solid #efefef;position:absolute;content:"";top:0;right:-20px;z-index:2}.footer-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:5px}']}),t})(),z=(()=>{class t{transform(t,e){return(e=e?e.toLocaleLowerCase():null)?t.filter(t=>-1!==(t.title||"").toLocaleLowerCase().indexOf(e)):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=u.Pb({name:"taskFilter",type:t,pure:!0}),t})();const $=function(t){return["/tasks",t,"view"]},A=function(t){return{filterBy:t}},N=function(t){return["/tasks",t,"edit"]};function q(t,e){if(1&t){const t=u.Wb();u.Vb(0,"tr",13),u.dc("click",(function(){u.rc(t);const s=e.index;return u.gc().setSelectedRow(s)})),u.Vb(1,"th",14),u.yc(2),u.Ub(),u.Vb(3,"td"),u.Vb(4,"a",15),u.yc(5),u.Ub(),u.Ub(),u.Vb(6,"td"),u.yc(7),u.Ub(),u.Vb(8,"td"),u.yc(9),u.hc(10,"date"),u.Ub(),u.Vb(11,"td"),u.yc(12),u.hc(13,"date"),u.Ub(),u.Vb(14,"td",16),u.yc(15),u.Ub(),u.Vb(16,"td"),u.Vb(17,"a",17),u.yc(18,"Edit"),u.Ub(),u.Ub(),u.Vb(19,"td"),u.Vb(20,"button",18),u.dc("click",(function(){u.rc(t);const s=e.$implicit;return u.gc().removeTask(s.id)})),u.yc(21," Delete "),u.Ub(),u.Ub(),u.Ub()}if(2&t){const t=e.$implicit,s=e.index,i=u.gc();u.Hb("active",s==i.selectedRow),u.Eb(2),u.zc(s+1),u.Eb(2),u.lc("routerLink",u.nc(17,$,t.id))("queryParams",u.nc(19,A,i.listFilter)),u.Eb(1),u.zc(t.title),u.Eb(2),u.zc(t.description),u.Eb(2),u.zc(u.ic(10,11,t.startDate,"dd/MM/yyyy")),u.Eb(3),u.zc(u.ic(13,14,t.endDate,"dd/MM/yyyy")),u.Eb(3),u.zc(t.assigneeId),u.Eb(2),u.lc("routerLink",u.nc(21,N,t.id))}}let Q=(()=>{class t{constructor(t,e){this.taskService=t,this.route=e,this.selectedRow=-1,this.selectedId=-1,this.listFilter=""}ngOnInit(){this.searchTasks()}searchTasks(){this.taskService.getTasks().subscribe(t=>{this.tasks=t,this.listFilter=this.route.snapshot.queryParams.filterBy||""},t=>{console.error(`Error Server: ${t}`)})}removeTask(t){this.taskService.removeTask(t).subscribe(t=>{this.searchTasks()},t=>{console.log(t)})}setSelectedRow(t){this.selectedId=this.tasks[t].id,this.selectedRow=t===this.selectedRow?-1:t}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(f),u.Qb(n.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-list"]],decls:38,vars:7,consts:[[1,"card","card-default"],[1,"card-header"],[1,"container"],[1,"card-block"],[1,"form-inline","mb-2","mt-2"],[1,"col-2"],[1,"btn","btn-primary",3,"click"],[1,"col-form-label"],[1,"col-3"],["type","text","placeholder","type task title",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","table-hover","table-striped"],[3,"active","click",4,"ngFor","ngForOf"],[1,"card-footer"],[3,"click"],["scope","row"],[3,"routerLink","queryParams"],["align","center"],["href","#","role","button",1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"div",2),u.yc(3),u.Ub(),u.Ub(),u.Vb(4,"div",3),u.Vb(5,"div",3),u.Vb(6,"div",4),u.Vb(7,"div",5),u.Vb(8,"button",6),u.dc("click",(function(){return e.searchTasks()})),u.yc(9," Refresh "),u.Ub(),u.Ub(),u.Vb(10,"div",5),u.Vb(11,"label",7),u.yc(12,"Filter by:"),u.Ub(),u.Ub(),u.Vb(13,"div",8),u.Vb(14,"input",9),u.dc("ngModelChange",(function(t){return e.listFilter=t})),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(15,"div",2),u.Vb(16,"table",10),u.Vb(17,"thead"),u.Vb(18,"tr"),u.Vb(19,"th"),u.yc(20,"#"),u.Ub(),u.Vb(21,"th"),u.yc(22,"Title"),u.Ub(),u.Vb(23,"th"),u.yc(24,"Description"),u.Ub(),u.Vb(25,"th"),u.yc(26,"Start date"),u.Ub(),u.Vb(27,"th"),u.yc(28,"End date"),u.Ub(),u.Vb(29,"th"),u.yc(30,"Assegnee Id"),u.Ub(),u.Rb(31,"th"),u.Rb(32,"th"),u.Ub(),u.Ub(),u.Vb(33,"tbody"),u.xc(34,q,22,23,"tr",11),u.hc(35,"taskFilter"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(36,"div",12),u.yc(37),u.Ub(),u.Ub()),2&t&&(u.Eb(3),u.Ac("Task List - total tasks: ",null==e.tasks?null:e.tasks.length,""),u.Eb(11),u.lc("ngModel",e.listFilter),u.Eb(20),u.lc("ngForOf",u.ic(35,4,e.tasks,e.listFilter)),u.Eb(3),u.Ac("total tasks: ",null==e.tasks?null:e.tasks.length,""))},directives:[i.b,i.h,i.k,a.j,n.i],pipes:[z,a.d],styles:[""]}),t})();const B=function(){return["/tasks"]},J=function(t){return["/tasks",t,"edit"]};let K=(()=>{class t{constructor(t){this.route=t,this.pageTitle="Task Detail"}ngOnInit(){this.task=this.route.snapshot.data.task,this.pageTitle=this.task.id?`Edit Task: ${this.task.title}`:"Add Task"}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(n.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-detail"]],decls:37,vars:17,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"row"],[1,"col-md-2","label"],[1,"col-md-6"],[1,"card-footer"],["queryParamsHandling","preserve",1,"btn","btn-secondary",3,"routerLink"],[1,"fa","fa-chevron-left"],[1,"btn","btn-primary",2,"width","80px","margin-left","10px",3,"routerLink"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.yc(2),u.Ub(),u.Vb(3,"div",2),u.Vb(4,"div",3),u.Vb(5,"div",4),u.yc(6,"Title:"),u.Ub(),u.Vb(7,"div",5),u.yc(8),u.Ub(),u.Ub(),u.Vb(9,"div",3),u.Vb(10,"div",4),u.yc(11,"Description:"),u.Ub(),u.Vb(12,"div",5),u.yc(13),u.Ub(),u.Ub(),u.Vb(14,"div",3),u.Vb(15,"div",4),u.yc(16,"Start Date:"),u.Ub(),u.Vb(17,"div",5),u.yc(18),u.hc(19,"date"),u.Ub(),u.Ub(),u.Vb(20,"div",3),u.Vb(21,"div",4),u.yc(22,"End Date:"),u.Ub(),u.Vb(23,"div",5),u.yc(24),u.hc(25,"date"),u.Ub(),u.Ub(),u.Vb(26,"div",3),u.Vb(27,"div",4),u.yc(28,"Assigne:"),u.Ub(),u.Vb(29,"div",5),u.yc(30),u.Ub(),u.Ub(),u.Ub(),u.Vb(31,"div",6),u.Vb(32,"a",7),u.Rb(33,"i",8),u.yc(34," Back "),u.Ub(),u.Vb(35,"a",9),u.yc(36," Edit "),u.Ub(),u.Ub(),u.Ub()),2&t&&(u.Eb(2),u.Ac(" ",e.pageTitle+": "+e.task.title," "),u.Eb(6),u.zc(e.task.title),u.Eb(5),u.zc(e.task.description),u.Eb(5),u.zc(u.ic(19,8,e.task.startDate,"mediumDate")),u.Eb(6),u.zc(u.ic(25,11,e.task.endDate,"mediumDate")),u.Eb(6),u.zc(e.task.assigneeId),u.Eb(2),u.lc("routerLink",u.mc(14,B)),u.Eb(3),u.lc("routerLink",u.nc(15,J,e.task.id)))},directives:[n.i],pipes:[a.d],styles:[".card-block[_ngcontent-%COMP%]{padding:10px}.label[_ngcontent-%COMP%]{font-weight:700}"]}),t})();var G=s("CP11");const W={component:_,canDeactivate:[k],resolve:{task:g}},X=[{path:"",component:Q},{path:":id/view",component:K,resolve:{task:g}},Object.assign({path:"new"},W),Object.assign({path:":id/edit"},W)];let Z=(()=>{class t{}return t.\u0275mod=u.Ob({type:t}),t.\u0275inj=u.Nb({factory:function(e){return new(e||t)},providers:[f,g,k],imports:[[G.a,n.j,i.d,a.b,n.j.forChild(X)]]}),t})()}}]);