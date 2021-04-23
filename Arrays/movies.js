const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

//All the movies in 2018 with rating > 4
//sort them by their rating 
//descending order
//pick their title

const filtered = movies
    .filter(element => (element.year === 2018 && element.rating > 4))
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(element => element.title);

console.log(filtered);