# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
|Ruiqi Yu |340546 |
|Junzhe Tang | 340747|
|Yuhan Bi | |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 

**10% of the final grade**

###Dataset

The dataset we choose to use is NBA games data, which can be found on the website: https://www.kaggle.com/datasets/nathanlauga/nba-games. 
This dataset provides the matches games information from different seasons, which contains technical statistics like three point percentage, free throw percentage, and assists. 
Besides, the history of different teams, like the team's city, the team founded year, and the team's stadium. 
In detail, the dataset contains 5 files:
+ games.csv : all games from 2004 season to 12.03.2022, teams and some details like number of points, etc.
+ games_details.csv : details of games dataset, all statistics of players for a given game.
+ players.csv : players details (name).
+ ranking.csv : ranking of NBA given a day.
+ teams.csv : all teams of NBA.

### Problematic

The project aims to show basic tactics and in-depth analysis by visualization. The motivation is to provide the NBA fans efficient and convenient reading experience of reading data. The audience of the

Some content we want to show in our visualization is as followed:

+Comparison of players’ performance from different season stages:
In NBA, matches can be divided into two types: regular season matches and playoff matches. For two kinds of matches, the format is different, and players’ playing style and enthusiasm, are dissimilar, which causes the differences in technical statistics. In order to have a better understanding of the player and teams, the matches should be classified. Moreover, the playoff advancement rules were modified these years due to COVID-19. A new play-in tournament was added to the format. 

+ Comparison of players’ performance from different seasons:
Many factors should be taken into consideration in the comparison of players. To compare players from different seasons, the data cannot be simply used for comparison. The performance of players is related to the rules. The modification of rules contributes to the growth of the average score. In other words, the difficulty of obtaining the same score varies from year to year.

+Comparison of teams’ tactics from different seasons:
The tactics of one team change due to the player transaction rules modification and so on. To have a better understanding of one team, we want to show the differences between one team in different seasons.

+Comparison of performance at home and way:
The performance of a team is also related to whether the match’s place is home or away. The difference in win rate and basic tactics can help us know the importance of home and away.

### Exploratory Data Analysis

From games.csv:
| HOME_TEAM_ID| VISITOR_TEAM_ID | SEASON| PTS_home | PTS_away|
| -------------- | ------ |---|---|---|
|1610612748 |1610612750 |2021 |104|113|

From teams.csv: 
|TEAM_ID | ABBREVIATION | NICKNAME | CITY |
| -------------- | ----|---|---|
| 1610612737 | ATL | Hawks | Atlanta |

#### Basic match data
By combining two files, two sides of the team, whether the team is home or away, and the points of both teams can be known. The comparison of points can determine which team wins the game.


### Related work



## Milestone 2 

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone


