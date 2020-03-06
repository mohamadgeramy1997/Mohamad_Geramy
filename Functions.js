
function sleep(milliseconds) {

    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }


  }

  
function Render_Colors(grid,Visited_Nodes,Unvisited_Nodes,path)
{

  for (var i =0 ; i<cols;i++){
    for (var j =0 ; j<rows;j++){
      grid[i][j].show(color(255,255,255)); // white
    }
   }

  Nodes_BySearch_Render(Visited_Nodes,color(255,0,0)); // red

  Nodes_BySearch_Render(Unvisited_Nodes,color(0,255,0)); // green

  Nodes_BySearch_Render(path,color(0,100,255));   // Dark blue 
}
  

function Render_Grid_Colors(grid)
{

  for (var i =0 ; i<cols;i++){
    for (var j =0 ; j<rows;j++){
      grid[i][j].show(color(255,255,255)); // white
    }
   }
}
  




function removeFromArray(array,element)
{

  for (var i = array.length-1;i>=0;i--){
   if (array[i] == element)
   {
     array.splice(i,1);
   }
}


}

function  Euclidean_Distance_heuristic(Start,End){  // it can also be used to measure the distance between two nodes for Dijkstra Algorithm
    /*
    this is based on PythagoreanTheorem 
    SQRT((End.i - Start.i)^2 + (End.j - Start.j)^2)  

    */ 
     // eucludian distance from a to b  
    var d = Math.sqrt(Math.pow((End.i-Start.i),2) + Math.pow((End.j-Start.j),2));
    // for example Cell(2,5) to Cell(3,7) -> sqaure_root_of_((3)^2 + (4)^2) = 5
    return d;
    }
    
    /*
    h() --> heuristic value or estimated value to reach the goal 
    h*() --> true cost to reach the value 
    admissible heuristic NEVER OVERESTIMATES the cost to reach the goal 

    *** ADMISSIBLE HEURISTIC guarantees that we will find the optimal path to the goal ***

    eucludean distance heursitic is admissible --> h()<=h*()

    manhattan distance heursitic is not admissible --> X f()<=f*()
    
    */

    function  Manhattan_Distance_heuristic(Start,End){
        var d = abs(Start.i - End.i) + abs(Start.j - End.j);  // manhattan(Block) distance from a to b 
     // for example Cell(2,2) to Cell(5,7) -> |2-5| + |2-7| = 3 + 5 = 8 
     return d;
    }


    function Nodes_BySearch_Render(array,color){
     for(var i=0;i<array.length;i++)
     {
         array[i].show(color);
     }

    }


    function Initialize_Nodes_Render(columns,rows,grid){

    }



    

function cc(width,height)
{
    createCanvas(width,height);
    background(0);
}


function Generate_Checker_Maze(grid,start,end){

  for (i=0;i<cols;i=i+2)
  {
    for(j=0;j<rows;j=j+2){
      grid[i][j].wall = true;
    }
  }


  for (i=1;i<cols;i=i+2)
  {
    for(j=1;j<rows;j=j+2){
      grid[i][j].wall = true;
    }
  }

  start.wall = false;
  end.wall=false; 

}


function Generate_Walls(grid,start,end){

  for (i=0;i<cols;i=i+2)
  {
    for(j=0;j<rows;j=j+1){
      if(random(1)<0.4){
        grid[i][j].wall = true;
      }
    }
  }


  for (i=1;i<cols;i=i+2)
  {
    for(j=1;j<rows;j=j+1){
      if(random(1)<0.3){
        grid[i][j].wall = true;
      }
    }
  }


  // for (i=2;i<cols;i++)
  // {
  //   for(j=2;j<rows;j++){
  //     if(random(1)<0.3){
  //       grid[i][j].wall = true;
  //     }
      
  //   }
  // }

  start.wall = false;
  end.wall=false; 

}


function Generate_Column_Walls(grid,start,end,Select_Column){


    for(j=0;j<rows;j=j+1){
        grid[Select_Column][j].wall = true;
    }


    for(j=0;j<rows;j=j+1){
      if(random(1)<0.1){
        grid[Select_Column][j].wall = false;
      }
    }



  start.wall = false;
  end.wall=false; 

}





function Generate_Vertical_Walls(grid,start,end){ // Vertical --> |

 for(j=0;j<rows;j=j+2){

  for (i=0;i<cols;i++)
  {
    grid[i][j].wall = true;
  }
 }


 for(j=0;j<rows;j=j+2){
  for (i=0;i<cols;i++)
  {
    if(random(1)<0.2){
            grid[i][j].wall = false;

          }
  }
 }
 


  start.wall = false;
  end.wall=false; 

}


