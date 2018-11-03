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
  width: 960px !important;
  position: absolute;
  top: 0px;
  left: 0;
}
.naviapp {
  z-index: -1;
}
#ntg-recommend {
  display: none !important;
}
`

const disableTab = e => {
  if (e.key === 'Tab') {
    e.preventDefault()
  }
}