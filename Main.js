var Start_Search_Flag=false;
// var generate_Wall_Flag=-1; 

/*
generate_Wall_Flag   // -1 no wall
-->Generate_Checker_Maze   0 
-->Generate_Column_Walls   1
-->Generate_Vertical_Walls 2
-->Generate_Horizontal_Walls  3
-->Generate_Maze_Walls   4
-->Generate_Walls   5 
*/

// select column to be a wall 
var Select_Column = 11; // Exclusively for Generate_Column_Walls()


var Search_Algorithm_Flag=3;
var Search_Heuristic_Flag=1;
/*
Search_Algorithm_Flag 
-->  Breadth_First_Search_Algorithm 0 
-->  Uniform_Cost_Search_Algorithm 1 
-->  Greedy__Algorithm  (heuristic) 2
-->  A_Star_Algorithm(heuristic) 3 
-->

Search_Heuristic_Flag  
1 -->  Euclidean 
2 ---> Manhattan

*/
var Diagonals_Allowed = true;
var rows = 25;  // 35 with 1200 // 25 with 600
var cols = 25;
var grid = new Array(cols) // we make an array with a number of columns --> then each column has rows 
//(e.g. --> 5 cols , each , 5 rows )

var Unvisited_Nodes = []; 
/*
from Unvisited_Nodes we choose the node that has the minimum f() value 
*/ 
var Visited_Nodes = []; 
var start ; 
var end ; 
var Cell_Width;
var Cell_Height; 
var path = []; 


// grid[0][3]   1st column , 4th row 

// Initializing 
function setup() {
  var width =600; 
  var height= 600; 
  // frameRate(10); for controling the speed 
  createCanvas(width,height);

  Cell_Width = width / cols  // if it is 400(window) and we have 10 cols --> each Node is 40px wide
  Cell_Height = height /rows;  

  for (var i=0 ; i<cols;i++){
    grid[i] = new Array(rows);
  }



  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Node(i, j,Diagonals_Allowed);
    }
      //   grid[i][j] = 0  for debugging issues 
  // we want to make each grid[i][j] a Node (node i mean ) so that we can store things inside it (e.g. it's cost,i,j,...)

  }


// add neighbors of each Node 
  for (var i=0 ; i<cols;i++){
    for (var j=0 ; j<rows;j++){
     grid[i][j].addNeighbors(grid); 
           }
  }

  for (var i=0 ; i<cols;i++){
    for (var j=0 ; j<rows;j++){
     grid[i][j].wall = false; 
           }
  }



// grid[1][1] is only used for mazes 

  start = grid[4][4]; 
  end = grid[15][15];  



 Unvisited_Nodes.push(start); // Default Not bidirectional 
 
  }

var Start_Search_Flag = false;

function draw() 
{ 

if (true)
{
  if(mouseIsPressed){
    if (mouseButton === LEFT) {
      console.log('LEFT');
      if ( grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)] === undefined)
      {
        // do nothing 
      }else 
      {
        grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].wall=true;
      }
      
      background(mouseX, mouseY, 93);

    background(0);
    Render_Grid_Colors(grid);

    }




    if (mouseButton === RIGHT) {
      console.log('RIGHT');
    if ( grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)] === undefined)
    {
      // do nothing 
    }else 
    {
      grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].wall=false;
    }
      
      background(mouseX, mouseY, 93);
    background(0);
    Render_Grid_Colors(grid);
 
  
    }

    


    // grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].wall=true;
    
    background(mouseX, mouseY, 93);
  
  console.log("++++++++++++++++++++++");
  console.log("++++++++++++++++++++++");

  end.Show_information();


  }
}




    background(0);
    Render_Grid_Colors(grid);

if (Start_Search_Flag)
{

  console.log("passed");

  start.Show_information();
  end.Show_information();

  if (Search_Algorithm_Flag ==0)
  {
    Breadth_First_Search_Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end); // Default BFS   
  }
  if (Search_Algorithm_Flag ==1)
  {
    Uniform_Cost_Search_Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end); // Default BFS   
  }
  if (Search_Algorithm_Flag ==2)
  {
    Greedy__Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end,Search_Heuristic_Flag); // Default BFS   
  }
  if (Search_Algorithm_Flag ==3)
  {
    A_Star_Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end,Search_Heuristic_Flag); // Default BFS   
  }
  // Greedy__Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end,1); // Default BFS

   Render_Colors(grid,Visited_Nodes,Unvisited_Nodes,path);  // default 
   start.Show_information();
   end.Show_information();
}
if(!Start_Search_Flag)
{
  console.log("failed");
  Render_Colors(grid,Visited_Nodes,Unvisited_Nodes,path);  // default 
  start.Show_information();
  end.Show_information();
}


}



