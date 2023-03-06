window.onload = setup;
const countryData = {
    "ng": {
        image: "banners/newgirl.png",
        title: "New Girl",
        desc: "New Girl was a dramedy that aired on FOX from late-2011 to mid-2018 and lasted for 8 seasons. The show follows Jess, a teacher, who one day comes home to find her boyfriend cheating on her with another woman. She leaves him, answers a Craigslist ad looking for a roommate, and finds herself living with three men in an LA loft. Each episode follows the cast’s interactions as they become closer friends, and their various romances.",
        more: "https://en.wikipedia.org/wiki/New_Girl"
    },

    "uki": {
        image: "banners/ukiyoe.png",
        title: "Ukiyo-e",
        desc: "Ukiyo-e, which translates to “picture of the floating world”, is a genre of Japanese art consisting of woodblock prints and paintings. Subjects can range anywhere from beautiful women, to landscapes, to story scenes, to erotica. One of the most famous pieces of Japanese art, The Great Wave of Kanagawa, is an ukiyo-e print made in the 19th century by the ukiyo-e artist Hokusai!",
        more: "https://en.wikipedia.org/wiki/Ukiyo-e"
    },

    "apex": {
        image: "banners/apex.png",
        title: "Apex Legends",
        desc: "Apex Legends is a free-to-play battle royale shooter game available on PlayStation, Xbox, Nintendo Switch, Windows, and mobile. The game supports cross-platform play except for the mobile version. Gameplay consists of players selecting one of the playable “legends”, forming two-to-three person squads, and either being dropped into a map to be the final team standing or winning enough rounds to be the team with the most points. The game exists in the same universe as the <a id=”titanfall” href=”https://en.wikipedia.org/wiki/Titanfall”>Titanfall</a> series.",
        more: "https://en.wikipedia.org/wiki/Apex_Legends"
    },

    "at": {
        image: "banners/.png",
        title: "Adventure Time",
        desc: "Dolor",
        more: "https://adventuretime.fandom.com/wiki/Adventure_Time"
    },

    "voca": {
        image: "banners/miku.png",
        title: "Vocaloid",
        desc: "Vocaloid is a commercial vocal synthesizer program made and sold by Crypton Future Media. Each Vocaloid has a unique voice made by different voice actors and singers recording various sounds, which are then packaged with a name and a design, and then sold. One of the most iconic and well-known Vocaloids is Hatsune Miku whose voice is provided by voice actress Saki Fujita.",
        more: "https://vocaloid.fandom.com/wiki/Vocaloid_Wiki"
    },

    "w40": {
        image: "banners/w40.png",
        title: "Warhammer 40k",
        desc: "Warhammer 40k is a tabletop role-playing game set in the grimdark 41st century. Humanity is at war on countless worlds against heretics, mutants, and aliens. The core rules are free, but players can purchase and paint figures for the different kinds of troops they wish to play as. The most popular faction is the Space Marines, one of humanity’s forces on the field.",
        more: "https://warhammer40000.com/"
    },

    "ll": {
        image: "banners/.png",
        title: "Love Live",
        desc: "nico nico nii",
        more: "https://en.wikipedia.org/wiki/Love_Live!"
    },

    "fo": {
        image: "banners/frankocean.png",
        title: "Frank Ocean",
        desc: "Frank Ocean is a singer, songwriter, and rapper. He started his career as a ghostwriter, but in 2012 he released his first studio album, Channel Orange, which won Best Urban Contemporary Album at the 2013 Grammy Awards. He then released his album Endless in 2016 to fulfill his contract, and released his album Blonde a day after Endless’s release. Blonde was his first album to go platinum and reach number one on the US Billboard 200.",
        more: "https://en.wikipedia.org/wiki/Frank_Ocean"
    },

    "gi": {
        image: "banners/.png",
        title: "Genshin Impact",
        desc: "gayyyyy",
        more: "https://en.wikipedia.org/wiki/Genshin_Impact"
    },

    "hi": {
        image: "banners/homeimpr.png",
        title: "Home Improvement TV",
        desc: "Home Improvement shows are a genre of television focusing on various kinds of renovations to people’s homes ranging from redesigning interiors, to do-it-yourself guides, to game shows. HGTV and DIY are both channels that have dedicated themselves completely to home improvement shows, while Discovery and PBS sometimes feature them alongside their other types of programming.",
        more: "https://www.hgtv.com/shows/shows-a-z"
    },

    "ncfom": {
        image: "banners/.png",
        title: "No Country For Old Men",
        desc: "cattle pile driver > captive bolt pistol",
        more: "https://en.wikipedia.org/wiki/No_Country_for_Old_Men"
    },

    "ss": {
        image: "banners/ss.png",
        title: "Sanders' Sides",
        desc: "Sanders’ Sides is a YouTube web series made by Thomas Sanders, exploring the sides of his personality by personifying them. The series began with logic, anxiety, romantic creativity, and morality personified, but over the course of the series intrusive creativity and deception have been added to the cast. The series is currently on hiatus.",
        more: "https://sanders-sides.fandom.com/wiki/Sanders_Sides_Wiki"
    },

    "sand": {
        image: "banners/.png",
        title: "Sandman",
        desc: "Neil Gaiman strikes again",
        more: "https://en.wikipedia.org/wiki/The_Sandman_(TV_series)"
    },

    "san": {
        image: "banners/sanrio.png",
        title: "Sanrio",
        desc: "Sanrio is a Japanese company whose core philosophy is “little gifts, big smiles”. They have a large roster of characters, releasing new ones yearly, which they feature on stationery, clothing, decor, and the like, as well as movies, tv shows, and collaborations with other companies. Hello Kitty is one of their more famous properties",
        more: "https://en.wikipedia.org/wiki/Sanrio"
    },

    "slip": {
        image: "banners/slipknot.png",
        title: "Slipknot",
        desc: "Slipknot is a heavy metal band that was founded in 1995 in Des Moines, Iowa. In 2006 they won the Grammy for Best Metal Performance. They have undergone many lineup changes, but the current lineup has 9 members. Corey Taylor is the lead vocalist. Craig Jones is on keyboard and samples. Mick Thomson and Jim Root are on guitar. Alessandro Venturella is on bass and keyboard. Sid Wilson is on turntables and keyboards. Joey Jordison is on drums. Shawn Crahan and Michael Pfaff are backing vocals and percussion.",
        more: "https://en.wikipedia.org/wiki/Slipknot_(band)"
    },

    "thel": {
        image: "banners/thelema.png",
        title: "Thelema and Ceremonial Magic",
        desc: "Thelema is the precursor to Wicca. Founded by Aleister Crowley in the early 1900s, the name is an English transliteration of the Koine Greek word meaning “will”, from a verb meaning “to will, wish, want or purpose”. Adherents of this religion are called Thelemites. A major symbol within the religion is the unicursal hexagram which represents the interweaving of microcosmic and macrocosmic forces.",
        more: "https://en.wikipedia.org/wiki/Thelema"
    },

    "tf": {
        image: "banners/.png",
        title: "Transformers",
        desc: "",
        more: "https://en.wikipedia.org/wiki/Transformers:_Generation_1"
    },

    "got": {
        image: "banners/.png",
        title: "Game of Thrones",
        desc: "",
        more: "https://en.wikipedia.org/wiki/Transformers:_Generation_1"
    },

    "wanda": {
        image: "banners/wandavision.png",
        title: "Wandavision",
        desc: "Wandavision is a mini-series on Disney+ spanning 9 episodes, following Wanda Maximoff (also known as Scarlet Witch) and Vision after the events of Avengers: Endgame. The two live a peaceful suburban life together in Westview, New Jersey, until their reality starts shifting through various decades. With many sitcom homages and television tropes thrown their way, the couple begins to question the reality they are living within. The events of WandaVision play a major role in the movie Doctor Strange in the Multiverse of Madness.",
        more: "https://en.wikipedia.org/wiki/WandaVision"
    },

    "gd": {
        image: "banners/gratefuldead.png",
        title: "Grateful Dead",
        desc: "The Grateful Dead, also known as The Warlocks, were a band founded in 1965 in Palo Alto, California. The group were known for their eclectic style which fused many genres, their live performances which featured instrumental jams and improvisation, and their fandom known as “Deadheads”. The band only had one top-40 single in their 30-year career. After Jerry Garcia died in 1995, the remaining members toured as The Other Ones, and then The Dead, until 2015 when the 4 remaining members did a series of concerts for the 50th anniversary that were marketed as their last performances together.",
        more: "https://en.wikipedia.org/wiki/Grateful_Dead"
    },

    "dragon": {
        image: "herebedragonsalt.png",
        title: "Here Be Dragons",
        desc: "",
        more: "https://en.wikipedia.org/wiki/Here_be_dragons"
    }

}

