const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: () => {
        console.log('draw');
    }
}

circle.draw();
console.log(circle.location);