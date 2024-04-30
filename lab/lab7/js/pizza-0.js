function pizza_process() {
  console.log("피자를 주문합니다.");
  setTimeout( () => {
    console.log("피자 도우 준비");
    setTimeout( () => {
      console.log("토핑 완료");
      setTimeout( () => {
        console.log("굽기 완료");
        setTimeout( () => {
          console.log("피자가 준비되었습니다. 🍕");
        }, 4000);
      }, 4000);
    },4000);
  }, 4000);
}   

pizza_process();