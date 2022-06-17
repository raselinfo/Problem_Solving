### Raffle Draw

Pseudo Code

```js
Input=[Array of tickets]
process=generate the random winner
Output = [Array of winners]
```

Code
```js
const db = [
    {
        name: "Rasel",
    }, 
    {
        name: "Rabina",
    },
     {
        name: "Sakib",
    }, 
    {
        name: "Santo",
    }, 
    {
        name: "Imran",
    },
     {
        name: "Jakir",
    }
]

function draw(winnerCount) {
    const winner = new Array()
    const winnerIndexes = []
    let index = 0
    while (index < winnerCount) {
        let indexes = Math.floor(Math.random() * db.length)
        console.log(indexes)
        if (!winnerIndexes.includes(indexes)) {
            winnerIndexes.push(indexes)
            winner.push(db[indexes])
            index++
            continue;
        }
    }
    console.log(winnerIndexes)
    console.log(winner)

}

draw(2)
```