'use strict';

/**
 * 1. SINGLE PAGE NAVIGATION
 */
const taskButtons = document.querySelectorAll('.task-btn');
const sections = document.querySelectorAll('.page-section');

function navigateTo(targetID) {
  sections.forEach(sec => sec.classList.remove('active'));
  
  const targetSection = document.getElementById(targetID);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo(0, 0); 
  }

  taskButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-target') === targetID) {
      btn.classList.add('active');
    }
  });
}

taskButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    if(target) navigateTo(target);
  });
});

/**
 * 2. TASKBAR CLOCK
 */
const clockElement = document.getElementById('clock');
function updateClock() {
  if(!clockElement) return;
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  clockElement.textContent = hours + ':' + minutes + ' ' + ampm;
}
setInterval(updateClock, 1000);
updateClock();


/**
 * 3. WINAMP PLAYER LOGIC
 */
const audio = document.getElementById('bg-audio');
const winampStatus = document.getElementById('winamp-status');

function playMusic() {
  if (!audio) return;
  audio.play();
  winampStatus.textContent = "WINAMP - PLAYING";
  winampStatus.style.color = "#0f0";
}

function pauseMusic() {
  if (!audio) return;
  audio.pause();
  winampStatus.textContent = "WINAMP - PAUSED";
  winampStatus.style.color = "#aaa";
}

function stopMusic() {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0; 
  winampStatus.textContent = "WINAMP - STOPPED";
  winampStatus.style.color = "#f00";
}

window.playMusic = playMusic;
window.pauseMusic = pauseMusic;
window.stopMusic = stopMusic;


/**
 * 4. PROJECT MODAL LOGIC
 */
const modalOverlay = document.getElementById('projectModal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

function openModal(projectId) {
  const dataElement = document.getElementById(projectId + '-data');
  const projectCard = document.querySelector(`[onclick="openModal('${projectId}')"]`);
  
  if (dataElement && projectCard) {
    const title = projectCard.querySelector('h3').innerText;
    modalTitle.innerText = title;
    modalContent.innerHTML = dataElement.innerHTML;
    modalOverlay.classList.add('active');
  }
}

function closeModal() {
  modalOverlay.classList.remove('active');
  setTimeout(() => { modalContent.innerHTML = ''; }, 200); 
}

window.openModal = openModal;
window.closeModal = closeModal;

modalOverlay.addEventListener('click', function(e) {
  if (e.target === modalOverlay) closeModal();
});

/**
 * 5. EASTER EGG: MINESWEEPER GAME LOGIC
 */
const startBtn = document.getElementById('startBtn');
const gameModal = document.getElementById('gameModal');

// Game Variables
const boardSize = 8;
const numMines = 10;
let grid = [];
let isGameOver = false;

// Open game when Start is clicked
startBtn.addEventListener('click', () => {
  gameModal.classList.add('active');
  initMinesweeper();
});

// Close game window
function closeGame() {
  gameModal.classList.remove('active');
}
window.closeGame = closeGame;

function initMinesweeper() {
  const board = document.getElementById('minesweeperBoard');
  document.getElementById('smileBtn').innerText = '🙂';
  board.innerHTML = '';
  grid = [];
  isGameOver = false;

  // 1. Create empty grid
  for (let r = 0; r < boardSize; r++) {
    let row = [];
    for (let c = 0; c < boardSize; c++) {
      const cell = document.createElement('div');
      cell.classList.add('ms-cell');
      
      // Left Click (Reveal)
      cell.addEventListener('click', () => revealCell(r, c));
      
      // Right Click (Flag)
      cell.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        toggleFlag(r, c);
      });

      board.appendChild(cell);
      row.push({ isMine: false, revealed: false, isFlagged: false, element: cell });
    }
    grid.push(row);
  }

  // 2. Place random mines
  let minesPlaced = 0;
  while (minesPlaced < numMines) {
    let r = Math.floor(Math.random() * boardSize);
    let c = Math.floor(Math.random() * boardSize);
    if (!grid[r][c].isMine) {
      grid[r][c].isMine = true;
      minesPlaced++;
    }
  }
}
window.initMinesweeper = initMinesweeper;

function revealCell(r, c) {
  if (isGameOver || grid[r][c].revealed || grid[r][c].isFlagged) return;
  const cell = grid[r][c];
  cell.revealed = true;
  cell.element.classList.add('revealed');

  if (cell.isMine) {
    // Game Over - Hit a bomb
    cell.element.innerText = '💣';
    cell.element.classList.add('mine-hit');
    gameOver(false);
  } else {
    // Safe spot
    let count = countMines(r, c);
    if (count > 0) {
      cell.element.innerText = count;
      // Classic Minesweeper Number Colors
      const colors = ['', 'blue', 'green', 'red', 'darkblue', 'darkred', 'teal', 'black', 'gray'];
      cell.element.style.color = colors[count];
    } else {
      // Flood fill empty spaces
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (r + i >= 0 && r + i < boardSize && c + j >= 0 && c + j < boardSize) {
            revealCell(r + i, c + j);
          }
        }
      }
    }
    checkWin();
  }
}

function countMines(r, c) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (r + i >= 0 && r + i < boardSize && c + j >= 0 && c + j < boardSize) {
        if (grid[r+i][c+j].isMine) count++;
      }
    }
  }
  return count;
}

function toggleFlag(r, c) {
  if (isGameOver || grid[r][c].revealed) return;
  const cell = grid[r][c];
  cell.isFlagged = !cell.isFlagged;
  cell.element.innerText = cell.isFlagged ? '🚩' : '';
}

function gameOver(win) {
  isGameOver = true;
  document.getElementById('smileBtn').innerText = win ? '😎' : '😵';
  
  // Reveal all bombs
  for (let r = 0; r < boardSize; r++) {
    for (let c = 0; c < boardSize; c++) {
      if (grid[r][c].isMine && !grid[r][c].isFlagged) {
        grid[r][c].element.innerText = '💣';
        grid[r][c].element.classList.add('revealed');
      }
    }
  }
}

function checkWin() {
  let revealedCount = 0;
  for (let r = 0; r < boardSize; r++) {
    for (let c = 0; c < boardSize; c++) {
      if (grid[r][c].revealed) revealedCount++;
    }
  }
  // If all non-mine cells are revealed
  if (revealedCount === (boardSize * boardSize) - numMines) {
    gameOver(true);
  }
}