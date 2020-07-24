(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+Qxm":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("s7LF"),i=u("83c0"),a=u("b09B");class s{constructor(){this.profiles=[]}}var r=u("AytR");class o{constructor(l,n,u,t,e,i){this.userService=l,this.profileService=n,this.modalService=u,this._fb=t,this._toastr=e,this.modalOption={},this.page=1,this.size=10,this.userTypeList=[{id:2,name:"owner"},{id:1,name:"admin"},{id:3,name:"user"}],this.profileItemList=[],i.setTitle(a.a.app_name+" - Security - Users management")}ngOnInit(){this.loadData()}loadData(l){this.page=l||this.page,this.loading=!0,this.userService.find({page:this.page,size:this.size}).subscribe(l=>{this.data=l,this.loading=!1})}initSave(l,n){this.modalOption.backdrop="static",this.modalOption.keyboard=!1,this.initSaveForm(n),this.loadingProfiles=!0,this.profileService.find().subscribe(l=>{this.profiles=l.data,this.loadingProfiles=!1}),this.modalService.open(l,this.modalOption).result.then(l=>{l?this.loadData():this.initSaveForm()},()=>{this.initSaveForm()})}initSaveForm(l){this.selectedUser=l?Object.assign({},l):new s,this.imagePreview=this.selectedUser.image?r.a.uploads_url+"users/images/"+this.selectedUser.image:"assets/images/faces/avatar.png",this.form=this._fb.group({email:[l?l.email:"",[e.x.required,e.x.maxLength(255)]],name:[l?l.name:"",[e.x.required,e.x.maxLength(255)]],address:[l?l.address:"",[e.x.required,e.x.maxLength(255)]],password:["",l&&l.id?[]:[e.x.required]],password_confirmation:["",l&&l.id?[]:[e.x.required]],user_type:[l?l.user_type:"",[e.x.required,e.x.maxLength(255)]]})}selectedUserHasProfile(l){return this.selectedUser.profiles.some(n=>n.id===l.id)}selectProfile(l){this.selectedUserHasProfile(l)?this.selectedUser.profiles.splice(this.selectedUser.profiles.findIndex(n=>n.id===l.id),1):this.selectedUser.profiles.push(l)}save(l){if((this.selectedUser.profiles.map(l=>l.id)+"").split(","),this.form.valid){this.savingUser=!0;const n=new FormData;this.selectedUser.image instanceof File&&n.append("image",this.selectedUser.image),n.append("id",this.selectedUser.id+""),n.append("name",this.form.get("name").value),n.append("address",this.form.get("address").value),n.append("email",this.form.get("email").value),n.append("password",this.form.get("password").value),n.append("password_confirmation",this.form.get("password_confirmation").value),n.append("user_type",this.form.get("user_type").value),n.append("profiles",this.selectedUser.profiles.map(l=>l.id)+""),this.userService.save(n,!!this.selectedUser.id).subscribe(n=>{Object(i.b)("Success!","The user is successfully saved.",this._toastr),this.savingUser=!1,this.close(l,!0)},l=>{403===l.status?l.error.forEach(l=>{Object(i.c)("Warning!",l,this._toastr)}):Object(i.a)("Error!","An error has occured when saving the user, please contact system administrator.",this._toastr),this.savingUser=!1})}}onImageChanged(l){this.selectedUser.image=l,this.selectedUser&&this.selectedUser.image&&this.selectedUser.image instanceof File?this.previewImage(this.selectedUser.image):this.imagePreview="assets/images/faces/avatar.png"}previewImage(l){if(null==l.type.match(/image\/*/))this.imagePreview="assets/images/faces/avatar.png";else{const n=new FileReader;n.readAsDataURL(l),n.onload=l=>{this.imagePreview=n.result}}}close(l,n){l.close(!!n)}}class b{}var c=u("pMnS"),d=u("9AJC"),m=u("G0yt"),g=u("MBfO"),p=u("8P0U"),f=u("omvX"),h=u("SVse"),v=u("Z5h4"),F=u("r0V8"),y=u("5GAg"),w=u("NvT6"),C=u("W5yJ"),D=u("/HVE"),P=u("iInd"),N=u("N1xL"),x=u("l43D"),I=u("EApP"),_=u("cUpR"),U=t.rb({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,7,"ngb-pagination",[["class","pagination pagination-sm m-0 float-right"],["role","navigation"]],null,[[null,"pageChange"]],function(l,n,u){var t=!0;return"pageChange"===n&&(t=!1!==l.component.loadData(u)&&t),t},d.e,d.c)),t.sb(1,573440,null,6,m.x,[m.y],{collectionSize:[0,"collectionSize"],page:[1,"page"],pageSize:[2,"pageSize"]},{pageChange:"pageChange"}),t.Lb(603979776,1,{tplEllipsis:0}),t.Lb(603979776,2,{tplFirst:0}),t.Lb(603979776,3,{tplLast:0}),t.Lb(603979776,4,{tplNext:0}),t.Lb(603979776,5,{tplNumber:0}),t.Lb(603979776,6,{tplPrevious:0})],function(l,n){var u=n.component;l(n,1,0,u.data.count,u.data.page,u.size)},null)}function L(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,3,"td",[["class","text-center loading-data"],["colspan","6"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,g.b,g.a)),t.sb(3,4374528,null,0,p.b,[t.k,t.y,[2,f.a],[2,p.a]],{mode:[0,"mode"]},null),(l()(),t.Nb(-1,null,[" Loading data . . "]))],function(l,n){l(n,3,0,"indeterminate")},function(l,n){l(n,2,0,"indeterminate"===t.Fb(n,3).mode||"query"===t.Fb(n,3).mode?null:t.Fb(n,3).value,t.Fb(n,3).mode,t.Fb(n,3)._isNoopAnimation)})}function O(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"td",[["class","text-center loading-data"],["colspan","6"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" No data created yet! "]))],null,null)}function S(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(2,null,["",""])),(l()(),t.tb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(4,null,["",""])),(l()(),t.tb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(6,null,["",""])),(l()(),t.tb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(8,null,["",""])),(l()(),t.tb(9,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Nb(10,null,["",""])),t.Jb(11,2),(l()(),t.tb(12,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Nb(13,null,["",""])),t.Jb(14,2),(l()(),t.tb(15,0,null,null,4,"td",[["class","actions"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,1,"button",[["class","btn  btn-success"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.initSave(t.Fb(l.parent.parent,58),l.context.$implicit)&&e),e},null,null)),(l()(),t.tb(17,0,null,null,0,"i",[["class","fas fa-edit"]],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,1,"button",[["class","btn  btn-danger"],["type","button"]],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,0,"i",[["class","fa fa-trash"]],null,null,null,null,null))],null,function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.email),l(n,8,0,n.context.$implicit.profiles.length);var u=t.Ob(n,10,0,l(n,11,0,t.Fb(n.parent.parent,0),n.context.$implicit.created_at,"medium"));l(n,10,0,u);var e=t.Ob(n,13,0,l(n,14,0,t.Fb(n.parent.parent,0),n.context.$implicit.updated_at,"medium"));l(n,13,0,e)})}function T(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,S)),t.sb(2,278528,null,0,h.l,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ib(0,null,null,0))],function(l,n){l(n,2,0,n.component.data.data)},null)}function q(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"div",[["class","alert alert-danger alert-transparent-left"],["role","alert"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" The name is required "]))],null,null)}function A(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"div",[["class","alert alert-danger alert-transparent-left"],["role","alert"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" The name must be less than 255 characters "]))],null,null)}function E(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,q)),t.sb(3,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,A)),t.sb(5,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.form.get("name").dirty&&u.form.controls.name.hasError("required")),l(n,5,0,u.form.get("name").dirty&&u.form.get("name").hasError("maxLength"))},null)}function K(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"div",[["class","alert alert-danger alert-transparent-left"],["role","alert"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" The email is required "]))],null,null)}function $(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"div",[["class","alert alert-danger alert-transparent-left"],["role","alert"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" The email must be less than 255 characters "]))],null,null)}function z(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,K)),t.sb(3,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,$)),t.sb(5,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.form.get("email").dirty&&u.form.controls.email.hasError("required")),l(n,5,0,u.form.get("email").dirty&&u.form.get("email").hasError("maxLength"))},null)}function j(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"div",[["class","alert alert-danger alert-transparent-left"],["role","alert"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" The password is required "]))],null,null)}function V(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,j)),t.sb(3,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.form.get("password").dirty&&u.form.controls.password.hasError("required"))},null)}function J(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"div",[["class","alert alert-danger alert-transparent-left"],["role","alert"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" The password confirmation is required "]))],null,null)}function H(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,J)),t.sb(3,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.form.get("password_confirmation").dirty&&u.form.controls.password_confirmation.hasError("required"))},null)}function M(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"option",[],null,null,null,null,null)),t.sb(1,147456,null,0,e.t,[t.k,t.D,[2,e.w]],{value:[0,"value"]},null),t.sb(2,147456,null,0,e.B,[t.k,t.D,[8,null]],{value:[0,"value"]},null),(l()(),t.Nb(3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function R(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,6,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,3,"mat-checkbox",[["class","mat-checkbox"],["color","primary"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.selectProfile(l.context.$implicit)&&t),t},v.b,v.a)),t.Kb(5120,null,e.n,function(l){return[l]},[F.b]),t.sb(5,8568832,null,0,F.b,[t.k,t.h,y.h,t.y,[8,null],[2,F.a],[2,f.a]],{color:[0,"color"],checked:[1,"checked"]},{change:"change"}),(l()(),t.Nb(6,0,[" "," "]))],function(l,n){l(n,5,0,"primary",n.component.selectedUserHasProfile(n.context.$implicit))},function(l,n){l(n,3,0,t.Fb(n,5).id,null,t.Fb(n,5).indeterminate,t.Fb(n,5).checked,t.Fb(n,5).disabled,"before"==t.Fb(n,5).labelPosition,"NoopAnimations"===t.Fb(n,5)._animationMode),l(n,6,0,n.context.$implicit.designation)})}function G(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,80,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Fb(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Fb(l,2).onReset()&&e),e},null,null)),t.sb(1,16384,null,0,e.C,[],null,null),t.sb(2,540672,null,0,e.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Kb(2048,null,e.d,null,[e.j]),t.sb(4,16384,null,0,e.q,[[4,e.d]],null,null),(l()(),t.tb(5,0,null,null,6,"div",[["class","img-uploader"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,1,"div",[["class","img-preview"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,0,"img",[["height","100"]],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(8,0,null,null,3,"div",[["class","img-input"]],null,null,null,null,null)),(l()(),t.tb(9,0,[["file",1]],null,0,"input",[["id","image"],["type","file"]],null,[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onImageChanged(t.Fb(l,9).files[0])&&e),e},null,null)),(l()(),t.tb(10,0,null,null,1,"label",[["for","image"]],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,0,"i",[["class","mdi mdi-cloud-upload"]],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Name"])),(l()(),t.tb(15,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["type","text"]],[[2,"has-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,16)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,16).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,16)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,16)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(16,16384,null,0,e.e,[t.D,t.k,[2,e.a]],null,null),t.Kb(1024,null,e.n,function(l){return[l]},[e.e]),t.sb(18,671744,null,0,e.i,[[3,e.d],[8,null],[8,null],[6,e.n],[2,e.A]],{name:[0,"name"]},null),t.Kb(2048,null,e.o,null,[e.i]),t.sb(20,16384,null,0,e.p,[[4,e.o]],null,null),(l()(),t.ib(16777216,null,null,1,null,E)),t.sb(22,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(23,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Email address"])),(l()(),t.tb(26,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["id","email"],["type","text"]],[[2,"has-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,27)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,27).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,27)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,27)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(27,16384,null,0,e.e,[t.D,t.k,[2,e.a]],null,null),t.Kb(1024,null,e.n,function(l){return[l]},[e.e]),t.sb(29,671744,null,0,e.i,[[3,e.d],[8,null],[8,null],[6,e.n],[2,e.A]],{name:[0,"name"]},null),t.Kb(2048,null,e.o,null,[e.i]),t.sb(31,16384,null,0,e.p,[[4,e.o]],null,null),(l()(),t.ib(16777216,null,null,1,null,z)),t.sb(33,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(34,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(35,0,null,null,1,"label",[["for","address"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Address"])),(l()(),t.tb(37,0,null,null,5,"input",[["class","form-control"],["formControlName","address"],["id","address"],["type","text"]],[[2,"has-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,38)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,38).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,38)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,38)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(38,16384,null,0,e.e,[t.D,t.k,[2,e.a]],null,null),t.Kb(1024,null,e.n,function(l){return[l]},[e.e]),t.sb(40,671744,null,0,e.i,[[3,e.d],[8,null],[8,null],[6,e.n],[2,e.A]],{name:[0,"name"]},null),t.Kb(2048,null,e.o,null,[e.i]),t.sb(42,16384,null,0,e.p,[[4,e.o]],null,null),(l()(),t.tb(43,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(44,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Password"])),(l()(),t.tb(46,0,null,null,5,"input",[["class","form-control"],["formControlName","password"],["id","password"],["type","password"]],[[2,"has-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,47)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,47).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,47)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,47)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(47,16384,null,0,e.e,[t.D,t.k,[2,e.a]],null,null),t.Kb(1024,null,e.n,function(l){return[l]},[e.e]),t.sb(49,671744,null,0,e.i,[[3,e.d],[8,null],[8,null],[6,e.n],[2,e.A]],{name:[0,"name"]},null),t.Kb(2048,null,e.o,null,[e.i]),t.sb(51,16384,null,0,e.p,[[4,e.o]],null,null),(l()(),t.ib(16777216,null,null,1,null,V)),t.sb(53,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(54,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(55,0,null,null,1,"label",[["for","password_confirmation"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Password confirmation"])),(l()(),t.tb(57,0,null,null,5,"input",[["class","form-control"],["formControlName","password_confirmation"],["id","password_confirmation"],["type","password"]],[[2,"has-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,58)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,58).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,58)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,58)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(58,16384,null,0,e.e,[t.D,t.k,[2,e.a]],null,null),t.Kb(1024,null,e.n,function(l){return[l]},[e.e]),t.sb(60,671744,null,0,e.i,[[3,e.d],[8,null],[8,null],[6,e.n],[2,e.A]],{name:[0,"name"]},null),t.Kb(2048,null,e.o,null,[e.i]),t.sb(62,16384,null,0,e.p,[[4,e.o]],null,null),(l()(),t.ib(16777216,null,null,1,null,H)),t.sb(64,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(65,0,null,null,11,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.tb(66,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(67,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["User Group"])),(l()(),t.tb(69,0,null,null,7,"select",[["class","form-control"],["formControlName","user_type"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.Fb(l,70).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,70).onTouched()&&e),e},null,null)),t.sb(70,16384,null,0,e.w,[t.D,t.k],null,null),t.Kb(1024,null,e.n,function(l){return[l]},[e.w]),t.sb(72,671744,null,0,e.i,[[3,e.d],[8,null],[8,null],[6,e.n],[2,e.A]],{name:[0,"name"]},null),t.Kb(2048,null,e.o,null,[e.i]),t.sb(74,16384,null,0,e.p,[[4,e.o]],null,null),(l()(),t.ib(16777216,null,null,1,null,M)),t.sb(76,278528,null,0,h.l,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(77,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Profile(s)"])),(l()(),t.ib(16777216,null,null,1,null,R)),t.sb(80,278528,null,0,h.l,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.form),l(n,18,0,"name"),l(n,22,0,u.form.get("name").dirty&&u.form.get("name").invalid),l(n,29,0,"email"),l(n,33,0,u.form.get("email").dirty&&u.form.get("email").invalid),l(n,40,0,"address"),l(n,49,0,"password"),l(n,53,0,u.form.get("password").dirty&&u.form.get("password").invalid),l(n,60,0,"password_confirmation"),l(n,64,0,u.form.get("password_confirmation").dirty&&u.form.get("password_confirmation").invalid),l(n,72,0,"user_type"),l(n,76,0,u.userTypeList),l(n,80,0,u.profiles)},function(l,n){var u=n.component;l(n,0,0,t.Fb(n,4).ngClassUntouched,t.Fb(n,4).ngClassTouched,t.Fb(n,4).ngClassPristine,t.Fb(n,4).ngClassDirty,t.Fb(n,4).ngClassValid,t.Fb(n,4).ngClassInvalid,t.Fb(n,4).ngClassPending),l(n,7,0,u.imagePreview),l(n,15,0,u.form.get("name").dirty&&u.form.get("name").invalid,t.Fb(n,20).ngClassUntouched,t.Fb(n,20).ngClassTouched,t.Fb(n,20).ngClassPristine,t.Fb(n,20).ngClassDirty,t.Fb(n,20).ngClassValid,t.Fb(n,20).ngClassInvalid,t.Fb(n,20).ngClassPending),l(n,26,0,u.form.get("email").dirty&&u.form.get("email").invalid,t.Fb(n,31).ngClassUntouched,t.Fb(n,31).ngClassTouched,t.Fb(n,31).ngClassPristine,t.Fb(n,31).ngClassDirty,t.Fb(n,31).ngClassValid,t.Fb(n,31).ngClassInvalid,t.Fb(n,31).ngClassPending),l(n,37,0,u.form.get("address").dirty&&u.form.get("address").invalid,t.Fb(n,42).ngClassUntouched,t.Fb(n,42).ngClassTouched,t.Fb(n,42).ngClassPristine,t.Fb(n,42).ngClassDirty,t.Fb(n,42).ngClassValid,t.Fb(n,42).ngClassInvalid,t.Fb(n,42).ngClassPending),l(n,46,0,u.form.get("password").dirty&&u.form.get("password").invalid,t.Fb(n,51).ngClassUntouched,t.Fb(n,51).ngClassTouched,t.Fb(n,51).ngClassPristine,t.Fb(n,51).ngClassDirty,t.Fb(n,51).ngClassValid,t.Fb(n,51).ngClassInvalid,t.Fb(n,51).ngClassPending),l(n,57,0,u.form.get("password_confirmation").dirty&&u.form.get("password_confirmation").invalid,t.Fb(n,62).ngClassUntouched,t.Fb(n,62).ngClassTouched,t.Fb(n,62).ngClassPristine,t.Fb(n,62).ngClassDirty,t.Fb(n,62).ngClassValid,t.Fb(n,62).ngClassInvalid,t.Fb(n,62).ngClassPending),l(n,69,0,t.Fb(n,74).ngClassUntouched,t.Fb(n,74).ngClassTouched,t.Fb(n,74).ngClassPristine,t.Fb(n,74).ngClassDirty,t.Fb(n,74).ngClassValid,t.Fb(n,74).ngClassInvalid,t.Fb(n,74).ngClassPending)})}function B(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"mat-spinner",[["class","loading-profiles mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,w.d,w.b)),t.sb(1,49152,null,0,C.d,[t.k,D.a,[2,h.d],[2,f.a],C.a],null,null)],null,function(l,n){l(n,0,0,t.Fb(n,1)._noopAnimations,t.Fb(n,1).diameter,t.Fb(n,1).diameter)})}function Q(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),t.Nb(2,null,["",""])),(l()(),t.tb(3,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.close(l.context.$implicit)&&t),t},null,null)),(l()(),t.tb(4,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\xd7"])),(l()(),t.tb(6,0,null,null,4,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,G)),t.sb(8,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,B)),t.sb(10,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(11,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,1,"button",[["class","btn btn-outline-dark"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.save(l.context.$implicit)&&t),t},null,null)),(l()(),t.Nb(-1,null,["Save"]))],function(l,n){var u=n.component;l(n,8,0,!u.loadingProfiles),l(n,10,0,u.loadingProfiles)},function(l,n){var u=n.component;l(n,2,0,u.selectedUser.id?"Update user: "+u.selectedUser.name:"Create new user"),l(n,12,0,u.form.invalid||u.savingUser)})}function W(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Delete user"])),(l()(),t.tb(3,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.close(l.context.$implicit)&&t),t},null,null)),(l()(),t.tb(4,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\xd7"])),(l()(),t.tb(6,0,null,null,2,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Are you sure you want to delete this user?"])),(l()(),t.tb(9,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,1,"button",[["class","btn btn-outline-danger"],["type","button"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Nb(-1,null,["Delete"]))],null,function(l,n){l(n,10,0,n.component.deletingUser)})}function X(l){return t.Pb(0,[t.Hb(0,h.e,[t.t]),(l()(),t.tb(1,0,null,null,56,"div",[["class","content-wrapper"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,17,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,16,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,15,"div",[["class","row mb-2"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,2,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,1,"h1",[["class","m-0 text-dark"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Users "])),(l()(),t.tb(8,0,null,null,11,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,10,"ol",[["class","breadcrumb float-sm-right"]],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,4,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,3,"a",[["href","#"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.sb(12,671744,null,0,P.q,[P.n,P.a,h.j],{routerLink:[0,"routerLink"]},null),t.Gb(13,1),(l()(),t.Nb(-1,null,["Home"])),(l()(),t.tb(15,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Security"])),(l()(),t.tb(18,0,null,null,1,"li",[["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Users"])),(l()(),t.tb(20,0,null,null,37,"section",[["class","content"]],null,null,null,null,null)),(l()(),t.tb(21,0,null,null,36,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,34,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,33,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.tb(25,0,null,null,6,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["User List Table | Add new "])),(l()(),t.tb(28,0,null,null,0,"i",[["class","fa fa-plus"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.initSave(t.Fb(l,58))&&e),e},null,null)),(l()(),t.tb(29,0,null,null,2,"div",[["class","card-tools"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,k)),t.sb(31,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(32,0,null,null,25,"div",[["class","card-body p-0"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,24,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t.tb(34,0,null,null,23,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.tb(35,0,null,null,15,"thead",[],null,null,null,null,null)),(l()(),t.tb(36,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.tb(37,0,null,null,1,"th",[["style","width: 10px"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["#"])),(l()(),t.tb(39,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Name"])),(l()(),t.tb(41,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Email"])),(l()(),t.tb(43,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Profile"])),(l()(),t.tb(45,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Create"])),(l()(),t.tb(47,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Update"])),(l()(),t.tb(49,0,null,null,1,"th",[["style","width: 20%"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Action"])),(l()(),t.tb(51,0,null,null,6,"tbody",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,L)),t.sb(53,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,O)),t.sb(55,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,T)),t.sb(57,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(0,[["saveModal",2]],null,0,null,Q)),(l()(),t.ib(0,[["deleteModal",2]],null,0,null,W))],function(l,n){var u=n.component,t=l(n,13,0,"/dashboard");l(n,12,0,t),l(n,31,0,!u.loading&&u.data),l(n,53,0,u.loading),l(n,55,0,!u.loading&&u.data&&!u.data.data.length),l(n,57,0,!u.loading)},function(l,n){l(n,11,0,t.Fb(n,12).target,t.Fb(n,12).href)})}function Y(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-users",[],null,null,null,X,U)),t.sb(1,114688,null,0,o,[N.a,x.a,m.t,e.g,I.j,_.h],null,null)],function(l,n){l(n,1,0)},null)}var Z=t.pb("app-users",o,Y,{},{},[]),ll=u("POq0"),nl=u("IP0z"),ul=u("Xd0L");u.d(n,"UsersModuleNgFactory",function(){return tl});var tl=t.qb(b,[],function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[c.a,d.a,d.b,d.j,d.k,d.g,d.h,d.i,Z]],[3,t.j],t.w]),t.Db(4608,h.o,h.n,[t.t,[2,h.K]]),t.Db(4608,ll.c,ll.c,[]),t.Db(4608,e.z,e.z,[]),t.Db(4608,m.t,m.t,[t.j,t.q,m.hb,m.u]),t.Db(4608,e.g,e.g,[]),t.Db(1073742336,h.c,h.c,[]),t.Db(1073742336,P.r,P.r,[[2,P.w],[2,P.n]]),t.Db(1073742336,nl.a,nl.a,[]),t.Db(1073742336,ul.n,ul.n,[[2,ul.f],[2,_.f]]),t.Db(1073742336,p.c,p.c,[]),t.Db(1073742336,C.c,C.c,[]),t.Db(1073742336,D.b,D.b,[]),t.Db(1073742336,ul.x,ul.x,[]),t.Db(1073742336,ll.d,ll.d,[]),t.Db(1073742336,F.d,F.d,[]),t.Db(1073742336,F.c,F.c,[]),t.Db(1073742336,m.c,m.c,[]),t.Db(1073742336,m.f,m.f,[]),t.Db(1073742336,m.g,m.g,[]),t.Db(1073742336,m.k,m.k,[]),t.Db(1073742336,m.l,m.l,[]),t.Db(1073742336,e.y,e.y,[]),t.Db(1073742336,e.l,e.l,[]),t.Db(1073742336,m.q,m.q,[]),t.Db(1073742336,m.r,m.r,[]),t.Db(1073742336,m.v,m.v,[]),t.Db(1073742336,m.z,m.z,[]),t.Db(1073742336,m.C,m.C,[]),t.Db(1073742336,m.F,m.F,[]),t.Db(1073742336,m.I,m.I,[]),t.Db(1073742336,m.L,m.L,[]),t.Db(1073742336,m.Q,m.Q,[]),t.Db(1073742336,m.T,m.T,[]),t.Db(1073742336,m.U,m.U,[]),t.Db(1073742336,m.V,m.V,[]),t.Db(1073742336,m.w,m.w,[]),t.Db(1073742336,e.v,e.v,[]),t.Db(1073742336,b,b,[]),t.Db(1024,P.l,function(){return[[{path:"",component:o}]]},[])])})}}]);