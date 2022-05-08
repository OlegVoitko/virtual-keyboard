// const newElem = document.createElement('div');
// newElem.classlist.add('keyboard');
// body.append(newElem);

const titleName = document.createElement("div");
titleName.className = "centralizer";
titleName.innerHTML = "<p class='title'>RSS Virtual Keyboard</p>";
document.body.append(titleName);

const textarea = document.createElement("textarea");
textarea.className = "body--textarea textarea";
titleName.append(textarea); 

const bodyKeyboard = document.createElement("div");
bodyKeyboard.className = "body_keyboard keyboard";
titleName.append(bodyKeyboard);

const bodyKeyboard_row = document.createElement("div");
bodyKeyboard_row.className = "body_keyboard_row row";
bodyKeyboard.append(bodyKeyboard_row);

const bodyKeyboard_row1 = document.createElement("div");
bodyKeyboard_row1.className = "body_keyboard_row row";
bodyKeyboard.append(bodyKeyboard_row1);

const bodyKeyboard_row2 = document.createElement("div");
bodyKeyboard_row2.className = "body_keyboard_row row";
bodyKeyboard.append(bodyKeyboard_row2);

const bodyKeyboard_row3 = document.createElement("div");
bodyKeyboard_row3.className = "body_keyboard_row row";
bodyKeyboard.append(bodyKeyboard_row3);

const bodyKeyboard_row4 = document.createElement("div");
bodyKeyboard_row4.className = "body_keyboard_row row";
bodyKeyboard.append(bodyKeyboard_row4);

const subtitle = document.createElement("div");
subtitle.className = "subtitle";
subtitle.innerHTML = "<p class='subtitle'>The keyboard is created in the Windows <br>language: left ctrl + alt</p>";
titleName.append(subtitle); 

// First line====================================================

const key_Backquote = document.createElement("div");
key_Backquote.className = "key Backquote";
key_Backquote.innerHTML = "`";
bodyKeyboard_row.append(key_Backquote);

    key_Backquote.addEventListener("mousedown", () => {           
      textarea.append("`");       
      key_Backquote.classList.toggle("active");
      key_Backquote.addEventListener("click", () =>{
        key_Backquote.classList.remove("active");       
      });      
    });
      

const key_Digit1 = document.createElement("div");
key_Digit1.className = "key Digit1";
key_Digit1.innerHTML = "1";
bodyKeyboard_row.append(key_Digit1);

    key_Digit1.addEventListener("mousedown", () => {           
      textarea.append("1");       
      key_Digit1.classList.toggle("active");
      key_Digit1.addEventListener("click", () =>{
        key_Digit1.classList.remove("active");
      });      
    });

const key_Digit2 = document.createElement("div");
key_Digit2.className = "key Digit2";
key_Digit2.innerHTML = "2";
bodyKeyboard_row.append(key_Digit2);

key_Digit2.addEventListener("mousedown", () => {           
  textarea.append("2");       
  key_Digit2.classList.toggle("active");
  key_Digit2.addEventListener("click", () =>{
    key_Digit2.classList.remove("active");
  });      
});

const key_Digit3 = document.createElement("div");
key_Digit3.className = "key Digit3";
key_Digit3.innerHTML = "3";
bodyKeyboard_row.append(key_Digit3);

key_Digit3.addEventListener("mousedown", () => {           
  textarea.append("3");       
  key_Digit3.classList.toggle("active");
  key_Digit3.addEventListener("click", () =>{
    key_Digit3.classList.remove("active");
  });      
});

const key_Digit4 = document.createElement("div");
key_Digit4.className = "key Digit4";
key_Digit4.innerHTML = "4";
bodyKeyboard_row.append(key_Digit4);

key_Digit4.addEventListener("mousedown", () => {           
  textarea.append("4");       
  key_Digit4.classList.toggle("active");
  key_Digit4.addEventListener("click", () =>{
    key_Digit4.classList.remove("active");
  });      
});

const key_Digit5 = document.createElement("div");
key_Digit5.className = "key Digit5";
key_Digit5.innerHTML = "5";
bodyKeyboard_row.append(key_Digit5);

key_Digit5.addEventListener("mousedown", () => {           
  textarea.append("5");       
  key_Digit5.classList.toggle("active");
  key_Digit5.addEventListener("click", () =>{
    key_Digit5.classList.remove("active");
  });      
});

const key_Digit6 = document.createElement("div");
key_Digit6.className = "key Digit6";
key_Digit6.innerHTML = "6";
bodyKeyboard_row.append(key_Digit6);

key_Digit6.addEventListener("mousedown", () => {           
  textarea.append("6");       
  key_Digit6.classList.toggle("active");
  key_Digit6.addEventListener("click", () =>{
    key_Digit6.classList.remove("active");
  });      
});

const key_Digit7 = document.createElement("div");
key_Digit7.className = "key Digit7";
key_Digit7.innerHTML = "7";
bodyKeyboard_row.append(key_Digit7);

key_Digit7.addEventListener("mousedown", () => {           
  textarea.append("7");       
  key_Digit7.classList.toggle("active");
  key_Digit7.addEventListener("click", () =>{
    key_Digit7.classList.remove("active");
  });      
});

const key_Digit8 = document.createElement("div");
key_Digit8.className = "key Digit8";
key_Digit8.innerHTML = "8";
bodyKeyboard_row.append(key_Digit8);

key_Digit8.addEventListener("mousedown", () => {           
  textarea.append("8");       
  key_Digit8.classList.toggle("active");
  key_Digit8.addEventListener("click", () =>{
    key_Digit8.classList.remove("active");
  });      
});

const key_Digit9 = document.createElement("div");
key_Digit9.className = "key Digit9";
key_Digit9.innerHTML = "9";
bodyKeyboard_row.append(key_Digit9);

key_Digit9.addEventListener("mousedown", () => {           
  textarea.append("9");       
  key_Digit9.classList.toggle("active");
  key_Digit9.addEventListener("click", () =>{
    key_Digit9.classList.remove("active");
  });      
});

const key_Digit0 = document.createElement("div");
key_Digit0.className = "key Digit0";
key_Digit0.innerHTML = "0";
bodyKeyboard_row.append(key_Digit0);

key_Digit0.addEventListener("mousedown", () => {           
  textarea.append("0");       
  key_Digit0.classList.toggle("active");
  key_Digit0.addEventListener("click", () =>{
    key_Digit0.classList.remove("active");
  });      
});

const key_Minus = document.createElement("div");
key_Minus.className = "key Minus";
key_Minus.innerHTML = "-";
bodyKeyboard_row.append(key_Minus);

key_Minus.addEventListener("mousedown", () => {           
  textarea.append("-");       
  key_Minus.classList.toggle("active");
  key_Minus.addEventListener("click", () =>{
    key_Minus.classList.remove("active");
  });      
});

const key_Equal = document.createElement("div");
key_Equal.className = "key Equal";
key_Equal.innerHTML = "=";
bodyKeyboard_row.append(key_Equal);

key_Equal.addEventListener("mousedown", () => {           
  textarea.append("=");       
  key_Equal.classList.toggle("active");
  key_Equal.addEventListener("click", () =>{
    key_Equal.classList.remove("active");
  });      
});

const key_Backspace = document.createElement("div");
key_Backspace.className = "key Backspace";
key_Backspace.innerHTML = "Backspace";
bodyKeyboard_row.append(key_Backspace);

key_Backspace.addEventListener("mousedown", () => {           
  textarea.append("");       
  key_Backspace.classList.toggle("active");
  key_Backspace.addEventListener("click", () =>{
    key_Backspace.classList.remove("active");
  });      
});

// const keyBoard1 = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", 
// "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"];

// const russ = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", " "];

// const buttons1 = keyBoard1.map(key =>{
//   const block = document.createElement("div");
//   block.classList.add("key");
//   block.classList.add(key); 
//   return block;
// });
// bodyKeyboard_row.append(...buttons1);


