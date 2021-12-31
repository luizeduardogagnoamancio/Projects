var post_schema = mongoose.Schema({data : JSON});
var post_model = mongoose.model('pokedex', post_schema);

const caminho = __dirname + '/pokedex.json'
const pokedexJSON = fs.readFileSync(caminho, 'utf-8')
const pokedex = JSON.parse(pokedexJSON)

var newData = new post_model({data : pokedex});

//saving json schema to mongodb         

newData.save(function(err){
    if (err) {
               throw err;
    }
    console.log('INSERTED!');
})