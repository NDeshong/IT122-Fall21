//Imports
const express = require('express');
const app = express();
//const port = 5002;
//app.set(`port`)

//Static Files
app.use(express.static(`public`));
app.use(`/css`,express.static(__dirname + `pubic/css`));
app.use(`/js`,express.static(__dirname + `pubic/js`));
app.use(`/img`,express.static(__dirname + `pubic/img`));


// Set views
app.set('views','./views');
app.set('view engine','ejs');

//Set Routes
app.get('',(req, res) => {
res.render('index', { text: 'This is EJS!'})
});

app.get('/about',(req, res) => {
res.render('about', { text: 'About Me'})
});



let listener = app.listen();
console.log(`Listening to port number ${listener.address().port}`);




//app.listen(port, () => console.info(`App listen on port  ${port}`));
