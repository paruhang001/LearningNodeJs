const express =require("express")
const App= express()
// require("./Database/data")
App.set("view engine ", "ejs")
// App.get("/demo",function(request, response){
//     response.render("demo.ejs")
// })
// App.get("/home",function(request, response){
//     response.render("home.ejs")
// })
// App.get("/about",function(request, response){
//     response.render("about.ejs")
// })
// App.get("/services",function(request, response){
//     response.render("services.ejs")
// })
// App.get("/contact",function(request, response){
//     response.render("contact.ejs")
// })
// App.get("/test",function(req,res){
//     res.render("test.ejs",{age:12, name:"about"})
// })
// App.listen(4000, function (){
//     console.log("backend has started at port 4000")
// })
App.get("/",(req,res)=>{
    res.render("todo/get-todo.ejs")
})
App.get("/add",(req,res)=>{
    res.render("todo/add.ejs")
   
})
App.get("/update",(req,res)=>{
res.render("todo/update.ejs")
})
App.get("/login",(req,res)=>{
    res.render("authen/login.ejs")
})
App.get("/register",(req,res)=>{
res.render("authen/register.ejs")
})
App.listen(4000, function (){
        console.log("backend has started at port 4000")
    })