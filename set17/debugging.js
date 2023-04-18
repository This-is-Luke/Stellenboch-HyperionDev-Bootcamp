let printValuesOf = (jsObject, keys) => 
{
  for (let i = 0; i < keys.length; i++) // in this line, removed the <= and replaced it with < 
  {
    let key = keys[i];
    console.log(jsObject[key]); //in this line, the key is not referenced correctly. relplaced k with key
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: `d'oh!`, // in this line, the use of the single quote is not correct. replaced ' with `
  maggie: '(Pacifier Suck)',
};

printValuesOf(simpsonsCatchphrases, ['lisa', 'bart', 'homer']); // in this line, the array wasnt referenced correctly, added []

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined