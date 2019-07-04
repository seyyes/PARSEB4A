const Parse = require('parse/node');
Parse.initialize('HLUhoHsbHVfwUkJ7na3f2tkRBTw40L0uoHBT1SFK', 'BAvTp8oAop9Ko9I7QmHRu0uOSrF0UaQUl3WFRbdz')
Parse.serverURL = 'https://parseapi.back4app.com';

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// //First video
// //création de la classe Person et de ses méthodes
// var Person = Parse.Object.extend('Person', {
//     isAdult: function(){
//         return this.get('age') > 18;
//     }, 
//     initialize: function(attrs, options){
//         this.hasChildren = false;
//     }
// },
// {
//     create: function(livingCity,distanceFromCompany){
//         var person = new Person();
//         person.set('livingCity', livingCity);
//         person.set('distanceFromCompany', distanceFromCompany);
//         return person;
//     }
// });

// let person2 = Person.create('San Jose', 1050);
// person2.set('name', 'Stephen');
// person2.set('age', 30);
// person2.add('skills', ['Driving','Computing', 'Marketing', 'Programming', 'DevOps']);
// console.log(person2.get('livingCity'));
// console.log(person2.get('name'));
// console.log(person2.get('age'));
// person2.save();
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// //Second video
// async function run() {
//   var Person = Parse.Object.extend("Person");
//   var query = new Parse.Query(Person);
//   var person = await query.get("Bg8yIl1kYP");
//   console.log(person.get('name'));
//   console.log(person.get('age'));

//   person.increment('age');
//   console.log(person.get('name'));
//   console.log(person.get('age'));

//   person.save();
//   person.fetch();//to update the updated version of parse to our inmemory object
// }

// run();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// //Third video
// async function run() {
//   var Person = Parse.Object.extend("Person");
//   var query = new Parse.Query(Person);
//   var person = await query.get("Bg8yIl1kYP");

//   //person.add('skills', 'Driving');// ajoutera autant de fois qu'elle sera appeléze
//  // person.addUnique('skills', 'fighting');//ne sera ajouté qu'une seule fois même si appelé plusieurs fois
//   //person.remove('skills', 'Driving');
//   //person.unset('age');// to unset tehe age of the personf
//     console.log(person.get('name'));
//     console.log(person.get('age'));

//   person.save();
// }

// run();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// //Fourth video
// async function run() {
//     var Person = Parse.Object.extend("Person");
//     var query = new Parse.Query(Person);
    
//     query.notEqualTo('name', 'Paul');
//     query.greaterThan('distanceFromCompany', 1500);
//     var results = await query.find();
//     for(var i = 0; i<results.length; i++){
//         var thisObject = results[i];
//         console.log(thisObject.get('name') + ' ' + thisObject.get('livingCity'));
//         console.log(thisObject.get('age'));
//         console.log(thisObject.get('distanceFromCompany'));
//     }
//   }
  
//   run();
  
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// //Fifth video
// async function run() {
//     var Person = Parse.Object.extend("Person");
//     var query = new Parse.Query(Person);
    
//     query.descending('distanceFromCompany');
//     query.skip(2);//it'll skip the two first results
//     query.limit(5);
//     var results = await query.find();
//     for(var i = 0; i<results.length; i++){
//         var thisObject = results[i];
//         console.log(thisObject.get('name') + ' from ' + thisObject.get('livingCity'));
//         console.log(thisObject.get('age'));
//         console.log(thisObject.get('distanceFromCompany'));
//         console.log('');
//     }
//   }
  
//   run();
  
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // //sixth video
// async function run() {
//     var Person = Parse.Object.extend("Person");
//     var query = new Parse.Query(Person);
    
//     query.notContainedIn('name', ['Paul', 'Chris']);
//     var results = await query.find();
//     for(var i = 0; i<results.length; i++){
//         var thisObject = results[i];
//         console.log(thisObject.get('name') + ' from ' + thisObject.get('livingCity'));
//         console.log(thisObject.get('age'));
//         console.log(thisObject.get('distanceFromCompany'));
//         console.log('');
//     }
//   }
  
