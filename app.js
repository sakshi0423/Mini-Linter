
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

//Step 1 Split the story into an array with individual words

let storyWords = story.split(' ');

console.log('Number of words: ', storyWords.length);

//Step 3 iterate over unnecessary words and create new array without them

let betterWords = storyWords.filter(word => {
    return !unnecessaryWords.includes(word);
})

// console.log(betterWords.length);

//Step 4 count the times the overused words are used in the story

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
    if (word === 'really') {
        reallyCount += 1;
    } else if (word === 'very') {
        veryCount += 1;
    } else if (word === 'basically') {
        basicallyCount += 1;
    }
}

console.log('Number of really: ' + reallyCount);
console.log('Number of very: ' + veryCount);
console.log('Number of basically: ' + basicallyCount);

//Step 5 count how many sentences are in the paragraph

let sentenceCount = 0;

storyWords.forEach(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        return sentenceCount += 1;
    }
});

//Log the sentenceCount

console.log('Number of sentences: ', sentenceCount);

//Log the betterWords array as a single string

console.log(betterWords.join(' '));
