import { utilService } from "./util.service.js";

const books = [
    {
      id: utilService.makeId(),
      title: "Pride and Prejudice",
      subtitle: "A tale of love and social standing",
      authors: ["Jane Austen"],
      publishedDate: 1813,
      description: "A classic novel exploring the manners and matrimonial machinations of early 19th-century England.",
      pageCount: 279,
      categories: ["Fiction", "Romance"],
      imgNum: 1,
      thumbnail: "https://m.media-amazon.com/images/I/81NLDvyAHrL._SL1500_.jpg",
      language: "en",
      listPrice: {
        amount: 9.99,
        currencyCode: "€",
        isOnSale: false
      }
    },
    {
      id: utilService.makeId(),
      title: "1984",
      subtitle: "A dystopian vision of a totalitarian future",
      authors: ["George Orwell"],
      publishedDate: 1949,
      description: "A chilling novel that explores the dangers of oppressive government surveillance and control.",
      pageCount: 328,
      categories: ["Dystopian", "Political Fiction"],
      imgNum: 2,
      thumbnail: "https://m.media-amazon.com/images/I/51A9t9irmEL._SY445_SX342_.jpg",
      language: "en",
      listPrice: {
        amount: 12.49,
        currencyCode: "€",
        isOnSale: true
      }
    },
    {
      id: utilService.makeId(),
      title: "The Great Gatsby",
      subtitle: "A tragic tale of the American dream",
      authors: ["F. Scott Fitzgerald"],
      publishedDate: 1925,
      description: "A beautifully crafted novel about love, ambition, and the excesses of the Jazz Age.",
      pageCount: 180,
      categories: ["Classic", "Drama"],
      imgNum: 3,
      thumbnail: "https://m.media-amazon.com/images/I/41Rgv2HyhUL._SY445_SX342_.jpg",
      language: "en",
      listPrice: {
        amount: 7.99,
        currencyCode: "€",
        isOnSale: true
      }
    },
    {
      id: utilService.makeId(),
      title: "To Kill a Mockingbird",
      subtitle: "A powerful exploration of race and justice",
      authors: ["Harper Lee"],
      publishedDate: 1960,
      description: "A deeply moving story of morality and compassion set in the racially divided South.",
      pageCount: 281,
      categories: ["Fiction", "Historical"],
      imgNum: 4,
      thumbnail: "https://m.media-amazon.com/images/I/51IXWZzlgSL._SY445_SX342_.jpg",
      language: "en",
      listPrice: {
        amount: 11.49,
        currencyCode: "€",
        isOnSale: false
      }
    },
    {
      id: utilService.makeId(),
      title: "Moby-Dick",
      subtitle: "The epic tale of a man’s obsession with a whale",
      authors: ["Herman Melville"],
      publishedDate: 1851,
      description: "An adventurous novel blending nautical lore, philosophy, and humanity’s battle against nature.",
      pageCount: 585,
      categories: ["Adventure", "Classic"],
      imgNum: 5,
      thumbnail: "https://m.media-amazon.com/images/I/41ACQTFSooL._SY445_SX342_.jpg",
      language: "en",
      listPrice: {
        amount: 14.99,
        currencyCode: "€",
        isOnSale: true
      }
    },
    {
      id: utilService.makeId(),
      title: "The Catcher in the Rye",
      subtitle: "A rebellious teenager's view of the adult world",
      authors: ["J.D. Salinger"],
      publishedDate: 1951,
      description: "A groundbreaking novel that captures the alienation of youth and the search for identity.",
      pageCount: 234,
      categories: ["Coming-of-Age", "Fiction"],
      imgNum: 6,
      thumbnail: "https://m.media-amazon.com/images/I/51TI+w56qFL._SY445_SX342_.jpg",
      language: "en",
      listPrice: {
        amount: 8.49,
        currencyCode: "€",
        isOnSale: false
      }
    },
    {
      id: utilService.makeId(),
      title: "War and Peace",
      subtitle: "A monumental chronicle of Russia during the Napoleonic era",
      authors: ["Leo Tolstoy"],
      publishedDate: 1869,
      description: "An epic masterpiece blending historical events with intricate family dramas.",
      pageCount: 1225,
      categories: ["Historical", "Epic"],
      imgNum: 7,
      thumbnail: "https://m.media-amazon.com/images/I/91teiIZ5vwL._SY522_.jpg",
      language: "en",
      listPrice: {
        amount: 19.99,
        currencyCode: "€",
        isOnSale: false
      }
    },
    {
      id: utilService.makeId(),
      title: "The Hobbit",
      subtitle: "An adventurous journey in Middle-earth",
      authors: ["J.R.R. Tolkien"],
      publishedDate: 1937,
      description: "A beloved fantasy novel that follows Bilbo Baggins on a quest filled with dragons and treasure.",
      pageCount: 310,
      categories: ["Fantasy", "Adventure"],
      imgNum: 8,
      thumbnail: "http://coding-academy.org/books-photos/8.jpg",
      language: "en",
      listPrice: {
        amount: 9.99,
        currencyCode: "€",
        isOnSale: true
      }
    },
    {
      id: utilService.makeId(),
      title: "Brave New World",
      subtitle: "A futuristic world of genetic engineering and conformity",
      authors: ["Aldous Huxley"],
      publishedDate: 1932,
      description: "A haunting novel about a dystopian society driven by technology and consumerism.",
      pageCount: 268,
      categories: ["Science Fiction", "Dystopian"],
      imgNum: 9,
      thumbnail: "http://coding-academy.org/books-photos/9.jpg",
      language: "en",
      listPrice: {
        amount: 10.99,
        currencyCode: "€",
        isOnSale: false
      }
    },
    {
      id: utilService.makeId(),
      title: "The Alchemist",
      subtitle: "A transformative quest for one’s personal legend",
      authors: ["Paulo Coelho"],
      publishedDate: 1988,
      description: "An inspiring tale about following your dreams and discovering your destiny.",
      pageCount: 208,
      categories: ["Philosophy", "Fiction"],
      imgNum: 10,
      thumbnail: "http://coding-academy.org/books-photos/10.jpg",
      language: "en",
      listPrice: {
        amount: 7.99,
        currencyCode: "€",
        isOnSale: true
      }
    }
    ,{
          id: utilService.makeId(),
          title: "Crime and Punishment",
          subtitle: "The psychological impact of guilt and redemption",
          authors: ["Fyodor Dostoevsky"],
          publishedDate: 1866,
          description: "A profound exploration of morality, justice, and human conscience through the story of a young man grappling with crime and its consequences.",
          pageCount: 430,
          categories: ["Classic", "Philosophy"],
          imgNum: 11,
          thumbnail: "http://coding-academy.org/books-photos/11.jpg",
          language: "en",
          listPrice: {
            amount: 13.49,
            currencyCode: "€",
            isOnSale: true
          }
        },
        {
          id: utilService.makeId(),
          title: "One Hundred Years of Solitude",
          subtitle: "A multi-generational story of the Buendía family",
          authors: ["Gabriel García Márquez"],
          publishedDate: 1967,
          description: "A masterpiece of magical realism chronicling the history of the Buendía family and the fictional town of Macondo.",
          pageCount: 417,
          categories: ["Magical Realism", "Fiction"],
          imgNum: 12,
          thumbnail: "http://coding-academy.org/books-photos/12.jpg",
          language: "en",
          listPrice: {
            amount: 14.99,
            currencyCode: "€",
            isOnSale: false
          }
        },
        {
          id: utilService.makeId(),
          title: "Frankenstein",
          subtitle: "A cautionary tale of ambition and creation",
          authors: ["Mary Shelley"],
          publishedDate: 1818,
          description: "A Gothic novel about a scientist who creates life, only to face unintended and tragic consequences.",
          pageCount: 280,
          categories: ["Science Fiction", "Horror"],
          imgNum: 13,
          thumbnail: "http://coding-academy.org/books-photos/13.jpg",
          language: "en",
          listPrice: {
            amount: 10.49,
            currencyCode: "€",
            isOnSale: true
          }
        },
        {
          id: utilService.makeId(),
          title: "The Picture of Dorian Gray",
          subtitle: "A tale of beauty, corruption, and the soul",
          authors: ["Oscar Wilde"],
          publishedDate: 1890,
          description: "A dark story of a young man who remains youthful while his portrait reflects his moral decay.",
          pageCount: 254,
          categories: ["Philosophy", "Gothic Fiction"],
          imgNum: 14,
          thumbnail: "http://coding-academy.org/books-photos/14.jpg",
          language: "en",
          listPrice: {
            amount: 8.99,
            currencyCode: "€",
            isOnSale: false
          }
        },
        {
          id: utilService.makeId(),
          title: "Don Quixote",
          subtitle: "The adventures of an idealistic knight",
          authors: ["Miguel de Cervantes"],
          publishedDate: 1605,
          description: "A timeless classic about a delusional man who imagines himself a knight and embarks on absurd quests.",
          pageCount: 992,
          categories: ["Classic", "Satire"],
          imgNum: 15,
          thumbnail: "http://coding-academy.org/books-photos/15.jpg",
          language: "en",
          listPrice: {
            amount: 18.49,
            currencyCode: "€",
            isOnSale: true
          }
        },
        {
          id: utilService.makeId(),
          title: "Anna Karenina",
          subtitle: "A poignant tale of love, family, and betrayal",
          authors: ["Leo Tolstoy"],
          publishedDate: 1877,
          description: "A beautifully written novel that explores the complexities of love, marriage, and society in imperial Russia.",
          pageCount: 864,
          categories: ["Classic", "Romance"],
          imgNum: 16,
          thumbnail: "http://coding-academy.org/books-photos/16.jpg",
          language: "en",
          listPrice: {
            amount: 15.99,
            currencyCode: "€",
            isOnSale: false
          }
        },
        {
          id: utilService.makeId(),
          title: "The Brothers Karamazov",
          subtitle: "An exploration of faith, family, and morality",
          authors: ["Fyodor Dostoevsky"],
          publishedDate: 1880,
          description: "A philosophical masterpiece examining the relationships, conflicts, and spiritual struggles of a Russian family.",
          pageCount: 796,
          categories: ["Classic", "Philosophy"],
          imgNum: 17,
          thumbnail: "http://coding-academy.org/books-photos/17.jpg",
          language: "en",
          listPrice: {
            amount: 16.99,
            currencyCode: "€",
            isOnSale: true
          }
        },
        {
          id: utilService.makeId(),
          title: "Wuthering Heights",
          subtitle: "A dark tale of love and revenge",
          authors: ["Emily Brontë"],
          publishedDate: 1847,
          description: "A brooding novel that delves into the intensity of love, jealousy, and vengeance in the English moors.",
          pageCount: 326,
          categories: ["Romance", "Gothic Fiction"],
          imgNum: 18,
          thumbnail: "http://coding-academy.org/books-photos/18.jpg",
          language: "en",
          listPrice: {
            amount: 11.99,
            currencyCode: "€",
            isOnSale: false
          }
        },
        {
          id: utilService.makeId(),
          title: "The Road",
          subtitle: "A harrowing journey of survival",
          authors: ["Cormac McCarthy"],
          publishedDate: 2006,
          description: "A post-apocalyptic novel following a father and son’s struggle to survive in a desolate world.",
          pageCount: 287,
          categories: ["Post-Apocalyptic", "Fiction"],
          imgNum: 19,
          thumbnail: "http://coding-academy.org/books-photos/19.jpg",
          language: "en",
          listPrice: {
            amount: 13.49,
            currencyCode: "€",
            isOnSale: true
          }
        },
        {
          id: utilService.makeId(),
          title: "The Kite Runner",
          subtitle: "A moving story of friendship and redemption",
          authors: ["Khaled Hosseini"],
          publishedDate: 2003,
          description: "An emotional novel tracing the bonds and betrayals between two boys growing up in Afghanistan.",
          pageCount: 372,
          categories: ["Historical", "Fiction"],
          imgNum: 20,
          thumbnail: "https://m.media-amazon.com/images/I/81LVEH25iJL._SY522_.jpg",
          language: "en",
          listPrice: {
            amount: 14.49,
            currencyCode: "€",
            isOnSale: false
          }
        },
        {
          id: utilService.makeId(),
          title: "Jane Eyre",
          subtitle: "A powerful tale of love and independence",
          authors: ["Charlotte Brontë"],
          publishedDate: 1847,
          description: "A classic story of a young woman's resilience and search for love and self-respect in a harsh world.",
          pageCount: 532,
          categories: ["Classic", "Romance"],
          imgNum: 21,
          thumbnail: "https://m.media-amazon.com/images/I/41sOTGPO9uL._SY445_SX342_.jpg",
          language: "en",
          listPrice: {
            amount: 10.99,
            currencyCode: "€",
            isOnSale: true
          }
        },
        {
          id: utilService.makeId(),
          title: "Life of Pi",
          subtitle: "A survival tale of faith and courage",
          authors: ["Yann Martel"],
          publishedDate: 2001,
          description: "A fantastical story of a boy stranded on a lifeboat with a Bengal tiger, exploring themes of survival and spirituality.",
          pageCount: 319,
          categories: ["Adventure", "Fiction"],
          imgNum: 22,
          thumbnail: "https://m.media-amazon.com/images/I/51oFPdd1T-L._SY445_SX342_.jpg",
          language: "en",
          listPrice: {
            amount: 9.99,
            currencyCode: "€",
            isOnSale: true
          }
        },
        {
          id: utilService.makeId(),
          title: "A Tale of Two Cities",
          subtitle: "A sweeping story of love and sacrifice",
          authors: ["Charles Dickens"],
          publishedDate: 1859,
          description: "A historical novel set during the French Revolution, depicting love, family, and sacrifice against a backdrop of political turmoil.",
          pageCount: 489,
          categories: ["Historical", "Classic"],
          imgNum: 23,
          thumbnail: "https://m.media-amazon.com/images/I/51cLin22oLL._SY445_SX342_.jpg",
          language: "en",
          listPrice: {
            amount: 12.49,
            currencyCode: "€",
            isOnSale: false
          }
        },
        {
          id: utilService.makeId(),
          title: "The Lord of the Rings",
          subtitle: "A legendary saga of friendship and courage",
          authors: ["J.R.R. Tolkien"],
          publishedDate: 1954,
          description: "An epic fantasy trilogy that follows the journey to destroy the One Ring and save Middle-earth.",
          pageCount: 1178,
          categories: ["Fantasy", "Adventure"],
          imgNum: 24,
          thumbnail: "https://m.media-amazon.com/images/I/51wEd2FprXL._SY445_SX342_.jpg",
          language: "en",
          listPrice: {
            amount: 25.99,
            currencyCode: "€",
            isOnSale: false
          }
        },
        {
          id: utilService.makeId(),
          title: "The Grapes of Wrath",
          subtitle: "A powerful portrayal of the Dust Bowl era",
          authors: ["John Steinbeck"],
          publishedDate: 1939,
          description: "A moving story of a family's struggle to survive during the Great Depression and their journey to California.",
          pageCount: 464,
          categories: ["Historical", "Fiction"],
          imgNum: 25,
          thumbnail: "https://m.media-amazon.com/images/I/51i2TADFz7L._SY445_SX342_.jpg",
          language: "en",
          listPrice: {
            amount: 13.99,
            currencyCode: "€",
            isOnSale: true
          }
        }
    // Add additional books similarly to complete 25.
  ]
  

export default books;