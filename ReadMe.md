# Mysterious Organism
## About the project
This is a challenge project which is part of Full-Stack Engineering path at Codecademy.

Project goal: Create a code that helps to generate virtual P.aequor organisms as objects for study.

Language: JavaScript


## Detailed requirements (main)
* Create a factory function __pAequorFactory()__ that has two parameters (specimen number and DNA strand).

* Create __mutate__ method which randomly change a DNA base in the 15-base strand of the object, and return the mutated strand

* Create __compareDNA__ method, which returns % of similar base at similar location between 2 organisms

* Create __willLikelySurvive__ method, which returns *true* or *false* regarding whether organism can survive. (Organism is likely to survive if at least 60% of the bases in their DNA is made up of either C or G)

* Create 30 instances of the P.aequor organisms that are likely to survive and store in an array


## Additional tasks
* Create __complementStrand__ method, which returns the complementary DNA strand based on the organism's DNA strand

* Use __compareDNA__ to find the 2 most related instances of pAequor
(note: due to the console.log requirement in compareDNA method, this current results in printing results whenever comparison is made)