import Funnies from 'funnies';

let funnies = new Funnies();
export default {
   onInit() {
      let messages = Array.from({ length: 100 }, (v, k) => ({ id: k, name: funnies.message() }));
      this.store.set('$page.messages', messages);
   },
};
