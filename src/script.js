const titleName = document.createElement('div');
titleName.className = 'centralizer';
titleName.innerHTML = "<p class='title'>RSS Virtual Keyboard</p>";
document.body.append(titleName);

const textarea = document.createElement('textarea');
textarea.className = 'body--textarea textarea';
titleName.append(textarea);

const bodyKeyboard = document.createElement('div');
bodyKeyboard.className = 'body_keyboard keyboard';
titleName.append(bodyKeyboard);

const bodyKeyboardRow = document.createElement('div');
bodyKeyboardRow.className = 'body_keyboard_row row';
bodyKeyboard.append(bodyKeyboardRow);

const bodyKeyboardRow1 = document.createElement('div');
bodyKeyboardRow1.className = 'body_keyboard_row row';
bodyKeyboard.append(bodyKeyboardRow1);

const bodyKeyboardRow2 = document.createElement('div');
bodyKeyboardRow2.className = 'body_keyboard_row row';
bodyKeyboard.append(bodyKeyboardRow2);

const bodyKeyboardRow3 = document.createElement('div');
bodyKeyboardRow3.className = 'body_keyboard_row row';
bodyKeyboard.append(bodyKeyboardRow3);

const bodyKeyboardRow4 = document.createElement('div');
bodyKeyboardRow4.className = 'body_keyboard_row row';
bodyKeyboard.append(bodyKeyboardRow4);

const subtitle = document.createElement('div');
subtitle.className = 'subtitle';
subtitle.innerHTML = "<p class='subtitle'>The keyboard is created in the Windows <br>language: left ctrl + alt</p>";
titleName.append(subtitle);

const keyBackquote = document.createElement('div');
keyBackquote.className = 'key Backquote';
keyBackquote.innerHTML = '`';
bodyKeyboardRow.append(keyBackquote);

keyBackquote.addEventListener('mousedown', () => {
  textarea.append('`');
  keyBackquote.classList.toggle('active');
  keyBackquote.addEventListener('click', () => {
    keyBackquote.classList.remove('active');
  });
});

const keyDigit1 = document.createElement('div');
keyDigit1.className = 'key Digit1';
keyDigit1.innerHTML = '1';
bodyKeyboardRow.append(keyDigit1);

keyDigit1.addEventListener('mousedown', () => {
  textarea.append('1');
  keyDigit1.classList.toggle('active');
  keyDigit1.addEventListener('click', () => {
    keyDigit1.classList.remove('active');
  });
});

const keyDigit2 = document.createElement('div');
keyDigit2.className = 'key Digit2';
keyDigit2.innerHTML = '2';
bodyKeyboardRow.append(keyDigit2);

keyDigit2.addEventListener('mousedown', () => {
  textarea.append('2');
  keyDigit2.classList.toggle('active');
  keyDigit2.addEventListener('click', () => {
    keyDigit2.classList.remove('active');
  });
});

const keyDigit3 = document.createElement('div');
keyDigit3.className = 'key Digit3';
keyDigit3.innerHTML = '3';
bodyKeyboardRow.append(keyDigit3);

keyDigit3.addEventListener('mousedown', () => {
  textarea.append('3');
  keyDigit3.classList.toggle('active');
  keyDigit3.addEventListener('click', () => {
    keyDigit3.classList.remove('active');
  });
});

const keyDigit4 = document.createElement('div');
keyDigit4.className = 'key Digit4';
keyDigit4.innerHTML = '4';
bodyKeyboardRow.append(keyDigit4);

keyDigit4.addEventListener('mousedown', () => {
  textarea.append('4');
  keyDigit4.classList.toggle('active');
  keyDigit4.addEventListener('click', () => {
    keyDigit4.classList.remove('active');
  });
});

const keyDigit5 = document.createElement('div');
keyDigit5.className = 'key Digit5';
keyDigit5.innerHTML = '5';
bodyKeyboardRow.append(keyDigit5);

keyDigit5.addEventListener('mousedown', () => {
  textarea.append('5');
  keyDigit5.classList.toggle('active');
  keyDigit5.addEventListener('click', () => {
    keyDigit5.classList.remove('active');
  });
});

const keyDigit6 = document.createElement('div');
keyDigit6.className = 'key Digit6';
keyDigit6.innerHTML = '6';
bodyKeyboardRow.append(keyDigit6);

keyDigit6.addEventListener('mousedown', () => {
  textarea.append('6');
  keyDigit6.classList.toggle('active');
  keyDigit6.addEventListener('click', () => {
    keyDigit6.classList.remove('active');
  });
});

const keyDigit7 = document.createElement('div');
keyDigit7.className = 'key Digit7';
keyDigit7.innerHTML = '7';
bodyKeyboardRow.append(keyDigit7);

keyDigit7.addEventListener('mousedown', () => {
  textarea.append('7');
  keyDigit7.classList.toggle('active');
  keyDigit7.addEventListener('click', () => {
    keyDigit7.classList.remove('active');
  });
});

const keyDigit8 = document.createElement('div');
keyDigit8.className = 'key Digit8';
keyDigit8.innerHTML = '8';
bodyKeyboardRow.append(keyDigit8);

keyDigit8.addEventListener('mousedown', () => {
  textarea.append('8');
  keyDigit8.classList.toggle('active');
  keyDigit8.addEventListener('click', () => {
    keyDigit8.classList.remove('active');
  });
});

const keyDigit9 = document.createElement('div');
keyDigit9.className = 'key Digit9';
keyDigit9.innerHTML = '9';
bodyKeyboardRow.append(keyDigit9);

keyDigit9.addEventListener('mousedown', () => {
  textarea.append('9');
  keyDigit9.classList.toggle('active');
  keyDigit9.addEventListener('click', () => {
    keyDigit9.classList.remove('active');
  });
});

const keyDigit0 = document.createElement('div');
keyDigit0.className = 'key Digit0';
keyDigit0.innerHTML = '0';
bodyKeyboardRow.append(keyDigit0);

keyDigit0.addEventListener('mousedown', () => {
  textarea.append('0');
  keyDigit0.classList.toggle('active');
  keyDigit0.addEventListener('click', () => {
    keyDigit0.classList.remove('active');
  });
});

const keyMinus = document.createElement('div');
keyMinus.className = 'key Minus';
keyMinus.innerHTML = '-';
bodyKeyboardRow.append(keyMinus);

keyMinus.addEventListener('mousedown', () => {
  textarea.append('-');
  keyMinus.classList.toggle('active');
  keyMinus.addEventListener('click', () => {
    keyMinus.classList.remove('active');
  });
});

const keyEqual = document.createElement('div');
keyEqual.className = 'key Equal';
keyEqual.innerHTML = '=';
bodyKeyboardRow.append(keyEqual);

keyEqual.addEventListener('mousedown', () => {
  textarea.append('=');
  keyEqual.classList.toggle('active');
  keyEqual.addEventListener('click', () => {
    keyEqual.classList.remove('active');
  });
});

const keyBackspace = document.createElement('div');
keyBackspace.className = 'key Backspace';
keyBackspace.innerHTML = 'Backspace';
bodyKeyboardRow.append(keyBackspace);

keyBackspace.addEventListener('mousedown', () => {
  textarea.append('');
  keyBackspace.classList.toggle('active');
  keyBackspace.addEventListener('click', () => {
    keyBackspace.classList.remove('active');
  });
});

const keyTab = document.createElement('div');
keyTab.className = 'key Tab';
keyTab.innerHTML = 'Tab';
bodyKeyboardRow1.append(keyTab);

keyTab.addEventListener('mousedown', () => {
  textarea.append('\t');
  keyTab.classList.toggle('active');
  keyTab.addEventListener('click', () => {
    keyTab.classList.remove('active');
  });
});

