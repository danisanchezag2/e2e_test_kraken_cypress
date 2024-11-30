const tagsDataSet = [
    {
      name: "❤️ 💔 💌 💕 💞 💓 💗 💖 💘 💝 💟 💜 💛 💚 💙",
      description: "Explora los últimos avances en biotecnología y cómo están revolucionando la medicina y la agricultura."
    },
    {
      name: "Física Cuántica",
      description: "Conoce los descubrimientos más recientes en física cuántica y sus posibles aplicaciones futuras."
    },
    {
      name: "╯°□°）╯︵ ┻━┻",
      description: "Descubre las innovaciones más recientes en energía renovable y su impacto en el medio ambiente."
    },
    {
      name: "Exploración Espacial",
      description: "Explora las nuevas fronteras en la exploración espacial y los avances tecnológicos que lo hacen posible."
    },
    {
      name: "Neurociencia",
      description: "Aprende sobre los desarrollos más recientes en neurociencia y cómo están cambiando nuestra comprensión del cerebro."
    }
  ];


  const tags500CharactersDataSet = [
    {
      name: "Biotecnología",
      description: "Explora los últimos avances en biotecnología y cómo están revolucionando la medicina y la agricultura. La biotecnología es una disciplina que combina la biología y la tecnología para desarrollar productos y procesos innovadores. Desde la creación de cultivos resistentes a plagas hasta la producción de medicamentos personalizados, la biotecnología está transformando la forma en que vivimos y trabajamos. Con el uso de técnicas avanzadas como la edición genética y la biología sintética, los científ"
    },
    {
      name: "Física Cuántica",
      description: "Conoce los descubrimientos más recientes en física cuántica y sus posibles aplicaciones futuras. La física cuántica es una rama de la física que estudia los fenómenos a escala subatómica. A través de experimentos y teorías, los científicos han descubierto propiedades sorprendentes de las partículas cuánticas, como la superposición y el entrelazamiento. Estas propiedades están siendo aprovechadas para desarrollar tecnologías revolucionarias, como la computación cuántica y la criptografía cuántica"
    },
    {
      name: "Energía Renovable",
      description: "Descubre las innovaciones más recientes en energía renovable y su impacto en el medio ambiente. La energía renovable se refiere a las fuentes de energía que se regeneran de manera natural, como la solar, eólica, hidroeléctrica y geotérmica. A medida que el mundo busca reducir su dependencia de los combustibles fósiles y mitigar el cambio climático, las tecnologías de energía renovable están ganando terreno. Desde paneles solares más eficientes hasta turbinas eólicas avanzadas, las innovaciones e"
    },
    {
      name: "Exploración Espacial",
      description: "Explora las nuevas fronteras en la exploración espacial y los avances tecnológicos que lo hacen posible. La exploración espacial ha capturado la imaginación de la humanidad durante décadas, y los recientes avances tecnológicos están llevando esta aventura a nuevas alturas. Desde misiones a Marte hasta la construcción de estaciones espaciales, los científicos y ingenieros están trabajando para expandir nuestro conocimiento del universo. Con el desarrollo de cohetes reutilizables y la colaboración"
    },
    {
      name: "Neurociencia",
      description: "Aprende sobre los desarrollos más recientes en neurociencia y cómo están cambiando nuestra comprensión del cerebro. La neurociencia es el estudio del sistema nervioso y el cerebro, y los avances en este campo están revolucionando nuestra comprensión de la mente humana. Desde el mapeo de las conexiones neuronales hasta el desarrollo de terapias para enfermedades neurodegenerativas, los científicos están desentrañando los misterios del cerebro. Con el uso de tecnologías avanzadas como la neuroimag"
    }
  ];  

  const tagsDataSetMoreThan500 = [
    {
      name: "Biotecnología",
      description: "Explora los últimos avances en biotecnología y cómo están revolucionando la medicina y la agricultura. La biotecnología es una disciplina que combina la biología y la tecnología para desarrollar productos y procesos innovadores. Desde la creación de cultivos resistentes a plagas hasta la producción de medicamentos personalizados, la biotecnología está transformando la forma en que vivimos y trabajamos. Con el uso de técnicas avanzadas como la edición genética y la biología sintética, los científicos están abriendo nuevas fronteras en la investigación y el desarrollo. Además, la biotecnología está desempeñando un papel crucial en la lucha contra enfermedades globales y en la mejora de la calidad de vida de las personas en todo el mundo."
    },
    {
      name: "Física Cuántica",
      description: "Conoce los descubrimientos más recientes en física cuántica y sus posibles aplicaciones futuras. La física cuántica es una rama de la física que estudia los fenómenos a escala subatómica. A través de experimentos y teorías, los científicos han descubierto propiedades sorprendentes de las partículas cuánticas, como la superposición y el entrelazamiento. Estas propiedades están siendo aprovechadas para desarrollar tecnologías revolucionarias, como la computación cuántica y la criptografía cuántica, que prometen cambiar el mundo tal como lo conocemos. Además, la física cuántica está proporcionando nuevas perspectivas sobre la naturaleza fundamental de la realidad y el universo."
    },
    {
      name: "Energía Renovable",
      description: "Descubre las innovaciones más recientes en energía renovable y su impacto en el medio ambiente. La energía renovable se refiere a las fuentes de energía que se regeneran de manera natural, como la solar, eólica, hidroeléctrica y geotérmica. A medida que el mundo busca reducir su dependencia de los combustibles fósiles y mitigar el cambio climático, las tecnologías de energía renovable están ganando terreno. Desde paneles solares más eficientes hasta turbinas eólicas avanzadas, las innovaciones en este campo están ayudando a crear un futuro más sostenible y limpio para todos. Además, la energía renovable está desempeñando un papel crucial en la transición hacia una economía baja en carbono y en la creación de empleos verdes."
    },
    {
      name: "Exploración Espacial",
      description: "Explora las nuevas fronteras en la exploración espacial y los avances tecnológicos que lo hacen posible. La exploración espacial ha capturado la imaginación de la humanidad durante décadas, y los recientes avances tecnológicos están llevando esta aventura a nuevas alturas. Desde misiones a Marte hasta la construcción de estaciones espaciales, los científicos y ingenieros están trabajando para expandir nuestro conocimiento del universo. Con el desarrollo de cohetes reutilizables y la colaboración internacional, la exploración espacial está entrando en una nueva era de descubrimientos y posibilidades. Además, la exploración espacial está impulsando el desarrollo de nuevas tecnologías que tienen aplicaciones en la Tierra, como la mejora de las comunicaciones y la gestión de recursos."
    },
    {
      name: "Neurociencia",
      description: "Aprende sobre los desarrollos más recientes en neurociencia y cómo están cambiando nuestra comprensión del cerebro. La neurociencia es el estudio del sistema nervioso y el cerebro, y los avances en este campo están revolucionando nuestra comprensión de la mente humana. Desde el mapeo de las conexiones neuronales hasta el desarrollo de terapias para enfermedades neurodegenerativas, los científicos están desentrañando los misterios del cerebro. Con el uso de tecnologías avanzadas como la neuroimagen y la inteligencia artificial, la neurociencia está abriendo nuevas vías para el tratamiento y la mejora de la salud mental. Además, la neurociencia está proporcionando nuevas perspectivas sobre la naturaleza de la conciencia y la experiencia humana."
    }
  ];
module.exports = {tagsDataSet, tags500CharactersDataSet, tagsDataSetMoreThan500}