export default {
  warning(msg, time) {
    time = time || 2000;
    this.createMessage(msg, 'warning', time);
  },
  createMessage(msg, type, time) {
    this.removeAllMessage();
    const ele = document.createElement('div');
    ele.className = 'message__box ' + type;
    ele.innerHTML = msg;
    document.body.appendChild(ele);
    setTimeout(() => {
      document.body.removeChild(ele)
    }, time)
  },
  removeAllMessage() {
    const eles = document.getElementsByClassName('message__box');
    for (let i = 0; i < eles.length; i++) {
      const ele = eles[i];
      if (ele) {
        document.body.removeChild(ele)
      }
    }
  }
}