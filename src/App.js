import './App.css';
import { useState } from 'react'

function App() {
  var is_name = 'Выбор книги по предпочтениям';

  var tree = {
    question: 'Нравится ли вам читать?',
    img: "https://habrastorage.org/getpro/habr/post_images/afa/81a/5e1/afa81a5e1492c1d42e3b369ad422ba92.jpg",
    nodes: [{
      answer: "Конечно",
      is_leaf: false,
      question: 'Какой жанр вам больше симпатизирует?',
      img: "https://chgbiblio.ru/wp-content/uploads/2020/11/zhanry-literatury-tablica-s-primerami-e1599657578249.png",
      nodes: [
        {
          answer: "Проффесиональная литература",
          question: 'Какой у вас профиль?',
          is_leaf: false,
          img: "https://glavclinics-narofominsk.ru/upload/uf/194/30164wbyxzkc7y0b79z908ncvubkoiog/1.jpg",
          nodes: [
            {
              answer: "Медицина",
              question: 'Что вам больше всего нравится в медицине?',
              is_leaf: false,
              img: "https://glavclinics-narofominsk.ru/upload/uf/194/30164wbyxzkc7y0b79z908ncvubkoiog/1.jpg",
              nodes: [
                {
                  answer: "Психология",
                  is_leaf: true,
                  img: "https://avatars.dzeninfra.ru/get-zen_doc/9722138/pub_6458f356b70eae648492ca49_6458f38cbc75115be09610b0/scale_1200",
                  result: "'Читайте людей как книгу' - П. Кинг",
                  desc: "В этой книге Патрика Кинга, автора мировых бестселлеров в области навыков социальной коммуникации, рассмотрены способы, с помощью которых можно развить умение «читать» и анализировать людей, их характер, поведение, мотивацию, невысказанные намерения.",
                  nodes: [
                  ]
                },
                {
                  answer: "Травмотология",
                  is_leaf: true,
                  img: "https://medknigaservis.ru/wp-content/uploads/2023/12/nagl.jpg",
                  result: "'Наглядное лечение боли' - А. Данилова",
                  desc: "Среди многочисленных изданий о проблеме боли руководство «Наглядное лечение боли» выгодно отличается лаконичным и четким изложением всех аспектов: начиная с вопросов нейроанатомии и патофизиологии, материала по диагностике и терапии отдельных форм болевых синдромов и заканчивая мультидисциплинарным подходом к лечению.",
                  nodes: [
                  ],
                }
              ],
            },
            {
              answer: "Инженерия",
              question: 'Что вам больше всего нравится в инженерии?',
              is_leaf: false,
              img: "https://habrastorage.org/files/ef8/6e8/74e/ef86e874ea4e4cc888b00b98b59d3365.jpg",
              nodes: [
                {
                  answer: "Электротехника",
                  is_leaf: true,
                  img: "https://electricalschool.info/uploads/posts/2018-03/1521632990_2.jpg",
                  result: "'Электротехника и электроника' - Н. Тесла",
                  desc: "В учебнике изложены основы теории электрических цепей, рассмотрены конструкции, принцип действия, основные характеристики электрических машин и полупроводниковых приборов и устройств. Соответствует современным требованиям Федерального государственного образовательного стандарта среднего профессионального образования и профессиональным квалификационным требованиям.",
                  nodes: [
                  ]
                },
                {
                  answer: "Механика",
                  is_leaf: true,
                  img: "https://unikum.rudn.ru/editor/%D0%B1%D0%BB%D0%BE%D0%B3/unikumm1.png",
                  result: "'Теоретическая физика. Том 1. Механика' - Л. Ландау",
                  desc: "Среди многочисленных изданий о проблеме боли руководство «Наглядное лечение боли» выгодно отличается лаконичным и четким изложением всех аспектов: начиная с вопросов нейроанатомии и патофизиологии, материала по диагностике и терапии отдельных форм болевых синдромов и заканчивая мультидисциплинарным подходом к лечению.",
                  nodes: [
                  ],
                }
              ],
            },
            {
              answer: "Финансы",
              question: 'Что вам больше всего нравится в финансах?',
              is_leaf: false,
              img: "https://www.ganc-chas.by/wp-content/uploads/2023/06/vsjo-pro-finansy-gosudarstvennye-lichnye-i-obshhestvennye.jpg",
              nodes: [
                {
                  answer: "Бухгалтерия",
                  is_leaf: true,
                  img: "https://www.gestion.ru/wp-content/uploads/2023/06/buhgalteriya-ooo-usn-1024x683.jpg",
                  result: "'Популярная бухгалтерия' - А. Гартвич",
                  desc: "В этой книге в доступной форме объясняются понятия, принципы и правила бухгалтерского учета. Последовательно, от простого к сложному, рассматриваются различные формы бухгалтерского учета, начиная с учета личных денег и заканчивая профессиональным бухгалтерским учетом.",
                  nodes: [
                  ]
                },
                {
                  answer: "Инвестиции",
                  is_leaf: true,
                  img: "https://img.gazeta.ru/files3/627/15427627/birga-pic_32ratio_1200x800-1200x800-90464.jpg",
                  result: "'Богатый папа, бедный папа' - Р. Кийосаки",
                  desc: "Бестселлер Роберта Кийосаки раскроет каждому читателю принципы и законы успеха, материальной независимости. Этому вряд ли научат в школе, колледже и даже в университете. А все из-за того, что педагоги сами не знают этих секретов.",
                  nodes: [
                  ],
                }
              ],
            }
          ],
        },
        {
          answer: "Художестенная литература",
          question: 'Какой жанр больше всего симпатизирует?',
          is_leaf: false,
          img: "https://u.livelib.ru/album/1000024503/o/lvqjzg58/o-o.jpeg",
          nodes:[
              {
                answer: "Детектив",
                question: 'Выберите поджанр "Детектив"',
                is_leaf: false,
                img: "https://www.roliksprint.ru/upload/iblock/8ed/2lk1k00f9lw4mhtfm5j87p5u2e3iqe4z/istor-roman.jpg",
                nodes: [
                  {
                    answer: "Триллер",
                    is_leaf: true,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3why0BSSZkP4t3ItpxaSYvCL6KxxO1B5jnfjXElhRg&s",
                    result: "'Девушка в поезде' - П. Хокин",
                    desc: "Джесс и Джейсон. Такие имена дала Рейчел «безупречным» супругам, за жизнью которых она день за днем наблюдает из окна электрички. У них, похоже, есть все, чего совсем недавно лишилась сама Рейчел, – любовь, счастье, благополучие...\n Но однажды, проезжая мимо, она видит, как в дворике коттеджа, где живут Джесс и Джейсон, происходит нечто странное, загадочное, шокирующее. Всего минута – и поезд опять трогается, но этого достаточно, чтобы идеальная картинка исчезла навсегда.",
                    nodes: [
                    ]
                  },
                  {
                    answer: "Классический",
                    is_leaf: true,
                    img: "https://u.kanobu.ru/editor/images/14/fc78ac54-1bd1-4c2b-a7cd-08e5d7384f6f.webp",
                    result: "'Убийство в 'восточном экспрессе'' - А. Кристи",
                    desc: 'Находившийся в Стамбуле великий сыщик Эркюль Пуаро возвращается в Англию на знаменитом "Восточном экспрессе", в котором вместе с ним едут, кажется, представители всех возможных национальностей. Один из пассажиров, неприятный американец по фамилии Рэтчетт, предлагает Пуаро стать своим телохранителем, поскольку считает, что его должны убить. Знаменитый бельгиец отмахивается от этой абсурдной просьбы.',
                    nodes: [
                    ],
                  }
                ],
              },
              {
                answer: "Фантастика",
                question: 'Выберите поджанр "Фантастика"',
                is_leaf: false,
                img: "https://kpfu.ru/portal/docs/F_1485118113/060713_1942_10.jpg",
                nodes: [
                  {
                    answer: "Космическая",
                    is_leaf: true,
                    img: "https://avatars.dzeninfra.ru/get-zen_doc/1880939/pub_5d013f11b4d2c400ae261bf8_5d013fea19dcb600ac50bc63/scale_1200",
                    result: "'Марсианские хроники' - Д. Грин",
                    desc: "Фильм рассказывает о покорении человеком Красной планеты, где доживает свои последние годы некогда высокоразвитая цивилизация марсиан.",
                    nodes: [
                    ]
                  },
                  {
                    answer: "Фэнтези",
                    is_leaf: true,
                    img: "https://api.kinoart.ru/storage/post/2283/regular_detail_picture-d91f183ac27eea24f8f4150bb3f99fda.jpg",
                    result: "'Властелин колец' - Дж. Р. Р. Толкин",
                    desc: "Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.",
                    nodes: [
                    ],
                  }
                ],
              },
              {
                answer: "Роман",
                question: 'Выберите подкатегорию "Роман"',
                is_leaf: false,
                img: "https://litpr.ru/wp-content/uploads/jrom.jpeg",
                nodes: [
                  {
                    answer: "Современный",
                    is_leaf: true,
                    img: "https://cdnstatic.rg.ru/uploads/images/gallery/8121da2b/1_7db2931a.jpg",
                    result: "'Виноваты звезды' - Д. Грин",
                    desc: "Хэйзел больна раком. Несмотря на то, что болезнь временно отступила, девушка не чувствует ни капли радости. Она ходит в группу поддержки, где однажды знакомится с Августом Уотерсом и моментально влюбляется в него. Август и Хэйзел отправляются в полное страсти и жизни путешествие, которое лишний раз покажет им, что весь смысл жизни можно найти в любом ее отрезке.",
                    nodes: [
                    ]
                  },
                  {
                    answer: "Классический",
                    is_leaf: true,
                    img: "https://ndc.book24.ru/medialibrary/036/036a990542b5e061acab39eb916d49b6/877b4e53a225a514a216ff4624dc013c.jpg",
                    result: "'Преступление и наказание' - Ф. Достоевский",
                    desc: "В основе его сюжета лежит история Родиона Раскольникова – бедного студента из Петербурга, который, следуя своей идее о превосходстве одних людей над другими, пошел на преступление - убийство, дабы доказать, что он относится к разряду людей «необыкновенных», способных «дать себе разрешение перешагнуть через кровь».",
                    nodes: [
                    ],
                  }
                ],
              }
            ],
        },
        {
          answer: "Научно-популярная литература",
          question: 'Какой темы вам более интересны?',
          is_leaf: false,
          img: "https://avatars.dzeninfra.ru/get-zen_doc/4944693/pub_633727e2334727708f671509_63372a65fba3c50ea7b56963/scale_1200",
          nodes: [
            {
              answer: "Космос и астрономия",
              question: 'Какая литература о космосе вам больше симпатизирует?',
              is_leaf: false,
              img: "https://storage.ufamama.ru/files/BlogPosts/4614/afda1a35-ff6f-4530-9c3b-d7112ad45ca7.jpg",
              nodes: [
                {
                  answer: "История изучения",
                  is_leaf: true,
                  img: "https://static.wikia.nocookie.net/harrypotter/images/d/dd/%D0%94%D1%8B%D1%80%D1%8F%D0%B2%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82%D1%91%D0%BB._%D0%92%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA%2C_%D1%87%D0%B8%D1%82%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%9A%D1%80%D0%B0%D1%82%D0%BA%D1%83%D1%8E_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8E_%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A5%D0%BE%D0%BA%D0%B8%D0%BD%D0%B3%D0%B0_%28%D0%93%D0%9F%D0%B8%D0%A3%D0%90%29.png/revision/latest?cb=20150331041741&path-prefix=ru",
                  result: "'Краткая история времени' - Стивен Хокинг",
                  desc: "'Краткая история времени' Стивена Хокинга - один из столпов современной научно-популярной литературы. В этой книге автор пытается ответить на самые сложные и интригующие вопросы о мироздании: когда и почему началась Вселенная? безгранична ли Вселенная или у нее есть предел?",
                  nodes: [
                  ]
                },
                {
                  answer: "Современные открытия",
                  is_leaf: true,
                  img: "https://img.freepik.com/premium-photo/the-whole-universe-in-a-nutshell-style-hieronymus-bosch_997657-6615.jpg",
                  result: "'Вселенная в оболочке' - Б. Грин",
                  desc: 'Ученый из далекого будущего. Современный бунтарь прогресса, который пытается приоткрыть завесу тайн эволюционным путем. Ученый стремился перейти к следующей ветви циклической жизни Вселенной.',
                  nodes: [
                  ],
                }
              ],
            },
            {
              answer: "История",
              question: 'Какая эпоха вам более интересна?',
              is_leaf: false,
              img: "https://4brain.ru/blog/wp-content/uploads/2017/09/%D0%B8%D0%B7%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8.jpg",
              nodes: [
                {
                  answer: "Древний мир",
                  is_leaf: true,
                  img: "https://rua.gr/media/k2/items/cache/e4aea22783be86117754f2843113adaa_L.jpg",
                  result: "'Спартак' - Д. Фаст",
                  desc: "'Спартак' - исторический роман, который любим уже многими поколениями наших читателей. В нем рассказывается о крупнейшем в истории Древнего Рима восстании рабов под предводительством гладиатора Спартака. Это книга о дружбе и предательстве, любви и ненависти, радости борьбы и горечи поражения.",
                  nodes: [
                  ]
                },
                {
                  answer: "Средневековье",
                  is_leaf: true,
                  img: "https://cdn.forbes.ru/files/c/1082x727/photo_galleries/game-of-thrones-dany-drogon1_0.jpg__1554993946__48225.webp",
                  result: "'Игра престолов' - Д. Мартин",
                  desc: "Песнь льда и пламени, или песнь льда и огня (англ. The song of ice and fire) — в метафорическом смысле песня «принца, что был обещан» из пророчества, которым были одержимы многие Таргариены. Считается, что пророчества об обещанном принце связаны с Азор Ахаем.",
                  nodes: [
                  ],
                }
              ],
            },
            {
              answer: "Наука и технологии",
              question: 'Что вам больше нравится?',
              is_leaf: false,
              img: "https://globalcentre.hse.ru/data/2017/04/22/1168825416/22.jpg",
              nodes: [
                {
                  answer: "Популярная наука",
                  is_leaf: true,
                  img: "https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE_%D0%B8_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F_2014.jpg",
                  result: "'Космос, Путешествие в пространстве и время' - Карп Саган",
                  desc: "Это рассказ о наших шагах на пути познания Вселенной - от кипящей и бурлящей материи до разумных существ, от самых примитивных, сказочных и мифических представлений об устройстве космоса до сегодняшних, поражающих воображение теорий и гипотез - от Чёрных дыр, тоннелей через время и пространство, до микроскопических частиц, в которых заключены свои миры со своими физическими законами.",
                  nodes: [
                  ]
                },
                {
                  answer: "Классический",
                  is_leaf: true,
                  img: "https://sberb2b.ru/uploads/images/00/083/098/00083098f5f16cc7e9d7bf203fb2e4a2.jpeg",
                  result: "'Чистый код' - Р. Мартин",
                  desc: "Чистый, или хороший код — это код, который легко и приятно читается и понятен разработчикам с первого взгляда. Еще его легко модифицировать и не нужно переписывать заново.",
                  nodes: [
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      answer: "Не очень",
      question: 'Почему вам не нравится читать?',
      is_leaf: false,
      img: "https://4brain.ru/blog/wp-content/uploads/2017/10/32-1.jpg",
      nodes: [
        {
          answer: "Нет интересной мне темы",
          question: 'Вы смотрите видео на разных хостингах?',
          is_leaf: false,
          img: "https://img.gazeta.ru/files3/233/15641233/upload-20220803_gaf_u08_106-pic_32ratio_1200x800-1200x800-32507.jpg",
          nodes: [
            {
              answer: "Да",
              question: 'Вы смотрите исключительно развлекательный контент?',
              is_leaf: false,
              img: "https://rspectr.com/wp-content/uploads/2023/12/adobestock_532970445-scaled.jpeg",
              nodes: [
                {
                  answer: "Да",
                  question: 'Вам нравится манга/комиксы?',
                  is_leaf: false,
                  img: "https://aif-s3.aif.ru/images/024/929/7510a94a80a8636b10f844c599ef315a.jpg",
                  nodes: [
                    {
                      answer: "Да",
                      is_leaf: true,
                      img: "https://cs14.pikabu.ru/post_img/big/2023/03/14/7/1678792411128039851.jpg",
                      result: "'Магическая битва' - Акутами Гэгэ",
                      desc: "Сюжет рассказывает о парне по имени Юджи Итадори, старшекласснике, который проявляется в водовороте ужасных приворотных существ и странных событий. Его жизнь кардинально меняется, когда он сталкивается со страшным приворотом и случайно становится избранником его приворотных пальцев.",
                      nodes: [
            
                      ],
                    },
                    {
                      answer: "Нет",
                      is_leaf: true,
                      img: "https://avatars.dzeninfra.ru/get-zen_doc/1930013/pub_5f61ca494f0bfa38c3d36fd6_5f61cb08f7cb2d413354c7f7/scale_1200",
                      result: "Не знаем :(",
                      desc: "Вы слишком тонкая натура... Для вас нужна более глубокая система",
                      nodes: [
            
                      ],
                    },
                  ],
                },
                {
                  answer: "Нет",
                  question: 'Хотите ли в будущем снимать видео?',
                  is_leaf: false,
                  img: "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/e02f73589b77c1d6977fbdce37952633/960",
                  nodes: [
                    {
                      answer: "Да",
                      is_leaf: true,
                      img: "https://avatars.dzeninfra.ru/get-zen_doc/920263/pub_5be9f3603a546e00aa31d890_5bead04499ad1700aa0c9b03/scale_1200",
                      result: "'Путь к успеху' - Н. Соболев",
                      desc: "'Путь к успеху' - это книга о том, как установить свои цели, разработать план действий и достичь успеха в жизни. В этой книге вы найдете практические советы и инструменты для управления временем, улучшения своих навыков руководителя, преодоления страха неудач и многого другого",
                      nodes: [],
                    },
                    {
                      answer: "Нет",
                      question: 'Какие темы вам больше симпатизируют?',
                      is_leaf: false,
                      img: "https://avatars.dzeninfra.ru/get-zen_doc/41204/pub_5d2c1c578600e100aeb223fd_5d2c1ceba1b4f100ac2bf718/scale_1200",
                      nodes: [
                        {
                          answer: "Экономика",
                          is_leaf: true,
                          img: "https://rsv.ru/blog/wp-content/uploads/2021/03/kak-nachat-slozhnyj-razgovor-918x516.jpg",
                          result: "Все зависит только от вас!",
                          desc: "Попробуйте спросить человека, которого вы смотрите!",
                          nodes: [],
                        },
                        {
                          answer: "Политика",
                          is_leaf: true,
                          img: "https://avatars.dzeninfra.ru/get-zen_doc/1352765/pub_5c600c832e6eb000ad310c2c_5c600d4793746600ac4e70e7/scale_1200",
                          result: "Все зависит только от вас!",
                          desc: "Попробуйте спросить человека, которого вы смотрите!",
                          nodes: [],
                        },
                        {
                          answer: "Спорт",
                          is_leaf: true,
                          img: "https://opis-cdn.tinkoffjournal.ru/mercury/in-motivation-to-do-sport.bjluo9..jpg",
                          result: "Все зависит только от вас!",
                          desc: "Попробуйте спросить человека, которого вы смотрите!",
                          nodes: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              answer: "Нет",
              question: 'Вы смотрите видео на разынх хостингах?',
              is_leaf: true,
              img: "https://avatars.dzeninfra.ru/get-zen_doc/1930013/pub_5f61ca494f0bfa38c3d36fd6_5f61cb08f7cb2d413354c7f7/scale_1200",
              result: "Не знаем :(",
              desc: "Вы слишком тонкая натура... Для вас нужна более глубокая система",
              nodes: [
    
              ],
            },
          ],
        },
        {
          answer: "Интересен другой формат",
          question: 'Какой формат ближе всего?',
          is_leaf: false,
          img: "https://rg.ru/uploads/images/179/91/87/1000.jpg",
          nodes: [
            {
              answer: "Аудиокниги",
              question: 'Вам нравятся подкасты?',
              is_leaf: false,
              img: "https://cdn-yc-static.i-m-i.ru/store/uploads/article/500/image/main-6f1cf5f2e30752332eb11c33d2884642.jpg",
              nodes: [
                {
                  answer: "Да",
                  is_leaf: true,
                  img: "https://www.e-xecutive.ru/uploads/article/image/1994748/thumb_podcast.jpg",
                  result: "Интересующие вас подкасты!",
                  desc: "Подкастов бывает очень много, все зависит лишь от ваших интересов!",
                  nodes: [
                  ],
                },
                {
                  answer: "Нет",
                  question: 'Вы любите более нишие произведения?',
                  is_leaf: false,
                  img: "https://img.brodude.ru/k1VkSDuopRqyqJZYfYmm3sgyFz-Mrij1reFRMrG90g8/rs:fill:640:521:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2Jyb2R1ZGUucnVfMjIuMDMuMjAxN18wTWNNQUlEVTdmYkxrLnBuZw?origin=2017/03/brodude.ru_22.03.2017_0McMAIDU7fbLk.png",
                  nodes: [
                    {
                      answer: "Да",
                      is_leaf: true,
                      img: "https://i.ytimg.com/vi/f99FKAVcW-o/maxresdefault.jpg",
                      result: "'Стань диким!' - Эрин Хантер",
                      desc: "Первая книга серии «Коты-воители» — «Стань диким!» — рассказывает об удивительной и полной приключений жизни домашнего котёнка Рыжика, попавшего в лес, где воюют между собой четыре клана диких котов. Рыжику приходится доказывать, что он достоин чести стать воином и принадлежать к Грозовому племени.",
                      nodes: [
                      ],
                    },
                    {
                      answer: "Нет",
                      is_leaf: true,
                      img: "https://im.kommersant.ru/Issues.photo/RADIO/2015/12/24/KMO_111307_11985_1_t218_151921.jpg",
                      result: "'1984' - Д. Оурэлл",
                      desc: "Аннотация '1984' — культовый роман Джорджа Оруэлла, действие которого разворачивается в тоталитарном, бюрократическом государстве, где процветает пропаганда и цензура, а тотальная слежка ведется круглосуточно, и где один человек решил побороться за право быть индивидуальной личностью.",
                      nodes: [
                      ],
                    },
                  ]
                }
              ],
            },
            {
              answer: "Фильмы",
              is_leaf: true,
              img: "https://www.soyuz.ru/public/uploads/files/5/7441086/1005x558_20200617173154704fdc0963.jpg",
              result: "'Дюна' Ф. Герберт",
              desc: "История начинается с того, что управление планетой Арракис по воле императора Шаддама IV переходит от монополии Дома Харконнен к их давним врагам, Дому Атрейдес. Герцог Лето Атрейдес принимает планету, измученную тиранией Харконненов, с нищим населением, главная ценность для которого — вода. Лето сулит жителям Дюны превратить их планету в рай.",
              nodes: [
              ],
            },
            {
              answer: "Визуальные новеллы",
              is_leaf: true,
              img: "https://cs10.pikabu.ru/post_img/big/2019/05/13/1/1557701536136934042.jpg",
              result: "'Бесконечное лето'",
              desc: "Главный герой игры — одинокий молодой человек Семён. Он живёт за счёт случайных фрилансовых заказов и проводит большую часть своего времени в интернете на анонимных имиджбордах. В один зимний день Семён отправляется на встречу выпускников, садится в автобус марки «ЛиАЗ-677» 410-го маршрута, где засыпает, а просыпается летом в «Икарусе-256» у ворот пионерлагеря «Совёнок».",
              nodes: [
              ],
            }
          ]
        }
      ],
    }],
    is_leaf: false,
  }

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
      </div>
    </div>
  );
}

export default App;