// const number = russ.map(key =>{
//   const russs = document.createElement("span");
//   russs.className = "rus";
//   russs.innerHTML = key;
//   return russs;
// });
// buttons1.append(...number);


// Second line====================================================

const key_Tab = document.createElement("div");
key_Tab.className = "key Tab";
key_Tab.innerHTML = "Tab";
bodyKeyboard_row1.append(key_Tab);

key_Tab.addEventListener("mousedown", () => {           
  textarea.append("\t");       
  key_Tab.classList.toggle("active");
  key_Tab.addEventListener("click", () =>{
  key_Tab.classList.remove("active");
  });      
});

const key_KeyQ = document.createElement("div");
key_KeyQ.className = "key KeyQ";
key_KeyQ.innerHTML = "q";
 bodyKeyboard_row1.append(key_KeyQ);
    
  key_KeyQ.addEventListener("mousedown", () => {           
  textarea.append("q");       
  key_KeyQ.classList.toggle("active");
  key_KeyQ.addEventListener("click", () =>{
    key_KeyQ.classList.remove("active");
  });      
});

const key_KeyW = document.createElement("div");
key_KeyW.className = "key KeyW";
key_KeyW.innerHTML = "w";
 bodyKeyboard_row1.append(key_KeyW);
    
 key_KeyW.addEventListener("mousedown", () => {           
  textarea.append("w");       
  key_KeyW.classList.toggle("active");
  key_KeyW.addEventListener("click", () =>{
    key_KeyW.classList.remove("active");
  });      
});

const key_KeyE = document.createElement("div");
key_KeyE.className = "key KeyE";
key_KeyE.innerHTML = "e";
 bodyKeyboard_row1.append(key_KeyE);
    
 key_KeyE.addEventListener("mousedown", () => {           
  textarea.append("e");       
  key_KeyE.classList.toggle("active");
  key_KeyE.addEventListener("click", () =>{
    key_KeyE.classList.remove("active");
  });      
});

const key_KeyR = document.createElement("div");
key_KeyR.className = "key KeyR";
key_KeyR.innerHTML = "r";
 bodyKeyboard_row1.append(key_KeyR);
    
 key_KeyR.addEventListener("mousedown", () => {           
  textarea.append("r");       
  key_KeyR.classList.toggle("active");
  key_KeyR.addEventListener("click", () =>{
    key_KeyR.classList.remove("active");
  });      
});

const key_KeyT = document.createElement("div");
key_KeyT.className = "key KeyT";
key_KeyT.innerHTML = "t";
 bodyKeyboard_row1.append(key_KeyT);
    
 key_KeyT.addEventListener("mousedown", () => {           
  textarea.append("t");       
  key_KeyT.classList.toggle("active");
  key_KeyT.addEventListener("click", () =>{
    key_KeyT.classList.remove("active");
  });      
});

const key_KeyY = document.createElement("div");
key_KeyY.className = "key KeyY";
key_KeyY.innerHTML = "y";
 bodyKeyboard_row1.append(key_KeyY);
    
 key_KeyY.addEventListener("mousedown", () => {           
  textarea.append("y");       
  key_KeyY.classList.toggle("active");
  key_KeyY.addEventListener("click", () =>{
    key_KeyY.classList.remove("active");
  });      
});

const key_KeyU = document.createElement("div");
key_KeyU.className = "key KeyU";
key_KeyU.innerHTML = "u";
 bodyKeyboard_row1.append(key_KeyU);
    
 key_KeyU.addEventListener("mousedown", () => {           
  textarea.append("u");       
  key_KeyU.classList.toggle("active");
  key_KeyU.addEventListener("click", () =>{
    key_KeyU.classList.remove("active");
  });      
});

const key_KeyI = document.createElement("div");
key_KeyI.className = "key KeyI";
key_KeyI.innerHTML = "i";
 bodyKeyboard_row1.append(key_KeyI);
    
 key_KeyI.addEventListener("mousedown", () => {           
  textarea.append("i");       
  key_KeyI.classList.toggle("active");
  key_KeyI.addEventListener("click", () =>{
    key_KeyI.classList.remove("active");
  });      
});

const key_KeyO = document.createElement("div");
key_KeyO.className = "key KeyO";
key_KeyO.innerHTML = "o";
 bodyKeyboard_row1.append(key_KeyO);
    
 key_KeyO.addEventListener("mousedown", () => {           
  textarea.append("o");       
  key_KeyO.classList.toggle("active");
  key_KeyO.addEventListener("click", () =>{
    key_KeyO.classList.remove("active");
  });      
});

const key_KeyP = document.createElement("div");
key_KeyP.className = "key KeyP";
key_KeyP.innerHTML = "p";
 bodyKeyboard_row1.append(key_KeyP);
    
 key_KeyP.addEventListener("mousedown", () => {           
  textarea.append("p");       
  key_KeyP.classList.toggle("active");
  key_KeyP.addEventListener("click", () =>{
    key_KeyP.classList.remove("active");
  });      
});

const BracketLeft = document.createElement("div");
BracketLeft.className = "key BracketLeft";
BracketLeft.innerHTML = "[";
 bodyKeyboard_row1.append(BracketLeft);
    
 BracketLeft.addEventListener("mousedown", () => {           
  textarea.append("[");       
  BracketLeft.classList.toggle("active");
  BracketLeft.addEventListener("click", () =>{
    BracketLeft.classList.remove("active");
  });      
});

const BracketRight = document.createElement("div");
BracketRight.className = "key BracketRight";
BracketRight.innerHTML = "]";
 bodyKeyboard_row1.append(BracketRight);
    
 BracketRight.addEventListener("mousedown", () => {           
  textarea.append("]");       
  BracketRight.classList.toggle("active");
  BracketRight.addEventListener("click", () =>{
    BracketRight.classList.remove("active");
  });      
});

const Backslash = document.createElement("div");
Backslash.className = "key Backslash";
Backslash.innerHTML = "\\";
 bodyKeyboard_row1.append(Backslash);
    
 Backslash.addEventListener("mousedown", () => {           
  textarea.append("\\");       
  Backslash.classList.toggle("active");
  Backslash.addEventListener("click", () =>{
    Backslash.classList.remove("active");
  });      
});

const Delete = document.createElement("div");
Delete.className = "key Delete";
Delete.innerHTML = "Del";
 bodyKeyboard_row1.append(Delete);
    
 Delete.addEventListener("mousedown", () => {           
  textarea.append("Del");       
  Delete.classList.toggle("active");
  Delete.addEventListener("click", () =>{
    Delete.classList.remove("active");
  });      
});

// Third line====================================================

