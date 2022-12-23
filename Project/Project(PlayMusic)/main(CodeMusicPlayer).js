const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY ='F8_PLAYER' ;
const heading = $('header h2') ;
const cdThum = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playbtn =$('.btn-toggle-play');
const player = $('.player');
const  progress = $('#progress');
const nextBtn = $('.btn-next'); 
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat') ;
const playlist = $('.playlist') ; 


const app = {
   isPlaying : false,
   isRandom : false, 
   isRepeat : false, 
   currentIndex :0 ,
   config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {}, 

   songs : [
    {
        name: 'Như Anh Đã Thấy Em',
        singer: 'Phúc XP ',
        patch:'./assets/music/song1.mp3 ',
        image: './assets/img/img1.jpg', 
    },
    {
        name: 'Chờ Đợi Có Đáng Sợ',
        singer: 'ANDIEZ (YANG REMIX) ',
        patch:'./assets/music/song2.mp3 ',
        image: './assets/img/img2.jpg', 
    },
    {
        name: 'Sầu Hồng Gai',
        singer: 'JOMBIE TKAN ',
        patch:'./assets/music/song3.mp3 ',
        image: './assets/img/img3.jpg', 
    },
    {
        name: 'Fade',
        singer: 'Alan Walker',
        patch:'./assets/music/song4.mp3 ',
        image: './assets/img/img4.jpg', 
    },
    {
        name: 'Anh Sẽ Quên Em Mà',
        singer: 'Nit x Sing x Freak D',
        patch:'./assets/music/song5.mp3 ',
        image: './assets/img/img5.jpg', 
    },
    {
        name: 'Đông Kiếm Em',
        singer: 'Vũ',
        patch:'./assets/music/song6.mp3 ',
        image: './assets/img/img6.jpg', 
    },
   ],
  setConfig: function(key,value){
   this.config[key] = value;     
   localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));                   
    
  },
  render: function(){
   const htmls = this.songs.map((song,index) => {
    return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>                                                
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>                                                
            </div>
          `
   });
   playlist.innerHTML = htmls.join('')
  },
  defineProperties: function(){
    Object.defineProperty(this,'currentSong',{
        get: function(){
            return this.songs[this.currentIndex]
        }   
    })
  },
  handlerEvents: function(){
    // xử lý khi quay CD và dừng CD
  const cdWidth = cd.offsetWidth;
  const cdthumanimate =   cdThum.animate([
        {
            transform :'rotate(360deg)'// quay 360 độ 
        }
    ], {
        duration: 10000, // 10 sec 
        iterations : Infinity ,
    }) 
    cdthumanimate.pause();
  

    // xử lý phóng to và thu nhỏ cd 
    document.onscroll = function(){
        const scrollTop = window.scrollY /*Tóc độ rê chuột  */ || document.documentElement.scrollTop ;
        const newcdWidth = cdWidth - scrollTop; // chiều cao mới của cd 
        cd.style.width = newcdWidth > 0 ? newcdWidth + 'px' : 0;
        cd.style.opacity = newcdWidth / cdWidth ;
    } ;
    // xử lý khi play click 
    playbtn.onclick = function() {
        if(app.isPlaying == false){
            audio.play();
            console.log(app.isPlaying) ;
        } else {
            audio.pause(); 
            console.log(app.isPlaying) ;
        } 
    } ;
    // lắng nghe sự kiện play
    audio.onplay = function (){
        app.isPlaying = true ; 
        cdthumanimate.play();
        player.classList.add('playing');
    }
    // lắng nghe sự kiện pause 
   audio.onpause = function (){
    app.isPlaying = false ; 
    cdthumanimate.pause();
    player.classList.remove('playing');
   }
   // tăng giảm theo tiến độ bài hát 
    audio.ontimeupdate = function(){
       
        if(audio.duration =! NaN){
         const progressPercent = Math.floor(audio.currentTime/ audio.duration * 100) ;
            progress.value = progressPercent ;
        }
    }
   // xử lý khi tua music
  progress.onchange = function(e){
   const seektime = (audio.duration / 100  * e.target.value)
   audio.currentTime = seektime ;

  }
  // xử lý khi next music 
  nextBtn.onclick = function(){
    if(app.isRandom){
        app.playRandomSong() ;

    } else {
        app.nextSong();
    }
    
    audio.play() ;
    app.render() ;
    app.scrollToActiveSong();
  }
  // xử lý khi prev music 
  prevBtn.onclick = function(){
    if(app.isRandom){
        app.playRandomSong() ;

    } else {
        app.prevSong();
    }   
    app.scrollToActiveSong();
    
    audio.play() ;
    app.render(); 
  }
  // xử lý bật tắt khi random music 
  randomBtn.onclick = function(e){ 
    app.isRandom = !app.isRandom ; // đảo ngược chính nó 
    app.setConfig('IsRandom', app.isRandom)

    randomBtn.classList.toggle('active',app.isRandom); 
    // toggle check nếu có class thì xóa còn kh có thì thêm 
  } 

  // xử lý repeat song 
  repeatBtn.onclick = function(e){
    app.isRepeat = !app.isRepeat ; // 
    app.setConfig('isRepeat', app.isRepeat)
    repeatBtn.classList.toggle('active',app.isRepeat);
        
  }
  

  // xử lý next song khi audio onended ; 
  audio.onended = function ( ){
    if(app.isRepeat){
        audio.play();
    } else {
        nextBtn.click();
    }
  }

  //  lắng nghe hành vi click vào playlist
   playlist.onclick = function(e){
    const songNode = e.target.closest('.song:not(.active)') ;
    // xử lý khi click vào song 
    if(songNode || e.target.closest('.option')){ 
        // xử lý khi click vào song 
        if(songNode) {
           app.currentIndex = Number(songNode.dataset.index) ; 
           app.loadCurrentSong() ;
           audio.play() ; 
           app.render() ; 

        }
       // xử lý khi click vào option 
        if(e.target.closest('.option')) {
            alert('Chức năng đang cập nhật') ;
        }

      
    } else {

    }


   }
  
  },
  scrollToActiveSong: function(){
    setTimeout(() =>{
        $('.song.active').scrollIntoView({
            behavior: 'smooth',
            block : 'nearest',
        }
            
        ) ;

    },300)

  },

  loadCurrentSong: function( ){
    // get các element trong dom để bỏ các dữ liệu từ Songs 
  heading.textContent = this.currentSong.name ; 
   cdThum.style.backgroundImage = `url('${this.currentSong.image}')` ;
   audio.src = this.currentSong.patch;
  },
  loadConfig: function(){
    this.isRandom = this.config.isRandom ;
    this.isRepeat = this.config.isRepeat ; 

  },
  
 // xử lý khi next Song 


  nextSong: function(){
    this.currentIndex++ ; 
    if(this.currentIndex >= this.songs.length ){
        this.currentIndex = 0 ;
    }
    this.loadCurrentSong()
  },
// xử lý khi prev Song 
   prevSong: function(){
    this.currentIndex-- ; 
    if(this.currentIndex < 0 ){
        this.currentIndex = this.songs.length - 1 ;
    }
    this.loadCurrentSong()
   },
// xử lý random Song 
  playRandomSong : function (){
    let newIndex ;
    do {
        newIndex = Math.floor(Math.random() * this.songs.length) ;

    } while(newIndex === this.currentIndex) ;
    this.currentIndex = newIndex ;
    this.loadCurrentSong() ;    
  },
 
  start: function(){

    // định nghĩa các thuộc tính cho object 
    this.defineProperties();


    // lắng nghe / xử lý các sự kiện (DOM events)
    this.handlerEvents();
 
    // tải thông tinh bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong(); 

   // render playlist 
   this.render();

   // hiển thị trạng thái ban đầu của button repeat và random
   randomBtn.classList.toggle('active',app.isRandom); 
   repeatBtn.classList.toggle('active',app.isRepeat);
  },
} 
app.start();    
