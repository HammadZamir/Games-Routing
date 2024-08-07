import React from "react";
import WordleRow from "./WordleRow";

function WordleGrid({ guesses, currentGuess, rowIndex, targetWord }) {
  // console.log(guesses ," : " , rowIndex ," : " ,currentGuess);
  return (

    <div className="grid grid-rows-6 gap-4 mb-8">
      {guesses.map((guess, index) => {
        // If it's the current row, display the current guess
        // console.log( index , guess , rowIndex , currentGuess)

    // const guessToShow = index === rowIndex ? currentGuess.split("") : guess;
    // console.log("guessToShow : " , guessToShow);


        const subString =  ((currentGuess+ "     ").substring(0,5));
        const guessToShow = index === rowIndex ? subString.split("") : guess;
    // console.log("guessToShow 1 : " , guessToShow);


        return (
          <WordleRow
            key={index}
            guess={guessToShow}
            targetWord={targetWord}
            isCurrentRow={index === rowIndex}
          />
        );
      })}
    </div>
  );
}

export default WordleGrid;




// import React from "react";
// import WordleRow from "./WordleRow";

// function WordleGrid({ guesses, currentGuess, rowIndex, targetWord }) {
//   return (
//     <div className="grid grid-rows-6 gap-4 mb-8">
//       {guesses.map((guess, index) => {
//         // If it's the current row, display the current guess
//         const guessToShow = index === rowIndex ? currentGuess.split("") : guess;

//         return (
//           <WordleRow
//             key={index}
//             guess={guessToShow}
//             targetWord={targetWord}
//             isCurrentRow={index === rowIndex}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default WordleGrid;