const CapsLock = document.createElement("div");
CapsLock.className = "key CapsLock";
CapsLock.innerHTML = "CapsLock";
 bodyKeyboard_row2.append(CapsLock);
    
 CapsLock.addEventListener("click", () => {           
  textarea.append("");       
  CapsLock.classList.toggle("active"); 

  if(CapsLock.classList.contains("active")) {  
    key_KeyQ.addEventListener("mousedown", () => {           
      textarea.append("Q");       
      key_KeyQ.classList.toggle("active");
      key_KeyQ.addEventListener("click", () =>{
        key_KeyQ.classList.remove("active");
      });      
    });  
    key_KeyQ.innerHTML = "Q";
    key_KeyW.innerHTML = "W";
    key_KeyE.innerHTML = "E";
    key_KeyR.innerHTML = "R";
    key_KeyT.innerHTML = "T";    
    key_KeyY.innerHTML = "Y";
    key_KeyU.innerHTML = "U";
    key_KeyI.innerHTML = "I";
    key_KeyO.innerHTML = "O";
    key_KeyP.innerHTML = "P";
    keyA.innerHTML = "A";
    keyS.innerHTML = "S";
    keyD.innerHTML = "D";
    keyF.innerHTML = "F";
    keyG.innerHTML = "G";
    keyH.innerHTML = "H";
    keyJ.innerHTML = "J";
    keyK.innerHTML = "K";
    keyL.innerHTML = "L";
    KeyZ.innerHTML = "Z";
    KeyX.innerHTML = "X";
    KeyC.innerHTML = "C";
    KeyV.innerHTML = "V";
    KeyB.innerHTML = "B";
    KeyN.innerHTML = "N";
    KeyM.innerHTML = "M";
  }else{
    key_KeyQ.innerHTML = "q";
    key_KeyW.innerHTML = "w";
    key_KeyE.innerHTML = "e";
    key_KeyR.innerHTML = "r";
    key_KeyT.innerHTML = "t";    
    key_KeyY.innerHTML = "y";
    key_KeyU.innerHTML = "u";
    key_KeyI.innerHTML = "i";
    key_KeyO.innerHTML = "o";
    key_KeyP.innerHTML = "p";
    keyA.innerHTML = "a";
    keyS.innerHTML = "s";
    keyD.innerHTML = "d";
    keyF.innerHTML = "f";
    keyG.innerHTML = "g";
    keyH.innerHTML = "h";
    keyJ.innerHTML = "j";
    keyK.innerHTML = "k";
    keyL.innerHTML = "l";
    KeyZ.innerHTML = "z";
    KeyX.innerHTML = "x";
    KeyC.innerHTML = "c";
    KeyV.innerHTML = "v";
    KeyB.innerHTML = "b";
    KeyN.innerHTML = "n";
    KeyM.innerHTML = "m";
  }
});


const keyA = document.createElement("div");
keyA.className = "key keyA";
keyA.innerHTML = "a";
 bodyKeyboard_row2.append(keyA);
    
 keyA.addEventListener("mousedown", () => {           
  textarea.append("a");       
  keyA.classList.toggle("active");
  keyA.addEventListener("click", () =>{
    keyA.classList.remove("active");
  });      
});

const keyS = document.createElement("div");
keyS.className = "key keyS";
keyS.innerHTML = "s";
 bodyKeyboard_row2.append(keyS);
    
 keyS.addEventListener("mousedown", () => {           
  textarea.append("s");       
  keyS.classList.toggle("active");
  keyS.addEventListener("click", () =>{
    keyS.classList.remove("active");
  });      
});

const keyD = document.createElement("div");
keyD.className = "key keyD";
keyD.innerHTML = "d";
 bodyKeyboard_row2.append(keyD);
    
 keyD.addEventListener("mousedown", () => {           
  textarea.append("d");       
  keyD.classList.toggle("active");
  keyD.addEventListener("click", () =>{
    keyD.classList.remove("active");
  });      
});

const keyF = document.createElement("div");
keyF.className = "key keyF";
keyF.innerHTML = "f";
 bodyKeyboard_row2.append(keyF);
    
 keyF.addEventListener("mousedown", () => {           
  textarea.append("f");       
  keyF.classList.toggle("active");
  keyF.addEventListener("click", () =>{
    keyF.classList.remove("active");
  });      
});

const keyG = document.createElement("div");
keyG.className = "key keyG";
keyG.innerHTML = "g";
 bodyKeyboard_row2.append(keyG);
    
 keyG.addEventListener("mousedown", () => {           
  textarea.append("g");       
  keyG.classList.toggle("active");
  keyG.addEventListener("click", () =>{
    keyG.classList.remove("active");
  });      
});

const keyH = document.createElement("div");
keyH.className = "key keyH";
keyH.innerHTML = "h";
 bodyKeyboard_row2.append(keyH);
    
 keyH.addEventListener("mousedown", () => {           
  textarea.append("h");       
  keyH.classList.toggle("active");
  keyH.addEventListener("click", () =>{
    keyH.classList.remove("active");
  });      
});

const keyJ = document.createElement("div");
keyJ.className = "key keyJ";
keyJ.innerHTML = "j";
 bodyKeyboard_row2.append(keyJ);
    
 keyJ.addEventListener("mousedown", () => {           
  textarea.append("j");       
  keyJ.classList.toggle("active");
  keyJ.addEventListener("click", () =>{
    keyJ.classList.remove("active");
  });      
});

const keyK = document.createElement("div");
keyK.className = "key keyK";
keyK.innerHTML = "k";
 bodyKeyboard_row2.append(keyK);
    
 keyK.addEventListener("mousedown", () => {           
  textarea.append("k");       
  keyK.classList.toggle("active");
  keyK.addEventListener("click", () =>{
    keyK.classList.remove("active");
  });      
});

const keyL = document.createElement("div");
keyL.className = "key keyL";
keyL.innerHTML = "l";
 bodyKeyboard_row2.append(keyL);
    
 keyL.addEventListener("mousedown", () => {           
  textarea.append("l");       
  keyL.classList.toggle("active");
  keyL.addEventListener("click", () =>{
    keyL.classList.remove("active");
  });      
});

const Semicolon = document.createElement("div");
Semicolon.className = "key Semicolon";
Semicolon.innerHTML = ";";
 bodyKeyboard_row2.append(Semicolon);
    
 Semicolon.addEventListener("mousedown", () => {           
  textarea.append(";");       
  Semicolon.classList.toggle("active");
  Semicolon.addEventListener("click", () =>{
    Semicolon.classList.remove("active");
  });      
});

const Quote = document.createElement("div");
Quote.className = "key Quote";
Quote.innerHTML = "'";
 bodyKeyboard_row2.append(Quote);
    
 Quote.addEventListener("mousedown", () => {           
  textarea.append("'");       
  Quote.classList.toggle("active");
  Quote.addEventListener("click", () =>{
    Quote.classList.remove("active");
  });      
});

const Enter = document.createElement("div");
Enter.className = "key Enter";
Enter.innerHTML = "Enter";
 bodyKeyboard_row2.append(Enter);
    
 Enter.addEventListener("mousedown", () => {           
  textarea.append("\n");       
  Enter.classList.toggle("active");
  Enter.addEventListener("click", () =>{
    Enter.classList.remove("active");
  });      
});

// Fourth line====================================================

