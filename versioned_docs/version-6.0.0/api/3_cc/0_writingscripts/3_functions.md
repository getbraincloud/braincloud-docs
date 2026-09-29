# Functions

Functions are as you would expect in Javascript, with the added limitation that they should be defined *before* the inline portion of your script begins.

*[This is because if the functions were below your inline code, the last object in your code would be your last function, and the Rhino engine doesn't know how to evaluate that in terms of returned results.]*

You can see how the `PostScores` script calls the `postScore()` function that is defined at the top.