const app = require("express")();
const path = require("path")
const PORT = process.env.PORT || 3000 ;

app.get("/home", (req,res) => {
	res.sendFile(path.join(__dirname,"/index.html")) ;
});

app.listen(PORT, () => { 
	console.log(`App on at port ${PORT}`);
});


