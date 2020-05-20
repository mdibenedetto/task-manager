(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{S1vP:function(t,e,a){"use strict";a.r(e),a.d(e,"TasksModule",(function(){return K}));var i=a("3Pt+"),s=a("ofXK"),r=a("tyNb"),n=a("XNiG"),c=a("LRne"),o=a("z6cu"),b=a("lJxs"),l=a("JIr8"),d=a("VmFB"),u=a("fXoL"),h=a("tk/3");let k=(()=>{class t extends d.a{constructor(t){super(),this.http=t,this.task=new n.a,this.tasks=new Array,this.URL=this.BASE_URL+"/tasks",this.task.subscribe(t=>{this.tasks.push(t)})}findTask(t){if(0===t){let t={id:0};return Object(c.a)(t)}return this.http.get(`${this.URL}/${t}`).pipe(Object(b.a)(this.extractData),Object(l.a)(this.handleError))}getTasks(t){return this.http.get(this.URL).pipe(Object(b.a)(t=>t||[]),Object(l.a)(this.handleError))}saveTask(t){return t.id?this.updateTask(t):this.addTask(t)}addTask(t){return this.http.post(this.URL,t,this.options).pipe(Object(b.a)(t=>t),Object(l.a)(t=>Object(o.a)(t.json().error||"Server error")))}updateTask(t){return this.http.put(`${this.URL}/${t.id}`,t,this.options).pipe(Object(l.a)(t=>Object(o.a)(t.json().error||"Server error")))}removeTask(t){return this.http.delete(`${this.URL}/${t}`,this.options).pipe(Object(l.a)(this.raiseServerError))}}return t.\u0275fac=function(e){return new(e||t)(u.Zb(h.b))},t.\u0275prov=u.Mb({token:t,factory:t.\u0275fac}),t})(),f=(()=>{class t{constructor(t,e){this.taskService=t,this.router=e}resolve(t,e){let a=t.params.id;return isNaN(a)?(console.warn(`Task id is not a number:${a}`),this.router.navigate(["/tasks"]),Object(c.a)(null)):this.taskService.findTask(+a).pipe(Object(b.a)(t=>t||(console.log(`task was not found ${a}`),this.router.navigate(["/tasks"]),null)),Object(l.a)(t=>(console.warn(`Server erro retriving ${t}`),this.router.navigate(["/tasks"]),Object(c.a)(null))))}}return t.\u0275fac=function(e){return new(e||t)(u.Zb(k),u.Zb(r.g))},t.\u0275prov=u.Mb({token:t,factory:t.\u0275fac}),t})();var g=a("xoyZ");function p(t,e){if(1&t){const t=u.Wb();u.Vb(0,"a",13),u.dc("click",(function(){return u.rc(t),u.gc().delete()})),u.yc(1,"Delete"),u.Ub()}}const m=function(){return["info"]},v=function(t){return{"fa fa-exclamation-circle text-danger":t}},V=function(){return["tags"]},U=function(){return["/tasks"]};let y=(()=>{class t{constructor(t,e,a,i){this.taskService=t,this.messageService=e,this.route=a,this.router=i,this.pageTitle="Task Edit",this.errorMessage="",this.dataIsValid={}}get task(){return this.currentTask}set task(t){this.currentTask=t,this.originalTask=Object.assign({},t)}ngOnInit(){this.route.data.subscribe(t=>{this.onTaskRetrieved(t.task)})}get isDirty(){return JSON.stringify(this.originalTask)!==JSON.stringify(this.currentTask)}isValid(t){return this.validate(),t?this.dataIsValid[t]:this.dataIsValid&&Object.keys(this.dataIsValid).every(t=>!0===this.dataIsValid[t])}onTaskRetrieved(t){this.task=this.route.snapshot.data.task,this.pageTitle=0===this.task.id?"Add Task":`Edit Task: ${this.task.title}`}reset(){this.dataIsValid=null,this.currentTask=null,this.originalTask=null}save(){this.isValid(null)?this.taskService.saveTask(this.task).subscribe(()=>this.onSaveComplete(`${this.task.title} was saved`),t=>this.errorMessage=t):this.errorMessage="Please correct the validation errors."}delete(){0===this.task.id?this.onSaveComplete():confirm(`Really delete the task: ${this.task.title}?`)&&this.taskService.removeTask(this.task.id).subscribe(()=>this.onSaveComplete(`${this.task.title} was deleted`),t=>this.errorMessage=t)}onSaveComplete(t){t&&this.messageService.addMessage(t),this.reset(),this.router.navigate(["/tasks"])}validate(){this.dataIsValid={},this.dataIsValid.info=this.task.title&&""!==this.task.title&&!this.task.title.startsWith(" "),this.dataIsValid.tags=this.task.categoryId&&this.task.categoryId>0}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(k),u.Qb(g.a),u.Qb(r.a),u.Qb(r.g))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-edit"]],decls:21,vars:15,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"wizard"],[1,"nav","nav-pills"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],[3,"ngClass"],[1,"card-footer"],[1,"row"],[1,"col-md-6","col-md-offset-2"],["type","button",1,"btn","btn-primary",2,"width","80px","margin-right","10px",3,"disabled","click"],["href","#",1,"btn","btn-secondary",3,"routerLink"],["class","btn btn-secondary",3,"click",4,"ngIf"],[1,"btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.yc(2),u.Ub(),u.Vb(3,"div",2),u.Vb(4,"div",3),u.Vb(5,"nav",4),u.Vb(6,"a",5),u.yc(7," Basic Information "),u.Rb(8,"i",6),u.Ub(),u.Vb(9,"a",5),u.yc(10," Search Tags "),u.Rb(11,"i",6),u.Ub(),u.Ub(),u.Ub(),u.Rb(12,"router-outlet"),u.Ub(),u.Vb(13,"div",7),u.Vb(14,"div",8),u.Vb(15,"div",9),u.Vb(16,"button",10),u.dc("click",(function(){return e.save()})),u.yc(17,"Save"),u.Ub(),u.Vb(18,"a",11),u.yc(19,"Cancel"),u.Ub(),u.xc(20,p,2,0,"a",12),u.Ub(),u.Ub(),u.Ub(),u.Ub()),2&t&&(u.Eb(2),u.Ac(" ",e.pageTitle," "),u.Eb(4),u.lc("routerLink",u.mc(8,m)),u.Eb(2),u.lc("ngClass",u.nc(9,v,!e.isValid("info"))),u.Eb(1),u.lc("routerLink",u.mc(11,V)),u.Eb(2),u.lc("ngClass",u.nc(12,v,!e.isValid("tags"))),u.Eb(5),u.lc("disabled",!e.isValid(null)),u.Eb(2),u.lc("routerLink",u.mc(14,U)),u.Eb(2),u.lc("ngIf",e.task.id>0))},directives:[r.i,r.h,s.i,r.k,s.k],styles:['form[_ngcontent-%COMP%]{padding:10px}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 8px 0 0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#efefef;display:inline-block;margin-right:5px;min-width:150px;outline:none;padding:10px 40px;position:relative;text-decoration:none}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#007acc;color:#fff}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after{border-left-color:#007acc}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:20px solid #fff;position:absolute;content:"";top:0;left:0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{border:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:21px solid #efefef;position:absolute;content:"";top:0;right:-20px;z-index:2}']}),t})(),M=(()=>{class t{transform(t,e){return(e=e?e.toLocaleLowerCase():null)?t.filter(t=>-1!==(t.title||"").toLocaleLowerCase().indexOf(e)):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=u.Pb({name:"taskFilter",type:t,pure:!0}),t})();const T=function(t){return["/tasks",t]},w=function(t){return{filterBy:t}},E=function(t){return["/tasks",t,"edit"]};function C(t,e){if(1&t){const t=u.Wb();u.Vb(0,"tr",13),u.dc("click",(function(){u.rc(t);const a=e.index;return u.gc().setSelectedRow(a)})),u.Vb(1,"th",14),u.yc(2),u.Ub(),u.Vb(3,"td"),u.Vb(4,"a",15),u.yc(5),u.Ub(),u.Ub(),u.Vb(6,"td"),u.yc(7),u.Ub(),u.Vb(8,"td"),u.yc(9),u.hc(10,"date"),u.Ub(),u.Vb(11,"td"),u.yc(12),u.hc(13,"date"),u.Ub(),u.Vb(14,"td"),u.Vb(15,"a",16),u.yc(16,"Edit"),u.Ub(),u.Ub(),u.Vb(17,"td"),u.Vb(18,"button",17),u.dc("click",(function(){u.rc(t);const a=e.$implicit;return u.gc().removeTask(a.id)})),u.yc(19,"Delete"),u.Ub(),u.Ub(),u.Ub()}if(2&t){const t=e.$implicit,a=e.index,i=u.gc();u.Hb("active",a==i.selectedRow),u.Eb(2),u.zc(a+1),u.Eb(2),u.lc("routerLink",u.nc(16,T,t.id))("queryParams",u.nc(18,w,i.listFilter)),u.Eb(1),u.zc(t.title),u.Eb(2),u.zc(t.description),u.Eb(2),u.zc(u.ic(10,10,t.startDate,"dd/MM/yyyy")),u.Eb(3),u.zc(u.ic(13,13,t.endDate,"dd/MM/yyyy")),u.Eb(3),u.lc("routerLink",u.nc(20,E,t.id))}}let O=(()=>{class t{constructor(t,e){this.taskService=t,this.route=e,this.pageTitle="Task List",this.selectedRow=-1,this.selectedId=-1,this.listFilter=""}ngOnInit(){this.searchTasks()}searchTasks(){this.taskService.getTasks().subscribe(t=>{this.tasks=t,this.listFilter=this.route.snapshot.queryParams.filterBy||""},t=>{console.error(`Error Server: ${t}`)})}removeTask(t){this.taskService.removeTask(t).subscribe(t=>{console.log(t),this.searchTasks()},t=>{console.log(t)})}setSelectedRow(t){this.selectedId=this.tasks[t].id,this.selectedRow=t===this.selectedRow?-1:t}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(k),u.Qb(r.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-list"]],decls:36,vars:8,consts:[[1,"card","card-default"],[1,"card-header"],[1,"container"],[1,"card-block"],[1,"form-inline","mb-2","mt-2"],[1,"col-2"],[1,"btn","btn-primary",3,"click"],[1,"col-form-label"],[1,"col-3"],["type","text","placeholder","type task title",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","table-hover","table-striped"],[3,"active","click",4,"ngFor","ngForOf"],[1,"card-footer"],[3,"click"],["scope","row"],[3,"routerLink","queryParams"],["href","#","role","button",1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"div",2),u.yc(3),u.Ub(),u.Ub(),u.Vb(4,"div",3),u.Vb(5,"div",3),u.Vb(6,"div",4),u.Vb(7,"div",5),u.Vb(8,"button",6),u.dc("click",(function(){return e.searchTasks()})),u.yc(9," Refresh "),u.Ub(),u.Ub(),u.Vb(10,"div",5),u.Vb(11,"label",7),u.yc(12,"Filter by:"),u.Ub(),u.Ub(),u.Vb(13,"div",8),u.Vb(14,"input",9),u.dc("ngModelChange",(function(t){return e.listFilter=t})),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(15,"div",2),u.Vb(16,"table",10),u.Vb(17,"thead"),u.Vb(18,"tr"),u.Vb(19,"th"),u.yc(20,"#"),u.Ub(),u.Vb(21,"th"),u.yc(22,"Title"),u.Ub(),u.Vb(23,"th"),u.yc(24,"Description"),u.Ub(),u.Vb(25,"th"),u.yc(26,"Start date"),u.Ub(),u.Vb(27,"th"),u.yc(28,"End date"),u.Ub(),u.Rb(29,"th"),u.Rb(30,"th"),u.Ub(),u.Ub(),u.Vb(31,"tbody"),u.xc(32,C,20,22,"tr",11),u.hc(33,"taskFilter"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(34,"div",12),u.yc(35),u.Ub(),u.Ub()),2&t&&(u.Eb(3),u.Bc(" ",e.pageTitle," - total tasks: ",null==e.tasks?null:e.tasks.length," "),u.Eb(11),u.lc("ngModel",e.listFilter),u.Eb(18),u.lc("ngForOf",u.ic(33,5,e.tasks,e.listFilter)),u.Eb(3),u.Ac(" total tasks: ",null==e.tasks?null:e.tasks.length,""))},directives:[i.b,i.h,i.k,s.j,r.i],pipes:[M,s.d],styles:[""]}),t})();const x=function(){return["/tasks"]},I=function(t){return["/tasks",t,"edit"]};let D=(()=>{class t{constructor(t){this.route=t,this.pageTitle="Task Detail"}ngOnInit(){this.task=this.route.snapshot.data.task,this.pageTitle=this.task.id?`Edit Task: ${this.task.title}`:"Add Task"}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(r.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-detail"]],decls:37,vars:17,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"row"],[1,"col-md-2"],[1,"col-md-6"],[1,"card-footer"],["queryParamsHandling","preserve",1,"btn","btn-secondary",3,"routerLink"],[1,"fa","fa-chevron-left"],[1,"btn","btn-primary",2,"width","80px","margin-left","10px",3,"routerLink"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.yc(2),u.Ub(),u.Vb(3,"div",2),u.Vb(4,"div",3),u.Vb(5,"div",4),u.yc(6,"Title:"),u.Ub(),u.Vb(7,"div",5),u.yc(8),u.Ub(),u.Ub(),u.Vb(9,"div",3),u.Vb(10,"div",4),u.yc(11,"Description:"),u.Ub(),u.Vb(12,"div",5),u.yc(13),u.Ub(),u.Ub(),u.Vb(14,"div",3),u.Vb(15,"div",4),u.yc(16,"Start Date:"),u.Ub(),u.Vb(17,"div",5),u.yc(18),u.hc(19,"date"),u.Ub(),u.Ub(),u.Vb(20,"div",3),u.Vb(21,"div",4),u.yc(22,"End Date:"),u.Ub(),u.Vb(23,"div",5),u.yc(24),u.hc(25,"date"),u.Ub(),u.Ub(),u.Vb(26,"div",3),u.Vb(27,"div",4),u.yc(28,"Assigne:"),u.Ub(),u.Vb(29,"div",5),u.yc(30),u.Ub(),u.Ub(),u.Ub(),u.Vb(31,"div",6),u.Vb(32,"a",7),u.Rb(33,"i",8),u.yc(34," Back "),u.Ub(),u.Vb(35,"a",9),u.yc(36," Edit "),u.Ub(),u.Ub(),u.Ub()),2&t&&(u.Eb(2),u.Ac(" ",e.pageTitle+": "+e.task.title," "),u.Eb(6),u.zc(e.task.title),u.Eb(5),u.zc(e.task.description),u.Eb(5),u.zc(u.ic(19,8,e.task.startDate,"mediumDate")),u.Eb(6),u.zc(u.ic(25,11,e.task.endDate,"mediumDate")),u.Eb(6),u.zc(e.task.assigneeId),u.Eb(2),u.lc("routerLink",u.mc(14,x)),u.Eb(3),u.lc("routerLink",u.nc(15,I,e.task.id)))},directives:[r.i],pipes:[s.d],styles:[""]}),t})();var S=a("kmnG"),F=a("qFsG"),j=a("iadO"),R=a("d3UM"),L=a("FKr1");function P(t,e){1&t&&(u.Vb(0,"span",22),u.yc(1,"Title is required"),u.Ub())}function N(t,e){if(1&t&&(u.Vb(0,"mat-option",23),u.yc(1),u.Ub()),2&t){const t=e.$implicit;u.lc("value",t.id),u.Eb(1),u.Ac(" ",t.fullName," ")}}const z=function(t){return{"has-danger":t}};let $=(()=>{class t{constructor(t){this.route=t,this.assigneeUsers=[{userName:"michele@taskmanager.tax",fullName:"Michele Tester",passWord:"",id:1,isAdmin:!0},{userName:"miguel@taskmanager.tax",fullName:"Miguel Tester",passWord:"",id:2,isAdmin:!1},{userName:"patrick@taskmanager.tax",fullName:"Patrick Tester",passWord:"",id:3,isAdmin:!1},{userName:"aitor@taskmanager.tax",fullName:"Aitor Tester",passWord:"",id:4,isAdmin:!1},{userName:"gerard@taskmanager.tax",fullName:"Gerard Tester",passWord:"",id:5,isAdmin:!1}]}formValuesChage(t){console.warn(t),console.warn(this.taskForm.invalid)}ngOnInit(){this.route.parent.data.subscribe(t=>{this.task=t.task,this.taskForm&&this.taskForm.reset()})}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(r.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-edit-info"]],viewQuery:function(t,e){var a;1&t&&u.Dc(i.j,!0),2&t&&u.pc(a=u.ec())&&(e.taskForm=a.first)},decls:46,vars:14,consts:[[1,"card-block"],[1,"container"],["name","task"],["taskForm","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-10"],["type","text","required","","name","title",1,"form-control",3,"ngModel","ngModelChange"],["title","ngModel"],["class","col-10 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","description",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-2","form-control"],["name","startDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["startDate",""],["name","endDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["endDate",""],[1,"col-4","form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"col-10","offset-2","form-text"],[3,"value"]],template:function(t,e){if(1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"form",2,3),u.Vb(4,"fieldset"),u.Vb(5,"legend"),u.yc(6,"Basic Task Information"),u.Ub(),u.Vb(7,"div",4),u.Vb(8,"label",5),u.yc(9,"Title "),u.Ub(),u.Vb(10,"div",6),u.Vb(11,"input",7,8),u.dc("ngModelChange",(function(t){return e.task.title=t})),u.Ub(),u.Ub(),u.xc(13,P,2,0,"span",9),u.Ub(),u.Vb(14,"div",10),u.Vb(15,"label",5),u.yc(16,"Description "),u.Ub(),u.Vb(17,"div",6),u.Vb(18,"input",11),u.dc("ngModelChange",(function(t){return e.task.description=t})),u.Ub(),u.Ub(),u.Ub(),u.Vb(19,"div",10),u.Vb(20,"label",5),u.yc(21,"Start Date "),u.Ub(),u.Vb(22,"div",6),u.Vb(23,"mat-form-field",12),u.Vb(24,"input",13),u.dc("ngModelChange",(function(t){return e.task.startDate=t})),u.Ub(),u.Rb(25,"mat-datepicker-toggle",14),u.Rb(26,"mat-datepicker",null,15),u.Ub(),u.Ub(),u.Ub(),u.Vb(28,"div",10),u.Vb(29,"label",5),u.yc(30,"End Date"),u.Ub(),u.Vb(31,"div",6),u.Vb(32,"mat-form-field",12),u.Vb(33,"input",16),u.dc("ngModelChange",(function(t){return e.task.endDate=t})),u.Ub(),u.Rb(34,"mat-datepicker-toggle",14),u.Rb(35,"mat-datepicker",null,17),u.Ub(),u.Ub(),u.Ub(),u.Vb(37,"div",10),u.Vb(38,"label",5),u.yc(39,"Assignee"),u.Ub(),u.Vb(40,"div",6),u.Vb(41,"mat-form-field",18),u.Vb(42,"mat-select",19),u.dc("ngModelChange",(function(t){return e.task.assigneeId=t})),u.Vb(43,"mat-option",20),u.yc(44,"None"),u.Ub(),u.xc(45,N,2,2,"mat-option",21),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub()),2&t){const t=u.qc(12),a=u.qc(27),i=u.qc(36);u.Eb(7),u.lc("ngClass",u.nc(12,z,t.invalid&&t.touched&&t.dirty)),u.Eb(4),u.lc("ngModel",e.task.title),u.Eb(2),u.lc("ngIf",t.invalid&&t.touched&&t.dirty),u.Eb(5),u.lc("ngModel",e.task.description),u.Eb(6),u.lc("matDatepicker",a)("ngModel",e.task.startDate),u.Eb(1),u.lc("for",a),u.Eb(8),u.lc("matDatepicker",i)("ngModel",e.task.endDate),u.Eb(1),u.lc("for",i),u.Eb(8),u.lc("ngModel",e.task.assigneeId),u.Eb(3),u.lc("ngForOf",e.assigneeUsers)}},directives:[i.n,i.i,i.j,s.i,i.b,i.l,i.h,i.k,s.k,S.b,F.b,j.b,j.d,S.e,j.a,R.a,L.i,s.j],styles:[""]}),t})();function A(t,e){if(1&t&&(u.Vb(0,"mat-option",15),u.yc(1),u.Ub()),2&t){const t=e.$implicit;u.lc("value",t.id),u.Eb(1),u.Ac(" ",t.description," ")}}function _(t,e){1&t&&(u.Vb(0,"span",16),u.yc(1,"Category is required"),u.Ub())}const q=function(t){return{"has-danger":t}};let Q=(()=>{class t{constructor(t){this.route=t,this.categories=[{id:1,description:"Bug"},{id:2,description:"Epic"},{id:3,description:"Story"},{id:4,description:"Improvement"}]}formValuesChage(t){console.warn(t),console.warn(this.taskForm.invalid)}ngOnInit(){this.route.parent.data.subscribe(t=>{this.task=t.task,this.taskForm&&this.taskForm.reset(),console.log(this.task)})}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(r.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["task-edit-tags"]],viewQuery:function(t,e){var a;1&t&&u.Dc(i.j,!0),2&t&&u.pc(a=u.ec())&&(e.taskForm=a.first)},decls:24,vars:6,consts:[[1,"card-block"],[1,"container"],["name","task"],["form","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-4"],["required","",1,"form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["class","col-8 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","tags",1,"form-control"],[1,"btn","btn-secondary"],[3,"value"],[1,"col-8","offset-2","form-text"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"form",2,3),u.Vb(4,"fieldset"),u.Vb(5,"legend"),u.yc(6,"Task Search Tags"),u.Ub(),u.Vb(7,"div",4),u.Vb(8,"label",5),u.yc(9,"Category"),u.Ub(),u.Vb(10,"div",6),u.Vb(11,"mat-form-field",7),u.Vb(12,"mat-select",8),u.dc("ngModelChange",(function(t){return e.task.categoryId=t})),u.Vb(13,"mat-option",9),u.yc(14,"None"),u.Ub(),u.xc(15,A,2,2,"mat-option",10),u.Ub(),u.Ub(),u.Ub(),u.xc(16,_,2,0,"span",11),u.Ub(),u.Vb(17,"div",12),u.Vb(18,"label",5),u.yc(19,"Search Tags "),u.Ub(),u.Vb(20,"div",6),u.Rb(21,"input",13),u.Ub(),u.Vb(22,"button",14),u.yc(23,"Add"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub()),2&t&&(u.Eb(7),u.lc("ngClass",u.nc(4,q,0==e.task.categoryId)),u.Eb(5),u.lc("ngModel",e.task.categoryId),u.Eb(3),u.lc("ngForOf",e.categories),u.Eb(1),u.lc("ngIf",0==e.task.categoryId))},directives:[i.n,i.i,i.j,s.i,S.b,R.a,i.h,i.k,L.i,s.j,s.k],styles:[""]}),t})(),B=(()=>{class t{constructor(){}canDeactivate(t){return!t.isDirty||confirm(`Navigate away and lose all changes to ${t.task.title||"New Task"}`)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Mb({token:t,factory:t.\u0275fac}),t})();var W=a("ilih");let K=(()=>{class t{}return t.\u0275mod=u.Ob({type:t}),t.\u0275inj=u.Nb({factory:function(e){return new(e||t)},providers:[k,f,B],imports:[[W.a,r.j,i.d,s.b,r.j.forChild([{path:"",component:O},{path:":id",component:D,resolve:{task:f}},{path:":id/edit",component:y,canDeactivate:[B],resolve:{task:f},children:[{path:"",redirectTo:"info",pathMatch:"full"},{path:"info",component:$},{path:"tags",component:Q}]}])]]}),t})()}}]);