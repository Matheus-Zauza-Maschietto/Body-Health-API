import app from './app'

function main() {
    app.listen(3000, () => {
        console.log('Server running at port 3000')
    })
}

main()