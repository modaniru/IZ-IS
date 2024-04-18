import './App.css';
import { useState } from 'react'

function App() {
  var is_name = 'Выбор книги по предпочтениям';

  var result1 ={
    answer: "Психология",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/9722138/pub_6458f356b70eae648492ca49_6458f38cbc75115be09610b0/scale_1200",
    result: "'Читайте людей как книгу' - П. Кинг",
    desc: "В этой книге Патрика Кинга, автора мировых бестселлеров в области навыков социальной коммуникации, рассмотрены способы, с помощью которых можно развить умение «читать» и анализировать людей, их характер, поведение, мотивацию, невысказанные намерения.",
    nodes: [
    ]
  }
  var result2 = {
    answer: "Травмотология",
    is_leaf: true,
    img: "https://medknigaservis.ru/wp-content/uploads/2023/12/nagl.jpg",
    result: "'Наглядное лечение боли' - А. Данилова",
    desc: "Среди многочисленных изданий о проблеме боли руководство «Наглядное лечение боли» выгодно отличается лаконичным и четким изложением всех аспектов: начиная с вопросов нейроанатомии и патофизиологии, материала по диагностике и терапии отдельных форм болевых синдромов и заканчивая мультидисциплинарным подходом к лечению.",
    nodes: [
    ],
  }
  var result3 = {
    answer: "Электротехника",
    is_leaf: true,
    img: "https://electricalschool.info/uploads/posts/2018-03/1521632990_2.jpg",
    result: "'Электротехника и электроника' - Н. Тесла",
    desc: "В учебнике изложены основы теории электрических цепей, рассмотрены конструкции, принцип действия, основные характеристики электрических машин и полупроводниковых приборов и устройств. Соответствует современным требованиям Федерального государственного образовательного стандарта среднего профессионального образования и профессиональным квалификационным требованиям.",
    nodes: [
    ]
  }
  var result4 = {
    answer: "Механика",
    is_leaf: true,
    img: "https://unikum.rudn.ru/editor/%D0%B1%D0%BB%D0%BE%D0%B3/unikumm1.png",
    result: "'Теоретическая физика. Том 1. Механика' - Л. Ландау",
    desc: "Среди многочисленных изданий о проблеме боли руководство «Наглядное лечение боли» выгодно отличается лаконичным и четким изложением всех аспектов: начиная с вопросов нейроанатомии и патофизиологии, материала по диагностике и терапии отдельных форм болевых синдромов и заканчивая мультидисциплинарным подходом к лечению.",
    nodes: [
    ],
  }
  var result5 = {
    answer: "Бухгалтерия",
    is_leaf: true,
    img: "https://www.gestion.ru/wp-content/uploads/2023/06/buhgalteriya-ooo-usn-1024x683.jpg",
    result: "'Популярная бухгалтерия' - А. Гартвич",
    desc: "В этой книге в доступной форме объясняются понятия, принципы и правила бухгалтерского учета. Последовательно, от простого к сложному, рассматриваются различные формы бухгалтерского учета, начиная с учета личных денег и заканчивая профессиональным бухгалтерским учетом.",
    nodes: [
    ]
  }
  var result6 = {
    answer: "Инвестиции",
    is_leaf: true,
    img: "https://img.gazeta.ru/files3/627/15427627/birga-pic_32ratio_1200x800-1200x800-90464.jpg",
    result: "'Богатый папа, бедный папа' - Р. Кийосаки",
    desc: "Бестселлер Роберта Кийосаки раскроет каждому читателю принципы и законы успеха, материальной независимости. Этому вряд ли научат в школе, колледже и даже в университете. А все из-за того, что педагоги сами не знают этих секретов.",
    nodes: [
    ],
  }
  var result7 = {
    answer: "Триллер",
    is_leaf: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3why0BSSZkP4t3ItpxaSYvCL6KxxO1B5jnfjXElhRg&s",
    result: "'Девушка в поезде' - П. Хокин",
    desc: "Джесс и Джейсон. Такие имена дала Рейчел «безупречным» супругам, за жизнью которых она день за днем наблюдает из окна электрички. У них, похоже, есть все, чего совсем недавно лишилась сама Рейчел, – любовь, счастье, благополучие...\n Но однажды, проезжая мимо, она видит, как в дворике коттеджа, где живут Джесс и Джейсон, происходит нечто странное, загадочное, шокирующее. Всего минута – и поезд опять трогается, но этого достаточно, чтобы идеальная картинка исчезла навсегда.",
    nodes: [
    ]
  }
  var result8 = {
    answer: "Классический",
    is_leaf: true,
    img: "https://u.kanobu.ru/editor/images/14/fc78ac54-1bd1-4c2b-a7cd-08e5d7384f6f.webp",
    result: "'Убийство в 'восточном экспрессе'' - А. Кристи",
    desc: 'Находившийся в Стамбуле великий сыщик Эркюль Пуаро возвращается в Англию на знаменитом "Восточном экспрессе", в котором вместе с ним едут, кажется, представители всех возможных национальностей. Один из пассажиров, неприятный американец по фамилии Рэтчетт, предлагает Пуаро стать своим телохранителем, поскольку считает, что его должны убить. Знаменитый бельгиец отмахивается от этой абсурдной просьбы.',
    nodes: [
    ],
  }
  var result9 = {
    answer: "Космическая",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1880939/pub_5d013f11b4d2c400ae261bf8_5d013fea19dcb600ac50bc63/scale_1200",
    result: "'Марсианские хроники' - Д. Грин",
    desc: "Фильм рассказывает о покорении человеком Красной планеты, где доживает свои последние годы некогда высокоразвитая цивилизация марсиан.",
    nodes: [
    ]
  }
  var result10 = {
    answer: "Фэнтези",
    is_leaf: true,
    img: "https://api.kinoart.ru/storage/post/2283/regular_detail_picture-d91f183ac27eea24f8f4150bb3f99fda.jpg",
    result: "'Властелин колец' - Дж. Р. Р. Толкин",
    desc: "Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.",
    nodes: [
    ],
  }
  var result11 = {
    answer: "Современный",
    is_leaf: true,
    img: "https://cdnstatic.rg.ru/uploads/images/gallery/8121da2b/1_7db2931a.jpg",
    result: "'Виноваты звезды' - Д. Грин",
    desc: "Хэйзел больна раком. Несмотря на то, что болезнь временно отступила, девушка не чувствует ни капли радости. Она ходит в группу поддержки, где однажды знакомится с Августом Уотерсом и моментально влюбляется в него. Август и Хэйзел отправляются в полное страсти и жизни путешествие, которое лишний раз покажет им, что весь смысл жизни можно найти в любом ее отрезке.",
    nodes: [
    ]
  }
  var result12 = {
    answer: "Классический",
    is_leaf: true,
    img: "https://ndc.book24.ru/medialibrary/036/036a990542b5e061acab39eb916d49b6/877b4e53a225a514a216ff4624dc013c.jpg",
    result: "'Преступление и наказание' - Ф. Достоевский",
    desc: "В основе его сюжета лежит история Родиона Раскольникова – бедного студента из Петербурга, который, следуя своей идее о превосходстве одних людей над другими, пошел на преступление - убийство, дабы доказать, что он относится к разряду людей «необыкновенных», способных «дать себе разрешение перешагнуть через кровь».",
    nodes: [
    ],
  }
  var result13 = {
    answer: "История изучения",
    is_leaf: true,
    img: "https://static.wikia.nocookie.net/harrypotter/images/d/dd/%D0%94%D1%8B%D1%80%D1%8F%D0%B2%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82%D1%91%D0%BB._%D0%92%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA%2C_%D1%87%D0%B8%D1%82%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%9A%D1%80%D0%B0%D1%82%D0%BA%D1%83%D1%8E_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8E_%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A5%D0%BE%D0%BA%D0%B8%D0%BD%D0%B3%D0%B0_%28%D0%93%D0%9F%D0%B8%D0%A3%D0%90%29.png/revision/latest?cb=20150331041741&path-prefix=ru",
    result: "'Краткая история времени' - Стивен Хокинг",
    desc: "'Краткая история времени' Стивена Хокинга - один из столпов современной научно-популярной литературы. В этой книге автор пытается ответить на самые сложные и интригующие вопросы о мироздании: когда и почему началась Вселенная? безгранична ли Вселенная или у нее есть предел?",
    nodes: [
    ]
  }
  var result14 = {
    answer: "Современные открытия",
    is_leaf: true,
    img: "https://img.freepik.com/premium-photo/the-whole-universe-in-a-nutshell-style-hieronymus-bosch_997657-6615.jpg",
    result: "'Вселенная в оболочке' - Б. Грин",
    desc: 'Ученый из далекого будущего. Современный бунтарь прогресса, который пытается приоткрыть завесу тайн эволюционным путем. Ученый стремился перейти к следующей ветви циклической жизни Вселенной.',
    nodes: [
    ],
  }
  var result15 = {
    answer: "Древний мир",
    is_leaf: true,
    img: "https://rua.gr/media/k2/items/cache/e4aea22783be86117754f2843113adaa_L.jpg",
    result: "'Спартак' - Д. Фаст",
    desc: "'Спартак' - исторический роман, который любим уже многими поколениями наших читателей. В нем рассказывается о крупнейшем в истории Древнего Рима восстании рабов под предводительством гладиатора Спартака. Это книга о дружбе и предательстве, любви и ненависти, радости борьбы и горечи поражения.",
    nodes: [
    ]
  }
  var result16 = {
    answer: "Средневековье",
    is_leaf: true,
    img: "https://cdn.forbes.ru/files/c/1082x727/photo_galleries/game-of-thrones-dany-drogon1_0.jpg__1554993946__48225.webp",
    result: "'Игра престолов' - Д. Мартин",
    desc: "Песнь льда и пламени, или песнь льда и огня (англ. The song of ice and fire) — в метафорическом смысле песня «принца, что был обещан» из пророчества, которым были одержимы многие Таргариены. Считается, что пророчества об обещанном принце связаны с Азор Ахаем.",
    nodes: [
    ],
  }
  var result17 = {
    answer: "Популярная наука",
    is_leaf: true,
    img: "https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE_%D0%B8_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F_2014.jpg",
    result: "'Космос, Путешествие в пространстве и время' - Карп Саган",
    desc: "Это рассказ о наших шагах на пути познания Вселенной - от кипящей и бурлящей материи до разумных существ, от самых примитивных, сказочных и мифических представлений об устройстве космоса до сегодняшних, поражающих воображение теорий и гипотез - от Чёрных дыр, тоннелей через время и пространство, до микроскопических частиц, в которых заключены свои миры со своими физическими законами.",
    nodes: [
    ]
  }
  var result18 = {
    answer: "Классический",
    is_leaf: true,
    img: "https://sberb2b.ru/uploads/images/00/083/098/00083098f5f16cc7e9d7bf203fb2e4a2.jpeg",
    result: "'Чистый код' - Р. Мартин",
    desc: "Чистый, или хороший код — это код, который легко и приятно читается и понятен разработчикам с первого взгляда. Еще его легко модифицировать и не нужно переписывать заново.",
    nodes: [
    ],
  }
  
  var result20 =   {
    answer: "Нет",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1930013/pub_5f61ca494f0bfa38c3d36fd6_5f61cb08f7cb2d413354c7f7/scale_1200",
    result: "Не знаем :(",
    desc: "Вы слишком тонкая натура... Для вас нужна более глубокая система",
    nodes: [

    ],
  }
  var result21 = {
    answer: "Да",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/920263/pub_5be9f3603a546e00aa31d890_5bead04499ad1700aa0c9b03/scale_1200",
    result: "'Путь к успеху' - Н. Соболев",
    desc: "'Путь к успеху' - это книга о том, как установить свои цели, разработать план действий и достичь успеха в жизни. В этой книге вы найдете практические советы и инструменты для управления временем, улучшения своих навыков руководителя, преодоления страха неудач и многого другого",
    nodes: [],
  }
  var result22 = {
    answer: "Экономика",
    is_leaf: true,
    img: "https://rsv.ru/blog/wp-content/uploads/2021/03/kak-nachat-slozhnyj-razgovor-918x516.jpg",
    result: "Все зависит только от вас!",
    desc: "Попробуйте спросить человека, которого вы смотрите!",
    nodes: [],
  }
  var result23 = {
    answer: "Политика",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1352765/pub_5c600c832e6eb000ad310c2c_5c600d4793746600ac4e70e7/scale_1200",
    result: "Все зависит только от вас!",
    desc: "Попробуйте спросить человека, которого вы смотрите!",
    nodes: [],
  }
  var result24 = {
    answer: "Спорт",
    is_leaf: true,
    img: "https://opis-cdn.tinkoffjournal.ru/mercury/in-motivation-to-do-sport.bjluo9..jpg",
    result: "Все зависит только от вас!",
    desc: "Попробуйте спросить человека, которого вы смотрите!",
    nodes: [],
  }
  var result25 = {
    answer: "Нет",
    question: 'Вы смотрите видео на разынх хостингах?',
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1930013/pub_5f61ca494f0bfa38c3d36fd6_5f61cb08f7cb2d413354c7f7/scale_1200",
    result: "Не знаем :(",
    desc: "Вы слишком тонкая натура... Для вас нужна более глубокая система",
    nodes: [

    ],
  }
  var result26 = {
    answer: "Да",
    is_leaf: true,
    img: "https://www.e-xecutive.ru/uploads/article/image/1994748/thumb_podcast.jpg",
    result: "Интересующие вас подкасты!",
    desc: "Подкастов бывает очень много, все зависит лишь от ваших интересов!",
    nodes: [
    ],
  }
  var result27 = {
    answer: "Да",
    is_leaf: true,
    img: "https://i.ytimg.com/vi/f99FKAVcW-o/maxresdefault.jpg",
    result: "'Стань диким!' - Эрин Хантер",
    desc: "Первая книга серии «Коты-воители» — «Стань диким!» — рассказывает об удивительной и полной приключений жизни домашнего котёнка Рыжика, попавшего в лес, где воюют между собой четыре клана диких котов. Рыжику приходится доказывать, что он достоин чести стать воином и принадлежать к Грозовому племени.",
    nodes: [
    ],
  }
  var result28 = {
    answer: "Нет",
    is_leaf: true,
    img: "https://im.kommersant.ru/Issues.photo/RADIO/2015/12/24/KMO_111307_11985_1_t218_151921.jpg",
    result: "'1984' - Д. Оурэлл",
    desc: "Аннотация '1984' — культовый роман Джорджа Оруэлла, действие которого разворачивается в тоталитарном, бюрократическом государстве, где процветает пропаганда и цензура, а тотальная слежка ведется круглосуточно, и где один человек решил побороться за право быть индивидуальной личностью.",
    nodes: [
    ],
  }
  var result29 = {
    answer: "Фильмы",
    is_leaf: true,
    img: "https://www.soyuz.ru/public/uploads/files/5/7441086/1005x558_20200617173154704fdc0963.jpg",
    result: "'Дюна' Ф. Герберт",
    desc: "История начинается с того, что управление планетой Арракис по воле императора Шаддама IV переходит от монополии Дома Харконнен к их давним врагам, Дому Атрейдес. Герцог Лето Атрейдес принимает планету, измученную тиранией Харконненов, с нищим населением, главная ценность для которого — вода. Лето сулит жителям Дюны превратить их планету в рай.",
    nodes: [
    ],
  }
  var result30 = {
    answer: "Визуальные новеллы",
    is_leaf: true,
    img: "https://cs10.pikabu.ru/post_img/big/2019/05/13/1/1557701536136934042.jpg",
    result: "'Бесконечное лето'",
    desc: "Главный герой игры — одинокий молодой человек Семён. Он живёт за счёт случайных фрилансовых заказов и проводит большую часть своего времени в интернете на анонимных имиджбордах. В один зимний день Семён отправляется на встречу выпускников, садится в автобус марки «ЛиАЗ-677» 410-го маршрута, где засыпает, а просыпается летом в «Икарусе-256» у ворот пионерлагеря «Совёнок».",
    nodes: [
    ],
  }
  var result31 = {
    answer: "Психология спорта",
    is_leaf: true,
    img: "https://i1.mybook.io/p/x756/book_covers/12/e9/12e9beeb-3f43-4fdf-8fdf-891d21753cee.jpg",
    result: "'Психология чемпиона. Работа спортсмена над собой'",
    desc: "В книге затрагиваются важные аспекты психологической самоподготовки спортсменов на основе авторской программы изменения сознания, помогающей спортсмену по-другому посмотреть на мир и глубже понять свою личную ценность как в спорте, так и в жизни, воспитать в себе психологию чемпиона.",
    nodes: [
    ],
  }
  var result32 = {
    answer: "Психология труда",
    is_leaf: true,
    img: "https://urait.ru/book/cover/03D67B5F-34B6-40B0-8E28-58A1C6BA0411",
    result: "Психология труда - Под ред. Климова Е.А., Носковой О.Г.",
    desc: "В книге затрагиваются важные аспекты психологической самоподготовки спортсменов на основе авторской программы изменения сознания, помогающей спортсмену по-другому посмотреть на мир и глубже понять свою личную ценность как в спорте, так и в жизни, воспитать в себе психологию чемпиона.",
    nodes: [
    ],
  }
  var node25 = {
    answer: "Прикладная психология",
    question: 'Выберите раздел прикладной психологии',
    is_leaf: false,
    img: "",
    nodes: [
      result31,
      result32
    ],
  }

  var result33 = {
    answer: "Криминальная психология",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65170aa57f17fe0c051fc55d_65170b8ec3c0063ed1570753/scale_1200",
    result: "'Елизавета Бута: Маньяк Фишер. История последнего расстрелянного в России убийцы'",
    desc: "В 1996 году в России провели последнюю смертную казнь. В Москве расстреляли убийцу 11 детей. Долгое время никто не мог опознать и идентифицировать человеческие останки, найденные в районе Звенигородского лесничества.",
    nodes: [
    ],
  }
  var result34 = {
    answer: "Судебная психология",
    is_leaf: true,
    img: "https://ncrdo.ru/upload/medialibrary/cd4/cd4297e66b3e177b2142f795df169bc7.jpg",
    result: "Квалификационный экзамен на должность судьи суда общей юрисдикции",
    desc: "Данное издание не имеет аналогов в России! Предназначено для юристов, готовящихся к экзамену на приобретение статуса судьи, подготовлены подробные ответы на все вопросы, рекомендованные для экзамена на судейский статус Высшей квалификационной коллегией судей Российской Федерации. Книга также будет полезна студентам и преподавателям различных юридических специальностей, чтобы освежить знания или восполнить пробелы в короткий срок.",
    nodes: [
    ],
  }
  var result35 = {
    answer: "Популярная",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/3985746/pub_5fb798bab543ac74801fcbe8_5fb79b90b543ac748025217e/scale_1200",
    result: "Наруто",
    desc: "Манга «Наруто» рассказывает историю мальчика Наруто Узумаки, который живет в вымышленном мире, наполненном ниндзя и другими сказочными существами. Наруто мечтает стать Хокагэ – главой своей деревни, и он тренируется в надежде достичь этой цели",
    nodes: [
    ],
  }
  var result19 = {
    answer: "Нишевая",
    is_leaf: true,
    img: "https://cs14.pikabu.ru/post_img/big/2023/03/14/7/1678792411128039851.jpg",
    result: "'Магическая битва' - Акутами Гэгэ",
    desc: "Сюжет рассказывает о парне по имени Юджи Итадори, старшекласснике, который проявляется в водовороте ужасных приворотных существ и странных событий. Его жизнь кардинально меняется, когда он сталкивается со страшным приворотом и случайно становится избранником его приворотных пальцев.",
    nodes: [

    ],
  }
  var node28 = {
    answer: "Сёнен",
    question: 'Какая сёнен должна быть по популярности?',
    is_leaf: false,
    img: "",
    nodes: [
      result19,
      result35
    ],
  }

  var result36 = {
    answer: "Популярная",
    is_leaf: true,
    img: "https://cover.imglib.info/uploads/cover/kimi-no-suizou-wo-tabetai/cover/eCswpVvfgWL9_250x350.jpg",
    result: 'Я хочу съесть твою поджелужочную',
    desc: "Одним прекрасным днём ученик старшей школы находит чей-то личный дневник, подписанный как «Роман болезни». Вскоре выясняется, что дневник этот принадлежит Сакуре Ямаути, однокласснице главного героя. Прочтя его, он узнаёт, что девушка страдает смертельной болезнью — её поджелудочная железа перестала работать. Чтобы поддержать её в этой нелёгкой ситуации, юноша решает подружиться с Сакурой, несмотря на их совершенно разные характеры.",
    nodes: [
    ],
  }
  var result37 = {
    answer: "Нишевая",
    is_leaf: true,
    img: "https://cover.imglib.info/uploads/cover/kimi-wa-tsukiyo-ni-hikari-kagayaku/cover/rEgzhw3tW7_250x350.jpg",
    result: "'Ты сияешь лунной ночью' - Kimi wa Tsukiyo ni Hikari Kagayaku",
    desc: "Сюжет рассказывает о парне по имени Юджи Итадори, старшекласснике, который проявляется в водовороте ужасных приворотных существ и странных событий. Его жизнь кардинально меняется, когда он сталкивается со страшным приворотом и случайно становится избранником его приворотных пальцев.",
    nodes: [

    ],
  }
  var node29 = {
    answer: "Дзесэй",
    question: 'Какая дзесэй должна быть по популярности?',
    is_leaf: false,
    img: "",
    nodes: [
      result36,
      result37
    ],
  }

  var result38 = {
    answer: "Популярная",
    is_leaf: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnNGwWPUqixrBZBmHhgxkBGVN0jUf71juykjDLcL6Mg&s",
    result: "Берсерк",
    desc: "Наёмник Гатс, по прозвищу Чёрный Мечник, странствует по магическому королевству Мидланд, вооружившись двухметровым мечом «Убийцей Драконов» и уничтожая на своём пути полчища демонов, охотящихся на него.",
    nodes: [
    ],
  }
  var result39 = {
    answer: "Нишевая",
    is_leaf: true,
    img: "https://desu.shikimori.one/uploads/poster/mangas/656/main_2x-3fc8c58ee1c0366055b64fae657a063e.webp",
    result: "'Бродяга'",
    desc: "Япония, 16 век. Такэдзо Симмэн — молодой человек, чья грубость проявляется как во внешности, так и в повадках. Его агрессивное поведение стало причиной всеобщего недовольства и страха в родной деревне, что побудило его и его друга Матахати Хонъидэна сбежать из насиженных мест в поисках чего-то более стоящего, чем провинциальная жизнь.",
    nodes: [

    ],
  }
  var node30 = {
    answer: "Сёйнэн",
    question: 'Какая cёйнэн должна быть по популярности?',
    is_leaf: false,
    img: "",
    nodes: [
      result38,
      result39
    ],
  }

  var node27 = {
    answer: "Да",
    question: 'Какой жанр вам подходит?',
    is_leaf: false,
    img: "",
    nodes: [
      node28,
      node29,
      node30
    ],
  }

  var node26 = {
    answer: "Юридическая психология",
    question: 'Выберите раздел юридической психологии',
    is_leaf: false,
    img: "",
    nodes: [
      result33,
      result34
    ],
  }

  var node24 = {
    answer: "Психология",
    question: 'Выберите раздел психологии',
    is_leaf: false,
    img: "",
    nodes: [
      node25,
      node26
    ],
  }
  var node4 = {
    answer: "Медицина",
    question: 'Что вам больше всего нравится в медицине?',
    is_leaf: false,
    img: "https://glavclinics-narofominsk.ru/upload/uf/194/30164wbyxzkc7y0b79z908ncvubkoiog/1.jpg",
    nodes: [
      node24,
      result2
    ],
  }
  var node5 = {
    answer: "Инженерия",
    question: 'Что вам больше всего нравится в инженерии?',
    is_leaf: false,
    img: "https://habrastorage.org/files/ef8/6e8/74e/ef86e874ea4e4cc888b00b98b59d3365.jpg",
    nodes: [
      result3,
      result4
    ],
  }
  var node6 = {
    answer: "Финансы",
    question: 'Что вам больше всего нравится в финансах?',
    is_leaf: false,
    img: "https://www.ganc-chas.by/wp-content/uploads/2023/06/vsjo-pro-finansy-gosudarstvennye-lichnye-i-obshhestvennye.jpg",
    nodes: [
      result5,
      result6
    ],
  }
  var node3 = {
    answer: "Проффесиональная литература",
    question: 'Какой у вас профиль?',
    is_leaf: false,
    img: "https://glavclinics-narofominsk.ru/upload/uf/194/30164wbyxzkc7y0b79z908ncvubkoiog/1.jpg",
    nodes: [
      node4,
      node5,
      node6
    ],
  }
  var node8 = {
    answer: "Детектив",
    question: 'Выберите поджанр "Детектив"',
    is_leaf: false,
    img: "https://www.roliksprint.ru/upload/iblock/8ed/2lk1k00f9lw4mhtfm5j87p5u2e3iqe4z/istor-roman.jpg",
    nodes: [
      result7,
      result8
    ],
  }
  var node9 = {
    answer: "Фантастика",
    question: 'Выберите поджанр "Фантастика"',
    is_leaf: false,
    img: "https://kpfu.ru/portal/docs/F_1485118113/060713_1942_10.jpg",
    nodes: [
      result9,
      result10
    ],
  }
  var node10 = {
    answer: "Роман",
    question: 'Выберите подкатегорию "Роман"',
    is_leaf: false,
    img: "https://litpr.ru/wp-content/uploads/jrom.jpeg",
    nodes: [
      result11,
      result12
    ],
  }
  var node7 = {
    answer: "Художестенная литература",
    question: 'Какой жанр больше всего симпатизирует?',
    is_leaf: false,
    img: "https://u.livelib.ru/album/1000024503/o/lvqjzg58/o-o.jpeg",
    nodes:[
        node8,
        node9,
        node10
      ],
  }
  var node12 = {
    answer: "Космос и астрономия",
    question: 'Какая литература о космосе вам больше симпатизирует?',
    is_leaf: false,
    img: "https://storage.ufamama.ru/files/BlogPosts/4614/afda1a35-ff6f-4530-9c3b-d7112ad45ca7.jpg",
    nodes: [
      result13,
      result14
    ],
  }
  var node13 = {
    answer: "История",
    question: 'Какая эпоха вам более интересна?',
    is_leaf: false,
    img: "https://4brain.ru/blog/wp-content/uploads/2017/09/%D0%B8%D0%B7%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8.jpg",
    nodes: [
      result15,
      result16
    ],
  }
  var node14 = {
    answer: "Наука и технологии",
    question: 'Что вам больше нравится?',
    is_leaf: false,
    img: "https://globalcentre.hse.ru/data/2017/04/22/1168825416/22.jpg",
    nodes: [
      result17,
      result18
    ],
  }
  var node11 = {
    answer: "Научно-популярная литература",
    question: 'Какой темы вам более интересны?',
    is_leaf: false,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4944693/pub_633727e2334727708f671509_63372a65fba3c50ea7b56963/scale_1200",
    nodes: [
      node12,
      node13,
      node14
    ],
  }
  var node2 = {
    answer: "Конечно",
    is_leaf: false,
    question: 'Какой жанр вам больше симпатизирует?',
    img: "https://chgbiblio.ru/wp-content/uploads/2020/11/zhanry-literatury-tablica-s-primerami-e1599657578249.png",
    nodes: [
      node3,
      node7,
      node11
    ],
  }
  var node18 = {
    answer: "Да",
    question: 'Вам нравится манга/комиксы?',
    is_leaf: false,
    img: "https://aif-s3.aif.ru/images/024/929/7510a94a80a8636b10f844c599ef315a.jpg",
    nodes: [
      node27,
      result20,
    ],
  }
  var node20 = {
    answer: "Нет",
    question: 'Какие темы вам больше симпатизируют?',
    is_leaf: false,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/41204/pub_5d2c1c578600e100aeb223fd_5d2c1ceba1b4f100ac2bf718/scale_1200",
    nodes: [
      result22,
      result23,
      result24,
    ],
  }
  var node19 = {
    answer: "Нет",
    question: 'Хотите ли в будущем снимать видео?',
    is_leaf: false,
    img: "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/e02f73589b77c1d6977fbdce37952633/960",
    nodes: [
      result21,
      node20,
    ],
  }
  var node17 = {
    answer: "Да",
    question: 'Вы смотрите исключительно развлекательный контент?',
    is_leaf: false,
    img: "https://rspectr.com/wp-content/uploads/2023/12/adobestock_532970445-scaled.jpeg",
    nodes: [
      node18,
      node19,
    ],
  }
  var node16 = {
    answer: "Нет интересной мне темы",
    question: 'Вы смотрите видео на разных хостингах?',
    is_leaf: false,
    img: "https://img.gazeta.ru/files3/233/15641233/upload-20220803_gaf_u08_106-pic_32ratio_1200x800-1200x800-32507.jpg",
    nodes: [
      node17,
      result25,
    ],
  }
  var node23 = {
    answer: "Нет",
    question: 'Вы любите более нишие произведения?',
    is_leaf: false,
    img: "https://img.brodude.ru/k1VkSDuopRqyqJZYfYmm3sgyFz-Mrij1reFRMrG90g8/rs:fill:640:521:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2Jyb2R1ZGUucnVfMjIuMDMuMjAxN18wTWNNQUlEVTdmYkxrLnBuZw?origin=2017/03/brodude.ru_22.03.2017_0McMAIDU7fbLk.png",
    nodes: [
      result27,
      result28,
    ]
  }
  var node22 = {
    answer: "Аудиокниги",
    question: 'Вам нравятся подкасты?',
    is_leaf: false,
    img: "https://cdn-yc-static.i-m-i.ru/store/uploads/article/500/image/main-6f1cf5f2e30752332eb11c33d2884642.jpg",
    nodes: [
      result26,
      node23
    ],
  }
  var node21 = {
    answer: "Интересен другой формат",
    question: 'Какой формат ближе всего?',
    is_leaf: false,
    img: "https://rg.ru/uploads/images/179/91/87/1000.jpg",
    nodes: [
      node22,
      result29,
      result30
    ]
  }
  var node15 = {
    answer: "Не очень",
    question: 'Почему вам не нравится читать?',
    is_leaf: false,
    img: "https://4brain.ru/blog/wp-content/uploads/2017/10/32-1.jpg",
    nodes: [
      node16,
      node21
    ],
  }
  var node1 = {
    question: 'Нравится ли вам читать?',
    img: "https://habrastorage.org/getpro/habr/post_images/afa/81a/5e1/afa81a5e1492c1d42e3b369ad422ba92.jpg",
    nodes: [
      node2,
      node15
    ],
    is_leaf: false,
  }
  var tree = node1

  var nodes = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30]
  const [cur, setCur] = useState(tree);

  return (
    
    <div className="App">
      <div class="header">
        <div class="name">{is_name}</div>
        <div class="is-name">Инженерия знаний 4 лаба</div>
        <div class="restart" onClick={(e) => setCur(tree)}>Начать сначала</div>
      </div>
      <div class="body">
        <div class="question-container">
          {!cur.is_leaf && 
            <div class="cont">
              <div>
                <div class="qimage" style={{
                  backgroundImage: `url(${cur.img})`,
                  
                }}></div>
              </div>
              <div class="question">{cur.question}</div>
              <div>
                {
                  cur.nodes.map((node, index) => {
                    return (
                      <div class="button" onClick={() => {
                        console.log(node.answer)
                        setCur(node)
                      }}>
                        {index + 1}. {node.answer}
                      </div>
                        )
                      })
                    }
              </div>
            </div>
          }
          {
            cur.is_leaf && 
            <div class="cont">
              <div>
                <img class="qimage" src={cur.img}></img>
              </div>
              <div class="question">Вам подойдет: {cur.result}</div>
              <div class="question1">Описание: {cur.desc}</div>
            </div>
          }
        </div>
        <div class="list-container">
          {
            nodes.map((node, index) => {
              return (
                <div class="list" onClick={()=>{
                  setCur(node)
                }}>
                  {index + 1}. {node.question}
                </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
