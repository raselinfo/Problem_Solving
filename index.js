/**
 * 1. find user by username
 * 2. find post by userId
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the latest commented user
 */


// /user?username=username [+]
//     / posts ? userid = userid[0][+]
//         / comment ? postId = postId[0]
//             / commentUser ? username = username



// function get(url, cb) {
//     let db = {}
//     cb(db)
// }

// function getUserNameFromComment(db){
//     get("/user?username=rabina",()=>{
//         get("/posts?usserId=309",()=>{
//             get("/comment?postId[0]=3",()=>{
//                 get("/commentUser?username=userName[0]",()=>{
//                     console.log("new Commentd User Found")
//                 })
//             })
//         })
//     }) 
// }

// const isValid = true
// const getData = new Promise((resolve, reject) => {
//     if (isValid) {
//         resolve("I am Rabina")
//     } else {
//         reject("I am Rejected")
//     }
// })

// getData.then(value => {
//     console.log(value)
// }).catch(err=>{
//     console.log(err)
// })

// const getData = (ms) => new Promise((resolve,reject) => setTimeout(() => { reject("i am Rejected") }, ms))
// getData(4000).then(data => console.log(data)).catch(err => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(value => {
//         console.log(value)
//     }).catch(err => {
//         console.log(err.message)
//     })


// const getData = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(value => {
//             resolve(value)
//         }).catch(err => {
//             reject(err.message)
//         })
// })
// getData.then(value=>console.log(value)).catch(err=>console.log(err))


const getData = (url) => new Promise.resolve()
/**
 * 1. find user by username
 * 2. find post by userId
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the latest commented user
 */

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */
// function getUserNameFromComment(username) {
//     get(`users?username=${username}`, (user) => {
//         get(`posts?user_id=${user.id}`, (posts) => {
//             get(`comments?post_id=${posts[0].id}`, (comments) => {
//                 get(`users?username=${comments[0].username}`, (user) => {
//                     console.log(user);
//                 });
//             });
//         });
//     });
// }
// getData('/users?username=rasel')
//     .then(value => {
//         return getData(' /posts?user_id=5')
//     })
//     .then(value=>{
//         return getData('/comments?post_id=6')
//     })
//     .then(value=>{
//         return getData('/users?username="rasel"')
//     })
//     .then(user=>{
//         console.log(user)
//     }).catch(err=>{
//         console.log(err)
//     })