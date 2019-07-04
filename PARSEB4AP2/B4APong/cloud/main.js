Parse.Cloud.beforSave("Score", function(request, response){
  if(request.object.get("Score") %2 == 0){
    request.object.set("isEvenNumber", true);
  } 
  else{
    request.object.set("isEvenNumber", false);
  }
  response.success();
});


Parse.Cloud.define("getUser", async(request) =>{
  var query = new Parse.Query("User");
  query.equalTo("objectId", request.params.user)
  .find()
  .then((results) =>{
    console.log("Results: " + results.length);
    await response.success(results[0].get("username"));
  })
  .catch(()=>{
    response.error("Score lookup failed");
  });
});

Parse.Cloud.job("resetScore", (request) =>{
  var query = new Parse.Query("Score");
  query.find({
    success: function(results){
      console.log("Successfully retrieved " + results.length + "scores");

      query.each(function(object, err){
        object.destroy({
          success: function(object){
            console.log("Successfully destroyed object");
            response.success();
          },
          error: function(error){
            console.log("Error" + error.code + "-" + error.message);
            response.error("Score lookup failed");
          },
          useMasterKey: true
        })
      })
    },
    error: function(error){
      console.log("Error: " + error.code + "-" + error.message);
      response.error("Score lookup failed");
    }
  });
});