const keyKeyQ = document.createElement('div');
keyKeyQ.className = 'key KeyQ';
keyKeyQ.innerHTML = 'q';
bodyKeyboardRow1.append(keyKeyQ);

keyKeyQ.addEventListener('mousedown', () => {
  textarea.append('q');
  keyKeyQ.classList.toggle('active');
  keyKeyQ.addEventListener('click', () => {
    keyKeyQ.classList.remove('active');
  });
});

const keyKeyW = document.createElement('div');
keyKeyW.className = 'key KeyW';
keyKeyW.innerHTML = 'w';
bodyKeyboardRow1.append(keyKeyW);

keyKeyW.addEventListener('mousedown', () => {
  textarea.append('w');
  keyKeyW.classList.toggle('active');
  keyKeyW.addEventListener('click', () => {
    keyKeyW.classList.remove('active');
  });
});

const keyKeyE = document.createElement('div');
keyKeyE.className = 'key KeyE';
keyKeyE.innerHTML = 'e';
bodyKeyboardRow1.append(keyKeyE);

keyKeyE.addEventListener('mousedown', () => {
  textarea.append('e');
  keyKeyE.classList.toggle('active');
  keyKeyE.addEventListener('click', () => {
    keyKeyE.classList.remove('active');
  });
});

const keyKeyR = document.createElement('div');
keyKeyR.className = 'key KeyR';
keyKeyR.innerHTML = 'r';
bodyKeyboardRow1.append(keyKeyR);

keyKeyR.addEventListener('mousedown', () => {
  textarea.append('r');
  keyKeyR.classList.toggle('active');
  keyKeyR.addEventListener('click', () => {
    keyKeyR.classList.remove('active');
  });
});

const keyKeyT = document.createElement('div');
keyKeyT.className = 'key KeyT';
keyKeyT.innerHTML = 't';
bodyKeyboardRow1.append(keyKeyT);

keyKeyT.addEventListener('mousedown', () => {
  textarea.append('t');
  keyKeyT.classList.toggle('active');
  keyKeyT.addEventListener('click', () => {
    keyKeyT.classList.remove('active');
  });
});

const keyKeyY = document.createElement('div');
keyKeyY.className = 'key KeyY';
keyKeyY.innerHTML = 'y';
bodyKeyboardRow1.append(keyKeyY);

keyKeyY.addEventListener('mousedown', () => {
  textarea.append('y');
  keyKeyY.classList.toggle('active');
  keyKeyY.addEventListener('click', () => {
    keyKeyY.classList.remove('active');
  });
});

const keyKeyU = document.createElement('div');
keyKeyU.className = 'key KeyU';
keyKeyU.innerHTML = 'u';
bodyKeyboardRow1.append(keyKeyU);

keyKeyU.addEventListener('mousedown', () => {
  textarea.append('u');
  keyKeyU.classList.toggle('active');
  keyKeyU.addEventListener('click', () => {
    keyKeyU.classList.remove('active');
  });
});

const keyKeyI = document.createElement('div');
keyKeyI.className = 'key KeyI';
keyKeyI.innerHTML = 'i';
bodyKeyboardRow1.append(keyKeyI);

keyKeyI.addEventListener('mousedown', () => {
  textarea.append('i');
  keyKeyI.classList.toggle('active');
  keyKeyI.addEventListener('click', () => {
    keyKeyI.classList.remove('active');
  });
});

const keyKeyO = document.createElement('div');
keyKeyO.className = 'key KeyO';
keyKeyO.innerHTML = 'o';
bodyKeyboardRow1.append(keyKeyO);

keyKeyO.addEventListener('mousedown', () => {
  textarea.append('o');
  keyKeyO.classList.toggle('active');
  keyKeyO.addEventListener('click', () => {
    keyKeyO.classList.remove('active');
  });
});

const keyKeyP = document.createElement('div');
keyKeyP.className = 'key KeyP';
keyKeyP.innerHTML = 'p';
bodyKeyboardRow1.append(keyKeyP);

keyKeyP.addEventListener('mousedown', () => {
  textarea.append('p');
  keyKeyP.classList.toggle('active');
  keyKeyP.addEventListener('click', () => {
    keyKeyP.classList.remove('active');
  });
});

const BracketLeft = document.createElement('div');
BracketLeft.className = 'key BracketLeft';
BracketLeft.innerHTML = '[';
bodyKeyboardRow1.append(BracketLeft);

BracketLeft.addEventListener('mousedown', () => {
  textarea.append('[');
  BracketLeft.classList.toggle('active');
  BracketLeft.addEventListener('click', () => {
    BracketLeft.classList.remove('active');
  });
});

const BracketRight = document.createElement('div');
BracketRight.className = 'key BracketRight';
BracketRight.innerHTML = ']';
bodyKeyboardRow1.append(BracketRight);

BracketRight.addEventListener('mousedown', () => {
  textarea.append(']');
  BracketRight.classList.toggle('active');
  BracketRight.addEventListener('click', () => {
    BracketRight.classList.remove('active');
  });
});

const Backslash = document.createElement('div');
Backslash.className = 'key Backslash';
Backslash.innerHTML = '\\';
bodyKeyboardRow1.append(Backslash);

Backslash.addEventListener('mousedown', () => {
  textarea.append('\\');
  Backslash.classList.toggle('active');
  Backslash.addEventListener('click', () => {
    Backslash.classList.remove('active');
  });
});

const Delete = document.createElement('div');
Delete.className = 'key Delete';
Delete.innerHTML = 'Del';
bodyKeyboardRow1.append(Delete);

Delete.addEventListener('mousedown', () => {
  textarea.append('Del');
  Delete.classList.toggle('active');
  Delete.addEventListener('click', () => {
    Delete.classList.remove('active');
  });
});

const CapsLock = document.createElement('div');
CapsLock.className = 'key CapsLock';
CapsLock.innerHTML = 'CapsLock';
bodyKeyboardRow2.append(CapsLock);

const keyA = document.createElement('div');
keyA.className = 'key keyA';
keyA.innerHTML = 'a';
bodyKeyboardRow2.append(keyA);

keyA.addEventListener('mousedown', () => {
  textarea.append('a');
  keyA.classList.toggle('active');
  keyA.addEventListener('click', () => {
    keyA.classList.remove('active');
  });
});

const keyS = document.createElement('div');
keyS.className = 'key keyS';
keyS.innerHTML = 's';
bodyKeyboardRow2.append(keyS);

keyS.addEventListener('mousedown', () => {
  textarea.append('s');
  keyS.classList.toggle('active');
  keyS.addEventListener('click', () => {
    keyS.classList.remove('active');
  });
});

const keyD = document.createElement('div');
keyD.className = 'key keyD';
keyD.innerHTML = 'd';
bodyKeyboardRow2.append(keyD);

keyD.addEventListener('mousedown', () => {
  textarea.append('d');
  keyD.classList.toggle('active');
  keyD.addEventListener('click', () => {
    keyD.classList.remove('active');
  });
});

const keyF = document.createElement('div');
keyF.className = 'key keyF';
keyF.innerHTML = 'f';
bodyKeyboardRow2.append(keyF);

keyF.addEventListener('mousedown', () => {
  textarea.append('f');
  keyF.classList.toggle('active');
  keyF.addEventListener('click', () => {
    keyF.classList.remove('active');
  });
});

const keyG = document.createElement('div');
keyG.className = 'key keyG';
keyG.innerHTML = 'g';
bodyKeyboardRow2.append(keyG);

keyG.addEventListener('mousedown', () => {
  textarea.append('g');
  keyG.classList.toggle('active');
  keyG.addEventListener('click', () => {
    keyG.classList.remove('active');
  });
});