function setup() {

    const gmap = document.getElementById('gmap');
    var elements = gmap.children;
    // var myFunction = function() {
    //     var attribute = this.getAttribute("data-myattribute");
    //     alert(attribute);
    // };

    //I know that below is adding event listeners to every single kingdom
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', show, false);
        console.log(elements[i]);
    }

    //I know that below is setting up the groundwork for the info div to popup and go away
    const back = document.getElementById('back');
    const bg = document.getElementById('bg');
    const info = document.getElementById('info');
    const dragon = document.getElementById('dragon');
    back.addEventListener("click", goBack);
    bg.addEventListener("click", goBack);
    dragon.addEventListener("click", show);

    //this make info div go bye bye
    function goBack() {
        info.style.display = "none";
    }
}

//This is roughly what we threw together that one Friday morning except I forgot what the  popUp(BLANK) was referring to
function show(e) {
    console.log(e.currentTarget);
    const info = document.getElementById('info');
    const banner = document.getElementById('banner');
    const title = document.getElementById('title');
    const desc = document.getElementById('desc');
    const more = document.getElementById('moreinfo');
    info.style.display = "block";
    const thisCountry = countryData[e.currentTarget.id];
    banner.src = thisCountry.image;
    title.innerHTML = thisCountry.title;
    desc.innerHTML = thisCountry.desc;
    more.href = thisCountry.more;
}
