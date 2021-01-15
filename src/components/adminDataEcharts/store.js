export default {
   state: {
      height: window.innerHeight,
      width: window.innerWidth
   },
   setHeight(value) {
      this.state.height = value;
   },
   setWidth(value) {
      this.state.width = value;
   },
   getWidth(){
      return this.state.height
   }
}