const keyH = document.createElement('div');
keyH.className = 'key keyH';
keyH.innerHTML = 'h';
bodyKeyboardRow2.append(keyH);

keyH.addEventListener('mousedown', () => {
  textarea.append('h');
  keyH.classList.toggle('active');
  keyH.addEventListener('click', () => {
    keyH.classList.remove('active');
  });
});

const keyJ = document.createElement('div');
keyJ.className = 'key keyJ';
keyJ.innerHTML = 'j';
bodyKeyboardRow2.append(keyJ);

keyJ.addEventListener('mousedown', () => {
  textarea.append('j');
  keyJ.classList.toggle('active');
  keyJ.addEventListener('click', () => {
    keyJ.classList.remove('active');
  });
});

const keyK = document.createElement('div');
keyK.className = 'key keyK';
keyK.innerHTML = 'k';
bodyKeyboardRow2.append(keyK);

keyK.addEventListener('mousedown', () => {
  textarea.append('k');
  keyK.classList.toggle('active');
  keyK.addEventListener('click', () => {
    keyK.classList.remove('active');
  });
});

const keyL = document.createElement('div');
keyL.className = 'key keyL';
keyL.innerHTML = 'l';
bodyKeyboardRow2.append(keyL);

keyL.addEventListener('mousedown', () => {
  textarea.append('l');
  keyL.classList.toggle('active');
  keyL.addEventListener('click', () => {
    keyL.classList.remove('active');
  });
});

const Semicolon = document.createElement('div');
Semicolon.className = 'key Semicolon';
Semicolon.innerHTML = ';';
bodyKeyboardRow2.append(Semicolon);

Semicolon.addEventListener('mousedown', () => {
  textarea.append(';');
  Semicolon.classList.toggle('active');
  Semicolon.addEventListener('click', () => {
    Semicolon.classList.remove('active');
  });
});

const Quote = document.createElement('div');
Quote.className = 'key Quote';
Quote.innerHTML = "'";
bodyKeyboardRow2.append(Quote);

Quote.addEventListener('mousedown', () => {
  textarea.append("'");
  Quote.classList.toggle('active');
  Quote.addEventListener('click', () => {
    Quote.classList.remove('active');
  });
});

const Enter = document.createElement('div');
Enter.className = 'key Enter';
Enter.innerHTML = 'Enter';
bodyKeyboardRow2.append(Enter);

Enter.addEventListener('mousedown', () => {
  textarea.append('\n');
  Enter.classList.toggle('active');
  Enter.addEventListener('click', () => {
    Enter.classList.remove('active');
  });
});

const ShiftLeft = document.createElement('div');
ShiftLeft.className = 'key ShiftLeft';
ShiftLeft.innerHTML = 'Shift';
bodyKeyboardRow3.append(ShiftLeft);

const KeyZ = document.createElement('div');
KeyZ.className = 'key KeyZ';
KeyZ.innerHTML = 'z';
bodyKeyboardRow3.append(KeyZ);

KeyZ.addEventListener('mousedown', () => {
  textarea.append('z');
  KeyZ.classList.toggle('active');
  KeyZ.addEventListener('click', () => {
    KeyZ.classList.remove('active');
  });
});

const KeyX = document.createElement('div');
KeyX.className = 'key KeyX';
KeyX.innerHTML = 'x';
bodyKeyboardRow3.append(KeyX);

KeyX.addEventListener('mousedown', () => {
  textarea.append('x');
  KeyX.classList.toggle('active');
  KeyX.addEventListener('click', () => {
    KeyX.classList.remove('active');
  });
});

const KeyC = document.createElement('div');
KeyC.className = 'key KeyC';
KeyC.innerHTML = 'c';
bodyKeyboardRow3.append(KeyC);

KeyC.addEventListener('mousedown', () => {
  textarea.append('c');
  KeyC.classList.toggle('active');
  KeyC.addEventListener('click', () => {
    KeyC.classList.remove('active');
  });
});

const KeyV = document.createElement('div');
KeyV.className = 'key KeyV';
KeyV.innerHTML = 'v';
bodyKeyboardRow3.append(KeyV);

KeyV.addEventListener('mousedown', () => {
  textarea.append('v');
  KeyV.classList.toggle('active');
  KeyV.addEventListener('click', () => {
    KeyV.classList.remove('active');
  });
});

const KeyB = document.createElement('div');
KeyB.className = 'key KeyB';
KeyB.innerHTML = 'b';
bodyKeyboardRow3.append(KeyB);

KeyB.addEventListener('mousedown', () => {
  textarea.append('b');
  KeyB.classList.toggle('active');
  KeyB.addEventListener('click', () => {
    KeyB.classList.remove('active');
  });
});

const KeyN = document.createElement('div');
KeyN.className = 'key KeyB';
KeyN.innerHTML = 'n';
bodyKeyboardRow3.append(KeyN);

KeyN.addEventListener('mousedown', () => {
  textarea.append('n');
  KeyN.classList.toggle('active');
  KeyN.addEventListener('click', () => {
    KeyN.classList.remove('active');
  });
});

const KeyM = document.createElement('div');
KeyM.className = 'key KeyB';
KeyM.innerHTML = 'm';
bodyKeyboardRow3.append(KeyM);

KeyM.addEventListener('mousedown', () => {
  textarea.append('m');
  KeyM.classList.toggle('active');
  KeyM.addEventListener('click', () => {
    KeyM.classList.remove('active');
  });
});

const Comma = document.createElement('div');
Comma.className = 'key Comma';
Comma.innerHTML = ',';
bodyKeyboardRow3.append(Comma);

Comma.addEventListener('mousedown', () => {
  textarea.append(',');
  Comma.classList.toggle('active');
  Comma.addEventListener('click', () => {
    Comma.classList.remove('active');
  });
});

const Period = document.createElement('div');
Period.className = 'key Period';
Period.innerHTML = '.';
bodyKeyboardRow3.append(Period);

Period.addEventListener('mousedown', () => {
  textarea.append('.');
  Period.classList.toggle('active');
  Period.addEventListener('click', () => {
    Period.classList.remove('active');
  });
});

const Slash = document.createElement('div');
Slash.className = 'key Slash';
Slash.innerHTML = '/';
bodyKeyboardRow3.append(Slash);

Slash.addEventListener('mousedown', () => {
  textarea.append('/');
  Slash.classList.toggle('active');
  Slash.addEventListener('click', () => {
    Slash.classList.remove('active');
  });
});

const ArrowUp = document.createElement('div');
ArrowUp.className = 'key ArrowUp';
ArrowUp.innerHTML = '▲';
bodyKeyboardRow3.append(ArrowUp);

ArrowUp.addEventListener('mousedown', () => {
  textarea.append('▲');
  ArrowUp.classList.toggle('active');
  ArrowUp.addEventListener('click', () => {
    ArrowUp.classList.remove('active');
  });
});

const ShiftRight = document.createElement('div');
ShiftRight.className = 'key ShiftRight';
ShiftRight.innerHTML = 'Shift';
bodyKeyboardRow3.append(ShiftRight);

