import{_ as c,a as _,o as r,c as p,b as s,g as m,h as l,v as d,p as u,f as g}from"./index-55d2abca.js";const h="/assets/wave-890e0461.png",v="/assets/bg-cef48de2.svg",f="/assets/avatar-9209ab94.svg";const w={name:"LoginView",data(){return{loginForm:{username:"admin",password:"123456"}}},methods:{login(){const e={username:this.loginForm.username,password:this.loginForm.password};console.log(e),_.post("/login",e).then(o=>{console.log(o.data.data),o.data.code===200?(this.$message.success("登录成功"),localStorage.setItem("token",o.data.data),this.$router.push("/")):this.$message.error("用户名或密码错误")})}}},t=e=>(u("data-v-3f333ea2"),e=e(),g(),e),F=t(()=>s("img",{src:h,class:"wave"},null,-1)),b={class:"container"},x=t(()=>s("div",{class:"img"},[s("img",{src:v,alt:""})],-1)),V={class:"login-content"},y=["model"],I=t(()=>s("img",{src:f,alt:""},null,-1)),S=t(()=>s("h2",{class:"title"},"欢迎",-1)),k={class:"input-div one"},B=t(()=>s("div",{class:"i"},[s("i",{class:"fas fa-user"})],-1)),L={class:"div"},M=t(()=>s("h5",null,"用户名",-1)),U={class:"input-div pass"},D=t(()=>s("div",{class:"i"},[s("i",{class:"fas fa-lock"})],-1)),E={class:"div"},N=t(()=>s("h5",null,"密码",-1)),T=t(()=>s("a",{href:"#"},"忘记密码?",-1)),j=t(()=>s("button",{type:"submit",class:"btn"},"登录",-1));function q(e,o,z,A,i,a){return r(),p("div",null,[F,s("div",b,[x,s("div",V,[s("form",{ref:"loginForm",model:i.loginForm,onSubmit:o[2]||(o[2]=m((...n)=>a.login&&a.login(...n),["prevent"]))},[I,S,s("div",k,[B,s("div",L,[M,l(s("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>i.loginForm.username=n),type:"text",class:"input"},null,512),[[d,i.loginForm.username]])])]),s("div",U,[D,s("div",E,[N,l(s("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>i.loginForm.password=n),type:"password",class:"input"},null,512),[[d,i.loginForm.password]])])]),T,j],40,y)])])])}const G=c(w,[["render",q],["__scopeId","data-v-3f333ea2"]]);export{G as default};
