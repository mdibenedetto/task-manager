(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BJHQ:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",(function(){return g}));var s=r("ofXK"),n=r("3Pt+"),i=r("tyNb"),c=r("sfzk"),b=r("ZeT3"),o=r("fXoL"),d=r("JkhQ");const a=function(e){return["/users",e,"edit"]};function u(e,t){if(1&e){const e=o.Wb();o.Vb(0,"tr"),o.Vb(1,"td"),o.yc(2),o.Ub(),o.Vb(3,"td"),o.yc(4),o.Ub(),o.Vb(5,"td"),o.yc(6),o.Ub(),o.Vb(7,"td"),o.yc(8),o.Ub(),o.Vb(9,"td"),o.yc(10),o.Ub(),o.Vb(11,"td"),o.Vb(12,"a",2),o.yc(13," Edit "),o.Ub(),o.Ub(),o.Vb(14,"td"),o.Vb(15,"button",3),o.dc("click",(function(){o.rc(e);const r=t.$implicit;return o.gc().removeUser(r.id)})),o.yc(16," Delete "),o.Ub(),o.Ub(),o.Ub()}if(2&e){const e=t.$implicit,r=t.index;o.Eb(2),o.zc(r+1),o.Eb(2),o.Ac(" ",e.userName," "),o.Eb(2),o.Ac(" ",e.passWord," "),o.Eb(2),o.Ac(" ",e.fullName," "),o.Eb(2),o.Ac(" ",e.isAdmin," "),o.Eb(2),o.lc("routerLink",o.nc(6,a,e.id))}}let l=(()=>{class e{constructor(e){this.userService=e}ngOnInit(){this.searchUsers()}searchUsers(){this.userService.findUsers().subscribe(e=>this.users=e)}removeUser(e){this.userService.removeUser(e).subscribe(e=>this.searchUsers())}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(d.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["user-list"]],decls:19,vars:2,consts:[[1,"table","table-hover","table-striped"],[4,"ngFor","ngForOf"],["href","#","role","button",1,"edit","btn","btn-primary",3,"routerLink"],[1,"delete","btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(o.Vb(0,"table",0),o.Vb(1,"caption"),o.yc(2),o.Ub(),o.Vb(3,"thead"),o.Vb(4,"th"),o.yc(5,"#"),o.Ub(),o.Vb(6,"th"),o.yc(7,"User Name"),o.Ub(),o.Vb(8,"th"),o.yc(9,"Passowrd"),o.Ub(),o.Vb(10,"th"),o.yc(11,"Full name"),o.Ub(),o.Vb(12,"th"),o.yc(13,"Is Admin"),o.Ub(),o.Rb(14,"th"),o.Rb(15,"th"),o.Ub(),o.Vb(16,"tbody"),o.xc(17,u,17,8,"tr",1),o.Ub(),o.Rb(18,"tfoot"),o.Ub()),2&e&&(o.Eb(2),o.Ac(" User List - total user: ",null==t.users?null:t.users.length," "),o.Eb(15),o.lc("ngForOf",t.users))},directives:[s.j,i.h],styles:["caption[_ngcontent-%COMP%]{caption-side:top}"]}),e})();var h=function(e){return e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e}({}),U=r("AmtN");function m(e,t){if(1&e){const e=o.Wb();o.Vb(0,"a",17),o.dc("click",(function(){return o.rc(e),o.gc().delete()})),o.yc(1,"Delete"),o.Ub()}}const f=function(){return["/users"]};let p=(()=>{class e{constructor(e,t,r,s,n){this.authService=e,this.userService=t,this.router=r,this.route=s,this.messageService=n,this.user={}}ngOnInit(){const e=this.route.snapshot.params.id;e?(this.mode=h.UPDATE,this.loadUser(e)):this.mode=h.ADD}loadUser(e){this.authService.currentUser?this.user=this.authService.currentUser:this.userService.findUser(e).subscribe(e=>this.user=e)}isValid(){return!0}save(){this.userService.saveUser(this.user).subscribe(()=>this.onSaveCompleted(`${this.user.fullName} was saved`))}onSaveCompleted(e){e&&this.messageService.addMessage(e),this.reset(),this.router.navigate(["/users"])}reset(){}delete(){this.userService.removeUser(this.user.id).subscribe(e=>this.router.navigate(["/users"]))}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(c.a),o.Qb(d.a),o.Qb(i.f),o.Qb(i.a),o.Qb(U.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["user-edit"]],decls:34,vars:8,consts:[[1,"card"],[1,"card-header"],[1,"card-block"],[1,"form-group","row"],[1,"col-md-2","col-form-label"],[1,"col-md-6"],["type","text","name","userName","autofocus","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","passWord",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","fullName",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-check"],["type","checkbox","name","isAdmin","id","isAdmin",1,"form-check-input","position-static",3,"ngModel","ngModelChange"],[1,"card-footer"],[1,"row"],[1,"col-md-6","col-md-offset-2","footer-body"],["type","button",1,"btn","btn-primary",2,"width","80px","margin-right","10px",3,"disabled","click"],["href","#",1,"btn","btn-secondary",3,"routerLink"],["class","btn btn-secondary",3,"click",4,"ngIf"],[1,"btn","btn-secondary",3,"click"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.yc(2,"User Detail"),o.Ub(),o.Vb(3,"div",2),o.Vb(4,"form"),o.Vb(5,"div",3),o.Vb(6,"div",4),o.yc(7,"User Name:"),o.Ub(),o.Vb(8,"div",5),o.Vb(9,"input",6),o.dc("ngModelChange",(function(e){return t.user.userName=e})),o.Ub(),o.Ub(),o.Ub(),o.Vb(10,"div",3),o.Vb(11,"div",4),o.yc(12,"Password:"),o.Ub(),o.Vb(13,"div",5),o.Vb(14,"input",7),o.dc("ngModelChange",(function(e){return t.user.passWord=e})),o.Ub(),o.Ub(),o.Ub(),o.Vb(15,"div",3),o.Vb(16,"div",4),o.yc(17,"Full Name:"),o.Ub(),o.Vb(18,"div",5),o.Vb(19,"input",8),o.dc("ngModelChange",(function(e){return t.user.fullName=e})),o.Ub(),o.Ub(),o.Ub(),o.Vb(20,"div",3),o.Vb(21,"div",4),o.yc(22," Is Admin: "),o.Ub(),o.Vb(23,"div",5),o.Vb(24,"div",9),o.Vb(25,"input",10),o.dc("ngModelChange",(function(e){return t.user.isAdmin=e})),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(26,"div",11),o.Vb(27,"div",12),o.Vb(28,"div",13),o.Vb(29,"button",14),o.dc("click",(function(){return t.save()})),o.yc(30," Save "),o.Ub(),o.Vb(31,"a",15),o.yc(32,"Cancel"),o.Ub(),o.xc(33,m,2,0,"a",16),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e&&(o.Eb(9),o.lc("ngModel",t.user.userName),o.Eb(5),o.lc("ngModel",t.user.passWord),o.Eb(5),o.lc("ngModel",t.user.fullName),o.Eb(6),o.lc("ngModel",t.user.isAdmin),o.Eb(4),o.lc("disabled",!t.isValid()),o.Eb(2),o.lc("routerLink",o.mc(7,f)),o.Eb(2),o.lc("ngIf",t.user.id>0))},directives:[n.n,n.i,n.j,n.b,n.h,n.k,n.a,i.h,s.k],styles:["form[_ngcontent-%COMP%]{padding:10px}.footer-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:5px}"]}),e})();const v=[{path:"",component:l},{path:"new",component:p},{path:":id/edit",component:p}];let g=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},providers:[c.a,b.a],imports:[[s.b,n.d,i.i.forChild(v)]]}),e})()}}]);