function Generate_Horizontal_Walls(grid,start,end){ // Horizontal --> ___

for(j=0;j<rows;j=j+2){
  for (i=0;i<cols;i++)
  {
    grid[j][i].wall = true;
  }
}

 
for(j=0;j<rows;j=j+2){
  for (i=0;i<cols;i++)
  {
    if(random(1)<0.2){
             grid[j][i].wall = false;
           }
  }
}

  
 
 
   start.wall = false;
   end.wall=false; 
 
 }


 function Generate_Maze_Walls(grid,start,end,Rows){ // Vertically And Horizontally 



   for(j=0;j<rows;j++){

    for (i=0;i<cols;i++)
    {
      grid[i][j].wall = false;
    }
   }


   for(j=1;j<rows;j=j+2){

    for (i=1;i<cols;i=i+2)
    {
      grid[i][j].wall = true;
    }
   }

for (i=0;i<cols;i++){
  grid[i][0].wall = true;
  grid[0][i].wall = true;
  grid[Rows-1][i].wall = true;
  grid[i][Rows-1].wall = true;
}



 for(j=2;j<rows;j=j+2){
    for (i=3;i<cols;i=i+2)
    {
      if(random(1)<0.5){
        grid[j][i].wall = true;
      }
    }
  }


  for(j=2;j<rows;j=j+2){
    for (i=3;i<cols;i=i+2)
    {
      if(random(1)<0.3){
        grid[i][j].wall = true;
      }
    }
  }

     start.wall = false;
     end.wall=false; 
   
   }






   // Search Algorithms 
   

     





   function Breadth_First_Search_Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end)
   {
  /*
  *** IMPORTANT --> It selects the node from unvisited nodes *** 

the important thing about BFS is that it finds the shortest path from start to goal 
  */ 
 
  if (Unvisited_Nodes.length > 0){
    // we can keep going , the loop is not finished yet !
    var lowestvalueIndex = 0; 

var current_Node = Unvisited_Nodes[lowestvalueIndex];

if (current_Node ===  end){ // === is for equal testing 
  console.log("Searching Done!");

  // now we need to find the path 
  path = []; 
  temp = current_Node; 
  path.push(temp);
  while(temp.previous){
path.push(temp.previous);
temp = temp.previous; // backtracks until it reaches to start 

  }


  noLoop();
  // return;
}

removeFromArray(Unvisited_Nodes,current_Node)
Visited_Nodes.push(current_Node);



var neighbors = current_Node.neighbors // the neighbors of the current_Node
for (var i = 0 ; i<neighbors.length;i++){
  var neighbor = neighbors[i];  // checking every neighbor 

 
 if (!Visited_Nodes.includes(neighbor) && !neighbor.wall){ 


var Alt = current_Node.g + 1;  

var newPath = false;
if (Unvisited_Nodes.includes(neighbor)) {

  if (Alt < neighbor.g) { 
    neighbor.g = Alt;
    newPath = true;
  }
} else {
  neighbor.g = Alt;
  newPath = true;
  Unvisited_Nodes.push(neighbor); 
}

// Yes, it's a better path
if (newPath) {
  neighbor.previous = current_Node;
}

}



}
console.log("________________________________");
} else{
// no solution 
console.log("no_Solution");
}
   }






   function Uniform_Cost_Search_Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end)
   {
     



  /*

   Uniform_Cost_Search_Algorithm is a mix of Dijkstra and BFS algorithm that which selects the node with minumum distance value to source 
   from the frontier queue(unvisited_nodes) that is added as time goes on ...



  *** IMPORTANT --> It selects the node from unvisited nodes *** 

   in here we have a for loop that selects the node that has the least f = g + h 
   I call it the node with lowestvalueIndex
   then it's neighbors will be updated 






  */ 
 
  if (Unvisited_Nodes.length > 0){
    // we can keep going , the loop is not finished yet !
    var lowestvalueIndex = 0;  // searchs for minimun value of index  // but not efficient O(N) we need minheap for that
    for (var i = 0 ; i< Unvisited_Nodes.length;i++){
      if(Unvisited_Nodes[i].g < Unvisited_Nodes[lowestvalueIndex].g)
              lowestvalueIndex = i ; 
    }

var current_Node = Unvisited_Nodes[lowestvalueIndex];

if (current_Node ===  end){ // === is for equal testing 
  console.log("Searching Done!");

  // now we need to find the path 
  path = []; 
  temp = current_Node; 
  path.push(temp);
  while(temp.previous){
path.push(temp.previous);
temp = temp.previous; // backtracks until it reaches to start 

  }


  noLoop();
  // return;
}

  /*
  when we select lowestvalueIndex node and update it's neighbors 
  it means 
  that we have visited it so we don't come back again and visit it 
  therefore 
  we delete it from Unvisited_nodes and add it to visited nodes
  */ 
removeFromArray(Unvisited_Nodes,current_Node)
Visited_Nodes.push(current_Node);


// main part of the algoritm start here 

  /*
   lowestvalueIndex
   then lowestvalueIndex node's neighbors will be updated (actually their f and g value)

  */ 
var neighbors = current_Node.neighbors // the neighbors of the current_Node
for (var i = 0 ; i<neighbors.length;i++){
  var neighbor = neighbors[i];  // checking every neighbor 

 




 if (!Visited_Nodes.includes(neighbor) && !neighbor.wall){ // if Visited_Nodes does not include neighbor AND our neighbor is not wall then ...

// var tempG = current_Node.g + Euclidean_Distance_heuristic(neighbor, current_Node);

// var tempG = current_Node.g + 1;  // of course it works 99% of time if we don't use diagonal movement and diagonal search 
/*
it is faster than the second method 
*/

// but if we want to use diagonals i have found it on the internet as follows : 

var Alt = current_Node.g + Euclidean_Distance_heuristic(neighbor, current_Node);  // alt := dist[v] + length(v, u)
/*
it is slower than the first method 
*/



// var tempG = current_Node.g +1;

// i think instead of adding 1 to g of the cell's neighbor g value, it adds the distance from current sell to it's neighbor's g value 

// Is this a better path than before?

var newPath = false;
if (Unvisited_Nodes.includes(neighbor)) {

  if (Alt < neighbor.g) {   // alt := dist[v] + length(v, u)
    neighbor.g = Alt;
    newPath = true;
  }
} else {
  neighbor.g = Alt;
  newPath = true;
  Unvisited_Nodes.push(neighbor);  // the reason why we do this again is that we want to make sure that 
  // we have found the minimum distance from our source (part of DIJKSTRA ALGORITHM)
}

// Yes, it's a better path
if (newPath) {
  neighbor.previous = current_Node;
console.log("   current neighbor's i : " + neighbor.i + "     current neighbor's j : " + neighbor.j);
console.log("g is : " + neighbor.g);
}





}

}
console.log("________________________________");
} else{
// no solution 
console.log("no_Solution");
}
// we want to keep the lowest g_score for each neighbor , block the other neighbors from updating it's g_score value
// to a greater one       
   }










   

   // Greedy Algorithm (Uses Heuristic ) 1 --> Euclidean // 2 --->Manhattan
   function Greedy__Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end,Select_Heuristic)
   {
     
  if (Unvisited_Nodes.length > 0){
    var lowestvalueIndex = 0; 
    for (var i = 0 ; i< Unvisited_Nodes.length;i++){
      if(Unvisited_Nodes[i].h < Unvisited_Nodes[lowestvalueIndex].h)
              lowestvalueIndex = i ; 
    }

var current_Node = Unvisited_Nodes[lowestvalueIndex];

if (current_Node ===  end){ // === is for equal testing 
  console.log("Searching Done!")

  // now we need to find the path 
  path = []; 
  temp = current_Node; 
  path.push(temp);
  while(temp.previous){
path.push(temp.previous);
temp = temp.previous; // backtracks until it reaches to start 

  }
  noLoop();
  // return;
}
removeFromArray(Unvisited_Nodes,current_Node)
Visited_Nodes.push(current_Node);

var neighbors = current_Node.neighbors // the neighbors of the current_Node
for (var i = 0 ; i<neighbors.length;i++){
  var neighbor = neighbors[i];  // checking every neighbor 

 if (!Visited_Nodes.includes(neighbor) && !neighbor.wall){ // if Visited_Nodes does not include neighbor AND our neighbor is not wall then ...

var tempG = current_Node.g + Euclidean_Distance_heuristic(neighbor, current_Node);


  neighbor.g = tempG;
  Unvisited_Nodes.push(neighbor);


if(Select_Heuristic == 1)
{
  neighbor.h = Euclidean_Distance_heuristic(neighbor, end);;
}

if(Select_Heuristic == 2){
  neighbor.h = Manhattan_Distance_heuristic(neighbor, end);;
}

  neighbor.previous = current_Node;
console.log("   current neighbor's i : " + neighbor.i + "     current neighbor's j : " + neighbor.j);
console.log("h is : " + neighbor.h);
console.log("g is : " + neighbor.g);
console.log("f is : " + neighbor.f);

}

}
console.log("________________________________");
} else{
// no solution 
console.log("no_Solution");
}

   }













