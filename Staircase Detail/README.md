### Stair Case Detail

Pseudo Code:

```js
Start

Input = 6;
stair = ""
For i=1 to Input; i++
    For j=(Input-i) to 0; j--
        stair+=" "
    For k=0 to i; k++
        stair+="#"
    
    stair+="\n"


Output=      
      #
     ##
    ###
   ####
  #####
 ######
#######
Stop
```

Code :

```js
const stairCase = (n) => {
    let stair = ""
    for (let i = 1; i <= n; i++) {
        for (let k = (n - i); k > 0; k--) {
            stair += " "
        }
        for (let j = 0; j < i; j++) {
            stair += "#"
        }
        stair += "\n"
    }

    console.log(stair)
}

stairCase(7)
```
