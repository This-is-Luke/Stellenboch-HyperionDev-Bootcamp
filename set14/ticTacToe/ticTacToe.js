// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you
function evaluatePlay(grid) 
{
    // Check for row wins
    // for loop to check the row using grid.length
    for (let row = 0; row < grid.length; row++) 
    {   
        // if loop to check the row
        if (grid[row][0] === grid[row][1] && grid[row][1] === grid[row][2] && grid[row][0] !== "") 
        {   
            console.log("---------------------")
            console.log("in terms of the given row win const... ")
            // if the above condition is true, im passing in the value of the first element of the row
            console.log
            (// im using a ternary operator(shorthand if-else) to check if the first element of the row is X or O
            `${grid[row][0]} has won the game!\n${grid[row][0] === "X" ? "O" : "X"} has unfortunatly lost the game`
            );
            console.log("---------------------")
            // return the function
            return;
        }
    }

    // Check for column wins
    // for loop to check the column using grid[0].length
    for (let col = 0; col < grid[0].length; col++) 
    {   
        // if loop to check the column
        if (grid[0][col] === grid[1][col] && grid[1][col] === grid[2][col] && grid[0][col] !== "") 
        {   
            console.log("in terms of the given column win const... ")
            console.log
            (   // again im using the shorthand if-else to help log the output
                `${grid[0][col]} has won the game!\n${grid[0][col] === "X" ? "O" : "X"} has unfortunatly lost the game`
            );
            console.log("---------------------")
            // return the function
            return;
        }
    }

    // Check for diagonal win
    // this one doesnt need a for loop because by definition diagonal will always be in the same position
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] !== "") 
    {   
        console.log("in terms of the given diagonal win const... ")
        console.log
        (
            `${grid[0][2]} has won the game!\n${grid[0][2] === "X" ? "O" : "X"} has unfortunatly lost the game`
        );
        console.log("---------------------")
        // return the function
        return;
    }

    // Check for inverse diagonal win
    // this one is identical to the diagonal win but the indexes are different starting at [0,0] instead of [0,2]
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== "") 
    {   
        console.log("in terms of the inverse given diagonal win const... ")
        console.log
        (   
            // again im using the shorthand if-else to help log the output
            `${grid[0][0]} has won the game!\n${grid[0][0] === "X" ? "O" : "X"} has unfortunatly lost the game`
        );
        console.log("---------------------")
        // return the function
        return;
    }

}

// call the function to evaluate the different const arrays given.
evaluatePlay(rowWin);
evaluatePlay(colWin);
evaluatePlay(diagonalWin);
evaluatePlay(diagonalWinInverse);

/* 
This assignment made me come accros a shorthand for a if statemnt while researching, thank you :) 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
*/
/*
this assignment was fun as I am becoming more familiar with javascript,
but I still have to double check things like the for loops and if statements to make sure I am using the correct syntax.
Although there are easy tools these days to help with the syntax, I worry that I wont remember everything for the interviews if the tools arent present.
*/

