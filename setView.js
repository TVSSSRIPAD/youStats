function getChannelbyID(){
  let id = document.getElementById("getbyID").value;
  let res = getChannelbyIDM(id);
}
function getChannelbyUsername(){
   let name = document.getElementById("getbyName").value;
   let res = getChannelbyUsernameM(name); 
}

function setView(res){
   
  if(res != null){
     console.log(res);
   $("#next").show();
   $("#prev").show();
   $(".welcome").hide();
  }
  else{
     $(".welcome").append("<p>There was an error . Please check your internet connection and try again</p>")
  }
   mt = res.nextPageToken;
   pt = res.prevPageToken;
  // console.log(res.items.length);
 //  console.log(pt);
   let card = $(".card");
   let titles = $(".card-title");
   let images =document.getElementsByClassName("card-img-top");
   for(i=0;i<res.items.length;i++)
   {
      titles[i].innerHTML = res["items"][i]["snippet"]["channelTitle"];
      $(images[i]).attr("src",res["items"][i]["snippet"]["thumbnails"]["medium"]["url"]);

   }
 //  console.log(res["items"][0]["snippet"]["channelTitle"]);
   // card.children(.card-body.card-title).innerHTML="hi";
}
function setSubsViews(subs,views,IDs,length)
{
   let subscribers =  $(".subscribers");
   let view =  $(".views");
   let links = $(".links");
   let x=length;
 //  console.log(x);
   for(i=0;i<x;i++)
   {
      $(links[i]).attr("href","https://www.youtube.com/channel/"+IDs[i]);
      
      if(subs[i]>1000000)
      $(subscribers[i]).text("No.of subscribers = "+ (subs[i]/1000000).toFixed(2) + 'M');
      else if(subs[i]>1000)
      $(subscribers[i]).text("No.of subscribers = "+ (subs[i]/1000).toFixed(2) + 'k');
      else $(subscribers[i]).text("No.of subscribers = "+ subs[i]);
      if(views[i]> 1000000000)
      $(view[i]).text("No.of views = "+ (views[i]/1000000000).toFixed(2) + 'B viwes');
      else if(views[i]>1000000)
      $(view[i]).text("No.of views = "+ (views[i]/1000000).toFixed(2) + 'M viwes');
      else if(views[i]>1000)
      $(view[i]).text("No.of views = "+ (views[i]/1000).toFixed(2) + 'k viwes');
      else $(view[i]).text("No.of views = "+ views[i]);
   }


}
