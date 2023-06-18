document.addEventListener('DOMContentLoaded', (event) => {
  let consoleDiv = document.getElementById('app');
  // Your code here
  
$(function () {
  var startTime = new Date();
  var endTime = new Date();
  endTime.setMinutes(startTime.getMinutes() + 15);
  var endDateStr = endTime.getFullYear() + '-' + endTime.getMonth() + '-' + endTime.getDate();
  var endTimeStr = endTime.getHours() + ':' + endTime.getMinutes() + ':' + endTime.getMilliseconds();
  const hint_ = '#hint';
  const backstory_ = '#backstory';
  const container_ = '#container';
  const dialogue_ = '#dialogue';
  //create command objects with help text as param and command as another.
  const CMDS_ = [
    'hireus', 'clear', 'clock', 'date', 'echo', 'help', 'uname', 'whoami', 'su', 'download'
  ];
  //create file objects, file name and file contents.IN THE FUTURE LOGS????
  const FILES_ = [
    'logfile_' + endDateStr + '.txt', 'report1.doc', 'web.config'
  ];
  const USERS = [
    'admin', 'report', 'logviewer', 'guest'
  ];
  const HACKERHISTORY_ =
    `<div><div class="input-line line"><div class="prompt">admin@svr-1A89:/# </div>
        <div><input class="cmdline" value="duality logfile_` +
    endDateStr +
    `.txt" readonly=""></div></div>
        <div><div class="input-line line"><div class="prompt">admin@svr-1A89:/# </div>
        <div><input class="cmdline" value="cp logfile_` +
    endDateStr +
    `.txt /media" readonly=""></div></div>
        <div><div class="input-line line"><div class="prompt">admin@svr-1A89:/# </div>
        <div><input class="cmdline" value="empty!" readonly=""></div></div>
        <div><div class="input-line line"><div class="prompt">admin@svr-1A89:/# </div>
        <div><input class="cmdline" value="delete logfile_` +
    endDateStr +
    `.txt" readonly=""></div></div>
        <div><div class="input-line line"><div class="prompt">admin@svr-1A89:/# </div>
        <div><input class="cmdline" value="unknown command : delete" readonly=""></div></div>
        <div><div class="input-line line"><div class="prompt">admin@svr-1A89:/# </div>
        <div><input class="cmdline" value="rm logfile_` +
    endDateStr +
    `.txt" readonly=""></div></div>
        <div><div class="input-line line"><div class="prompt">admin@svr-1A89:/# </div>
        <div><input class="cmdline" value="logout" readonly=""></div></div>`;

  var currentDateYear = 2;
  var fs_ = null;
  var cwd_ = null;
  var history_ = [];
  var histpos_ = 0;
  var histtemp_ = 0;

  var beenLS = false;
  var beenHelp = false;
  var beenCat = false;
  var beenWhoami = false;
  var beenDate = false;

  var currentUser = 'guest';
  var currentSystem = '@svr-1A89:/# '
  window.URL = window.URL || window.webkitURL;
  window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
  window.addEventListener('click', function (e) {
    cmdLine_.focus();
  }, false);

  $(container_).hide();
  $(dialogue_).hide();
  $(hint_).hide();

  $('#input-line .prompt').html(currentUser + currentSystem);
  var cmdLine_ = document.querySelector('#input-line .cmdline');
  var output_ = document.querySelector('#container output');

  //cmdLine_.addEventListener('click', inputTextClick_, false);
  //cmdLine_.addEventListener('keydown', historyHandler_, false);
  cmdLine_.addEventListener('keydown', processInput, false);
  generateHackerHistory();

  function processInput(e) {
    // manage history
    if (e.keyCode == 9) { // tab
      e.preventDefault();
      var args = this.value.split(' ');
      var incomplete = args[1];
      var result = isInArray(incomplete, FILES_);
      this.value = args[0] + ' ' + result;
    } else if (e.keyCode == 38) { // up
      this.value = history_[history_.length - histpos_];
      histpos_--;
    } else if (e.keyCode == 40) { // down
      this.value = history_[history_.length - histpos_];
      histpos_++;
    } else if (e.keyCode == 13) { // enter
      if (this.value) {
        history_[history_.length] = this.value;
        histpos_ = history_.length;
      }
      var line = this.parentNode.parentNode.cloneNode(true);
      line.removeAttribute('id')
      line.classList.add('line');
      var input = line.querySelector('input.cmdline');
      input.autofocus = false;
      input.readOnly = true;
      output_.appendChild(line);
  
      var args = this.value.split(' ');
      var cmd = args[0];
      var fullCmd = args.join(' ');
      switch (cmd) {
        case 'su':
          if (!args[2]) {
            output('Usage: ' + cmd + ' username password');
          } else {
            validateLogin(args[1], args[2]);
          }
          break;
        case 'ls':
          output('<div class="ls-files">' + FILES_.join('<br>') + '</div>');
          if (beenLS) {
            hideHint();
          } else {
            showDialogue('You', "You just had to poke around right!?", 5000);
            beenLS = true;
          }
          break;
        case 'help':
          output('<div class="ls-files">' + CMDS_.join('<br>') + '</div>');
          break;
        case 'hireus':
          window.open('https://www.fiverr.com/diabolical_', '_blank'); // replace with your link
          break;          
        case 'hireus':
          if (!args[1]) {
            output('Usage: ' + cmd + ' fileToOpen.txt');
          } else {
            openFile(args[1]);
          }
          if (beenCat) {
            hideHint();
          } else {
            showHint('Pressing TAB key will complete the file name if it is unique.');
            beenCat = true;
          }
          break;
        default:
          if (fullCmd === 'download potato') {
            downloadPotato();
          } 
          else if (fullCmd === 'download internal') {
            downloadInternal();
          } 
          else if (fullCmd === 'download hothell') {
            downloadInternal();
          } 
          else if (fullCmd === 'download apeascent') {
            downloadInternal();
          } 
          else {
            output('unknown command : ' + args);
            output('Try: "download potato" to download games.')
          }
          break;
      }
      window.scrollTo(0, getDocHeight_());
      this.value = ''; // clear the input
    }
  };
  
  function downloadPotato() {
    var link = document.createElement('a');
    link.href = 'https://cdn.discordapp.com/attachments/768414936514428969/1120083400716472460/POTATO.zip'; // replace this with the URL of your zip file
    link.download = 'potato.zip';
    document.body.appendChild(link); // append the link to body (required for Firefox)
    link.click();
    document.body.removeChild(link); // remove the link from the body
  }

  function downloadInternal() {
    var link = document.createElement('a');
    link.href = 'https://cdn.discordapp.com/attachments/768414936514428969/1120083400716472460/POTATO.zip'; // replace this with the URL of your zip file
    link.download = 'potato.zip';
    document.body.appendChild(link); // append the link to body (required for Firefox)
    link.click();
    document.body.removeChild(link); // remove the link from the body
  }
  

  function validateLogin(uname, pword) {
    if (uname == 'admin' && pword == 'diabolical') {
      setCurrentUser(uname);
    }
    else {
      output('Invalid credentials');
    }
  };

  function getLoginPrompt() {
    return currentUser + currentSystem;
  };

  function openFile(e) {
    switch (e) {
      case 'logfile_' + endDateStr + '.txt':
        output(printLogFile1());
        break;
    }
  };

  function doesFileExist(fileName) {
    return true;
  };

  function printLogFile1(fileName) {
    switch (fileName) {
      case '':
        //todays date on the logs
        break;
    }
    return '<div>' + endDateStr + ':11:04:34| invalid password for user "admin"</div><div>' + endDateStr + ':11:04:34| unknown command "Password1"</div>'
  };

  function output(e) {
    output_.insertAdjacentHTML('beforeEnd', '<p>' + e + '</p>');
  };

  function getDocHeight_() {
    var d = document;
    return Math.max(
      Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
      Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
      Math.max(d.body.clientHeight, d.documentElement.clientHeight)
    );
  };

  function setCurrentUser(user) {
    currentUser = user;
    $('#input-line .prompt').html(currentUser + currentSystem);
  };

  //Player dialogue and hints
  function hideHint() {
    if ($(hint_).is(":visible")) {
      $('#hint-text').text('');
      $(hint_).fadeOut('slow');
    }
  };

  function showHint(s) {
    $('#hint-text').text(s);
    $(hint_).fadeIn('slow');
  };

  function showDialogue(characterName, text, duration) {
    //$('#character-photo')
    $('#dialogue-text').text(characterName + ': ' + text);
    $(dialogue_).fadeIn('slow');
    setTimeout(function () { $(dialogue_).fadeOut('slow'); }, duration);
  };

  function hideBlurb() {
    $(backstory_).hide();
    $('#container').show();
  };

  function isInArray(s, array) {
    //if(array.some(function(i){return (new RegExp()).text(s);}))
    var returnIndex = 0;
    var results = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i].startsWith(s)) {
        returnIndex = i;
        results++;
      }
    };
    if (results == 1) {
      return array[returnIndex];
    }
  };

  function generateHackerHistory() {
    output(HACKERHISTORY_);
  };

  hideBlurb();
  setTimeout(function () { showDialogue('Diabolical', 'What the?', 1000); }, 0); // Start immediately
  setTimeout(function () { showDialogue('Diabolical', 'How did you get here??', 2500); }, 2000); // 1000 (previous message duration)
  setTimeout(function () { showHint('Use download command to download games.'); }, 6500); // 8500 (previous total time) + 6500 (previous delay)
  setTimeout(function () { showDialogue('Diabolical', "Looks like you've been looking at the server logs.", 5000); }, 8500); // 1000 (previous duration) + 2500 (previous delay)
  setTimeout(function () { showDialogue('Diabolical', "Well then since you're here, I allow you to use the console for a short time.", 6500); }, 12500); // 3500 (previous total time) + 5000 (previous delay)
  setTimeout(function () { showHint('If you want to use the functions you can type "help" to gain access'); }, 20000); // 8500 (previous total time) + 6500 (previous delay)
  setTimeout(function () { showDialogue('Diabolical', "C'mon give it a try", 6000); }, 29000); // The last hint doesn't have a duration so we use the previous total time
});


});
