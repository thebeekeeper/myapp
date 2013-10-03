/* saves an analysis part to a project
 * - should only be called through urls normally
 */

exports.index = function(req, res){
    var client = require('mongodb').MongoClient;
    client.connect("mongodb://localhost:27017/exampledb", function(err, db) {
        if(!err) {
            console.log(req);
            /*var u1 = {
                'name': 'Laurus.UiTest', 
                'analyses': [
                    {
                        'build_id': 9, 
                        'build_date': '10-01-2013', 
                        'result': 'pass', 
                        'score': 69 
                    }
                ]
            };
            var collection = db.collection('projects');
            collection.insert(u1, function(err, inserted) { 
                console.log('saved analysis: ' + inserted);
            });*/
            res.end();
        }
    });
};
