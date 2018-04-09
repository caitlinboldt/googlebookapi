//create main divs
const div = document.createElement("div");
div.className = "container-fluid text-center main";
document.body.appendChild(div)

const row = document.createElement("div");
row.className = "row"
div.appendChild(row);

$('.btn').click(function(){
    //get user input
    const userSearch = $('input').val();
    //get google books api
    $.get('https://www.googleapis.com/books/v1/volumes?q=' + userSearch).then(function(response){
        
        for(let i = 0; i < response.items.length; i++) {
            let title       = response.items[i].volumeInfo.title;
            let authors     = response.items[i].volumeInfo.authors;
            let price       = 'N/A';
            if(typeof response.items[i].saleInfo.listPrice !== 'undefined') {
                price       = response.items[i].saleInfo.listPrice.amount;
            }; 
            let pic         = response.items[i].volumeInfo.imageLinks.thumbnail;
            let anchor      = response.items[i].volumeInfo.infoLink;

            //create div
            let col = document.createElement('div');
            col.className = 'col-sm-4';
            row.appendChild(col);

            let bookdiv = document.createElement('div');
            bookdiv.className = 'bookbox';
            col.appendChild(bookdiv)

            //create title
            let h4 = document.createElement('h4');
            h4.textContent = title;
            bookdiv.appendChild(h4);

            //create authors
            let author = document.createElement('p');
            author.className = 'author'
            author.textContent = authors;
            bookdiv.appendChild(author);

            //create price
            let p = document.createElement('p');
            p.className = 'price'
            p.textContent = 'Price: ' + price;
            bookdiv.appendChild(p);

            //create image
            let img = document.createElement('img');
            img.src = pic;
            bookdiv.appendChild(img);

            //create anchor tag for book preview
            let a = document.createElement('a');
            a.href = anchor;
            a.target = '_blank';
            a.textContent = 'Preview Here';
            bookdiv.appendChild(a);
        };
    });
});


