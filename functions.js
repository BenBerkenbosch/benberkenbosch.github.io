function randomNoun() 
{
    let nounsTeller = Math.floor(Math.random() * nouns.length);
    $('#songname').append(nouns[nounsTeller]);
}
function randomName() 
{
    let namesTeller = Math.floor(Math.random() * names.length);
    $('#songname').append(names[namesTeller]);
}
function randomAdjective() 
{
    let adjectivesTeller = Math.floor(Math.random() * adjectives.length);
    $('#songname').append(adjectives[adjectivesTeller]);
}
function randomVerb() 
{
    let verbsTeller = Math.floor(Math.random() * verbs.length);
    $('#songname').append(verbs[verbsTeller]);
}
function randomArticle() 
{
    let articlesTeller = Math.floor(Math.random() * articles.length);
    $('#songname').append(articles[articlesTeller]);
}
function randomPreposition() 
{
    let prepositionsTeller = Math.floor(Math.random() * prepositions.length);
    $('#songname').append(prepositions[prepositionsTeller]);
}