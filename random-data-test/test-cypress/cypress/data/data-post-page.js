const { faker } = require("@faker-js/faker");
const malformattedYoutubeUrlsDataSet = [
    "https://www.youtube.com/watch?v=1ukzldeYBOE",
    "https://www.youtube.com/watch?v=1ukzldeYBO3",
    "https://www.youtube.com/watch?v=1ukzldeYBO4",
    "https://www.youtube.com/watch?v=1ukzldeYBO5",
    "https://www.youtube.com/watch?v=1ukzldeYBO6",
    "https://www.youtube.com/watch?v=1ukzldeYBO7"
]
const postsFormDataSet = [
    {
      title: "Avances en la biotecnología",
      content: "Explora los últimos avances en biotecnología y cómo están revolucionando la medicina y la agricultura.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
    },
    {
      title: "Descubrimientos en la física cuántica",
      content: "Conoce los descubrimientos más recientes en física cuántica y sus posibles aplicaciones futuras.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
    },
    {
      title: "Innovaciones en la energía renovable",
      content: "Descubre las innovaciones más recientes en energía renovable y su impacto en el medio ambiente.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
    },
    {
      title: "Nuevas fronteras en la exploración espacial",
      content: "Explora las nuevas fronteras en la exploración espacial y los avances tecnológicos que lo hacen posible.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
    },
    {
      title: "Desarrollos en la neurociencia",
      content: "Aprende sobre los desarrollos más recientes en neurociencia y cómo están cambiando nuestra comprensión del cerebro.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
    }
  ];
  const youtubeDataSet = [
    {
      title: "Rick Astley - Never Gonna Give You Up",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Mark Ronson - Uptown Funk ft. Bruno Mars",
      url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ"
    },
    {
      title: "A-ha - Take On Me",
      url: "https://www.youtube.com/watch?v=djV11Xbc914"
    },
    {
      title: "Toto - Africa",
      url: "https://www.youtube.com/watch?v=FTQbiNvZqaY"
    },
    {
      title: "Michael Jackson - Billie Jean",
      url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
    },
    {
      title: "Queen - Bohemian Rhapsody",
      url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
    },
    {
      title: "Ed Sheeran - Shape of You",
      url: "https://www.youtube.com/watch?v=JGwWNGJdvx8"
    },
    {
      title: "Luis Fonsi - Despacito ft. Daddy Yankee",
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk"
    },
    {
      title: "PSY - GANGNAM STYLE(강남스타일)",
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0"
    },
    {
      title: "Maroon 5 - Sugar",
      url: "https://www.youtube.com/watch?v=09R8_2nJtjg"
    }
  ];
  const spotifyDataSet = [
    {
      title: "Ed Sheeran - Shape of You",
      url: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
    },
    {
      title: "The Weeknd - Blinding Lights",
      url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
    },
    {
      title: "Dua Lipa - Levitating",
      url: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9"
    },
    {
      title: "Drake - God's Plan",
      url: "https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn"
    },
    {
      title: "Billie Eilish - bad guy",
      url: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m"
    },
    {
      title: "Post Malone - Circles",
      url: "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb"
    },
    {
      title: "Tones And I - Dance Monkey",
      url: "https://open.spotify.com/track/2XU0oxnq2qxCpomAAuJY8K"
    },
    {
      title: "Shawn Mendes - Señorita",
      url: "https://open.spotify.com/track/0TK2YIli7K1leLovkQiNik"
    },
    {
      title: "Lewis Capaldi - Someone You Loved",
      url: "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf"
    },
    {
      title: "Ariana Grande - 7 rings",
      url: "https://open.spotify.com/track/6ocbgoVGwYJhOv1GgI9NsF"
    }
  ];
  const malformattedSpotifyDataSet = [
  {
    title: "Ed Sheeran - Shape of You",
    url: "https://open.spotify.com/track/invalid_link1"
  },
  {
    title: "The Weeknd - Blinding Lights",
    url: "https://open.spotify.com/track/invalid_link2"
  },
  {
    title: "Dua Lipa - Levitating",
    url: "https://open.spotify.com/track/invalid_link3"
  },
  {
    title: "Drake - God's Plan",
    url: "https://open.spotify.com/track/invalid_link4"
  },
  {
    title: "Billie Eilish - bad guy",
    url: "https://open.spotify.com/track/invalid_link5"
  },
  {
    title: "Post Malone - Circles",
    url: "https://open.spotify.com/track/invalid_link6"
  },
  {
    title: "Tones And I - Dance Monkey",
    url: "https://open.spotify.com/track/invalid_link7"
  },
  {
    title: "Shawn Mendes - Señorita",
    url: "https://open.spotify.com/track/invalid_link8"
  },
  {
    title: "Lewis Capaldi - Someone You Loved",
    url: "https://open.spotify.com/track/invalid_link9"
  },
  {
    title: "Ariana Grande - 7 rings",
    url: "https://open.spotify.com/track/invalid_link10"
  }
];

const postsDataSet = [
    {
      title: "Avances en la biotecnología",
      content: "Explora los últimos avances en biotecnología y cómo están revolucionando la medicina y la agricultura.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
    },
    {
      title: "Descubrimientos en la física cuántica",
      content: "Conoce los descubrimientos más recientes en física cuántica y sus posibles aplicaciones futuras.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
      spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
    },
    {
      title: "Innovaciones en la energía renovable",
      content: "Descubre las innovaciones más recientes en energía renovable y su impacto en el medio ambiente.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=djV11Xbc914",
      spotifyUrl: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9"
    },
    {
      title: "Nuevas fronteras en la exploración espacial",
      content: "Explora las nuevas fronteras en la exploración espacial y los avances tecnológicos que lo hacen posible.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=FTQbiNvZqaY",
      spotifyUrl: "https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn"
    },
    {
      title: "Desarrollos en la neurociencia",
      content: "Aprende sobre los desarrollos más recientes en neurociencia y cómo están cambiando nuestra comprensión del cerebro.",
      image: "https://i.ytimg.com/vi/5Xqyf_qf6F4/default.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
      spotifyUrl: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m"
    }
  ];

function generateMalformatedSpotifyUrl() {
  return faker.helpers.arrayElement(malformattedSpotifyDataSet).url;
}
  
  function generateRandomPosts(quantity) {
    let posts = [];
    for (let i = 0; i < quantity; i++) {
      posts.push({
        title: faker.helpers.arrayElement(postsFormDataSet.map((f) => f.title)),
        content: faker.lorem.paragraphs(1),
        image:  faker.helpers.arrayElement(postsFormDataSet.map((f) => f.image)),
      });
    }
    return posts;
  }

  function generateMalformatedYoutubeUrl(){
    return faker.helpers.arrayElement(malformattedYoutubeUrlsDataSet);
  }

  function generateYoutubeUrl(){
    return faker.helpers.arrayElement(youtubeDataSet);
  }

  function generateSpotifyUrl(){
    return faker.helpers.arrayElement(spotifyDataSet);
  }

module.exports = { generateRandomPosts, generateMalformatedYoutubeUrl, generateYoutubeUrl, generateSpotifyUrl, generateMalformatedSpotifyUrl };