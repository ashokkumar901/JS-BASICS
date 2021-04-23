//Method(function in an object) -> references to that object itself
//function -> global (window in browser and global in node)

//Example 1
const video = {
    title: 'a',
    play() {
        console.log(this)
    }
};

video.stop = function () {
    console.log(this);
}

video.play();//references to video object itself
video.stop();//references to video object itself including stop method

//Example 2
function playVideo() {
    console.log(this);
}

// playVideo();

//Example 3
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); //outputs {title:'b'}

//Example4
const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(element => console.log(element))
    }
}

// video1.showTags();

//Example5
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (element) {
            console.log(this.title, element)
        })
    }
}

// video2.showTags();

//Example6
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach(function (element) {
            console.log(self.title, element)
        })
    }
}

//Using ArrowFunction we can solve the global object problem in js
//Example5
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(element =>
            console.log(this.title, element))
    }
}

video4.showTags();