const ShiftLeft = document.createElement("div");
ShiftLeft.className = "key ShiftLeft";
ShiftLeft.innerHTML = "Shift";
 bodyKeyboard_row3.append(ShiftLeft);
    
 ShiftLeft.addEventListener("mousedown", () => {           
  textarea.append("");       
  ShiftLeft.classList.toggle("active");
  if(ShiftLeft.classList.contains("active")){
    key_KeyQ.innerHTML = "Q";
    key_KeyW.innerHTML = "W";
    key_KeyE.innerHTML = "E";
    key_KeyR.innerHTML = "R";
    key_KeyT.innerHTML = "T";    
    key_KeyY.innerHTML = "Y";
    key_KeyU.innerHTML = "U";
    key_KeyI.innerHTML = "I";
    key_KeyO.innerHTML = "O";
    key_KeyP.innerHTML = "P";
    keyA.innerHTML = "A";
    keyS.innerHTML = "S";
    keyD.innerHTML = "D";
    keyF.innerHTML = "F";
    keyG.innerHTML = "G";
    keyH.innerHTML = "H";
    keyJ.innerHTML = "J";
    keyK.innerHTML = "K";
    keyL.innerHTML = "L";
    KeyZ.innerHTML = "Z";
    KeyX.innerHTML = "X";
    KeyC.innerHTML = "C";
    KeyV.innerHTML = "V";
    KeyB.innerHTML = "B";
    KeyN.innerHTML = "N";
    KeyM.innerHTML = "M";
    key_Backquote.innerHTML = "~";
    key_Digit1.innerHTML = "!";
    key_Digit2.innerHTML = "@";
    key_Digit3.innerHTML = "#";
    key_Digit4.innerHTML = "$";
    key_Digit5.innerHTML = "%";
    key_Digit6.innerHTML = "^";
    key_Digit7.innerHTML = "&";
    key_Digit8.innerHTML = "*";
    key_Digit9.innerHTML = "(";
    key_Digit0.innerHTML = ")";
    key_Minus.innerHTML = "_";
    key_Equal.innerHTML = "+";
    BracketLeft.innerHTML = "{";
    BracketRight.innerHTML = "}";
    Backslash.innerHTML = "|";
    Semicolon.innerHTML = ":";
    // eslint-disable-next-line quotes
    Quote.innerHTML = '"';
    Slash.innerHTML = "?";
    Comma.innerHTML = "<";
    Period.innerHTML = ">";
  }  
  
  ShiftLeft.addEventListener("click", () =>{
    ShiftLeft.classList.remove("active");
    key_KeyQ.innerHTML = "q";
    key_KeyW.innerHTML = "w";
    key_KeyE.innerHTML = "e";
    key_KeyR.innerHTML = "r";
    key_KeyT.innerHTML = "t";    
    key_KeyY.innerHTML = "y";
    key_KeyU.innerHTML = "u";
    key_KeyI.innerHTML = "i";
    key_KeyO.innerHTML = "o";
    key_KeyP.innerHTML = "p";
    keyA.innerHTML = "a";
    keyS.innerHTML = "s";
    keyD.innerHTML = "d";
    keyF.innerHTML = "f";
    keyG.innerHTML = "g";
    keyH.innerHTML = "h";
    keyJ.innerHTML = "j";
    keyK.innerHTML = "k";
    keyL.innerHTML = "l";
    KeyZ.innerHTML = "z";
    KeyX.innerHTML = "x";
    KeyC.innerHTML = "c";
    KeyV.innerHTML = "v";
    KeyB.innerHTML = "b";
    KeyN.innerHTML = "n";
    KeyM.innerHTML = "m"; 
    key_Backquote.innerHTML = "`";
    key_Digit0.innerHTML = "0";
    key_Digit1.innerHTML = "1";
    key_Digit2.innerHTML = "2";
    key_Digit3.innerHTML = "3";
    key_Digit4.innerHTML = "4";
    key_Digit5.innerHTML = "5";
    key_Digit6.innerHTML = "6";
    key_Digit7.innerHTML = "7";
    key_Digit8.innerHTML = "8";
    key_Digit9.innerHTML = "9";
    key_Minus.innerHTML = "-";
    key_Equal.innerHTML = "=";
    BracketLeft.innerHTML = "[";
    BracketRight.innerHTML = "]";
    Backslash.innerHTML = "\\";
    Semicolon.innerHTML = ";";
    Quote.innerHTML = "'";
    Slash.innerHTML = "/";
    Comma.innerHTML = ",";
    Period.innerHTML = ".";
  });      
});

const KeyZ = document.createElement("div");
KeyZ.className = "key KeyZ";
KeyZ.innerHTML = "z";
 bodyKeyboard_row3.append(KeyZ);
    
 KeyZ.addEventListener("mousedown", () => {           
  textarea.append("z");       
  KeyZ.classList.toggle("active");
  KeyZ.addEventListener("click", () =>{
    KeyZ.classList.remove("active");
  });      
});

const KeyX = document.createElement("div");
KeyX.className = "key KeyX";
KeyX.innerHTML = "x";
 bodyKeyboard_row3.append(KeyX);
    
 KeyX.addEventListener("mousedown", () => {           
  textarea.append("x");       
  KeyX.classList.toggle("active");
  KeyX.addEventListener("click", () =>{
    KeyX.classList.remove("active");
  });      
});

const KeyC = document.createElement("div");
KeyC.className = "key KeyC";
KeyC.innerHTML = "c";
 bodyKeyboard_row3.append(KeyC);
    
 KeyC.addEventListener("mousedown", () => {           
  textarea.append("c");       
  KeyC.classList.toggle("active");
  KeyC.addEventListener("click", () =>{
    KeyC.classList.remove("active");
  });      
});

const KeyV = document.createElement("div");
KeyV.className = "key KeyV";
KeyV.innerHTML = "v";
 bodyKeyboard_row3.append(KeyV);
    
 KeyV.addEventListener("mousedown", () => {           
  textarea.append("v");       
  KeyV.classList.toggle("active");
  KeyV.addEventListener("click", () =>{
    KeyV.classList.remove("active");
  });      
});

const KeyB = document.createElement("div");
KeyB.className = "key KeyB";
KeyB.innerHTML = "b";
 bodyKeyboard_row3.append(KeyB);
    
 KeyB.addEventListener("mousedown", () => {           
  textarea.append("b");       
  KeyB.classList.toggle("active");
  KeyB.addEventListener("click", () =>{
    KeyB.classList.remove("active");
  });      
});

const KeyN = document.createElement("div");
KeyN.className = "key KeyB";
KeyN.innerHTML = "n";
 bodyKeyboard_row3.append(KeyN);
    
 KeyN.addEventListener("mousedown", () => {           
  textarea.append("n");       
  KeyN.classList.toggle("active");
  KeyN.addEventListener("click", () =>{
    KeyN.classList.remove("active");
  });      
});

const KeyM = document.createElement("div");
KeyM.className = "key KeyB";
KeyM.innerHTML = "m";
 bodyKeyboard_row3.append(KeyM);
    
 KeyM.addEventListener("mousedown", () => {           
  textarea.append("m");       
  KeyM.classList.toggle("active");
  KeyM.addEventListener("click", () =>{
    KeyM.classList.remove("active");
  });      
});

const Comma = document.createElement("div");
Comma.className = "key Comma";
Comma.innerHTML = ",";
 bodyKeyboard_row3.append(Comma);
    
 Comma.addEventListener("mousedown", () => {           
  textarea.append(",");       
  Comma.classList.toggle("active");
  Comma.addEventListener("click", () =>{
    Comma.classList.remove("active");
  });      
});

const Period = document.createElement("div");
Period.className = "key Period";
Period.innerHTML = ".";
 bodyKeyboard_row3.append(Period);
    
 Period.addEventListener("mousedown", () => {           
  textarea.append(".");       
  Period.classList.toggle("active");
  Period.addEventListener("click", () =>{
    Period.classList.remove("active");
  });      
});

const Slash = document.createElement("div");
Slash.className = "key Slash";
Slash.innerHTML = "/";
 bodyKeyboard_row3.append(Slash);
    
 Slash.addEventListener("mousedown", () => {           
  textarea.append("/");       
  Slash.classList.toggle("active");
  Slash.addEventListener("click", () =>{
    Slash.classList.remove("active");
  });      
});

const ArrowUp = document.createElement("div");
ArrowUp.className = "key ArrowUp";
ArrowUp.innerHTML = "▲";
 bodyKeyboard_row3.append(ArrowUp);
    
 ArrowUp.addEventListener("mousedown", () => {           
  textarea.append("▲");       
  ArrowUp.classList.toggle("active");
  ArrowUp.addEventListener("click", () =>{
    ArrowUp.classList.remove("active");
  });      
});

