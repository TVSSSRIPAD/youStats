//var url = "https://www.googleapis.com/youtube/v3/search";
var mt ="";
var pt="";
$(document).ready( function () {
  $(".channels").hide();
//slet querySendBtn = document.getElementById('queryBtn');
    
    $("#next").hide();
    $("#prev").hide();
    
    $("#queryBtn").on('click',() => channelInfos(""));
    $("#query").keypress(function(event){
    //  console.log(event.keyCode);
      if (event.which === 13 || event.keyCode === 13) {
       channelInfos("");
    }
    });
    $("#next").on('click',() => channelInfos(mt));
    $("#prev").on('click',()=> channelInfos(pt))
  });

  async function getChannels(pageToken){
      let name = document.getElementById('query').value;
    //  console.log(name);
      
      let res =  await getChannelIDsM(name,pageToken);
      console.log(res);
      
    return res;


  }

  async function channelInfos(pageToken){
    
    let channelList = await getChannels(pageToken);
    let IDs = [];
    let subs = [];
    let views = [];
    let videos = [];
    let res;
    setView(channelList);
    let L = channelList["items"].length;
    for(i=0;i<L;i++)
    {
      IDs[i] = channelList["items"][i]["id"]["channelId"];
  ///    console.log(IDs[i]);
    }
    for(i=0;i<L;i++)
    {
      res = await  getChannelbyIDM(IDs[i]);
    //  console.log(res);
      subs[i] = res["items"][0]["statistics"]["subscriberCount"];
      views[i] = res["items"][0]["statistics"]["viewCount"];
      videos[i] = res["items"][0]["statistics"]["viewCount"];
    }
  //  console.log(channelList.items.length);
    let length = channelList.items.length >5 ? 5: channelList.items.length;
    setSubsViews(subs,views,IDs,length);
    $(".channels").show();
  }