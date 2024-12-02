let db=mongoose.
        connect('mongodb://0.0.0.0:27017/e-commerce')
        .then(result=>{
            console.log('Success');
        }).catch(err=>{
            console.log(err);
        });