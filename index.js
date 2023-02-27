1.
/*
function instagramPost (handleOfAuthor, content, imageLink, numberOfLikes, numberOfViews) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfLikes = numberOfLikes;
    this.numberOfViews = numberOfViews;
}
*/

2.
/*
let rahbhee = new instagramPost("Rahbhee-chan", "Food", "/images/desktop", "4M", "200k");
console.log(rahbhee);

let vkey = new instagramPost("vkey_belle", "Cloth fashion", "gettyimages.com", "5.2M", "350k");
console.log(vkey);
*/

3.
/*
function createPerson(name, age, location) {
    return{
       name: name,
       age: age,
       location: location,
    }
}
const candidate1 = createPerson("Musa", 19 +" years old", "Lekki, Lagos");
console.log(candidate1);


const jambScores = {
    ENG: 70,
    GOVT: 85,
    LIT: 82,
    CRK: 94,       
}

Object.assign(candidate1, jambScores)
console.log(candidate1);
*/

4.
/*
const firstEpisode = {
    title: "Pilot",
    releaseDate: "24/03",
};
/*
//*- Using spread syntax:

const secondEpisode = {...firstEpisode}
secondEpisode.title = "The ghost";

console.log(firstEpisode);
console.log(secondEpisode);
*/

//*Using method JSON.parse()
/*
const secondEpisode = JSON.parse(JSON.stringify(firstEpisode));
secondEpisode.title = "The ghost";
console.log(secondEpisode);
*/

//*Using Object.assign()
/*
const secondEpisode = Object.assign({}, firstEpisode);
secondEpisode.title = "The ghost";
console.group(secondEpisode);
*/

5.
/*
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
for (const party in presidentialCandidates) {
    
    console.log(presidentialCandidates[party] + " is the presidential candidate of " + [party]);
}
*/

 