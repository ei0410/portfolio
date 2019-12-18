var app = new Vue({
    el: '#app',
    data: {
        contentslist: [
            { url: "#about", text: "about"},
            { url: "#skills", text: "skills"},
            { url: "#event", text: "event"},
            { url: "#interests", text: "interests"},
            { url: "#links", text: "links"},
        ],
        language: [
            { lang: "C/C++", comment: "C"},
            { lang: "Python", comment: "Py"},
            { lang: "Ruby on Rails", comment: "R"},
            { lang: "Vue.js", comment: "V"},
            { lang: "Verilog", comment: "Ve"},
            { lang: "Processing", comment: "Pr"},
        ],
        linklist: [
            { url: "https://twitter.com/ei01241", text: "twitter" },
            { url: "https://github.com/ei0410", text: "github" },
            { url: "http://ei0124.blog.fc2.com", text: "blog" },
        ]
    }
})