const mongoose = require('mongoose');



mongoose.connect('mongodb://0.0.0.0:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // 5 seconds timeout
})
    .then(() => console.log('DB connection successful'))
    .catch((err) => console.error(err));
