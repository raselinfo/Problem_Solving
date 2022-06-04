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



function get(url, cb) {
    let db = {}
    cb(db)
}

function getUserNameFromComment(db){
    get("/user?username=rabina",()=>{
        get("/posts?usserId=309",()=>{
            get("/comment?postId[0]=3",()=>{
                get("/commentUser?username=userName[0]",()=>{
                    console.log("new Commentd User Found")
                })
            })
        })
    }) 
}