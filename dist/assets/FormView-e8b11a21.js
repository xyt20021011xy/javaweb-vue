import{d as e,A as P,_ as S,a as f,r as p,o as z,c as D,b as h,w as o,e as g,p as N,f as B}from"./index-55d2abca.js";var T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5l-41.1 41.1-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-44.9 44.9-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-65.3 65.3a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 00608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8-43.1-43-66.8-100.3-66.8-161.2 0-60.9 23.7-118.2 66.8-161.2 43-43.1 100.3-66.8 161.2-66.8 60.9 0 118.2 23.7 161.2 66.8 43.1 43 66.8 100.3 66.8 161.2 0 60.9-23.7 118.2-66.8 161.2z"}}]},name:"key",theme:"outlined"};const A=T;function y(n){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?Object(arguments[l]):{},x=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(x=x.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),x.forEach(function(t){E(n,t,s[t])})}return n}function E(n,l,s){return l in n?Object.defineProperty(n,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[l]=s,n}var V=function(l,s){var x=y({},l,s.attrs);return e(P,y({},x,{icon:A}),null)};V.displayName="KeyOutlined";V.inheritAttrs=!1;const I=V;const K={name:"FormView",data(){return{KeyOutlined:I,open:!1,open1:!1,open2:!1,delete:"",value:"",value1:"",page:1,pagetotal:100,filterTableData:[{id:"",username:"",name:"",sex:"",password:"",phone:"",time:""}],exit:{id:"",username:"",name:"",sex:"",password:"",phone:"",time:""},input:{name:"",username:""}}},methods:{insertuser(){this.open2=!1,f.post("/form/insert",this.exit).then(n=>{console.log(n),this.data(),alert(n.data)})},insert(){const n={id:"",username:"",name:"",sex:"",password:"",phone:"",time:""};this.exit=n,this.open2=!0},handleOk(){this.open=!1,f.delete("form",{params:{username:this.delete}}).then(n=>{console.log(n),this.data()})},exitOk(n,l){console.log(l),this.open1=!1,f.post("/form/update",this.exit).then(s=>{console.log(s),this.data(),alert(s.data)})},data(){f.post("form",{page:this.page,pageSize:5,name:this.input.name,username:this.input.username}).then(n=>{console.log(n),this.filterTableData=n.data.records,this.pagetotal=n.data.total})},handleEdit(n){this.open1=!0,this.exit=this.filterTableData[n]},handleDelete(n){this.delete=n.username,this.open=!0},next(){this.page=this.page+1,this.data()},prev(){this.page=this.page-1,this.data()},current(){console.log(this.page),this.data()}},watch:{},mounted(){f.post("form",{page:1,pageSize:5,name:this.input.name,username:this.input.username}).then(n=>{console.log(n),this.filterTableData=n.data.records,this.pagetotal=n.data.total})}},j=n=>(N("data-v-64553218"),n=n(),B(),n),M={class:"box"},F={class:"title"},q={class:"search"},G=j(()=>h("p",null,"是否确认删除",-1)),H={class:"pagehead"};function J(n,l,s,x,t,u){const d=p("el-input"),_=p("el-button"),r=p("el-form-item"),c=p("el-option"),v=p("el-select"),w=p("el-form"),b=p("a-modal"),m=p("el-table-column"),k=p("el-date-picker"),O=p("el-col"),C=p("el-table"),U=p("el-pagination");return z(),D("div",M,[h("div",F,[h("div",q,[e(d,{style:{width:"200px","margin-left":"20px"},modelValue:t.input.name,"onUpdate:modelValue":l[0]||(l[0]=a=>t.input.name=a),placeholder:"Please input name"},null,8,["modelValue"]),e(d,{style:{width:"200px","margin-left":"20px","margin-right":"20px"},modelValue:t.input.username,"onUpdate:modelValue":l[1]||(l[1]=a=>t.input.username=a),placeholder:"Please input username"},null,8,["modelValue"]),e(_,{type:"primary",onClick:u.data},{default:o(()=>[g("查询")]),_:1},8,["onClick"]),e(_,{style:{"margin-left":"500px"},size:"large",type:"primary",onClick:u.insert},{default:o(()=>[g("新增")]),_:1},8,["onClick"]),e(b,{open:t.open2,"onUpdate:open":l[7]||(l[7]=a=>t.open2=a),title:"Basic Modal",onOk:u.insertuser},{default:o(()=>[e(w,{model:t.exit,"label-width":"120px"},{default:o(()=>[e(r,{label:"姓名"},{default:o(()=>[e(d,{modelValue:t.exit.name,"onUpdate:modelValue":l[2]||(l[2]=a=>t.exit.name=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"账号"},{default:o(()=>[e(d,{modelValue:t.exit.username,"onUpdate:modelValue":l[3]||(l[3]=a=>t.exit.username=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"密码"},{default:o(()=>[e(d,{modelValue:t.exit.password,"onUpdate:modelValue":l[4]||(l[4]=a=>t.exit.password=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"电话"},{default:o(()=>[e(d,{modelValue:t.exit.phone,"onUpdate:modelValue":l[5]||(l[5]=a=>t.exit.phone=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"性别"},{default:o(()=>[e(v,{modelValue:t.exit.sex,"onUpdate:modelValue":l[6]||(l[6]=a=>t.exit.sex=a),placeholder:"please select your sex"},{default:o(()=>[e(c,{label:"男",value:"男"}),e(c,{label:"女",value:"女"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","onOk"])])]),e(C,{data:t.filterTableData,size:"small",style:{width:"100%","margin-top":"20px"}},{default:o(()=>[e(m,{label:"Name",prop:"name",width:"150px"}),e(m,{label:"Sex",prop:"sex",width:"100px"}),e(m,{label:"UserName",prop:"username",width:"150px"}),e(m,{label:"Password",prop:"password",width:"200px"}),e(m,{label:"Phone",prop:"phone",width:"250px"}),e(m,{label:"Time",prop:"time",width:"200px"}),e(m,{align:"right"},{default:o(a=>[e(_,{size:"large",onClick:i=>u.handleEdit(a.$index)},{default:o(()=>[g("Edit ")]),_:2},1032,["onClick"]),e(b,{open:t.open1,"onUpdate:open":l[14]||(l[14]=i=>t.open1=i),title:"Basic Modal",onOk:i=>u.exitOk(a.$index,a.row)},{default:o(()=>[e(w,{model:t.exit,"label-width":"120px"},{default:o(()=>[e(r,{label:"姓名"},{default:o(()=>[e(d,{modelValue:t.exit.name,"onUpdate:modelValue":l[8]||(l[8]=i=>t.exit.name=i)},null,8,["modelValue"])]),_:1}),e(r,{label:"账号"},{default:o(()=>[e(d,{modelValue:t.exit.username,"onUpdate:modelValue":l[9]||(l[9]=i=>t.exit.username=i)},null,8,["modelValue"])]),_:1}),e(r,{label:"密码"},{default:o(()=>[e(d,{modelValue:t.exit.password,"onUpdate:modelValue":l[10]||(l[10]=i=>t.exit.password=i)},null,8,["modelValue"])]),_:1}),e(r,{label:"电话"},{default:o(()=>[e(d,{modelValue:t.exit.phone,"onUpdate:modelValue":l[11]||(l[11]=i=>t.exit.phone=i)},null,8,["modelValue"])]),_:1}),e(r,{label:"性别"},{default:o(()=>[e(v,{modelValue:t.exit.sex,"onUpdate:modelValue":l[12]||(l[12]=i=>t.exit.sex=i),placeholder:"please select your sex"},{default:o(()=>[e(c,{label:"男",value:"男"}),e(c,{label:"女",value:"女"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"Activity time"},{default:o(()=>[e(O,{span:11},{default:o(()=>[e(k,{modelValue:t.exit.date,"onUpdate:modelValue":l[13]||(l[13]=i=>t.exit.date=i),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:2},1032,["open","onOk"]),e(_,{size:"large",type:"danger",onClick:i=>u.handleDelete(a.row)},{default:o(()=>[g("Delete ")]),_:2},1032,["onClick"]),e(b,{open:t.open,"onUpdate:open":l[15]||(l[15]=i=>t.open=i),title:"Basic Modal",onOk:u.handleOk},{default:o(()=>[G]),_:1},8,["open","onOk"])]),_:1})]),_:1},8,["data"]),h("div",H,[e(U,{background:"",layout:"prev, pager, next",onNextClick:u.next,onPrevClick:u.prev,onCurrentChange:u.current,total:t.pagetotal,"page-size":5,"current-page":t.page,"onUpdate:currentPage":l[16]||(l[16]=a=>t.page=a)},null,8,["onNextClick","onPrevClick","onCurrentChange","total","current-page"])])])}const Q=S(K,[["render",J],["__scopeId","data-v-64553218"]]);export{Q as default};
