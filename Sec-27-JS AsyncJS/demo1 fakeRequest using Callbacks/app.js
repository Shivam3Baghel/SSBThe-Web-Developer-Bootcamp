const fakeRequestCallback = (url, success, failure) => {
const delay = Math.floor(Math.random() * 4500) + 500;
setTimeout(() => {
if (delay > 4000) {
failure('Connection Timeout :(')
} else {
success(`Here is your fake data from ${url}`)
}
}, delay)
}


fakeRequestCallback('books.com', function () {
console.log("IT WORKED!!!!")
}, function () {
console.log("ERROR!!!")
})