const ShiftRight = document.createElement("div");
ShiftRight.className = "key ShiftRight";
ShiftRight.innerHTML = "Shift";
 bodyKeyboard_row3.append(ShiftRight);
    
 ShiftRight.addEventListener("mousedown", () => {           
  textarea.append("");       
  ShiftRight.classList.toggle("active");
  if(ShiftRight.classList.contains("active")){
    key_KeyQ.innerHTML = "Q";
    key_KeyW.innerHTML = "W";
    key_KeyE.innerHTML = "E";
    key_KeyR.innerHTML = "R";
    key_KeyT.innerHTML = "T";    
    key_KeyY.innerHTML = "Y";
    key_KeyU.innerHTML = "U";
    key_KeyI.innerHTML = "I";
    key_KeyO.innerHTML = "O";
    key_KeyP.innerHTML = "P";
    keyA.innerHTML = "A";
    keyS.innerHTML = "S";
    keyD.innerHTML = "D";
    keyF.innerHTML = "F";
    keyG.innerHTML = "G";
    keyH.innerHTML = "H";
    keyJ.innerHTML = "J";
    keyK.innerHTML = "K";
    keyL.innerHTML = "L";
    KeyZ.innerHTML = "Z";
    KeyX.innerHTML = "X";
    KeyC.innerHTML = "C";
    KeyV.innerHTML = "V";
    KeyB.innerHTML = "B";
    KeyN.innerHTML = "N";
    KeyM.innerHTML = "M";
    key_Backquote.innerHTML = "~";
    key_Digit1.innerHTML = "!";
    key_Digit2.innerHTML = "@";
    key_Digit3.innerHTML = "#";
    key_Digit4.innerHTML = "$";
    key_Digit5.innerHTML = "%";
    key_Digit6.innerHTML = "^";
    key_Digit7.innerHTML = "&";
    key_Digit8.innerHTML = "*";
    key_Digit9.innerHTML = "(";
    key_Digit0.innerHTML = ")";
    key_Minus.innerHTML = "_";
    key_Equal.innerHTML = "+";
    BracketLeft.innerHTML = "{";
    BracketRight.innerHTML = "}";
    Backslash.innerHTML = "|";
    Semicolon.innerHTML = ":";
    // eslint-disable-next-line quotes
    Quote.innerHTML = '"';
    Slash.innerHTML = "?";
    Comma.innerHTML = "<";
    Period.innerHTML = ">";
  }  
  ShiftRight.addEventListener("click", () =>{
    ShiftRight.classList.remove("active");
    ShiftRight.classList.remove("active");
    key_KeyQ.innerHTML = "q";
    key_KeyW.innerHTML = "w";
    key_KeyE.innerHTML = "e";
    key_KeyR.innerHTML = "r";
    key_KeyT.innerHTML = "t";    
    key_KeyY.innerHTML = "y";
    key_KeyU.innerHTML = "u";
    key_KeyI.innerHTML = "i";
    key_KeyO.innerHTML = "o";
    key_KeyP.innerHTML = "p";
    keyA.innerHTML = "a";
    keyS.innerHTML = "s";
    keyD.innerHTML = "d";
    keyF.innerHTML = "f";
    keyG.innerHTML = "g";
    keyH.innerHTML = "h";
    keyJ.innerHTML = "j";
    keyK.innerHTML = "k";
    keyL.innerHTML = "l";
    KeyZ.innerHTML = "z";
    KeyX.innerHTML = "x";
    KeyC.innerHTML = "c";
    KeyV.innerHTML = "v";
    KeyB.innerHTML = "b";
    KeyN.innerHTML = "n";
    KeyM.innerHTML = "m"; 
    key_Backquote.innerHTML = "`";
    key_Digit0.innerHTML = "0";
    key_Digit1.innerHTML = "1";
    key_Digit2.innerHTML = "2";
    key_Digit3.innerHTML = "3";
    key_Digit4.innerHTML = "4";
    key_Digit5.innerHTML = "5";
    key_Digit6.innerHTML = "6";
    key_Digit7.innerHTML = "7";
    key_Digit8.innerHTML = "8";
    key_Digit9.innerHTML = "9";
    key_Minus.innerHTML = "-";
    key_Equal.innerHTML = "=";
    BracketLeft.innerHTML = "[";
    BracketRight.innerHTML = "]";
    Backslash.innerHTML = "\\";
    Semicolon.innerHTML = ";";
    Quote.innerHTML = "'";
    Slash.innerHTML = "/";
    Comma.innerHTML = ",";
    Period.innerHTML = ".";
  });      
});

// Fifth line====================================================

const ControlLeft = document.createElement("div");
ControlLeft.className = "key ControlLeft";
ControlLeft.innerHTML = "Ctrl";
 bodyKeyboard_row4.append(ControlLeft);
    
 ControlLeft.addEventListener("mousedown", () => {           
  textarea.append("");       
  ControlLeft.classList.toggle("active");
  ControlLeft.addEventListener("click", () =>{
    ControlLeft.classList.remove("active");
  });      
});

const MetaLeft = document.createElement("div");
MetaLeft.className = "key MetaLeft";
MetaLeft.innerHTML = "Win";
 bodyKeyboard_row4.append(MetaLeft);
    
 MetaLeft.addEventListener("mousedown", () => {           
  textarea.append("");       
  MetaLeft.classList.toggle("active");
  MetaLeft.addEventListener("click", () =>{
    MetaLeft.classList.remove("active");
  });      
});

const AltLeft = document.createElement("div");
AltLeft.className = "key AltLeft";
AltLeft.innerHTML = "Alt";
 bodyKeyboard_row4.append(AltLeft);
    
 AltLeft.addEventListener("mousedown", () => {           
  textarea.append("");       
  AltLeft.classList.toggle("active");
  AltLeft.addEventListener("click", () =>{
    AltLeft.classList.remove("active");
  });      
});

const Space = document.createElement("div");
Space.className = "key Space";
Space.innerHTML = "";
 bodyKeyboard_row4.append(Space);
    
 Space.addEventListener("mousedown", () => {           
  textarea.append(" ");       
  Space.classList.toggle("active");
  Space.addEventListener("click", () =>{
    Space.classList.remove("active");
  });      
});

const AltRight = document.createElement("div");
AltRight.className = "key AltRight";
AltRight.innerHTML = "Alt";
 bodyKeyboard_row4.append(AltRight);
    
 AltRight.addEventListener("mousedown", () => {           
  textarea.append("");       
  AltRight.classList.toggle("active");
  AltRight.addEventListener("click", () =>{
    AltRight.classList.remove("active");
  });      
});

const ArrowLeft = document.createElement("div");
ArrowLeft.className = "key ArrowLeft";
ArrowLeft.innerHTML = "◄";
 bodyKeyboard_row4.append(ArrowLeft);
    
 ArrowLeft.addEventListener("mousedown", () => {           
  textarea.append("◄");       
  ArrowLeft.classList.toggle("active");
  ArrowLeft.addEventListener("click", () =>{
    ArrowLeft.classList.remove("active");
  });      
});

const ArrowDown = document.createElement("div");
ArrowDown.className = "key ArrowDown";
ArrowDown.innerHTML = "▼";
 bodyKeyboard_row4.append(ArrowDown);
    
 ArrowDown.addEventListener("mousedown", () => {           
  textarea.append("▼");       
  ArrowDown.classList.toggle("active");
  ArrowDown.addEventListener("click", () =>{
    ArrowDown.classList.remove("active");
  });      
});

const ArrowRight = document.createElement("div");
ArrowRight.className = "key ArrowRight";
ArrowRight.innerHTML = "►";
 bodyKeyboard_row4.append(ArrowRight);
    
 ArrowRight.addEventListener("mousedown", () => {           
  textarea.append("►");       
  ArrowRight.classList.toggle("active");
  ArrowRight.addEventListener("click", () =>{
    ArrowRight.classList.remove("active");
  });      
});

const ControlRight = document.createElement("div");
ControlRight.className = "key ControlRight";
ControlRight.innerHTML = "Ctrl";
 bodyKeyboard_row4.append(ControlRight);
    
 ControlRight.addEventListener("mousedown", () => {           
  textarea.append("");       
  ControlRight.classList.toggle("active");
  ControlRight.addEventListener("click", () =>{
    ControlRight.classList.remove("active");
  });      
});


