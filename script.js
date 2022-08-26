$(document).ready(function() {

    $('#generate').on('click', function() {
    
        $('#songname').text(''); //Clears the text
        let type = Math.floor(Math.random() * 14 + 1);
    
        if(type == 1) //Nouns (Eg. SKies)
        {
            randomNoun();
        }    
        if(type == 2) //Names (Eg. Venus)
        {
            randomName();
        }    
        else if(type == 3) //Articles + Nouns (Eg. The Sky)
        {
                randomArticle();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 4) //Adjectives + Nouns (Eg. Darkest Sky)
        {
                randomAdjective();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 5) //Verbs + Nouns (Eg. Shimmering Sky)
        {
                randomVerb();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 6) //Nouns + Nouns (Eg. Dark Sky)
        {
                randomNoun();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 7) //Articles + Adjectives + Nouns (Eg. The Darkest Sky)
        {
                randomArticle();
    
                $('#songname').append(" ");
    
                randomAdjective();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 8) //Nouns + Prepositions + Nouns (Eg. Sky Of Darkness)
        {
                randomNoun();
    
                $('#songname').append(" ");
    
                randomPreposition();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 9) //Nouns + Prepositions + Names (Eg. Sky Of Venus)
        {
                randomNoun();
    
                $('#songname').append(" ");
    
                randomPreposition();
    
                $('#songname').append(" ");
    
                randomName();
        }
        else if(type == 10) //Verbs + Articles + Nouns (Eg. Fighting The Sky)
        {
                randomVerb();
    
                $('#songname').append(" ");
    
                randomArticle();
                
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 11) //Verbs + Articles + Adjectives + Nouns (Eg. Fighting The Darkest Sky)
        {
                randomVerb();
    
                $('#songname').append(" ");
    
                randomArticle();
    
                $('#songname').append(" ");
    
                randomAdjective();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 12) //Verbs + Articles + Nouns + Nouns (Eg. Fighting The Dark Sky)
        {
                randomVerb();
    
                $('#songname').append(" ");
    
                randomArticle();
    
                $('#songname').append(" ");
    
                randomNoun();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 13) //Nouns + Prepositions + Articles + Nouns (Eg. Sky Of The Darkness)
        {
                randomNoun();
    
                $('#songname').append(" ");
    
                randomPreposition();
    
                $('#songname').append(" ");
    
                randomArticle();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
        else if(type == 14) //Verbs + Prepositions + Articles + Adjectives + Nouns (Eg. Fighting In The Darkest Sky)
        {
                randomVerb();
    
                $('#songname').append(" ");
    
                randomPreposition();
    
                $('#songname').append(" ");
    
                randomArticle();
    
                $('#songname').append(" ");
    
                randomAdjective();
    
                $('#songname').append(" ");
    
                randomNoun();
        }
    })
    
    });