ShiftRight.addEventListener('mousedown', () => {
  textarea.append('');
  ShiftRight.classList.toggle('active');
  if (ShiftRight.classList.contains('active')) {
    keyKeyQ.innerHTML = 'Q';
    keyKeyW.innerHTML = 'W';
    keyKeyE.innerHTML = 'E';
    keyKeyR.innerHTML = 'R';
    keyKeyT.innerHTML = 'T';
    keyKeyY.innerHTML = 'Y';
    keyKeyU.innerHTML = 'U';
    keyKeyI.innerHTML = 'I';
    keyKeyO.innerHTML = 'O';
    keyKeyP.innerHTML = 'P';
    keyA.innerHTML = 'A';
    keyS.innerHTML = 'S';
    keyD.innerHTML = 'D';
    keyF.innerHTML = 'F';
    keyG.innerHTML = 'G';
    keyH.innerHTML = 'H';
    keyJ.innerHTML = 'J';
    keyK.innerHTML = 'K';
    keyL.innerHTML = 'L';
    KeyZ.innerHTML = 'Z';
    KeyX.innerHTML = 'X';
    KeyC.innerHTML = 'C';
    KeyV.innerHTML = 'V';
    KeyB.innerHTML = 'B';
    KeyN.innerHTML = 'N';
    KeyM.innerHTML = 'M';
    keyBackquote.innerHTML = '~';
    keyDigit1.innerHTML = '!';
    keyDigit2.innerHTML = '@';
    keyDigit3.innerHTML = '#';
    keyDigit4.innerHTML = '$';
    keyDigit5.innerHTML = '%';
    keyDigit6.innerHTML = '^';
    keyDigit7.innerHTML = '&';
    keyDigit8.innerHTML = '*';
    keyDigit9.innerHTML = '(';
    keyDigit0.innerHTML = ')';
    keyMinus.innerHTML = '_';
    keyEqual.innerHTML = '+';
    BracketLeft.innerHTML = '{';
    BracketRight.innerHTML = '}';
    Backslash.innerHTML = '|';
    Semicolon.innerHTML = ':';
    // eslint-disable-next-line quotes
    Quote.innerHTML = '"';
    Slash.innerHTML = '?';
    Comma.innerHTML = '<';
    Period.innerHTML = '>';
  }
  ShiftRight.addEventListener('click', () => {
    ShiftRight.classList.remove('active');
    ShiftRight.classList.remove('active');
    keyKeyQ.innerHTML = 'q';
    keyKeyW.innerHTML = 'w';
    keyKeyE.innerHTML = 'e';
    keyKeyR.innerHTML = 'r';
    keyKeyT.innerHTML = 't';
    keyKeyY.innerHTML = 'y';
    keyKeyU.innerHTML = 'u';
    keyKeyI.innerHTML = 'i';
    keyKeyO.innerHTML = 'o';
    keyKeyP.innerHTML = 'p';
    keyA.innerHTML = 'a';
    keyS.innerHTML = 's';
    keyD.innerHTML = 'd';
    keyF.innerHTML = 'f';
    keyG.innerHTML = 'g';
    keyH.innerHTML = 'h';
    keyJ.innerHTML = 'j';
    keyK.innerHTML = 'k';
    keyL.innerHTML = 'l';
    KeyZ.innerHTML = 'z';
    KeyX.innerHTML = 'x';
    KeyC.innerHTML = 'c';
    KeyV.innerHTML = 'v';
    KeyB.innerHTML = 'b';
    KeyN.innerHTML = 'n';
    KeyM.innerHTML = 'm';
    keyBackquote.innerHTML = '`';
    keyDigit0.innerHTML = '0';
    keyDigit1.innerHTML = '1';
    keyDigit2.innerHTML = '2';
    keyDigit3.innerHTML = '3';
    keyDigit4.innerHTML = '4';
    keyDigit5.innerHTML = '5';
    keyDigit6.innerHTML = '6';
    keyDigit7.innerHTML = '7';
    keyDigit8.innerHTML = '8';
    keyDigit9.innerHTML = '9';
    keyMinus.innerHTML = '-';
    keyEqual.innerHTML = '=';
    BracketLeft.innerHTML = '[';
    BracketRight.innerHTML = ']';
    Backslash.innerHTML = '\\';
    Semicolon.innerHTML = ';';
    Quote.innerHTML = "'";
    Slash.innerHTML = '/';
    Comma.innerHTML = ',';
    Period.innerHTML = '.';
  });
});

const ControlLeft = document.createElement('div');
ControlLeft.className = 'key ControlLeft';
ControlLeft.innerHTML = 'Ctrl';
bodyKeyboardRow4.append(ControlLeft);

ControlLeft.addEventListener('mousedown', () => {
  textarea.append('');
  ControlLeft.classList.toggle('active');
  ControlLeft.addEventListener('click', () => {
    ControlLeft.classList.remove('active');
  });
});

const MetaLeft = document.createElement('div');
MetaLeft.className = 'key MetaLeft';
MetaLeft.innerHTML = 'Win';
bodyKeyboardRow4.append(MetaLeft);

MetaLeft.addEventListener('mousedown', () => {
  textarea.append('');
  MetaLeft.classList.toggle('active');
  MetaLeft.addEventListener('click', () => {
    MetaLeft.classList.remove('active');
  });
});

const AltLeft = document.createElement('div');
AltLeft.className = 'key AltLeft';
AltLeft.innerHTML = 'Alt';
bodyKeyboardRow4.append(AltLeft);

AltLeft.addEventListener('mousedown', () => {
  textarea.append('');
  AltLeft.classList.toggle('active');
  AltLeft.addEventListener('click', () => {
    AltLeft.classList.remove('active');
  });
});

const Space = document.createElement('div');
Space.className = 'key Space';
Space.innerHTML = '';
bodyKeyboardRow4.append(Space);

Space.addEventListener('mousedown', () => {
  textarea.append(' ');
  Space.classList.toggle('active');
  Space.addEventListener('click', () => {
    Space.classList.remove('active');
  });
});

const AltRight = document.createElement('div');
AltRight.className = 'key AltRight';
AltRight.innerHTML = 'Alt';
bodyKeyboardRow4.append(AltRight);

AltRight.addEventListener('mousedown', () => {
  textarea.append('');
  AltRight.classList.toggle('active');
  AltRight.addEventListener('click', () => {
    AltRight.classList.remove('active');
  });
});

const ArrowLeft = document.createElement('div');
ArrowLeft.className = 'key ArrowLeft';
ArrowLeft.innerHTML = '◄';
bodyKeyboardRow4.append(ArrowLeft);

ArrowLeft.addEventListener('mousedown', () => {
  textarea.append('◄');
  ArrowLeft.classList.toggle('active');
  ArrowLeft.addEventListener('click', () => {
    ArrowLeft.classList.remove('active');
  });
});

const ArrowDown = document.createElement('div');
ArrowDown.className = 'key ArrowDown';
ArrowDown.innerHTML = '▼';
bodyKeyboardRow4.append(ArrowDown);

ArrowDown.addEventListener('mousedown', () => {
  textarea.append('▼');
  ArrowDown.classList.toggle('active');
  ArrowDown.addEventListener('click', () => {
    ArrowDown.classList.remove('active');
  });
});

const ArrowRight = document.createElement('div');
ArrowRight.className = 'key ArrowRight';
ArrowRight.innerHTML = '►';
bodyKeyboardRow4.append(ArrowRight);

ArrowRight.addEventListener('mousedown', () => {
  textarea.append('►');
  ArrowRight.classList.toggle('active');
  ArrowRight.addEventListener('click', () => {
    ArrowRight.classList.remove('active');
  });
});

const ControlRight = document.createElement('div');
ControlRight.className = 'key ControlRight';
ControlRight.innerHTML = 'Ctrl';
bodyKeyboardRow4.append(ControlRight);

