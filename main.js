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
            { id: 1, lang: "Creo", src: "./images/Creo.png", url: "https://www.ptc.com/ja/products/cad/creo"},
            { id: 2, lang: "LTspice", src: "./images/LTspice.png", url: "https://www.ltspice.jp"},
            { id: 3, lang: "KiCAD", src: "./images/Kicad.png", url: "https://www.kicad-pcb.org"},
            { id: 4, lang: "Blender", src: "./images/Blender.png", url: "https://www.blender.org"},
            { id: 5, lang: "C/C++", src: "./images/C++.png", url: "https://www.kicad-pcb.org"},
            { id: 6, lang: "Python", src: "./images/Python.png", url: "https://www.python.jp"},
            { id: 7, lang: "Ruby on Rails", src: "./images/Rails.png", url: "https://rubyonrails.org"},
            { id: 8, lang: "Vue.js", src: "./images/Vue.png", url: "https://jp.vuejs.org/index.html"},
            { id: 9, lang: "ROS", src: "./images/ROS.png", url: "http://wiki.ros.org"},
            { id: 10, lang: "Arduino", src: "./images/Arduino.png", url: "https://www.arduino.cc"},
            { id: 11, lang: "Processing", src: "./images/Processing.png", url: "https://processing.org"},
            { id: 12, lang: "Verilog", src: "./images/Verilog.png", url: "https://ja.wikipedia.org/wiki/Verilog"},
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
    },
    methods: {
        beforeEnter(el) {
          this.$nextTick(() => {
              el.style.transitionDelay = 150 * parseInt(el.dataset.index, 10) + 'ms'
          })
        },
    }
})