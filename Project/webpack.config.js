//Estamos dizendo o ponto de entrada para nosso aplicativo JS ou o arquivo que queremos que o webpack assista, processe e agrupe
//outros arquivos nesse caminho
//utilizamso exports para que essa função entry possa ser utilizada em outro arquivo
const path = require('path')
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js', //Arquivo que será processado, assistido e agrupado
    output: {
        filename: 'bundled.js', 
        path: path.resolve(__dirname, 'app') //Local aonde será gerado o novo arquivo agrupado
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}