ControlRight.addEventListener('mousedown', () => {
  textarea.append('');
  ControlRight.classList.toggle('active');
  ControlRight.addEventListener('click', () => {
    ControlRight.classList.remove('active');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Backquote') {
    textarea.append('`');
    keyBackquote.classList.toggle('active');
  }
  if (event.code === 'Digit1') {
    textarea.append('1');
    keyDigit1.classList.toggle('active');
  }
  if (event.code === 'Digit2') {
    textarea.append('2');
    keyDigit2.classList.toggle('active');
  }
  if (event.code === 'Digit3') {
    textarea.append('3');
    keyDigit3.classList.toggle('active');
  }
  if (event.code === 'Digit4') {
    textarea.append('4');
    keyDigit4.classList.toggle('active');
  }
  if (event.code === 'Digit5') {
    textarea.append('5');
    keyDigit5.classList.toggle('active');
  }
  if (event.code === 'Digit6') {
    textarea.append('6');
    keyDigit6.classList.toggle('active');
  }
  if (event.code === 'Digit7') {
    textarea.append('7');
    keyDigit7.classList.toggle('active');
  }
  if (event.code === 'Digit8') {
    textarea.append('8');
    keyDigit8.classList.toggle('active');
  }
  if (event.code === 'Digit9') {
    textarea.append('9');
    keyDigit9.classList.toggle('active');
  }
  if (event.code === 'Digit0') {
    textarea.append('0');
    keyDigit0.classList.toggle('active');
  }
  if (event.code === 'Minus') {
    textarea.append('-');
    keyMinus.classList.toggle('active');
  }
  if (event.code === 'Equal') {
    textarea.append('=');
    keyEqual.classList.toggle('active');
  }
  if (event.code === 'Backspace') {
    textarea.append('');
    keyBackspace.classList.toggle('active');
  }
  if (event.code === 'Tab') {
    textarea.append('    ');
    keyTab.classList.toggle('active');
  }
  if (event.key === 'Tab') event.preventDefault();

  if (event.code === 'KeyQ') {
    textarea.append('q');
    keyKeyQ.classList.toggle('active');
  }
  if (event.code === 'KeyW') {
    textarea.append('w');
    keyKeyW.classList.toggle('active');
  }
  if (event.code === 'KeyE') {
    textarea.append('e');
    keyKeyE.classList.toggle('active');
  }
  if (event.code === 'KeyR') {
    textarea.append('r');
    keyKeyR.classList.toggle('active');
  }
  if (event.code === 'KeyT') {
    textarea.append('t');
    keyKeyT.classList.toggle('active');
  }
  if (event.code === 'KeyY') {
    textarea.append('y');
    keyKeyY.classList.toggle('active');
  }
  if (event.code === 'KeyU') {
    textarea.append('u');
    keyKeyU.classList.toggle('active');
  }
  if (event.code === 'KeyI') {
    textarea.append('i');
    keyKeyI.classList.toggle('active');
  }
  if (event.code === 'KeyO') {
    textarea.append('o');
    keyKeyO.classList.toggle('active');
  }
  if (event.code === 'KeyP') {
    textarea.append('p');
    keyKeyP.classList.toggle('active');
  }
  if (event.code === 'BracketLeft') {
    textarea.append('[');
    BracketLeft.classList.toggle('active');
  }
  if (event.code === 'BracketRight') {
    textarea.append(']');
    BracketRight.classList.toggle('active');
  }
  if (event.code === 'Backslash') {
    textarea.append('\\');
    Backslash.classList.toggle('active');
  }
  if (event.code === 'Delete') {
    textarea.append('');
    Delete.classList.toggle('active');
  }
  if (event.code === 'CapsLock') {
    textarea.append('');
    CapsLock.classList.toggle('active');
  }
  if (CapsLock.classList.contains('active')) {
    keyKeyQ.innerHTML = 'Q';
    keyKeyW.innerHTML = 'W';
    keyKeyE.innerHTML = 'E';
    keyKeyR.innerHTML = 'R';
    keyKeyT.innerHTML = 'T';
    keyKeyY.innerHTML = 'Y';
    keyKeyU.innerHTML = 'U';
    keyKeyI.innerHTML = 'I';
    keyKeyO.innerHTML = 'O';
    keyKeyP.innerHTML = 'P';
    keyA.innerHTML = 'A';
    keyS.innerHTML = 'S';
    keyD.innerHTML = 'D';
    keyF.innerHTML = 'F';
    keyG.innerHTML = 'G';
    keyH.innerHTML = 'H';
    keyJ.innerHTML = 'J';
    keyK.innerHTML = 'K';
    keyL.innerHTML = 'L';
    KeyZ.innerHTML = 'Z';
    KeyX.innerHTML = 'X';
    KeyC.innerHTML = 'C';
    KeyV.innerHTML = 'V';
    KeyB.innerHTML = 'B';
    KeyN.innerHTML = 'N';
    KeyM.innerHTML = 'M';
  } else {
    keyKeyQ.innerHTML = 'q';
    keyKeyW.innerHTML = 'w';
    keyKeyE.innerHTML = 'e';
    keyKeyR.innerHTML = 'r';
    keyKeyT.innerHTML = 't';
    keyKeyY.innerHTML = 'y';
    keyKeyU.innerHTML = 'u';
    keyKeyI.innerHTML = 'i';
    keyKeyO.innerHTML = 'o';
    keyKeyP.innerHTML = 'p';
    keyA.innerHTML = 'a';
    keyS.innerHTML = 's';
    keyD.innerHTML = 'd';
    keyF.innerHTML = 'f';
    keyG.innerHTML = 'g';
    keyH.innerHTML = 'h';
    keyJ.innerHTML = 'j';
    keyK.innerHTML = 'k';
    keyL.innerHTML = 'l';
    KeyZ.innerHTML = 'z';
    KeyX.innerHTML = 'x';
    KeyC.innerHTML = 'c';
    KeyV.innerHTML = 'v';
    KeyB.innerHTML = 'b';
    KeyN.innerHTML = 'n';
    KeyM.innerHTML = 'm';
  }
  if (event.code === 'KeyA') {
    textarea.append('a');
    keyA.classList.toggle('active');
  }
  if (event.code === 'KeyS') {
    textarea.append('s');
    keyS.classList.toggle('active');
  }
  if (event.code === 'KeyD') {
    textarea.append('d');
    keyD.classList.toggle('active');
  }
  if (event.code === 'KeyF') {
    textarea.append('f');
    keyF.classList.toggle('active');
  }
  if (event.code === 'KeyG') {
    textarea.append('g');
    keyG.classList.toggle('active');
  }
  if (event.code === 'KeyH') {
    textarea.append('h');
    keyH.classList.toggle('active');
  }
  if (event.code === 'KeyJ') {
    textarea.append('j');
    keyJ.classList.toggle('active');
  }
  if (event.code === 'KeyK') {
    textarea.append('k');
    keyK.classList.toggle('active');
  }
  if (event.code === 'KeyL') {
    textarea.append('l');
    keyL.classList.toggle('active');
  }
  if (event.code === 'Semicolon') {
    textarea.append(';');
    Semicolon.classList.toggle('active');
  }
  if (event.code === 'Quote') {
    textarea.append("'");
    Quote.classList.toggle('active');
  }
  if (event.code === 'Enter') {
    textarea.append('\n');
    Enter.classList.toggle('active');
  }
  if (event.code === 'ShiftLeft') {
    ShiftLeft.classList.toggle('active');
    if (ShiftLeft.classList.contains('active')) {
      keyKeyQ.innerHTML = 'Q';
      keyKeyW.innerHTML = 'W';
      keyKeyE.innerHTML = 'E';
      keyKeyR.innerHTML = 'R';
      keyKeyT.innerHTML = 'T';
      keyKeyY.innerHTML = 'Y';
      keyKeyU.innerHTML = 'U';
      keyKeyI.innerHTML = 'I';
      keyKeyO.innerHTML = 'O';
      keyKeyP.innerHTML = 'P';
      keyA.innerHTML = 'A';
      keyS.innerHTML = 'S';
      keyD.innerHTML = 'D';
      keyF.innerHTML = 'F';
      keyG.innerHTML = 'G';
      keyH.innerHTML = 'H';
      keyJ.innerHTML = 'J';
      keyK.innerHTML = 'K';
      keyL.innerHTML = 'L';
      KeyZ.innerHTML = 'Z';
      KeyX.innerHTML = 'X';
      KeyC.innerHTML = 'C';
      KeyV.innerHTML = 'V';
      KeyB.innerHTML = 'B';
      KeyN.innerHTML = 'N';
      KeyM.innerHTML = 'M';
      keyBackquote.innerHTML = '~';
      keyDigit1.innerHTML = '!';
      keyDigit2.innerHTML = '@';
      keyDigit3.innerHTML = '#';
      keyDigit4.innerHTML = '$';
      keyDigit5.innerHTML = '%';
      keyDigit6.innerHTML = '^';
      keyDigit7.innerHTML = '&';
      keyDigit8.innerHTML = '*';
      keyDigit9.innerHTML = '(';
      keyDigit0.innerHTML = ')';
      keyMinus.innerHTML = '_';
      keyEqual.innerHTML = '+';
      BracketLeft.innerHTML = '{';
      BracketRight.innerHTML = '}';
      Backslash.innerHTML = '|';
      Semicolon.innerHTML = ':';
      // eslint-disable-next-line quotes
      Quote.innerHTML = '"';
      Slash.innerHTML = '?';
      Comma.innerHTML = '<';
      Period.innerHTML = '>';
    }
  }
  if (event.code === 'KeyZ') {
    textarea.append('z');
    KeyZ.classList.toggle('active');
  }
  if (event.code === 'KeyX') {
    textarea.append('x');
    KeyX.classList.toggle('active');
  }
  if (event.code === 'KeyC') {
    textarea.append('c');
    KeyC.classList.toggle('active');
  }
  if (event.code === 'KeyV') {
    textarea.append('v');
    KeyV.classList.toggle('active');
  }
  if (event.code === 'KeyB') {
    textarea.append('b');
    KeyB.classList.toggle('active');
  }
  if (event.code === 'KeyN') {
    textarea.append('n');
    KeyN.classList.toggle('active');
  }
  if (event.code === 'KeyM') {
    textarea.append('m');
    KeyM.classList.toggle('active');
  }
  if (event.code === 'Comma') {
    textarea.append(',');
    Comma.classList.toggle('active');
  }
  if (event.code === 'Period') {
    textarea.append('.');
    Period.classList.toggle('active');
  }
  if (event.code === 'Slash') {
    textarea.append('/');
    Slash.classList.toggle('active');
  }
  if (event.code === 'ArrowUp') {
    textarea.append('▲');
    ArrowUp.classList.toggle('active');
  }
  if (event.code === 'ShiftRight') {
    ShiftRight.classList.toggle('active');
    if (ShiftRight.classList.contains('active')) {
      keyKeyQ.innerHTML = 'Q';
      keyKeyW.innerHTML = 'W';
      keyKeyE.innerHTML = 'E';
      keyKeyR.innerHTML = 'R';
      keyKeyT.innerHTML = 'T';
      keyKeyY.innerHTML = 'Y';
      keyKeyU.innerHTML = 'U';
      keyKeyI.innerHTML = 'I';
      keyKeyO.innerHTML = 'O';
      keyKeyP.innerHTML = 'P';
      keyA.innerHTML = 'A';
      keyS.innerHTML = 'S';
      keyD.innerHTML = 'D';
      keyF.innerHTML = 'F';
      keyG.innerHTML = 'G';
      keyH.innerHTML = 'H';
      keyJ.innerHTML = 'J';
      keyK.innerHTML = 'K';
      keyL.innerHTML = 'L';
      KeyZ.innerHTML = 'Z';
      KeyX.innerHTML = 'X';
      KeyC.innerHTML = 'C';
      KeyV.innerHTML = 'V';
      KeyB.innerHTML = 'B';
      KeyN.innerHTML = 'N';
      KeyM.innerHTML = 'M';
      keyBackquote.innerHTML = '~';
      keyDigit1.innerHTML = '!';
      keyDigit2.innerHTML = '@';
      keyDigit3.innerHTML = '#';
      keyDigit4.innerHTML = '$';
      keyDigit5.innerHTML = '%';
      keyDigit6.innerHTML = '^';
      keyDigit7.innerHTML = '&';
      keyDigit8.innerHTML = '*';
      keyDigit9.innerHTML = '(';
      keyDigit0.innerHTML = ')';
      keyMinus.innerHTML = '_';
      keyEqual.innerHTML = '+';
      BracketLeft.innerHTML = '{';
      BracketRight.innerHTML = '}';
      Backslash.innerHTML = '|';
      Semicolon.innerHTML = ':';
      // eslint-disable-next-line quotes
      Quote.innerHTML = '"';
      Slash.innerHTML = '?';
      Comma.innerHTML = '<';
      Period.innerHTML = '>';
    }
  }
  if (event.code === 'ControlLeft') {
    textarea.append('');
    ControlLeft.classList.toggle('active');
  }
  if (event.code === 'MetaLeft') {
    textarea.append('');
    MetaLeft.classList.toggle('active');
  }
  if (event.code === 'AltLeft') {
    textarea.append('');
    AltLeft.classList.toggle('active');
  }
  if (event.key === 'altKey') event.preventDefault();
  if (event.code === 'Space') {
    textarea.append(' ');
    Space.classList.toggle('active');
  }
  if (event.code === 'AltRight') {
    textarea.append('');
    AltRight.classList.toggle('active');
  }
  if (event.code === 'ArrowLeft') {
    textarea.append('◄');
    ArrowLeft.classList.toggle('active');
  }
  if (event.code === 'ArrowDown') {
    textarea.append('▼');
    ArrowDown.classList.toggle('active');
  }
  if (event.code === 'ArrowRight') {
    textarea.append('►');
    ArrowRight.classList.toggle('active');
  }
  if (event.code === 'ControlRight') {
    textarea.append('');
    ControlRight.classList.toggle('active');
  }

  if (ControlLeft.classList.contains('active') && AltLeft.classList.contains('active')) {
    keyKeyQ.innerHTML = 'й';
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Backquote') {
    keyBackquote.classList.remove('active');
  }
  if (event.code === 'Digit1') {
    keyDigit1.classList.remove('active');
  }
  if (event.code === 'Digit2') {
    keyDigit2.classList.remove('active');
  }
  if (event.code === 'Digit3') {
    keyDigit3.classList.remove('active');
  }
  if (event.code === 'Digit4') {
    keyDigit4.classList.remove('active');
  }
  if (event.code === 'Digit5') {
    keyDigit5.classList.remove('active');
  }
  if (event.code === 'Digit6') {
    keyDigit6.classList.remove('active');
  }
  if (event.code === 'Digit7') {
    keyDigit7.classList.remove('active');
  }
  if (event.code === 'Digit8') {
    keyDigit8.classList.remove('active');
  }
  if (event.code === 'Digit9') {
    keyDigit9.classList.remove('active');
  }
  if (event.code === 'Digit0') {
    keyDigit0.classList.remove('active');
  }
  if (event.code === 'Minus') {
    keyMinus.classList.remove('active');
  }
  if (event.code === 'Equal') {
    keyEqual.classList.remove('active');
  }
  if (event.code === 'Backspace') {
    keyBackspace.classList.remove('active');
  }
  if (event.code === 'Tab') {
    keyTab.classList.remove('active');
  }
  if (event.code === 'KeyQ') {
    keyKeyQ.classList.remove('active');
  }
  if (event.code === 'KeyW') {
    keyKeyW.classList.remove('active');
  }
  if (event.code === 'KeyE') {
    keyKeyE.classList.remove('active');
  }
  if (event.code === 'KeyR') {
    keyKeyR.classList.remove('active');
  }
  if (event.code === 'KeyT') {
    keyKeyT.classList.remove('active');
  }
  if (event.code === 'KeyY') {
    keyKeyY.classList.remove('active');
  }
  if (event.code === 'KeyU') {
    keyKeyU.classList.remove('active');
  }
  if (event.code === 'KeyI') {
    keyKeyI.classList.remove('active');
  }
  if (event.code === 'KeyO') {
    keyKeyO.classList.remove('active');
  }
  if (event.code === 'KeyP') {
    keyKeyP.classList.remove('active');
  }
  if (event.code === 'BracketLeft') {
    BracketLeft.classList.remove('active');
  }
  if (event.code === 'BracketRight') {
    BracketRight.classList.remove('active');
  }
  if (event.code === 'Backslash') {
    Backslash.classList.remove('active');
  }
  if (event.code === 'Delete') {
    Delete.classList.remove('active');
  }
  if (event.code === 'KeyA') {
    keyA.classList.remove('active');
  }
  if (event.code === 'KeyS') {
    keyS.classList.remove('active');
  }
  if (event.code === 'KeyD') {
    keyD.classList.remove('active');
  }
  if (event.code === 'KeyF') {
    keyF.classList.remove('active');
  }
  if (event.code === 'KeyG') {
    keyG.classList.remove('active');
  }
  if (event.code === 'KeyH') {
    keyH.classList.remove('active');
  }
  if (event.code === 'KeyJ') {
    keyJ.classList.remove('active');
  }
  if (event.code === 'KeyK') {
    keyK.classList.remove('active');
  }
  if (event.code === 'KeyL') {
    keyL.classList.remove('active');
  }
  if (event.code === 'Semicolon') {
    Semicolon.classList.remove('active');
  }
  if (event.code === 'Quote') {
    Quote.classList.remove('active');
  }
  if (event.code === 'Enter') {
    Enter.classList.remove('active');
  }
  if (event.code === 'ShiftLeft') {
    ShiftLeft.classList.remove('active');
    keyKeyQ.innerHTML = 'q';
    keyKeyW.innerHTML = 'w';
    keyKeyE.innerHTML = 'e';
    keyKeyR.innerHTML = 'r';
    keyKeyT.innerHTML = 't';
    keyKeyY.innerHTML = 'y';
    keyKeyU.innerHTML = 'u';
    keyKeyI.innerHTML = 'i';
    keyKeyO.innerHTML = 'o';
    keyKeyP.innerHTML = 'p';
    keyA.innerHTML = 'a';
    keyS.innerHTML = 's';
    keyD.innerHTML = 'd';
    keyF.innerHTML = 'f';
    keyG.innerHTML = 'g';
    keyH.innerHTML = 'h';
    keyJ.innerHTML = 'j';
    keyK.innerHTML = 'k';
    keyL.innerHTML = 'l';
    KeyZ.innerHTML = 'z';
    KeyX.innerHTML = 'x';
    KeyC.innerHTML = 'c';
    KeyV.innerHTML = 'v';
    KeyB.innerHTML = 'b';
    KeyN.innerHTML = 'n';
    KeyM.innerHTML = 'm';
    keyBackquote.innerHTML = '`';
    keyDigit0.innerHTML = '0';
    keyDigit1.innerHTML = '1';
    keyDigit2.innerHTML = '2';
    keyDigit3.innerHTML = '3';
    keyDigit4.innerHTML = '4';
    keyDigit5.innerHTML = '5';
    keyDigit6.innerHTML = '6';
    keyDigit7.innerHTML = '7';
    keyDigit8.innerHTML = '8';
    keyDigit9.innerHTML = '9';
    keyMinus.innerHTML = '-';
    keyEqual.innerHTML = '=';
    BracketLeft.innerHTML = '[';
    BracketRight.innerHTML = ']';
    Backslash.innerHTML = '\\';
    Semicolon.innerHTML = ';';
    Quote.innerHTML = "'";
    Slash.innerHTML = '/';
    Comma.innerHTML = ',';
    Period.innerHTML = '.';
  }
  if (event.code === 'KeyZ') {
    KeyZ.classList.remove('active');
  }
  if (event.code === 'KeyX') {
    KeyX.classList.remove('active');
  }
  if (event.code === 'KeyC') {
    KeyC.classList.remove('active');
  }
  if (event.code === 'KeyV') {
    KeyV.classList.remove('active');
  }
  if (event.code === 'KeyB') {
    KeyB.classList.remove('active');
  }
  if (event.code === 'KeyN') {
    KeyN.classList.remove('active');
  }
  if (event.code === 'KeyM') {
    KeyM.classList.remove('active');
  }
  if (event.code === 'Comma') {
    Comma.classList.remove('active');
  }
  if (event.code === 'Period') {
    Period.classList.remove('active');
  }
  if (event.code === 'Slash') {
    Slash.classList.remove('active');
  }
  if (event.code === 'ArrowUp') {
    ArrowUp.classList.remove('active');
  }
  if (event.code === 'ShiftRight') {
    ShiftRight.classList.remove('active');
    ShiftRight.classList.remove('active');
    keyKeyQ.innerHTML = 'q';
    keyKeyW.innerHTML = 'w';
    keyKeyE.innerHTML = 'e';
    keyKeyR.innerHTML = 'r';
    keyKeyT.innerHTML = 't';
    keyKeyY.innerHTML = 'y';
    keyKeyU.innerHTML = 'u';
    keyKeyI.innerHTML = 'i';
    keyKeyO.innerHTML = 'o';
    keyKeyP.innerHTML = 'p';
    keyA.innerHTML = 'a';
    keyS.innerHTML = 's';
    keyD.innerHTML = 'd';
    keyF.innerHTML = 'f';
    keyG.innerHTML = 'g';
    keyH.innerHTML = 'h';
    keyJ.innerHTML = 'j';
    keyK.innerHTML = 'k';
    keyL.innerHTML = 'l';
    KeyZ.innerHTML = 'z';
    KeyX.innerHTML = 'x';
    KeyC.innerHTML = 'c';
    KeyV.innerHTML = 'v';
    KeyB.innerHTML = 'b';
    KeyN.innerHTML = 'n';
    KeyM.innerHTML = 'm';
    keyBackquote.innerHTML = '`';
    keyDigit0.innerHTML = '0';
    keyDigit1.innerHTML = '1';
    keyDigit2.innerHTML = '2';
    keyDigit3.innerHTML = '3';
    keyDigit4.innerHTML = '4';
    keyDigit5.innerHTML = '5';
    keyDigit6.innerHTML = '6';
    keyDigit7.innerHTML = '7';
    keyDigit8.innerHTML = '8';
    keyDigit9.innerHTML = '9';
    keyMinus.innerHTML = '-';
    keyEqual.innerHTML = '=';
    BracketLeft.innerHTML = '[';
    BracketRight.innerHTML = ']';
    Backslash.innerHTML = '\\';
    Semicolon.innerHTML = ';';
    Quote.innerHTML = "'";
    Slash.innerHTML = '/';
    Comma.innerHTML = ',';
    Period.innerHTML = '.';
  }
  if (event.code === 'ControlLeft') {
    ControlLeft.classList.remove('active');
  }
  if (event.code === 'MetaLeft') {
    MetaLeft.classList.remove('active');
  }
  if (event.code === 'AltLeft') {
    AltLeft.classList.remove('active');
  }
  if (event.code === 'Space') {
    Space.classList.remove('active');
  }
  if (event.code === 'AltRight') {
    AltRight.classList.remove('active');
  }
  if (event.code === 'ArrowLeft') {
    ArrowLeft.classList.remove('active');
  }
  if (event.code === 'ArrowDown') {
    ArrowDown.classList.remove('active');
  }
  if (event.code === 'ArrowRight') {
    ArrowRight.classList.remove('active');
  }
  if (event.code === 'ControlRight') {
    ControlRight.classList.remove('active');
  }
});

CapsLock.addEventListener('click', () => {
  textarea.append('');
  CapsLock.classList.toggle('active');

  if (CapsLock.classList.contains('active')) {
    keyKeyQ.addEventListener('mousedown', () => {
      textarea.append('Q');
      keyKeyQ.classList.toggle('active');
      keyKeyQ.addEventListener('click', () => {
        keyKeyQ.classList.remove('active');
      });
    });
    keyKeyQ.innerHTML = 'Q';
    keyKeyW.innerHTML = 'W';
    keyKeyE.innerHTML = 'E';
    keyKeyR.innerHTML = 'R';
    keyKeyT.innerHTML = 'T';
    keyKeyY.innerHTML = 'Y';
    keyKeyU.innerHTML = 'U';
    keyKeyI.innerHTML = 'I';
    keyKeyO.innerHTML = 'O';
    keyKeyP.innerHTML = 'P';
    keyA.innerHTML = 'A';
    keyS.innerHTML = 'S';
    keyD.innerHTML = 'D';
    keyF.innerHTML = 'F';
    keyG.innerHTML = 'G';
    keyH.innerHTML = 'H';
    keyJ.innerHTML = 'J';
    keyK.innerHTML = 'K';
    keyL.innerHTML = 'L';
    KeyZ.innerHTML = 'Z';
    KeyX.innerHTML = 'X';
    KeyC.innerHTML = 'C';
    KeyV.innerHTML = 'V';
    KeyB.innerHTML = 'B';
    KeyN.innerHTML = 'N';
    KeyM.innerHTML = 'M';
  } else {
    keyKeyQ.innerHTML = 'q';
    keyKeyW.innerHTML = 'w';
    keyKeyE.innerHTML = 'e';
    keyKeyR.innerHTML = 'r';
    keyKeyT.innerHTML = 't';
    keyKeyY.innerHTML = 'y';
    keyKeyU.innerHTML = 'u';
    keyKeyI.innerHTML = 'i';
    keyKeyO.innerHTML = 'o';
    keyKeyP.innerHTML = 'p';
    keyA.innerHTML = 'a';
    keyS.innerHTML = 's';
    keyD.innerHTML = 'd';
    keyF.innerHTML = 'f';
    keyG.innerHTML = 'g';
    keyH.innerHTML = 'h';
    keyJ.innerHTML = 'j';
    keyK.innerHTML = 'k';
    keyL.innerHTML = 'l';
    KeyZ.innerHTML = 'z';
    KeyX.innerHTML = 'x';
    KeyC.innerHTML = 'c';
    KeyV.innerHTML = 'v';
    KeyB.innerHTML = 'b';
    KeyN.innerHTML = 'n';
    KeyM.innerHTML = 'm';
  }
});

ShiftLeft.addEventListener('mousedown', () => {
  textarea.append('');
  ShiftLeft.classList.toggle('active');
  if (ShiftLeft.classList.contains('active')) {
    keyKeyQ.innerHTML = 'Q';
    keyKeyW.innerHTML = 'W';
    keyKeyE.innerHTML = 'E';
    keyKeyR.innerHTML = 'R';
    keyKeyT.innerHTML = 'T';
    keyKeyY.innerHTML = 'Y';
    keyKeyU.innerHTML = 'U';
    keyKeyI.innerHTML = 'I';
    keyKeyO.innerHTML = 'O';
    keyKeyP.innerHTML = 'P';
    keyA.innerHTML = 'A';
    keyS.innerHTML = 'S';
    keyD.innerHTML = 'D';
    keyF.innerHTML = 'F';
    keyG.innerHTML = 'G';
    keyH.innerHTML = 'H';
    keyJ.innerHTML = 'J';
    keyK.innerHTML = 'K';
    keyL.innerHTML = 'L';
    KeyZ.innerHTML = 'Z';
    KeyX.innerHTML = 'X';
    KeyC.innerHTML = 'C';
    KeyV.innerHTML = 'V';
    KeyB.innerHTML = 'B';
    KeyN.innerHTML = 'N';
    KeyM.innerHTML = 'M';
    keyBackquote.innerHTML = '~';
    keyDigit1.innerHTML = '!';
    keyDigit2.innerHTML = '@';
    keyDigit3.innerHTML = '#';
    keyDigit4.innerHTML = '$';
    keyDigit5.innerHTML = '%';
    keyDigit6.innerHTML = '^';
    keyDigit7.innerHTML = '&';
    keyDigit8.innerHTML = '*';
    keyDigit9.innerHTML = '(';
    keyDigit0.innerHTML = ')';
    keyMinus.innerHTML = '_';
    keyEqual.innerHTML = '+';
    BracketLeft.innerHTML = '{';
    BracketRight.innerHTML = '}';
    Backslash.innerHTML = '|';
    Semicolon.innerHTML = ':';
    // eslint-disable-next-line quotes
    Quote.innerHTML = '"';
    Slash.innerHTML = '?';
    Comma.innerHTML = '<';
    Period.innerHTML = '>';
  }

  ShiftLeft.addEventListener('click', () => {
    ShiftLeft.classList.remove('active');
    keyKeyQ.innerHTML = 'q';
    keyKeyW.innerHTML = 'w';
    keyKeyE.innerHTML = 'e';
    keyKeyR.innerHTML = 'r';
    keyKeyT.innerHTML = 't';
    keyKeyY.innerHTML = 'y';
    keyKeyU.innerHTML = 'u';
    keyKeyI.innerHTML = 'i';
    keyKeyO.innerHTML = 'o';
    keyKeyP.innerHTML = 'p';
    keyA.innerHTML = 'a';
    keyS.innerHTML = 's';
    keyD.innerHTML = 'd';
    keyF.innerHTML = 'f';
    keyG.innerHTML = 'g';
    keyH.innerHTML = 'h';
    keyJ.innerHTML = 'j';
    keyK.innerHTML = 'k';
    keyL.innerHTML = 'l';
    KeyZ.innerHTML = 'z';
    KeyX.innerHTML = 'x';
    KeyC.innerHTML = 'c';
    KeyV.innerHTML = 'v';
    KeyB.innerHTML = 'b';
    KeyN.innerHTML = 'n';
    KeyM.innerHTML = 'm';
    keyBackquote.innerHTML = '`';
    keyDigit0.innerHTML = '0';
    keyDigit1.innerHTML = '1';
    keyDigit2.innerHTML = '2';
    keyDigit3.innerHTML = '3';
    keyDigit4.innerHTML = '4';
    keyDigit5.innerHTML = '5';
    keyDigit6.innerHTML = '6';
    keyDigit7.innerHTML = '7';
    keyDigit8.innerHTML = '8';
    keyDigit9.innerHTML = '9';
    keyMinus.innerHTML = '-';
    keyEqual.innerHTML = '=';
    BracketLeft.innerHTML = '[';
    BracketRight.innerHTML = ']';
    Backslash.innerHTML = '\\';
    Semicolon.innerHTML = ';';
    Quote.innerHTML = "'";
    Slash.innerHTML = '/';
    Comma.innerHTML = ',';
    Period.innerHTML = '.';
  });
});
