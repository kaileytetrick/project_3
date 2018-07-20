var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StashSchema = new Schema({
    category: String,
    name: String,
    level: Number,
    quantity: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}
);

var Stash = mongoose.model("Stash", StashSchema);

module.exports = Stash;
