console.log("GetGameFrame Loaded");
const { remote, webFrame } = require('electron')

const alertCSS =
  `#alert {
  left: 270px !important;
  top: 83px !important;
  border: 0;
}
`
const alignCSS = document.createElement('style')
alignCSS.innerHTML =
  `html {
  overflow: hidden;
}
#w, #main-ntg {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 100;
  margin-left: 0 !important;
  margin-top: 0 !important;
}
#game_frame {
	position:fixed;
	left:50%;
	top:0px;
	margin-left:-480px;
	z-index:1
}
.naviapp {
  z-index: -1;
}
#ntg-recommend {
  display: none !important;
}
ul.area-menu{
	display:none;
}
.dmm-ntgnavi {
	display:none;
}
`

window.align = function () {
  console.log("window.align");
  if (location.hostname === 'pc-play.games.dmm.com') {
    document.body.appendChild(alignCSS)
    window.scrollTo(0, 0)
  } else if (location.pathname.includes('tohken')) {
    document.body.appendChild(alignCSS)
  }
}

window.unalign = () => {
  console.log("window.unalign");
  if (location.pathname.includes('854854') || location.pathname.includes('tohken')) {
    if (document.body.contains(alignCSS)) {
      document.body.removeChild(alignCSS)
    }
    if (document.querySelector('#spacing_top')) {
      document.querySelector('#spacing_top').style.display = 'block'
    }
  }
}

const webContent = remote.getCurrentWebContents()
const handleDocumentReady = () => {
  if (!document.body) {
    setTimeout(handleDocumentReady, 1000)
    return
  }
  window.align()
  webContent.insertCSS(alertCSS)
}

handleDocumentReady()


//http://pc-play.games.dmm.com/play/tohken/

if (window.location.toString().includes('pc-play.games.dmm.com/play/tohken')) {
  const _documentWrite = document.write
  document.write = function () {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
    } else {
      _documentWrite.apply(this, arguments)
    }
  }
}