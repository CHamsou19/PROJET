
var books = [
    {
      title: "miss-dior",
      
      date_de_production: "2022",
      genre: ["parfum pour les femmes"],
      stars: 5,
      price: 700,
      image:"image/2.jpg",
    },
    {
      title: "red-vanilla ",
      date_de_production: "2019",
      genre: ["parfum pour les femmes"],
      stars: 4,
      price: 800,
      image:"image/3.jpg",
    },
    {
      title: "dior-sauvage",
      
      date_de_production: "2010",
      genre: ["Aventure", "Romance", "Policier"],
      stars: 3,
      price: 1000,
      image: " image/4.jpg",
    },
  ];
  
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
    var ciblehtml = document.getElementById("all-books");
  
    var book = books[i];
  
    ciblehtml.innerHTML += `
        <div>
            <img src=${book.image} width='200px' height="80%" alt="">
            <h1>${book.title}</h1>
            <h5>${book.author}</h5>
            <div class='d-flex justify-content-between'>
                <h6>${book.date_publication}</h6>
                <h6>${book.stars} étoiles</h6>
            </div>
            <h3>${book.price}.00 DA</h3>
            <button>Commander</button>
        </div>
      `;
  }
  