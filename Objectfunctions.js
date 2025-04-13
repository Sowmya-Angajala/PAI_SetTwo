const library=[
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, copies: 5 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, copies: 7 },
    { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", year: 1988, copies: 2 },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, copies: 4 },
    { title: "The Selfish Gene", author: "Richard Dawkins", genre: "Science", year: 1976, copies: 1 },
    { title: "The Origin of Species", author: "Charles Darwin", genre: "Science", year: 1859, copies: 3 }
  ];
  function mostPopularGenre(library){
      const genreCount={};
      for(let i=0;i<library.length;i++){
          const genre=library[i].genre;
          if(genreCount[genre]){
              genreCount[genre]++;
          }
          else{
              genreCount[genre]=1;
          }
      }
      let mostPopular="";
      let maxCount=0;
      for(let genre in genreCount){
          if(genreCount[genre]> maxCount){
              maxCount=genreCount[genre];
              mostPopular =genre;
          }
      }
      return `Most popular genre:"${mostPopular}" (${maxCount} books)`;
  }
  function averagePublicationYear(library){
      let totalYears =0;
      for(let i=0;i<library.length;i++){
          totalYears +=library[i].year;
      }
      const average=Math.floor(totalYears/library.length);
      return `Average publication year: ${average}`;
  }
  function bookWithLowAvailabitlity(library){
      const result =[];
      
      for(let i=0;i<library.length;i++){
          if(library[i].copies<3){
              result.push(library[i].title);
          }
      }
      return `Books with low availability:["${result}"]`;
  }
  console.log(mostPopularGenre(library))
  console.log(averagePublicationYear(library))
  console.log(bookWithLowAvailabitlity(library))
  
  