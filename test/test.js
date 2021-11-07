const assert = require("chai").assert;
const index = require("../server");
const chai = require("chai");
chai.use(require("chai-http"));
const expect = require("chai").expect;
const agent = require("chai").request.agent(index);

describe("UberEats backend Testing", function (){


    describe("Login Test for customer", function () {
        it("Incorrect Password", () => {
          agent
            .post("/login")
            .send({ email: "swaroop07patwari@gmail.com", password: "password" })
            .then(function (res) {
              expect(res.text).to.equal('{"success":0,"message":"Not register"}');
            })
            .catch((error) => {
              console.log(error);
            });
        })
    
        it("Correct Password for customer", ()=>{
            agent
                .post("/login")
                .send({email: "heli@gmail.com" , password: "heli"})
                .then(function (res){
                    expect(res.text).to.equal('{"success":1,"message":}');
                })
                .catch((error) =>{
                    console.log(error);
                });
        })
    });

    describe("Login Test for restaurant", function () {
      it("Incorrect Password", () => {
        agent
          .post("/resturant/login")
          .send({ email: "swaroop07patwari@gmail.com", password: "password" })
          .then(function (res) {
            expect(res.text).to.equal('{"success":0,"message":"Not register"}');
          })
          .catch((error) => {
            console.log(error);
          });
      })
  
      it("Correct Password for restaurant", ()=>{
          agent
              .post("/resturant/login")
              .send({email: "honest@gmail.com" , password: "honest"})
              .then(function (res){
                  expect(res.text).to.equal('{"success":0,"message":"Not register"}');
              })
              .catch((error) =>{
                  console.log(error);
              });
      })
  });
    
    describe("Signup Test for restaurant", function () {
      it("Correct Password", ()=>{
        agent
            .post("/resturant/register")
            .send({email: "pinktaco@gmail.com" , name:"Pink Taco", password: "pink"})
            .then(function (res){
                expect(res.text).to.equal('{"success":1,"message":"resturant added"}');
            })
            .catch((error) =>{
                console.log(error);
            });
        })
    
    });

    describe("Signup Test for customer", function () {
      it("Correct Password", ()=>{
        agent
            .post("/register")
            .send({email: "himesh@gmail.com" , name:"Himesh", password: "pink"})
            .then(function (res){
                expect(res.text).to.equal('{"success":1,"message":"customer added"}');
            })
            .catch((error) =>{
                console.log(error);
            });
        })
    
    });
    
    describe("Get Resturants", function(){
        it("Get resturant", () =>{
            agent 
                .post("/resturant/location")
                .send({city: "san jose"})
                .then(function (res){
                    expect(res.text).to.equal('[{"resturantId":15,"rname":"Paneera Bread","email":"pb@gmail.com","pwd":"$2b$10$LMe4zuasVX/VShZBKDhWOePFNxmwigRKILIPardh3VivBPB0rBlvO","mobileNo":6692245678,"raddressId":null,"cuisineId":3,"country":"United States","city":"san jose","state":"California","start":"08:00:00","close":"22:00:00","delivery":"No","pickup":"Yes","profilepic":"36d9d624478967489daba641a02dcaea","veg":"Yes","nonVeg":"Yes","vegan":null,"street":"503 Coleman Ave","cdes":"Discover great-tasting, clean food at Panera Bread! From our breakfast sandwiches and wraps, to our salads, soups, tasty pastries, and coffee drinks, ..."},{"resturantId":16,"rname":"Subway","email":"subway@gmail.com","pwd":"$2b$10$eL01roFKi4jFN0yrxd4Vl.W0x9p4OD8kPVZxTlGJ9dGQPL9sU4Cxa","mobileNo":6698990033,"raddressId":null,"cuisineId":3,"country":"United States","city":"san jose","state":"California","start":"08:00:00","close":"22:09:00","delivery":"No","pickup":"Yes","profilepic":"371deaeb9ef49081c35fdffe38dc5937","veg":"Yes","nonVeg":"Yes","vegan":null,"street":"1300 The Alameda Unit 3","cdes":"A Sandwich Artist will greet and serve guests, prepare food, maintain food safety and sanitation standards, and handle or process light paperwork"},{"resturantId":20,"rname":"Nick the greek","email":"nick@gmail.com","pwd":"$2b$10$/7qiz6JDvmmJnUL9Z8W/cuX8cNUrtNRW.npY0sY32jYJYuztMERtu","mobileNo":669890789,"raddressId":null,"cuisineId":3,"country":"United States","city":"san jose","state":"California","start":"08:00:00","close":"22:09:00","delivery":"Yes","pickup":"Yes","profilepic":"523a573c6e770a3a3d67e2223a3fd68b","veg":"Yes","nonVeg":"Yes","vegan":null,"street":"143 W Santa Clara St","cdes":"Pickup at Nick the Greek Almaden (5019 Almaden Expressway San Jose, CA 95118). As soon as possible. Information. Gyros and Pitas · Bowls · Plates ..."},{"resturantId":28,"rname":"Jack in the box","email":"jack.sj@jack.com","pwd":"$2b$10$Em7fHCX/hNW9CPObFgNS7eZ8gweVoL37gpWd6jLXe/fa/I7l/VzxO","mobileNo":123456789,"raddressId":null,"cuisineId":1,"country":"United States","city":"san jose","state":"California","start":"08:00:00","close":"22:09:00","delivery":"Yes","pickup":"Yes","profilepic":"6599c00de3598fb1e315d0d7a550864c","veg":"Yes","nonVeg":"Yes","vegan":null,"street":"alameda","cdes":"jack"}]');
                })
                .catch((error) => {
                    console.log(error);
                  });
        })
    });
});


