/* 
in here i have defined nodes(i,j) with i and j values that are cells in canvas 


*/


function Node(i,j,Diagonals_Allowed) { // constructor function 
    // location of spot(node)
    this.i = i;
    this.j = j;
  
  this.f = 0 ; // f() --> total cost 
  this.g = 0 ; // g() --> Actual cost from source to (this node)
  this.h = 0 ; // h() --> heuristic
  this.neighbors = []    // each spot (node) will keep track of it's neighbors 
  this.previous = null; // father of this node (for coloring the solution path)
  this.wall = false; // default value 
  


  // if((random(1) < 0.3)){
  //   this.wall = true; 
  // }
  



  // a function to show the spot (node)
  // we  have scaling issue : if our window is 400 by 400 
  // and we have 10 by 10 columns and rows 
  // each cell is 
  this.show = function(color){ // we use color  as color 
    fill(color);
    if(this.wall){
      fill(0);    // if the node is wall then fill it with black 
    }
    noStroke();
    // stroke(0);
    rect((this.i*Cell_Width),(this.j*Cell_Height),(Cell_Width-.5),(Cell_Height-.5))
  }
  
  this.addNeighbors = function(grid) { // we are going to use grid to extract neighbors 
  
  var i = this.i ; // temp i
  var j = this.j ; // temp j
  
  /*
   s
  svs
   s
  */ 
 // Not Diagonal Path 

 if (i < cols - 1) { 
    this.neighbors.push(grid[i + 1][j]);
  }
  if (i > 0) {
    this.neighbors.push(grid[i - 1][j]);
  }
  if (j < rows - 1) {
    this.neighbors.push(grid[i][j + 1]);
  }
  if (j > 0) {
    this.neighbors.push(grid[i][j - 1]);
  } 



// *** Diagonal Path included 
if(Diagonals_Allowed){
  if (i > 0 && j > 0) {
    this.neighbors.push(grid[i - 1][j - 1]);
  }
  if (i < cols - 1 && j > 0) {
    this.neighbors.push(grid[i + 1][j - 1]);
  }
  if (i > 0 && j < rows - 1) {
    this.neighbors.push(grid[i - 1][j + 1]);
  }
  if (i < cols - 1 && j < rows - 1) {
    this.neighbors.push(grid[i + 1][j + 1]);
  }
}
 

  }


this.Show_information = function(grid)
{
  // COLORS : 
  // white --> color(255,255,255)
  // red --> color(255,0,0)
  // green --> color(0,255,0)
  // blue --> color(0,0,255)
  // black --> (color(0,0,0)

    this.show(color(255,200,30));


    // only for debugging 

    // console.log("Column = " + (this.i+1));
    // console.log("Row = " + (this.j+1));
    // console.log("IsWall = " + this.wall);
  
}

this.Show_Parent_information = function(grid){
  if(this.previous == undefined){
    console.log("Parent Undefined!")
  }else{
    this.previous.show(color(255,240,0));
    // only for debugging 
    // console.log("Column = " + (this.previous.i+1));
    // console.log("Row = " + (this.previous.j+1));
    // console.log("IsWall = " + this.previous.wall);
  
  }
  
}


{
  this.show(color(200,200,0));
  // only for debugging 
  // console.log("Column = " + (this.i+1));
  // console.log("Row = " + (this.j+1));
  // console.log("IsWall = " + this.wall);
}

this.Show_Neighbors = function(grid)
{
  this.show(color(200,200,0));
  for(var i=0;i<this.neighbors.length;i++)
  {
    sleep(300);
    // only for debugging 
    // console.log(" neighbor " + (i+1) + " it's in Row : " + (this.neighbors[i].i+1) + " and it's in Column : " + (this.neighbors[i].j+1) + "  & IsWall " + this.neighbors[i].wall);
    this.neighbors[i].show(color(0,100,255));
    // only for debugging 
    // console.log("_______________________________________");
  }




}


this.Render_Colors_Search = function(color){
grid
}


// show(color(0,0,255));
  



  /*
  COLORS : 
  white --> color(255,255,255)
  red --> color(255,0,0)
  green --> color(0,255,0)
  blue --> color(0,0,255)
  black --> (color(0,0,0)
  gray --> color (x,y,z) | x = y = z and x,y,z <= 255
//  show(color(0,100,255))        # light blue 
  */ 
  //Unvisited_Nodes[0].show(color(0,255,0)) // set color to green 




  }
  

