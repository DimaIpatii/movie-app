
module.exports = ctx => ({
    plugins : [
        require('postcss-import')(),
        require('autoprefixer')({
            "browses" : "> 5%"
        })
    ]
})