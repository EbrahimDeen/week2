function task() {
    function getVideos(movieLists) {
        var allVideos = [];
        var allBoxart = [];

        for (var i = 0; i < movieLists.length; i++) {
            allVideos.push(...movieLists[i].videos);
        }
        return allVideos;
    }
    function getResult(videos) {
        let result = [];
        for (var i = 0; i < videos.length; i++) {
            result.push({
                title: videos[i].title,
                id: videos[i].id,
                url: getUrl(videos[i].boxarts)
            });
            //    allBoxart.push(...allVideos[i].boxarts);
        }
        return result;
    }

    function getUrl(boxarts) {
        let url = "";
        for (i=0; i < boxarts.length; i++) {
            if(boxarts[i].width === 150 && boxarts[i].height === 200) 
            {
                url =  boxarts[i].url;
                break;
            }
        }
        return url;
    }


    
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
        let videos = getVideos(movieLists);
        let result = getResult(videos); 
        console.log(result)
        
}




task();