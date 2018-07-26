var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StashSchema = new Schema({
    category: {type: String},
    name: {type: String},
    quantity: {type: Number},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}
);

// var Stash = mongoose.model("Stash", StashSchema);

module.exports = Stash = mongoose.model('stashes', StashSchema);
