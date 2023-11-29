# Color guessing game  
this game is built from [Max's tests](https://github.com/maxhaggmancmedu/testing-guessing-game), it should pass all tests avaliable!

[live site](https://original-color-guessing-game-snowy.vercel.app/)

### Feedback for existing tests
- overall everything worked well and was easily understandable!
- the only issue i had was that some unit tests run in isolation would pass even if the code was incorrect
  - *Color to guess component renders and has the correct color → Background color is the same as the color user is trying to guess*
      - in isolation this will still pass even if no background color is added
  - *Correct guesses component and its value renders → So that the value of correctGuesses is 0 when page has rendered*
      - the test will always pass as long as you are rendering `correctGuesses` since you're passing in 0 as the prop, what the test actually tests is that the prop is rendred correctly. this test should be renamed or done differently
  - *Wrong guess component is not being displayed in the document when page has rendered*
      - i can render the component on page load and still pass the test when run in isolation. i'm not completly sure why but i know the role `paragraph` is not recommended according to [w3](https://www.w3.org/TR/html-aria/#docconformance) so maybe it has something to do with that

### Tests that would have been nice to have
- a test to ensure the same hex option isn’t displayed twice

## Original readme

    Components: App: 
                     Handles game state
                Header:
                        Display game title 
                Colors: 
                        Hex colors for user to guess between
                Color: 
                        A button for each color to click on
                ColorToGuess: 
                        Displaying the color user is trying to guess
                WrongGuess:
                        Tells user if guess was incorrect
                CorrectGuessesInARow:
                        Displaying the number of correct guesses user has made in a row                

    State: colors
           correctColor
           wrongGuess
           correctGuessesInARow 

    Gameplay: Render buttons with colors
              Comparison ( user button clicked & correctColor )

    Result: Correct Guess: 
                           Change the color to guess to a new color
                           Change the Color options to new options
                           Increment correct guesses in a row by 1     
    
            Incorrect Guess: 
                             Tell user they made a wrong guess
                             Set correct guesses in a row to 0  

## SCREENSHOTS

### Initial game
![image](https://github.com/maxhaggmancmedu/testing-guessing-game/assets/116894648/616e445c-5f22-4042-87d5-99523a67d7cd)



### User incorrect guess
![image](https://github.com/maxhaggmancmedu/testing-guessing-game/assets/116894648/dd836e29-553c-4b0c-93ad-ac2126da682c)


### User correct guess
![image](https://github.com/maxhaggmancmedu/testing-guessing-game/assets/116894648/ba9518e6-65ac-4295-a06a-4f045f67647d)




  
