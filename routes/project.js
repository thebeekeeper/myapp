
exports.index = function(req, res){
    var mongo = require('mongodb');
    var client = mongo.MongoClient;
    var BSON = mongo.BSONPure;
    client.connect("mongodb://localhost:27017/exampledb", function(err, db) {
        if(!err) {
            var theidID = req.params.id;
            var o_id = new BSON.ObjectID(theidID);
            var collection = db.collection('projects');
            collection.find({ '_id': o_id }, { 'name': 1, 'analyses': 1 }).limit(1).toArray(function(err, items) {
                var first = items[0];
                res.render('project', { title: first.name, analyses: first.analyses });
            });
        }
    });
};
