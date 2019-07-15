function task(){
    // function getVideos(movieLists){
    //     collectionOfVideos=[];
    //      for(var i=0;i<movieLists.length;i++){
    //         for(var j=0;j<movieLists[i].videos.length;j++){
    //             var videosObj={
    //                 "ID":movieLists[i].videos[j].id,
    //                 "Title":movieLists[i].videos[j].title,
    //             "URL":movieLists[i].videos[j].boxarts[k].url}
    //             collectionOfVideos.push(videosObj);
    //         }
    //         }
    //         return collectionOfVideos;
    //      }
    
    // getVideos(movieLists);
    var movieLists = [
        {
        name: "Instant Queue",
        videos : [
        {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
        },
        {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
        
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
        }
        ]
        },
        {
        name: "New Releases",
        videos: [
        {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
        },
        {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
        }
        ]
        }
        ];
        
      var  array=[];
        for(var i=0;i<movieLists.length;i++){

            for(var j=0;j<movieLists[i].videos.length;j++){
                
                for(var k=0;k<movieLists[i].videos[j].boxarts.length;k++){
                    
                    if(movieLists[i].videos[j].boxarts[k].width=='150' && movieLists[i].videos[j].boxarts[k].height=='200' ){
                       
                        var arrayObj={
                            "ID":movieLists[i].videos[j].id,
                            "Title":movieLists[i].videos[j].title,
                        "URL":movieLists[i].videos[j].boxarts[k].url
                    };
                       
                                        array.push(arrayObj);
                    
                    }
                    
                }
                
            }
        }
        
    //   //  var pr="";
    //    // pr+="<ul>";
    //     for(var i=0;i<array.length;i++){
    //     //    pr+="<li>"+array[i].ID+"</li>";
           
    //     }
    //    // pr+="</ul>";

    //  //   document.getElementById("demo").innerHTML = pr;

    for(var i=0;i<array.length;i++){
        //console.log(array[i]);
        var div1=document.createElement("DIV");
            div1.setAttribute("class", "container");
            document.body.appendChild(div1);
            div1.style.padding="5%";
        //  console.log();

            var div2=document.createElement("DIV");
            div2.setAttribute("class", "card");
            div2.style.width="400px";
            div1.appendChild(div2);

            var image=document.createElement("IMG");
            image.setAttribute("class", "card-img-top");
            image.setAttribute("src", "marcopolo.jpg");
            image.style.width="150px";
            image.style.height="200px";
            div2.appendChild(image);

            var div3=document.createElement("DIV");
            div3.setAttribute("class", "card-body");
            div2.appendChild(div3);
            
            

            var H4=document.createElement("H4");
            H4.setAttribute("class", "card-title");
            H4.innerText=array[i].Title;
            div3.appendChild(H4);

            

            var P=document.createElement("P");
            P.setAttribute("class", "card-text");
            div3.appendChild(P);
         
            P.innerHTML=array[i].ID;
         

            var anc=document.createElement("a");
            anc.setAttribute("class", "btn btn-primary");
            anc.setAttribute("href", "#");
            anc.innerText="See Profile";
            div3.appendChild(anc);
           
            
    }
              
}
task();


