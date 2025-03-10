



const songs = [
  {
    title: "Backbite",
    artist: "Dhanda Nyoliwala",
    file: "./assets/song/Backbite_Full_Video_Dhanda_Nyoliwala_New_Haryanvi_Songs_Haryanvi.mp3",
    cover: "./assets/image/backbite.jpg"
  },
  {
    title: "UP TO YOU",
    artist: "Dhanda Nyoliwala",
    file: "./assets/song/Dhanda_Nyoliwala_Up_To_U_Official_Music_Video_New_Rap_Song_202248k.mp3",
    cover: "./assets/image/Up-To-U-Haryanvi.jpg"
  },
  {
    title: "Knife",
    artist: "Dhanda Nyoliwala",
    file: "./assets/song/Dhanda_Nyoliwala_-_Knife_Brows__Official_Music_Video_(48k).mp3",
    cover: "./assets/image/knife.jpg"
  },
  {
    title: "Dil Hi Toh H",
    artist: "Fran",
    file: "./assets/song/Dil_Hi_Toh_Hai_Lyric_Video_The_Sky_Is_Pink_Priyanka_Chopra_Jonas.mp3",
    cover: "./assets/image/dil hi to h.jpg"
  },
  {
    title: "JHOL",
    artist: "Coke Studio",
    file: "./assets/song/Jhol_Coke_Studio_Pakistan_Season_15_Maanu_x_Annural_Khalid48k.mp3",
    cover: "./assets/image/jhol.jpg"
  },
  {
    title: "Churake",
    artist: "Villen",
    file: "./assets/song/Main_Tuta_Hua_Gilas,_Mujhme_Jaam_Bhare_Kyu_Kamakhya,_Churake_Song.mp3",
    cover: "./assets/image/tuta hua.jpg"
    },
  {
    title: "Udaariya",
    artist: "Sitander",
    file: "./assets/song/Udaarian_Badi_lambi_hai_kahani_mere_pyaar_di_Satinder_Sartaaj_Love.mp3",
    cover: "./assets/image/uddariya.jpg"
  },
  {
    title: "Softly",
    artist: "Karan Aujla",
    file: "./assets/song/SOFTLY_Official_Music_Video_KARAN_AUJLA_IKKY_LATEST_PUNJABI_SONGS.mp3",
    cover: "./assets/image/karan.jpeg"
  },
  {
    title: "Chann sitare ",
    artist: "Ammy Virk",
    file: "./assets/song/Ammy_Virk_WANG_DA_NAAP_Official_Video_ft_Sonam_Bajwa_Muklawa48k.mp3",
    cover: "./assets/image/ammy.jpeg"
  },
  {
    title: "Rosa lin",
    artist: "Fran",
    file: "./assets/song/Rosa_Linn_-_Snap_-__Official_Eurovision_Music_Video_(48k).mp3",
    cover: "./assets/image/images.jpeg"
  },
  {
    title: "JHOL",
    artist: "Coke Studio",
    file: "./assets/song/Panjeb_Official_Video_Layers_Ammy_Virk_Tanu_Grewal_Jaymeet_Rony.mp3",
      cover: "./assets/image/ammy.jpeg"
  },
  {
    title: "Ve_Hanniyaan",
    artist: "Villen",
    file: "./assets/song/Ve_Haaniyaan_Official_Video_Ravi_Dubey_Sargun_Mehta_Danny_Avvy_Sra.mp3",
    cover: "./assets/image/images.jpeg"
  }
];

// Selecting elements
const songItemContainer = document.querySelector(".song-item");
const audioPlayer = new Audio();
const progressBar = document.querySelector(".progress-bar");
const currTimeDisplay = document.querySelector(".curr-time");
const totTimeDisplay = document.querySelector(".tot-time");
const playPauseBtn = document.querySelector(".player-controls img:nth-child(3)"); // Play button
const nextBtn = document.getElementById("next"); // Next button
const prevBtn = document.getElementById("prev"); // Previous button

let currentSongIndex = 0;

// Format time (e.g., 01:30)
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

// Play song function
function playSong(index) {
  currentSongIndex = index;
  audioPlayer.src = songs[index].file;
  audioPlayer.play();
  playPauseBtn.src = "./assets/pause_icon.png"; // Update icon to pause

  // Update total duration when metadata loads
  audioPlayer.addEventListener("loadedmetadata", () => {
    totTimeDisplay.textContent = formatTime(audioPlayer.duration);
  });
}

// Update progress bar
audioPlayer.addEventListener("timeupdate", () => {
  progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  currTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

// Seek song using progress bar
progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Play/Pause button functionality
playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.src = "./assets/pause_icon.png"; // Pause icon
  } else {
    audioPlayer.pause();
    playPauseBtn.src = "./assets/player_icon3.png"; // Play icon
  }
});

// Next song function
nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to first song if last
  playSong(currentSongIndex);
});

// Previous song function
prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to last song if first
  playSong(currentSongIndex);
});

// Render songs dynamically
songs.forEach((song, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `card-${index}`;

  card.innerHTML = `
    <img src="${song.cover}" class="cards-img">
    <p class="card-title">${song.title}</p>
    <p class="card-info">${song.artist}</p>
  `;

  // Click event to play song
  card.addEventListener("click", () => {
    playSong(index);
  });

  songItemContainer.appendChild(card);
});