//   run();
  
//   //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
// //seventh video
//Relation between two classes/One-To-One relationship
// async function run() {
//     var Person = Parse.Object.extend("Person");
//     var person = new Person();

//     person.set('name', 'Mara');
//     person.set('age', 25);
//     person.set('livingCity', 'Denver');
//     person.set('skills', ['Programming', 'Support', 'Design', 'Marketing']);
//     person.set('distanceFromCompany', 656);

//     var Address = Parse.Object.extend('Address');
//     var address = new Address();
//     address.set('streetName', 'Street A');
//     address.set('number', 34);
//     address.set('owner', person);

//     address.save();//saves at the same time the owner(person)
//   }
  
//   run();
  
//   //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
// //eigth video
//Relation between two classes/One-To-Many relationship
// async function run() {
//     var Person = Parse.Object.extend("Person");
//     var person = new Person();

//     person.set('name', 'Noor');
//     person.set('age', 28);
//     person.set('livingCity', 'Ohio');
//     person.set('skills', ['Programming', 'Sales', 'Design', 'Marketing']);
//     person.set('distanceFromCompany', 100);

//     var Post = Parse.Object.extend('Post');
//     var postOne = new Post();
//     var postTwo = new Post();
//     postOne.set('title', 'Hello world');
//     postOne.set('content', 'blablabla');
//     postOne.set('owner', person);

//     postTwo.set('title', 'Hey hey');
//     postTwo.set('content', 'Bonjour les amis');
//     postTwo.set('owner', person);

//     postOne.save();//saves at the same time the owner(person)
//     postTwo.save();//saves at the same time the owner(person)
//   }
  
//   run();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
//ninth video
//Relation between two classes/Many-To-Many relationship
// async function run() {
//     var Person = Parse.Object.extend("Person");
//     var queryPerson = new Parse.Query(Person);

//     queryPerson.equalTo('name', 'Paul');

//     var myPerson = await queryPerson.first();    
//     console.log('Name: '+ myPerson.get('name'));
//     var relation = myPerson.relation('likes');

//     var Post = Parse.Object.extend('Post');
//     var postQuery = new Parse.Query(Post);
//     var result = await postQuery.find();

//     relation.add(result);
//     myPerson.save();
    
//   }
  
//   run();
  
//   //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//   //Tenth video
//   async function run() {
//       //Creating a user
//     // var user = new Parse.User();
//     // user.set('username', 'cheikh');
//     // user.set('password', 'ABCD-1234');
//     // user.set('email', 'cheikh@g.com');
//     // user.set('telephone', '123-567')

//     // await user.save();
    
//     //login a user
//     var user = await Parse.User.logIn('seynabou', 'ABCD1234');
//     if (user){
//      console.log('User successfully logged in: '+ user.get('email'));   
//     }
//   }
  
//   run();

//   //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  //Eleventh video
  async function run() {
   var user = await Parse.User.logIn('cheikh', 'ABCD-1234');

   if(user){
       var Note = Parse.Object.extend('Note');
    //    var publicNote = new Note();
    //    var privateNote = new Note();

    //    publicNote.set('content', 'This is a public note for everyone');
    //    privateNote.set('content', 'This is a note for seynabou only');
    //    privateNote.setACL(new Parse.ACL(user))

    //    await publicNote.save();
    //    await privateNote.save();
    //Limitation des droits
        var privateNote = new Note();
        privateNote.set('content', 'This is a note for seynabou only');

        var myACL = new Parse.ACL();
        myACL.setReadAccess(user, true);
        myACL.setWriteAccess(user, false)

        privateNote.setACL(myACL)
        await privateNote.save();
    // var noteQuery = new Parse.Query(Note);
    // var result = await noteQuery.find({sessionToken: user.get('sessionToken')});//session allows to see the private and public posts
    // for(var i= 0; i<result.length; i++){
    //     console.log('Content ' + result[i].get('content'));
    // }


   }
}

run();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
