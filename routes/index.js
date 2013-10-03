
/*
 * GET home page.
 */

exports.index = function(req, res){
    var client = require('mongodb').MongoClient;
    client.connect("mongodb://localhost:27017/exampledb", function(err, db) {
        if(!err) {
            console.log('connected to database');
            var collection = db.collection('projects');
            var u1 = {'name': 'Laurus.UiTest', 'analyses': [ {'build_id': 9, 'build_date': '10-01-2013', 'result': 'pass', 'score': 69 }]};
            collection.insert(u1, function(err, inserted) { 
                console.log(err); 
                console.log(inserted);
            });
            /*var u2 = {'name': 'Laurus.Pfeffer', 'analyses': [ {'result': 'fail', 'score': 0 }]};
            collection.insert(u2, function(err, inserted) { 
                console.log(err); 
                console.log(inserted);
            });*/
            collection.find({}, { 'name': 1 }).toArray(function(err, items) {
                res.render('index', { title: 'projects', users: items });
            });
        }
    });
    //var list = [ 'one', 'two', 'three' ];
    //res.render('index', { title: 'fuzz', users: list });
};
