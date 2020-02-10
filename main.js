var app = new Vue({
    el: '#app',
    data: {
        maxrating: 0,

        contentslist: [
            { id: 1, url: "#top", text: "Top"},
            { id: 2, url: "#about", text: "About"},
            { id: 3, url: "#skills", text: "Skills"},
            { id: 4, url: "#events", text: "Events"},
            { id: 5, url: "#works", text: "Works"},
            { id: 6, url: "#interests", text: "Interests"},
	    { id: 7, url: "#links", text: "Links"},
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

        linklist: [
            { id: 1, src: "./images/Twitter.png", url: "https://twitter.com/ei01241"},
            { id: 2, src: "./images/Instagram.png", url: "https://instagram.com/ei01241"},
            { id: 3, src: "./images/Facebook.png",  url: "https://www.facebook.com/profile.php?id=100040398917098"},
            { id: 4, src: "./images/GitHub.png", url: "https://github.com/ei0410"},
            { id: 5, src: "./images/FC2.png", url: "https://ei0124.blog.fc2.com"},
        ]
    },
    created () {
        fetch('https://codeforces.com/api/user.info?handles=ei0124')
        .then( response => {
            return response.json()
        })
        .then( json => {
            this.maxrating = json.result[0].maxRating
        })
        .catch( (err) => {
            this.maxrating = err
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