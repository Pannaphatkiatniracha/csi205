const products = [
  {
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    id: 9,
    title: "qui eius qui autem sed",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    id: 10,
    title: "beatae et provident et ut vel",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
  {
    id: 11,
    title: "nihil at amet non hic quia qui",
    thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    id: 12,
    title:
      "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
  },
  {
    id: 13,
    title: "repudiandae iusto deleniti rerum",
    thumbnailUrl: "https://via.placeholder.com/150/197d29",
  },
  {
    id: 14,
    title: "est necessitatibus architecto ut laborum",
    thumbnailUrl: "https://via.placeholder.com/150/61a65",
  },
  {
    id: 15,
    title: "harum dicta similique quis dolore earum ex qui",
    thumbnailUrl: "https://via.placeholder.com/150/f9cee5",
  },
  {
    id: 16,
    title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    thumbnailUrl: "https://via.placeholder.com/150/fdf73e",
  },
  {
    id: 17,
    title: "natus doloribus necessitatibus ipsa",
    thumbnailUrl: "https://via.placeholder.com/150/9c184f",
  },
  {
    id: 18,
    title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    thumbnailUrl: "https://via.placeholder.com/150/1fe46f",
  },
  {
    id: 19,
    title: "perferendis nesciunt eveniet et optio a",
    thumbnailUrl: "https://via.placeholder.com/150/56acb2",
  },
  {
    id: 20,
    title:
      "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    thumbnailUrl: "https://via.placeholder.com/150/8985dc",
  },
  {
    id: 21,
    title: "ad et natus qui",
    thumbnailUrl: "https://via.placeholder.com/150/5e12c6",
  },
  {
    id: 22,
    title: "et ea illo et sit voluptas animi blanditiis porro",
    thumbnailUrl: "https://via.placeholder.com/150/45601a",
  },
  {
    id: 23,
    title: "harum velit vero totam",
    thumbnailUrl: "https://via.placeholder.com/150/e924e6",
  },
  {
    id: 24,
    title: "beatae officiis ut aut",
    thumbnailUrl: "https://via.placeholder.com/150/8f209a",
  },
  {
    id: 25,
    title: "facere non quis fuga fugit vitae",
    thumbnailUrl: "https://via.placeholder.com/150/5e3a73",
  },
  {
    id: 26,
    title: "asperiores nobis voluptate qui",
    thumbnailUrl: "https://via.placeholder.com/150/474645",
  },
  {
    id: 27,
    title: "sit asperiores est quos quis nisi veniam error",
    thumbnailUrl: "https://via.placeholder.com/150/c984bf",
  },
  {
    id: 28,
    title: "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
    thumbnailUrl: "https://via.placeholder.com/150/392537",
  },
  {
    id: 29,
    title: "aut ipsam quos ab placeat omnis",
    thumbnailUrl: "https://via.placeholder.com/150/602b9e",
  },
  {
    id: 30,
    title: "odio enim voluptatem quidem aut nihil illum",
    thumbnailUrl: "https://via.placeholder.com/150/372c93",
  },
  {
    id: 31,
    title: "voluptate voluptates sequi",
    thumbnailUrl: "https://via.placeholder.com/150/a7c272",
  },
  {
    id: 32,
    title: "ad enim dignissimos voluptatem similique",
    thumbnailUrl: "https://via.placeholder.com/150/c70a4d",
  },
  {
    id: 33,
    title: "culpa ipsam nobis qui fuga magni et mollitia",
    thumbnailUrl: "https://via.placeholder.com/150/501fe1",
  },
  {
    id: 34,
    title: "vitae est facere quia itaque adipisci perferendis id maiores",
    thumbnailUrl: "https://via.placeholder.com/150/35185e",
  },
  {
    id: 35,
    title: "tenetur minus voluptatum et",
    thumbnailUrl: "https://via.placeholder.com/150/c96cad",
  },
  {
    id: 36,
    title: "expedita rerum eaque",
    thumbnailUrl: "https://via.placeholder.com/150/4d564d",
  },
  {
    id: 37,
    title: "totam voluptas iusto deserunt dolores",
    thumbnailUrl: "https://via.placeholder.com/150/ea51da",
  },
  {
    id: 38,
    title: "natus magnam iure rerum pariatur molestias dolore nisi",
    thumbnailUrl: "https://via.placeholder.com/150/4f5b8d",
  },
  {
    id: 39,
    title: "molestiae nam ullam et rerum doloribus",
    thumbnailUrl: "https://via.placeholder.com/150/1e71a2",
  },
  {
    id: 40,
    title: "est quas voluptates dignissimos sint praesentium nisi recusandae",
    thumbnailUrl: "https://via.placeholder.com/150/3a0b95",
  },
  {
    id: 41,
    title: "in voluptatem doloremque cum atque architecto deleniti",
    thumbnailUrl: "https://via.placeholder.com/150/659403",
  },
  {
    id: 42,
    title: "voluptatibus a autem molestias voluptas architecto culpa",
    thumbnailUrl: "https://via.placeholder.com/150/ca50ac",
  },
  {
    id: 43,
    title: "eius hic autem ad beatae voluptas",
    thumbnailUrl: "https://via.placeholder.com/150/6ad437",
  },
  {
    id: 44,
    title: "neque eum provident et inventore sed ipsam dignissimos quo",
    thumbnailUrl: "https://via.placeholder.com/150/29fe9f",
  },
  {
    id: 45,
    title: "praesentium fugit quis aut voluptatum commodi dolore corrupti",
    thumbnailUrl: "https://via.placeholder.com/150/c4084a",
  },
  {
    id: 46,
    title: "quidem maiores in quia fugit dolore explicabo occaecati",
    thumbnailUrl: "https://via.placeholder.com/150/e9b68",
  },
  {
    id: 47,
    title: "et soluta est",
    thumbnailUrl: "https://via.placeholder.com/150/b4412f",
  },
  {
    id: 48,
    title: "ut esse id",
    thumbnailUrl: "https://via.placeholder.com/150/68e0a8",
  },
  {
    id: 49,
    title: "quasi quae est modi quis quam in impedit",
    thumbnailUrl: "https://via.placeholder.com/150/2cd88b",
  },
  {
    id: 50,
    title: "et inventore quae ut tempore eius voluptatum",
    thumbnailUrl: "https://via.placeholder.com/150/9e59da",
  },
];

const productsWithPrice = products.map((product) => ({
  ...product,
  price: Math.floor(Math.random() * 9000) / 100 + 10,
}));

export function fetchProducts() {
  return productsWithPrice;
}
