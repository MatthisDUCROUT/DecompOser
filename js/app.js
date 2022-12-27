var app = {
  init: function() {
    console.log('init');


    // TODO
    app.drawBoard();

    launchScriptButton = document.getElementById("launchScript");
    launchScriptButton.addEventListener("click", app.handleLaunchScriptButton);
    // Event listeners - TODO
  },
  

  drawBoard : function(){
    // créer les div avec les bonnes classes
    app.createDiv(4);
    // créer les cases
    app.createCase(6);
    //on affiche la board dans la console
    // console.log(board);
    cells = [...document.getElementsByClassName("cell")];
    // console.log(cells);

    // on selectionne la première et dernière ligne
    startingCell = cells[Math.floor(Math.random() * 24)];
    endingCell = cells[Math.floor(Math.random() * 24)];
    if (startingCell == endingCell || endingCell == startingCell){
      startingCell = cells[Math.floor(Math.random() * 24)];
      endingCell = cells[Math.floor(Math.random() * 24)];
    }
    // console.log(startingCell);
    //on modifie la première et la dernière case
    startingCell.classList.add("cellStart", "cellCurrent", "cellCurrent-right");
    endingCell.classList.add("cellEnd");

  },

  createDiv: function(nb){
    
    for(i = 1; i<=nb; i++){
      let board = document.getElementById("board");

      let div = document.createElement("div");
      div.classList.add("cellRow");
      div.setAttribute('id', "row"+ i);

      board.append(div);
    }

    
  },

  createCase : function(nb){
    for(n = 1; n<=4; n++){
      for(i = 1; i<=nb; i++){
        let cellRow = document.getElementById("row"+n);
        let div = document.createElement("div");
        div.classList.add("cell");

        cellRow.append(div);
      }
    }
  },


  moveForward: function (){
    // on récupère la cellule où se trouve la flèche actuellement
    var cells = [].slice.call(document.getElementsByClassName('cell'));
        // console.log(cells);

    var currentCell = cells.find(el => el.classList.contains("cellCurrent")) ;
    // console.log(currentCell);
    var currentcellIndex = cells.indexOf(currentCell);


    // on récupère la valeur des cellules adjacentes de la cellule actuelle
    var leftCell = cells[currentcellIndex - 1];
    var rightCell = cells[currentcellIndex + 1];
    var upCell = cells[currentcellIndex - 6];
    var bottomCell = cells[currentcellIndex + 6];
    // console.log("case actuel : "+currentcellIndex);
    // console.log("case de gauche : "+cells.indexOf(leftCell));
    // console.log("case de droite : "+cells.indexOf(rightCell));
    // console.log("case du haut : "+cells.indexOf(upCell));
    // console.log("case du bas : "+cells.indexOf(bottomCell));

    // on fait une boucle de vérification pour modifier les classes de la prochaine cellule où l'ont déplace la fléche 
    // ainsi que celles de la cellule actuelle
    if (currentCell.classList.contains("cellCurrent-bottom")) {
          bottomCell.classList.add("cellCurrent","cellCurrent-bottom");

      if (currentcellIndex == 0){
          cells[0].classList.remove("cellCurrent","cellCurrent-bottom");

      }else{
        upCell = cells[currentcellIndex];
          upCell.classList.remove("cellCurrent","cellCurrent-bottom");          
      }
    }

    else if (currentCell.classList.contains("cellCurrent-top")) {
      upCell.classList.add("cellCurrent","cellCurrent-top");

      if (currentcellIndex == 0){
        cells[0].classList.remove("cellCurrent","cellCurrent-top");

    }else{
      bottomCell = cells[currentcellIndex];
        bottomCell.classList.remove("cellCurrent","cellCurrent-top");    

    }
  }

    else if (currentCell.classList.contains("cellCurrent-left")) {
      leftCell.classList.add("cellCurrent","cellCurrent-left");

      if (currentcellIndex == 0){
        cells[0].classList.remove("cellCurrent","cellCurrent-left");

    }else{
      rightCell = cells[currentcellIndex];
      rightCell.classList.remove("cellCurrent","cellCurrent-left");
    }
    }

    else if (currentCell.classList.contains("cellCurrent-right")) {
      rightCell.classList.add("cellCurrent","cellCurrent-right");

      if (currentcellIndex == 0){
        cells[0].classList.remove("cellCurrent","cellCurrent-right");
      }else{
        leftCell = cells[currentcellIndex];
        console.log(leftCell);
        leftCell.classList.remove("cellCurrent","cellCurrent-right");
      }
    }


  },

  turnRight: function(){
    var currentCell = document.getElementsByClassName("cellCurrent");


    //boucle pour tourner la flèche vers la droite
    if (currentCell[0].classList.contains("cellCurrent-bottom")) {
      currentCell[0].classList.add("cellCurrent-left");
      currentCell[0].classList.remove("cellCurrent-right","cellCurrent-top","cellCurrent-bottom");
    }

    else if (currentCell[0].classList.contains("cellCurrent-left")) {
      currentCell[0].classList.add("cellCurrent-top");
      currentCell[0].classList.remove("cellCurrent-right","cellCurrent-bottom","cellCurrent-left");
    }

    else if (currentCell[0].classList.contains("cellCurrent-top")) {
      currentCell[0].classList.add("cellCurrent-right");
      currentCell[0].classList.remove("cellCurrent-top","cellCurrent-bottom","cellCurrent-left");
    }

    else if (currentCell[0].classList.contains("cellCurrent") || (currentCell[0].classList.contains("cellCurrent-right"))) {
      currentCell[0].classList.add("cellCurrent-bottom");
      currentCell[0].classList.remove("cellCurrent-right","cellCurrent-top","cellCurrent-left");
    }


  },


  turnLeft: function(){

    // boucle pour faire tourner la flèche vers la gauche
    var currentCell = document.getElementsByClassName("cellCurrent");
    console.log(currentCell[0]);
    if (currentCell[0].classList.contains("cellCurrent-top")) {
      currentCell[0].classList.add("cellCurrent-left");
      currentCell[0].classList.remove("cellCurrent-right","cellCurrent-top","cellCurrent-bottom");
    }

    else if (currentCell[0].classList.contains("cellCurrent-left")) {
      currentCell[0].classList.add("cellCurrent-bottom");
      currentCell[0].classList.remove("cellCurrent-right","cellCurrent-top","cellCurrent-left");
    }

    else if (currentCell[0].classList.contains("cellCurrent-bottom")) {
      currentCell[0].classList.add("cellCurrent-right");
      currentCell[0].classList.remove("cellCurrent-top","cellCurrent-bottom","cellCurrent-left");
    }

    else if (currentCell[0].classList.contains("cellCurrent") || (currentCell[0].classList.contains("cellCurrent-right"))) {
      currentCell[0].classList.add("cellCurrent-top");
      currentCell[0].classList.remove("cellCurrent-right","cellCurrent-bottom","cellCurrent-left");
    }


  },


  handleLaunchScriptButton: function() {
    // TODO

    // on récupère la valeur du champ de texte
    var list = document.getElementById("userCode").value;
    var specialChars = /[`!@#$%^&*_+\n -=\[\]{};':"\\|,.<>\/?~]/;
    // on récupère le code en faisant bien attention à enlever les espaces et les virgules
    const codeLines = list.split(specialChars);
    // console.log(codeLines);
    // TODO : get all lines as an array

    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },
  codeLineLoop: function(codeLines, index) {
    // Getting currentLine
    var currentLine = codeLines;
    // console.log(currentLine);
    // boucle pour appeler les méthodes suivant ce qui a été récupéré dans le champ de texte
      if(currentLine[index] == 'turnLeft'){
        app.turnLeft();
      }
      else if(currentLine[index] == 'turnRight'){
        app.turnRight();
      }
      else if(currentLine[index] == 'moveForward'){
        app.moveForward();
      }else if (currentLine[index] == ''){
        exit;
      }else{
        stop;
      }
    // Increment
    index++;

    // if still a line to interpret
    if (index < codeLines.length) {
      // Recall same method (=> make a loop)
      window.setTimeout(function() {
        app.codeLineLoop(codeLines, index);
      }, 500);
    } else {
      window.setTimeout(function() {
        app.checkSuccess();
      }, 1000);
    }
  },
  checkSuccess: function() {
    // TODO display if the game is won or not

    //on récupère la cellule de fin
    Endcell = [...document.getElementsByClassName("cellEnd")];
    var textInsert = document.getElementById("userCode");

    // boucle pour vérifier si l'on se trouve bien sur la cellule de fin
    if(Endcell[0].classList.contains("cellCurrent")){
      console.log("oui");
      setTimeout(window.alert("Vous avez gagné"),100)
      ;

    }else{
      console.log("non");
      window.alert("Vous n'avez pas fini sur la case d'arrivée");
      textInsert.value = "";
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);