//==========================================================================
document.addEventListener("keydown", function(event) {
  if (event.code == "Backquote") {
    textarea.append("`");       
    key_Backquote.classList.toggle("active");     
  }
  if (event.code == "Digit1") {
    textarea.append("1");       
    key_Digit1.classList.toggle("active");     
  }
  if (event.code == "Digit2") {
    textarea.append("2");       
    key_Digit2.classList.toggle("active");     
  }
  if (event.code == "Digit3") {
    textarea.append("3");       
    key_Digit3.classList.toggle("active");     
  }
  if (event.code == "Digit4") {
    textarea.append("4");       
    key_Digit4.classList.toggle("active");     
  }
  if (event.code == "Digit5") {
    textarea.append("5");       
    key_Digit5.classList.toggle("active");     
  }
  if (event.code == "Digit6") {
    textarea.append("6");       
    key_Digit6.classList.toggle("active");     
  }
  if (event.code == "Digit7") {
    textarea.append("7");       
    key_Digit7.classList.toggle("active");     
  }
  if (event.code == "Digit8") {
    textarea.append("8");       
    key_Digit8.classList.toggle("active");     
  }
  if (event.code == "Digit9") {
    textarea.append("9");       
    key_Digit9.classList.toggle("active");     
  }
  if (event.code == "Digit0") {
    textarea.append("0");       
    key_Digit0.classList.toggle("active");     
  }
  if (event.code == "Minus") {
    textarea.append("-");       
    key_Minus.classList.toggle("active");     
  }
  if (event.code == "Equal") {
    textarea.append("=");       
    key_Equal.classList.toggle("active");     
  }
  if (event.code == "Backspace") {
    textarea.append("");       
    key_Backspace.classList.toggle("active");     
  }
  if (event.code == "Tab") {
    textarea.append("    ");       
    key_Tab.classList.toggle("active");     
  }
  if (event.key === "Tab") event.preventDefault();
 
  if (event.code == "KeyQ") {
    textarea.append("q");       
    key_KeyQ.classList.toggle("active");     
  }
  if (event.code == "KeyW") {
    textarea.append("w");       
    key_KeyW.classList.toggle("active");     
  }
  if (event.code == "KeyE") {
    textarea.append("e");       
    key_KeyE.classList.toggle("active");     
  }
  if (event.code == "KeyR") {
    textarea.append("r");       
    key_KeyR.classList.toggle("active");     
  }
  if (event.code == "KeyT") {
    textarea.append("t");       
    key_KeyT.classList.toggle("active");     
  }
  if (event.code == "KeyY") {
    textarea.append("y");       
    key_KeyY.classList.toggle("active");     
  }
  if (event.code == "KeyU") {
    textarea.append("u");       
    key_KeyU.classList.toggle("active");     
  }
  if (event.code == "KeyI") {
    textarea.append("i");       
    key_KeyI.classList.toggle("active");     
  }
  if (event.code == "KeyO") {
    textarea.append("o");       
    key_KeyO.classList.toggle("active");     
  }
  if (event.code == "KeyP") {
    textarea.append("p");       
    key_KeyP.classList.toggle("active");     
  }
  if (event.code == "BracketLeft") {
    textarea.append("[");       
    BracketLeft.classList.toggle("active");     
  }
  if (event.code == "BracketRight") {
    textarea.append("]");       
    BracketRight.classList.toggle("active");     
  }
  if (event.code == "Backslash") {
    textarea.append("\\");       
    Backslash.classList.toggle("active");     
  }
  if (event.code == "Delete") {
    textarea.append("");       
    Delete.classList.toggle("active");     
  }
  if (event.code == "CapsLock") {
    textarea.append("");       
    CapsLock.classList.toggle("active");     
  }
  if(CapsLock.classList.contains("active")) {    
    key_KeyQ.innerHTML = "Q";
    key_KeyW.innerHTML = "W";
    key_KeyE.innerHTML = "E";
    key_KeyR.innerHTML = "R";
    key_KeyT.innerHTML = "T";    
    key_KeyY.innerHTML = "Y";
    key_KeyU.innerHTML = "U";
    key_KeyI.innerHTML = "I";
    key_KeyO.innerHTML = "O";
    key_KeyP.innerHTML = "P";
    keyA.innerHTML = "A";
    keyS.innerHTML = "S";
    keyD.innerHTML = "D";
    keyF.innerHTML = "F";
    keyG.innerHTML = "G";
    keyH.innerHTML = "H";
    keyJ.innerHTML = "J";
    keyK.innerHTML = "K";
    keyL.innerHTML = "L";
    KeyZ.innerHTML = "Z";
    KeyX.innerHTML = "X";
    KeyC.innerHTML = "C";
    KeyV.innerHTML = "V";
    KeyB.innerHTML = "B";
    KeyN.innerHTML = "N";
    KeyM.innerHTML = "M";
  }else{
    key_KeyQ.innerHTML = "q";
    key_KeyW.innerHTML = "w";
    key_KeyE.innerHTML = "e";
    key_KeyR.innerHTML = "r";
    key_KeyT.innerHTML = "t";    
    key_KeyY.innerHTML = "y";
    key_KeyU.innerHTML = "u";
    key_KeyI.innerHTML = "i";
    key_KeyO.innerHTML = "o";
    key_KeyP.innerHTML = "p";
    keyA.innerHTML = "a";
    keyS.innerHTML = "s";
    keyD.innerHTML = "d";
    keyF.innerHTML = "f";
    keyG.innerHTML = "g";
    keyH.innerHTML = "h";
    keyJ.innerHTML = "j";
    keyK.innerHTML = "k";
    keyL.innerHTML = "l";
    KeyZ.innerHTML = "z";
    KeyX.innerHTML = "x";
    KeyC.innerHTML = "c";
    KeyV.innerHTML = "v";
    KeyB.innerHTML = "b";
    KeyN.innerHTML = "n";
    KeyM.innerHTML = "m";
  }
  if (event.code == "KeyA") {
    textarea.append("a");       
    keyA.classList.toggle("active");     
  }
  if (event.code == "KeyS") {
    textarea.append("s");       
    keyS.classList.toggle("active");     
  }
  if (event.code == "KeyD") {
    textarea.append("d");       
    keyD.classList.toggle("active");     
  }
  if (event.code == "KeyF") {
    textarea.append("f");       
    keyF.classList.toggle("active");     
  }
  if (event.code == "KeyG") {
    textarea.append("g");       
    keyG.classList.toggle("active");     
  }
  if (event.code == "KeyH") {
    textarea.append("h");       
    keyH.classList.toggle("active");     
  }
  if (event.code == "KeyJ") {
    textarea.append("j");       
    keyJ.classList.toggle("active");     
  }
  if (event.code == "KeyK") {
    textarea.append("k");       
    keyK.classList.toggle("active");     
  }
  if (event.code == "KeyL") {
    textarea.append("l");       
    keyL.classList.toggle("active");     
  }
  if (event.code == "Semicolon") {
    textarea.append(";");       
    Semicolon.classList.toggle("active");     
  }
  if (event.code == "Quote") {
    textarea.append("'");       
    Quote.classList.toggle("active");     
  }
  if (event.code == "Enter") {
    textarea.append("\n");       
    Enter.classList.toggle("active");     
  }
  if (event.code == "ShiftLeft") {           
    ShiftLeft.classList.toggle("active");
    if(ShiftLeft.classList.contains("active")){
      key_KeyQ.innerHTML = "Q";
      key_KeyW.innerHTML = "W";
      key_KeyE.innerHTML = "E";
      key_KeyR.innerHTML = "R";
      key_KeyT.innerHTML = "T";    
      key_KeyY.innerHTML = "Y";
      key_KeyU.innerHTML = "U";
      key_KeyI.innerHTML = "I";
      key_KeyO.innerHTML = "O";
      key_KeyP.innerHTML = "P";
      keyA.innerHTML = "A";
      keyS.innerHTML = "S";
      keyD.innerHTML = "D";
      keyF.innerHTML = "F";
      keyG.innerHTML = "G";
      keyH.innerHTML = "H";
      keyJ.innerHTML = "J";
      keyK.innerHTML = "K";
      keyL.innerHTML = "L";
      KeyZ.innerHTML = "Z";
      KeyX.innerHTML = "X";
      KeyC.innerHTML = "C";
      KeyV.innerHTML = "V";
      KeyB.innerHTML = "B";
      KeyN.innerHTML = "N";
      KeyM.innerHTML = "M";
      key_Backquote.innerHTML = "~";
      key_Digit1.innerHTML = "!";
      key_Digit2.innerHTML = "@";
      key_Digit3.innerHTML = "#";
      key_Digit4.innerHTML = "$";
      key_Digit5.innerHTML = "%";
      key_Digit6.innerHTML = "^";
      key_Digit7.innerHTML = "&";
      key_Digit8.innerHTML = "*";
      key_Digit9.innerHTML = "(";
      key_Digit0.innerHTML = ")";
      key_Minus.innerHTML = "_";
      key_Equal.innerHTML = "+";
      BracketLeft.innerHTML = "{";
      BracketRight.innerHTML = "}";
      Backslash.innerHTML = "|";
      Semicolon.innerHTML = ":";
      // eslint-disable-next-line quotes
      Quote.innerHTML = '"';
      Slash.innerHTML = "?";
      Comma.innerHTML = "<";
      Period.innerHTML = ">";
    }       
  }
  if (event.code == "KeyZ") {
    textarea.append("z");       
    KeyZ.classList.toggle("active");     
  }
  if (event.code == "KeyX") {
    textarea.append("x");       
    KeyX.classList.toggle("active");     
  }
  if (event.code == "KeyC") {
    textarea.append("c");       
    KeyC.classList.toggle("active");     
  }
  if (event.code == "KeyV") {
    textarea.append("v");       
    KeyV.classList.toggle("active");     
  }
  if (event.code == "KeyB") {
    textarea.append("b");       
    KeyB.classList.toggle("active");     
  }
  if (event.code == "KeyN") {
    textarea.append("n");       
    KeyN.classList.toggle("active");     
  }
  if (event.code == "KeyM") {
    textarea.append("m");       
    KeyM.classList.toggle("active");     
  }
  if (event.code == "Comma") {
    textarea.append(",");       
    Comma.classList.toggle("active");     
  }
  if (event.code == "Period") {
    textarea.append(".");       
    Period.classList.toggle("active");     
  }
  if (event.code == "Slash") {
    textarea.append("/");       
    Slash.classList.toggle("active");     
  }
  if (event.code == "ArrowUp") {
    textarea.append("▲");       
    ArrowUp.classList.toggle("active");     
  }
  if (event.code == "ShiftRight") {         
    ShiftRight.classList.toggle("active");
    if(ShiftRight.classList.contains("active")){
      key_KeyQ.innerHTML = "Q";
      key_KeyW.innerHTML = "W";
      key_KeyE.innerHTML = "E";
      key_KeyR.innerHTML = "R";
      key_KeyT.innerHTML = "T";    
      key_KeyY.innerHTML = "Y";
      key_KeyU.innerHTML = "U";
      key_KeyI.innerHTML = "I";
      key_KeyO.innerHTML = "O";
      key_KeyP.innerHTML = "P";
      keyA.innerHTML = "A";
      keyS.innerHTML = "S";
      keyD.innerHTML = "D";
      keyF.innerHTML = "F";
      keyG.innerHTML = "G";
      keyH.innerHTML = "H";
      keyJ.innerHTML = "J";
      keyK.innerHTML = "K";
      keyL.innerHTML = "L";
      KeyZ.innerHTML = "Z";
      KeyX.innerHTML = "X";
      KeyC.innerHTML = "C";
      KeyV.innerHTML = "V";
      KeyB.innerHTML = "B";
      KeyN.innerHTML = "N";
      KeyM.innerHTML = "M";
      key_Backquote.innerHTML = "~";
      key_Digit1.innerHTML = "!";
      key_Digit2.innerHTML = "@";
      key_Digit3.innerHTML = "#";
      key_Digit4.innerHTML = "$";
      key_Digit5.innerHTML = "%";
      key_Digit6.innerHTML = "^";
      key_Digit7.innerHTML = "&";
      key_Digit8.innerHTML = "*";
      key_Digit9.innerHTML = "(";
      key_Digit0.innerHTML = ")";
      key_Minus.innerHTML = "_";
      key_Equal.innerHTML = "+";
      BracketLeft.innerHTML = "{";
      BracketRight.innerHTML = "}";
      Backslash.innerHTML = "|";
      Semicolon.innerHTML = ":";
      // eslint-disable-next-line quotes
      Quote.innerHTML = '"';
      Slash.innerHTML = "?";
      Comma.innerHTML = "<";
      Period.innerHTML = ">";
    }            
  }
  if (event.code == "ControlLeft") {
    textarea.append("");       
    ControlLeft.classList.toggle("active");     
  }
  if (event.code == "MetaLeft") {
    textarea.append("");       
    MetaLeft.classList.toggle("active");     
  }
  if (event.code == "AltLeft") {
    textarea.append("");       
    AltLeft.classList.toggle("active");     
  }
  if (event.key === "altKey") event.preventDefault();
  if (event.code == "Space") {
    textarea.append(" ");       
    Space.classList.toggle("active");     
  }
  if (event.code == "AltRight") {
    textarea.append("");       
    AltRight.classList.toggle("active");     
  }
  if (event.code == "ArrowLeft") {
    textarea.append("◄");       
    ArrowLeft.classList.toggle("active");     
  }
  if (event.code == "ArrowDown") {
    textarea.append("▼");       
    ArrowDown.classList.toggle("active");     
  }
  if (event.code == "ArrowRight") {
    textarea.append("►");       
    ArrowRight.classList.toggle("active");     
  }
  if (event.code == "ControlRight") {
    textarea.append("");       
    ControlRight.classList.toggle("active");     
  }

  if(ControlLeft .classList.contains("active") && AltLeft.classList.contains("active")) {      
    key_KeyQ.innerHTML = "й";   
       
   
    
  }
});
document.addEventListener("keyup", function(event) {
  if (event.code == "Backquote") {         
    key_Backquote.classList.remove("active");     
  }
  if (event.code == "Digit1") {         
    key_Digit1.classList.remove("active");     
  }
  if (event.code == "Digit2") {         
    key_Digit2.classList.remove("active");     
  }
  if (event.code == "Digit3") {         
    key_Digit3.classList.remove("active");     
  }
  if (event.code == "Digit4") {         
    key_Digit4.classList.remove("active");     
  }
  if (event.code == "Digit5") {         
    key_Digit5.classList.remove("active");     
  }
  if (event.code == "Digit6") {         
    key_Digit6.classList.remove("active");     
  }
  if (event.code == "Digit7") {         
    key_Digit7.classList.remove("active");     
  }
  if (event.code == "Digit8") {         
    key_Digit8.classList.remove("active");     
  }
  if (event.code == "Digit9") {         
    key_Digit9.classList.remove("active");     
  }
  if (event.code == "Digit0") {         
    key_Digit0.classList.remove("active");     
  }
  if (event.code == "Minus") {         
    key_Minus.classList.remove("active");     
  }
  if (event.code == "Equal") {         
    key_Equal.classList.remove("active");     
  }
  if (event.code == "Backspace") {         
    key_Backspace.classList.remove("active");     
  }
  if (event.code == "Tab") {         
    key_Tab.classList.remove("active");     
  }
  if (event.code == "KeyQ") {         
    key_KeyQ.classList.remove("active");     
  }
  if (event.code == "KeyW") {         
    key_KeyW.classList.remove("active");     
  }
  if (event.code == "KeyE") {         
    key_KeyE.classList.remove("active");     
  }
  if (event.code == "KeyR") {         
    key_KeyR.classList.remove("active");     
  }
  if (event.code == "KeyT") {         
    key_KeyT.classList.remove("active");     
  }
  if (event.code == "KeyY") {         
    key_KeyY.classList.remove("active");     
  }
  if (event.code == "KeyU") {         
    key_KeyU.classList.remove("active");     
  }
  if (event.code == "KeyI") {         
    key_KeyI.classList.remove("active");     
  }
  if (event.code == "KeyO") {         
    key_KeyO.classList.remove("active");     
  }
  if (event.code == "KeyP") {         
    key_KeyP.classList.remove("active");     
  }
  if (event.code == "BracketLeft") {         
    BracketLeft.classList.remove("active");     
  }
  if (event.code == "BracketRight") {         
    BracketRight.classList.remove("active");     
  }
  if (event.code == "Backslash") {         
    Backslash.classList.remove("active");     
  }
  if (event.code == "Delete") {         
    Delete.classList.remove("active");     
  }
  if (event.code == "KeyA") {         
    keyA.classList.remove("active");     
  }
  if (event.code == "KeyS") {         
    keyS.classList.remove("active");     
  }
  if (event.code == "KeyD") {         
    keyD.classList.remove("active");     
  }
  if (event.code == "KeyF") {         
    keyF.classList.remove("active");     
  }
  if (event.code == "KeyG") {         
    keyG.classList.remove("active");     
  }
  if (event.code == "KeyH") {         
    keyH.classList.remove("active");     
  }
  if (event.code == "KeyJ") {         
    keyJ.classList.remove("active");     
  }
  if (event.code == "KeyK") {         
    keyK.classList.remove("active");     
  }
  if (event.code == "KeyL") {         
    keyL.classList.remove("active");     
  }
  if (event.code == "Semicolon") {         
    Semicolon.classList.remove("active");     
  }
  if (event.code == "Quote") {         
    Quote.classList.remove("active");     
  }
  if (event.code == "Enter") {         
    Enter.classList.remove("active");     
  }
  if (event.code == "ShiftLeft") {         
    ShiftLeft.classList.remove("active");
    key_KeyQ.innerHTML = "q";
    key_KeyW.innerHTML = "w";
    key_KeyE.innerHTML = "e";
    key_KeyR.innerHTML = "r";
    key_KeyT.innerHTML = "t";    
    key_KeyY.innerHTML = "y";
    key_KeyU.innerHTML = "u";
    key_KeyI.innerHTML = "i";
    key_KeyO.innerHTML = "o";
    key_KeyP.innerHTML = "p";
    keyA.innerHTML = "a";
    keyS.innerHTML = "s";
    keyD.innerHTML = "d";
    keyF.innerHTML = "f";
    keyG.innerHTML = "g";
    keyH.innerHTML = "h";
    keyJ.innerHTML = "j";
    keyK.innerHTML = "k";
    keyL.innerHTML = "l";
    KeyZ.innerHTML = "z";
    KeyX.innerHTML = "x";
    KeyC.innerHTML = "c";
    KeyV.innerHTML = "v";
    KeyB.innerHTML = "b";
    KeyN.innerHTML = "n";
    KeyM.innerHTML = "m"; 
    key_Backquote.innerHTML = "`";
    key_Digit0.innerHTML = "0";
    key_Digit1.innerHTML = "1";
    key_Digit2.innerHTML = "2";
    key_Digit3.innerHTML = "3";
    key_Digit4.innerHTML = "4";
    key_Digit5.innerHTML = "5";
    key_Digit6.innerHTML = "6";
    key_Digit7.innerHTML = "7";
    key_Digit8.innerHTML = "8";
    key_Digit9.innerHTML = "9";
    key_Minus.innerHTML = "-";
    key_Equal.innerHTML = "=";
    BracketLeft.innerHTML = "[";
    BracketRight.innerHTML = "]";
    Backslash.innerHTML = "\\";
    Semicolon.innerHTML = ";";
    Quote.innerHTML = "'";
    Slash.innerHTML = "/";
    Comma.innerHTML = ",";
    Period.innerHTML = ".";     
  }
  if (event.code == "KeyZ") {         
    KeyZ.classList.remove("active");     
  }
  if (event.code == "KeyX") {         
    KeyX.classList.remove("active");     
  }
  if (event.code == "KeyC") {         
    KeyC.classList.remove("active");     
  }
  if (event.code == "KeyV") {         
    KeyV.classList.remove("active");     
  }
  if (event.code == "KeyB") {         
    KeyB.classList.remove("active");     
  }
  if (event.code == "KeyN") {         
    KeyN.classList.remove("active");     
  }
  if (event.code == "KeyM") {         
    KeyM.classList.remove("active");     
  }
  if (event.code == "Comma") {         
    Comma.classList.remove("active");     
  }
  if (event.code == "Period") {         
    Period.classList.remove("active");     
  }
  if (event.code == "Slash") {         
    Slash.classList.remove("active");     
  }
  if (event.code == "ArrowUp") {         
    ArrowUp.classList.remove("active");     
  }
  if (event.code == "ShiftRight") {         
    ShiftRight.classList.remove("active"); 
    ShiftRight.classList.remove("active");
    key_KeyQ.innerHTML = "q";
    key_KeyW.innerHTML = "w";
    key_KeyE.innerHTML = "e";
    key_KeyR.innerHTML = "r";
    key_KeyT.innerHTML = "t";    
    key_KeyY.innerHTML = "y";
    key_KeyU.innerHTML = "u";
    key_KeyI.innerHTML = "i";
    key_KeyO.innerHTML = "o";
    key_KeyP.innerHTML = "p";
    keyA.innerHTML = "a";
    keyS.innerHTML = "s";
    keyD.innerHTML = "d";
    keyF.innerHTML = "f";
    keyG.innerHTML = "g";
    keyH.innerHTML = "h";
    keyJ.innerHTML = "j";
    keyK.innerHTML = "k";
    keyL.innerHTML = "l";
    KeyZ.innerHTML = "z";
    KeyX.innerHTML = "x";
    KeyC.innerHTML = "c";
    KeyV.innerHTML = "v";
    KeyB.innerHTML = "b";
    KeyN.innerHTML = "n";
    KeyM.innerHTML = "m"; 
    key_Backquote.innerHTML = "`";
    key_Digit0.innerHTML = "0";
    key_Digit1.innerHTML = "1";
    key_Digit2.innerHTML = "2";
    key_Digit3.innerHTML = "3";
    key_Digit4.innerHTML = "4";
    key_Digit5.innerHTML = "5";
    key_Digit6.innerHTML = "6";
    key_Digit7.innerHTML = "7";
    key_Digit8.innerHTML = "8";
    key_Digit9.innerHTML = "9";
    key_Minus.innerHTML = "-";
    key_Equal.innerHTML = "=";
    BracketLeft.innerHTML = "[";
    BracketRight.innerHTML = "]";
    Backslash.innerHTML = "\\";
    Semicolon.innerHTML = ";";
    Quote.innerHTML = "'";
    Slash.innerHTML = "/";
    Comma.innerHTML = ",";
    Period.innerHTML = ".";     
  }
  if (event.code == "ControlLeft") {         
    ControlLeft.classList.remove("active");     
  }
  if (event.code == "MetaLeft") {         
    MetaLeft.classList.remove("active");     
  }
  if (event.code == "AltLeft") {         
    AltLeft.classList.remove("active");     
  }
  if (event.code == "Space") {         
    Space.classList.remove("active");     
  }
  if (event.code == "AltRight") {         
    AltRight.classList.remove("active");     
  }
  if (event.code == "ArrowLeft") {         
    ArrowLeft.classList.remove("active");     
  }
  if (event.code == "ArrowDown") {         
    ArrowDown.classList.remove("active");     
  }
  if (event.code == "ArrowRight") {         
    ArrowRight.classList.remove("active");     
  }
  if (event.code == "ControlRight") {         
    ControlRight.classList.remove("active");     
  }
});





