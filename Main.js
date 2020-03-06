var Start_Search_Flag=false;
var generate_Wall_Flag=-1; 


// select column to be a wall 
var Select_Column = 11; // Exclusively for Generate_Column_Walls()

/*
generate_Wall_Flag   // -1 no wall
-->Generate_Checker_Maze   0 
-->Generate_Column_Walls   1
-->Generate_Vertical_Walls 2
-->Generate_Horizontal_Walls  3
-->Generate_Maze_Walls   4
-->Generate_Walls   5 
*/
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


/*
_____________________Bidirectional Search_________________________
*/

var start_Agent_A; 
var finish_Agent_A; 
var Visited_Nodes_agent_A = []; 
var Unvisited_Nodes_agent_A = []; 

var start_Agent_B; 
var finish_Agent_B; 
var Visited_Nodes_agent_B = []; 
var Unvisited_Nodes_agent_B = []; 





/*
_____________________End Of Bidirectional Search_________________________
*/

// grid[0][3]   1st column , 4th row 

// Initializing 
function setup() {
  var width =600; 
  var height= 600; 
  // frameRate(10); for controling the speed 
  createCanvas(width,height);
  console.log('A*');

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


// grid[1][1] is only used for mazes 

  start = grid[4][4]; 
  end = grid[15][15];  


 Unvisited_Nodes.push(start); // Default Not bidirectional 

  

  start_Agent_A = grid[1][1];  
  finish_Agent_A = grid[15][15]; 

  Unvisited_Nodes_agent_A.push(start_Agent_A);

  start_Agent_B = grid[rows-1][rows-1];
  finish_Agent_B = grid[15][15]; 

  Unvisited_Nodes_agent_B.push(start_Agent_B);






 
  // Unvisited_Nodes.push(start);

  // for (i=0;i<cols;i=i+2)
  // {
  //   for(j=0;j<rows;j=j+2){
  //     grid[i][j].wall = true;
  //   }
  // }


  // for (i=1;i<cols;i=i+2)
  // {
  //   for(j=1;j<rows;j=j+2){
  //     grid[i][j].wall = true;
  //   }
  // }

  // start.wall = false;
  // end.wall=false; 



   if(generate_Wall_Flag == -1)
{
  // generate no wall 
}
if(generate_Wall_Flag == 0)
{
  Generate_Checker_Maze(grid,start,end);  // default 
}
if(generate_Wall_Flag == 1)
{
  Generate_Column_Walls(grid,start,end,Select_Column);  // default 
} 
if(generate_Wall_Flag == 2)
{
  Generate_Vertical_Walls(grid,start,end);  // default 
} 
if(generate_Wall_Flag == 3)
{
  Generate_Horizontal_Walls(grid,start,end);  // default 
} 
if(generate_Wall_Flag == 4)
{
  Generate_Maze_Walls(grid,start,end,rows);  // default 
} 
if(generate_Wall_Flag == 5)
{
  Generate_Walls(grid,start,end);  // default 
} 
  // Generate_Column_Walls(grid,start_Agent_A,finish_Agent_A,Select_Column);

  }


  // we need an animation loop until it ends(the search algorithm actually )
function draw() // we use draw function instead of while loop because we want to show things visually 
{ // actually draw() is a never ending loop 

  console.log('mouseX : '+ Math.floor(mouseX/rows) + ' mouseY : '+ Math.floor(mouseY/cols));

  if(mouseIsPressed){
    if (mouseButton === LEFT) {
      console.log('LEFT');
      grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].Show_information();
      grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].Show_Parent_information();
      grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].wall=true;
      background(mouseX, mouseY, 93);
    end.Show_information();
    background(0);
    Render_Grid_Colors(grid);
    start.Show_information();
    end.Show_information();
  
    }




    if (mouseButton === RIGHT) {
      console.log('RIGHT');
      grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].Show_information();
      grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].Show_Parent_information();
      grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].wall=false;
      background(mouseX, mouseY, 93);
    end.Show_information();
    background(0);
    Render_Grid_Colors(grid);
    start.Show_information();
    end.Show_information();
  
    }

    


    grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].Show_information();
    grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].Show_Parent_information();
    // grid[Math.floor(mouseX/rows)][Math.floor(mouseY/cols)].wall=true;
    
    background(mouseX, mouseY, 93);
  
  console.log("++++++++++++++++++++++");
  console.log("++++++++++++++++++++++");

  end.Show_information();

  // finish_Agent_A.Show_information(); // for bidirectional search 




  


  // Bidirectional_Breadth_First_Search_Algorithm(grid,Visited_Nodes_agent_A,Unvisited_Nodes_agent_A,finish_Agent_A ,
  //   Visited_Nodes_agent_B,Unvisited_Nodes_agent_B,finish_Agent_B); 

  // 1 3  5 7 8



  // * for debugging 



  // Bidirectional_Render_Colors(grid,Visited_Nodes_agent_A,Unvisited_Nodes_agent_A,Visited_Nodes_agent_B,Unvisited_Nodes_agent_B);




  background(0);
  Render_Grid_Colors(grid);
  

  // Render_Colors(grid,Visited_Nodes,Unvisited_Nodes,path);  // default 

  
  


  start.Show_information();
  end.Show_information();

  }


  if (keyIsPressed === true || (Start_Search_Flag === true)) {
    console.log('yes');
     
  console.log("++++++++++++++++++++++");
  console.log("++++++++++++++++++++++");

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

   Start_Search_Flag = true;
  }




//          ------FOR TESTING ONLY ----------
// path = []; 
//   temp = current_Node; 
//   path.push(temp);
//   while(temp.previous){
// path.push(temp.previous);
// temp = temp.previous; // backtracks until it reaches to start 

  // }

  /*
  COLORS : 
  white --> color(255,255,255)
  red --> color(255,0,0)
  green --> color(0,255,0)
  blue --> color(0,0,255)
  black --> (color(0,0,0)
  gray --> color (x,y,z) | x = y = z and x,y,z <= 255

  */ 
  //Unvisited_Nodes[0].show(color(0,255,0)) // set color to green 




/*
grid[1][0].show(); // you can check rendering cells if you want ! 


*/
// sleep(1000);
}

/* 
Unvisited_Nodes --> the nodes that need to be evaluated and we need to evaluate them before putting them in the CLOSEDSET
Visited_Nodes --> stores all the nodes that are finished being evaluated _ so that we don't need to revisit it 
 
*--> the algorithm is finished when the Unvisited_Nodes is EMPTY (so that nothing needs to be evaluated!)


there are 2 ways that algorithm can finish : 
1.our Unvisited_Nodes is empty and we have reached our goal --> we can the path to the goal 
2.our Unvisited_Nodes is empty and we have not reached our goal --> we have no path to the goal 

BYDEFAULT : 
Visited_Nodes is EMPTY 
Unvisited_Nodes has 1 NODE (starting node)


*/ 




