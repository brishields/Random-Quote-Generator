# Random-Quote-Generator

Task

    To create a quote generator which:
     1. Randomly chooses a quote stored in an array to display.
     2. Changes the background to a random color along with the quote on a set timer interval and upon clicking the button.
     3. Automatically changes the quote and background color at certain time intervals.
     4. Restart the `timer` interval when the button is pressed.

Improvements

    Background Color
    I've chosen to pre-select color schemes and store them in an array. This allows me to coordinate the button color with the background color in a complementary way. I also allows me to choose pleasing and high-contrast colors, eliminating colors which would make it difficult to read white text. 
    
    Design
    I made minor yet impactful changes to the original design. I removed the box surrounding the quote and underline beneath the heading. This yields a cleaner more modern UI.
    I've chosen a google font, Sue Ellen Francisco, which compliments the theme of my content.
    I've also added a transition to the background color change to match that which already existed on the button.

Challenges

    Repeating Colors and Quotes
    Originally, I stored only 5 quotes and 5 colors in their respective arrays. I noticed a higher than desirable number of consecutively repeating colors and quotes. To decrease this rate, I increased the `quote` array to 31 items and `color` to 11 items. It had the desired affect lessening the occurrence of the color scheme and/or quote not changing with each interval. I considered coding it so that no one color or quote could be display twice but decided against it for UX proposes. The user would eventually have a "dead" button once the arrays where exhausted. Which wouldn't be at the same time given the differences in 'quote` and `color` array lengths. The user would eventually have to reload the page which isn't the experience I wanted.



https://brishields.github.io/Random-Quote-Generator/
