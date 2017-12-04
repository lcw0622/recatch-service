import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: String,
    userName: String,
    author: String,
    title: String,
    plaintext: String,
    content: String,
    publishDate: Date,
    postStatus: {
        type: String,
        enum: ['Draft', 'Publish', 'Invaild'],
    },
    count: Number,
    type: String,
    coverImg: String,
    labels: Array,
});

postSchema.statics.findByStatus = async function (postStatus) {
    return await this.find({ postStatus: new RegExp(postStatus, 'i') })
};

postSchema.statics.findByUserId = async function (userId) {
    return await this.find({ userId });
};

export default mongoose.model('Post', postSchema);