// A* is Informed Search Algorithm  // 1 --> Euclidean // 2 --->Manhattan 
   function A_Star_Algorithm(grid,Visited_Nodes,Unvisited_Nodes,end,Select_Heuristic)
   {
     

  /*
  *** IMPORTANT --> It selects the node from unvisited nodes *** 

   in here we have a for loop that selects the node that has the least f = g + h 
   I call it the node with lowestvalueIndex
   then it's neighbors will be updated 



  */ 
  if (Unvisited_Nodes.length > 0){
    // we can keep going , the loop is not finished yet !
    var lowestvalueIndex = 0;  // searchs for minimun value of index  // but not efficient O(N) we need minheap for that
    for (var i = 0 ; i< Unvisited_Nodes.length;i++){
      if(Unvisited_Nodes[i].f < Unvisited_Nodes[lowestvalueIndex].f)
              lowestvalueIndex = i ; 
    }

var current_Node = Unvisited_Nodes[lowestvalueIndex];

if (current_Node ===  end){ // === is for equal testing 
  console.log("Searching Done!")

  // now we need to find the path 
  path = []; 
  temp = current_Node; 
  path.push(temp);
  while(temp.previous){
path.push(temp.previous);
temp = temp.previous; // backtracks until it reaches to start 

  }


  noLoop();
  // return;
}

  /*
  when we select lowestvalueIndex node and update it's neighbors 
  it means 
  that we have visited it so we don't come back again and visit it 
  therefore 
  we delete it from Unvisited_nodes and add it to visited nodes
  */ 
removeFromArray(Unvisited_Nodes,current_Node)
Visited_Nodes.push(current_Node);


// main part of the algoritm start here 

  /*
   lowestvalueIndex
   then lowestvalueIndex node's neighbors will be updated (actually their f and g value)

  */ 
var neighbors = current_Node.neighbors // the neighbors of the current_Node
for (var i = 0 ; i<neighbors.length;i++){
  var neighbor = neighbors[i];  // checking every neighbor 

 




 if (!Visited_Nodes.includes(neighbor) && !neighbor.wall){ // if Visited_Nodes does not include neighbor AND our neighbor is not wall then ...

// var tempG = current_Node.g + Euclidean_Distance_heuristic(neighbor, current_Node);

// var tempG = current_Node.g + 1;  // of course it works 99% of time if we don't use diagonal movement and diagonal search 
/*
it is faster than the second method 
*/

// but if we want to use diagonals i have found it on the internet as follows : 

var tempG = current_Node.g + Euclidean_Distance_heuristic(neighbor, current_Node);
/*
it is slower than the first method 
*/



// var tempG = current_Node.g +1;

// i think instead of adding 1 to g of the cell's neighbor g value, it adds the distance from current sell to it's neighbor's g value 

// Is this a better path than before?
var newPath = false;
if (Unvisited_Nodes.includes(neighbor)) {
  if (tempG < neighbor.g) {
    neighbor.g = tempG;
    newPath = true;
  }
} else {
  neighbor.g = tempG;
  newPath = true;
  Unvisited_Nodes.push(neighbor);  // the reason why we do this again is that we want to make sure that 
  // we have found the minimum distance from our source (part of DIJKSTRA ALGORITHM)
}

// Yes, it's a better path
if (newPath) {

if(Select_Heuristic == 1)
{
  neighbor.h = Euclidean_Distance_heuristic(neighbor, end);;
}

if(Select_Heuristic == 2){
  neighbor.h = Manhattan_Distance_heuristic(neighbor, end);;
}

  neighbor.f = neighbor.g + neighbor.h;




  neighbor.previous = current_Node;
console.log("   current neighbor's i : " + neighbor.i + "     current neighbor's j : " + neighbor.j);
console.log("h is : " + neighbor.h);
console.log("g is : " + neighbor.g);
console.log("f is : " + neighbor.f);
}





}

}
console.log("________________________________");
} else{
// no solution 
console.log("no_Solution");
}
// we want to keep the lowest g_score for each neighbor , block the other neighbors from updating it's g_score value
// to a greater one       
// dijkstra algorithm 

   }











/* 
*** IMPORTANT NOTES ***  
Dijkstra's algorithm searches for shortest paths from root to 
every other node in a graph, whereas uniform-cost searches for 
shortest paths in terms of cost to a goal node.

Also, uniform cost has less space requirements, 
whereas the priority queue is filled "lazily" opposed to Dijkstra's,
which adds all nodes to the queue on start with an infinite cost.


As a result of the above points, Dijkstra is more time consuming than UCS





*/
