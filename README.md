# Color guessing game  
 

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




  