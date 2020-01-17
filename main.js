var app = new Vue({
    el: '#app',
    data: {
        countrank: 0,
        sumrank: 0,

        maxrating: 0,
        maxrank: 0,

        roboshow: false,
        elecshow: false,
        progshow: false,

        contentslist: [
            { id: 1, url: "#about", text: "About"},
            { id: 2, url: "#skills", text: "Skills"},
            { id: 3, url: "#events", text: "Events"},
            { id: 4, url: "#works", text: "Works"},
            { id: 5, url: "#interests", text: "Interests"},
        ],

        languages: [
            { id: 1, src: "./images/Creo.png", url: "https://www.ptc.com/ja/products/cad/creo"},
            { id: 2, src: "./images/LTspice.png", url: "https://www.ltspice.jp"},
            { id: 3, src: "./images/Kicad.png", url: "https://www.kicad-pcb.org"},
            { id: 4, src: "./images/Blender.png", url: "https://www.blender.org"},
            { id: 5, src: "./images/ROS.png", url: "http://wiki.ros.org"},
            { id: 6, src: "./images/Arduino.png", url: "https://www.arduino.cc"},
            { id: 7, src: "./images/Processing.png", url: "https://processing.org"},
            { id: 8, src: "./images/Verilog.png", url: "https://ja.wikipedia.org/wiki/Verilog"},
            { id: 9, src: "./images/C++.png", url: "https://ja.wikipedia.org/wiki/C%2B%2B"},
            { id: 10, src: "./images/Python.png", url: "https://www.python.jp"},
            { id: 11, src: "./images/Rails.png", url: "https://rubyonrails.org"},
            { id: 12, src: "./images/Vue.png", url: "https://jp.vuejs.org/index.html"},
        ],

        robolist: [
            { id: 1, url: "https://github.com/ei0410/Creo/blob/master/iphone/iphone.stl", text: "iPhone Case"},
            //{ id: 2, url: "https://github.com/ei0410/Creo/blob/master/iphone2/iphone.stl", text: "iPhone Cases2"},
        ],
        eleclist: [
            { id: 1, url: "https://github.com/ei0410/FPGA/tree/master/atlys/practice", text: "FPGA"},
        ],
        proglist: [
            { id: 1, url: "https://ei0124page.glitch.me/", text: "AR"},
        ],

        linklist: [
            { id: 1, src: "./images/Twitter.png", url: "https://twitter.com/ei01241"},
            { id: 2, src: "./images/Instagram.png", url: "https://instagram.com/ei01241"},
            { id: 3, src: "./images/Facebook.png",  url: "https://www.facebook.com/profile.php?id=100040398917098"},
            { id: 4, src: "./images/GitHub.png", url: "https://github.com/ei0410"},
            { id: 5, src: "./images/FC2.png", url: "https://ei0124.blog.fc2.com"},
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