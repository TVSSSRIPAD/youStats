var getChannelIDsM = async function (query,pageToken){
    console.log(query);
    let result = [];
    if(query){
     const res = await  $.ajax({
        
            url: "https://www.googleapis.com/youtube/v3/search",
            method: "GET",
            data: {part: "snippet",pageToken:pageToken,order:"viewCount",type:"channel",q:query,key:key},
            success: function(res) {
                
             //   console.log("success model getChannelIDs");
           //     console.log(res);
                result = res;
            },
            error: function(xhr) {
                //Do Something to handle error
                console.log("error");
            }
        });
    };
   return result;
  }


  var  getChannelbyIDM = async function(channelId){
      //console.log(channelId);
      let result;
    const res = await $.ajax({
        url: "https://www.googleapis.com/youtube/v3/channels",
        method:"GET",
        data: {part: "snippet,contentDetails,statistics",id:channelId,key:key},
      
        
        success: function(res) {
            //Do Something
            console.log("success model getChannelbyID");
         //   console.log(res);
            result = res;
        },
        error: function(xhr) {
            //Do Something to handle error
            console.log("error");
            return null;
        }
    });   
    return result;
}

function getChannelbyUsernameM(username){
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/channels",
        method: "GET",
        data: {"part": "snippet,contentDetails,statistics","forUsername":username,"key":key},
        success: function(response) {
            
            console.log("success model getChanbyUsername");
            //console.log(response)
            return response;
        },
        error: function(xhr) {
            //Do Something to handle error
            console.log("error");
            return null;
        }
    });
}