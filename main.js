var app = new Vue({
    el: '#app',
    data: {
        contentslist: [
            { url: "#about", text: "About"},
            { url: "#skills", text: "Skills"},
            { url: "#events", text: "Events"},
            { url: "#works", text: "Works"},
            { url: "#interests", text: "Interests"},
        ],
        hard: [
            { lang: "Creo", src: "./images/Creo.png", comment: "機械設計でよく使ってます．"},
            { lang: "KiCAD", src: "./images/Kicad.png", comment: "回路設計と基板設計に使ってます．"},
            { lang: "Blender", src: "./images/Blender.png", comment: "最近使ってます．勉強中です．"},
        ],
        languages: [
            { lang: "C/C++", src: "./images/C++.png", comment: "組み込みと競技プログラミングで使ってます．"},
            { lang: "Python", src: "./images/Python.png", comment: "自動化で使ってます．機械学習は勉強中です．"},
            { lang: "Ruby on Rails", src: "./images/Rails.png", comment: "サーバーサイドフレームワークとして勉強中です．"},
            { lang: "Vue.js", src: "./images/Vue.png", comment: "フロントエンドフレームワークとして勉強中です．"},
            { lang: "ROS", src: "./images/ROS.png", comment: "ロボット制御で使ってます．"},
            { lang: "Arduino", src: "./images/Arduino.png", comment: "組み込みで簡単な制御をしたいときに使ってます．"},
            { lang: "Processing", src: "./images/Processing.png", comment: "アート作品で使ってます．"},
            { lang: "Verilog", src: "./images/Verilog.png", comment: "CPUを作るために勉強中です．"},
        ],
        linklist: [
            { url: "https://twitter.com/ei01241", src: "./images/Twitter.png" },
            { url: "https://instagram.com/ei01241", src: "./images/Instagram.png" },
            { url: "https://www.facebook.com/profile.php?id=100040398917098", src: "./images/Facebook.png" },
            { url: "https://github.com/ei0410", src: "./images/Github.png" },
            { url: "http://ei0124.blog.fc2.com", src: "./images/FC2.png" },
        ]
    }
})


/*
var component = {
　data: function(){
　　　return {
　　　　　count: 0
　　　}
  },
  template: "<p>{{count}}<button @click='increment'>+1</button></p>",
  methods: {
    increment: function(){
        this.count += 1;
    }
  }
}
    
Vue.component("sample-component",component)
new Vue({
    el: "#app",
})
*/