var app = new Vue({
    el: '#app',
    data: {
        countrank: 0,
        sumrank: 0,

        maxrating: 0,
        maxrank: 0,

        contentslist: [
            { url: "#about", text: "About"},
            { url: "#skills", text: "Skills"},
            { url: "#events", text: "Events"},
            { url: "#works", text: "Works"},
            { url: "#interests", text: "Interests"},
        ],

        languages: [
            { lang: "Creo", src: "./images/Creo.png", url: "https://www.ptc.com/ja/products/cad/creo"},
            { lang: "KiCAD", src: "./images/Kicad.png", url: "https://www.kicad-pcb.org"},
            { lang: "Blender", src: "./images/Blender.png", url: "https://www.blender.org"},
            { lang: "C/C++", src: "./images/C++.png", url: "https://www.kicad-pcb.org"},
            { lang: "Python", src: "./images/Python.png", url: "https://www.python.jp"},
            { lang: "Ruby on Rails", src: "./images/Rails.png", url: "https://rubyonrails.org"},
            { lang: "Vue.js", src: "./images/Vue.png", url: "https://jp.vuejs.org/index.html"},
            { lang: "ROS", src: "./images/ROS.png", url: "http://wiki.ros.org"},
            { lang: "Arduino", src: "./images/Arduino.png", url: "https://www.arduino.cc"},
            { lang: "Processing", src: "./images/Processing.png", url: "https://processing.org"},
            { lang: "Verilog", src: "./images/Verilog.png", url: "https://ja.wikipedia.org/wiki/Verilog"},
        ],

        linklist: [
            { url: "https://twitter.com/ei01241", src: "./images/Twitter.png" },
            { url: "https://instagram.com/ei01241", src: "./images/Instagram.png" },
            { url: "https://www.facebook.com/profile.php?id=100040398917098", src: "./images/Facebook.png" },
            { url: "https://github.com/ei0410", src: "./images/GitHub.png" },
            { url: "http://ei0124.blog.fc2.com", src: "./images/FC2.png" },
        ]
    },
    created () {
        fetch('https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=ei0124')
        .then( response => {
            return response.json()
        })
        .then( json => {
            this.countrank = json.accepted_count_rank
            this.sumrank = json.rated_point_sum_rank
        })
        .catch( (err) => {
            this.countrank = err
            this.sumrank = err
        });

        fetch('https://codeforces.com/api/user.info?handles=ei0124')
        .then( response => {
            return response.json()
        })
        .then( json => {
            this.maxrating = json.result[0].maxRating,
            this.maxrank = json.result[0].maxRank
        })
        .catch( (err) => {
            this.maxrating = err
            this.maxrank = err
        });
    }
})