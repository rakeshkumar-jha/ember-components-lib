import Component from '@ember/component';
import { set, computed } from '@ember/object'
export default Component.extend({
   notificationType: computed('type', function() {
    return this.type;
   }),

   actions: {
    closeNotify() {
      this.close(this.notificationType);
    },
    changeNotifyType(type) {
      set(this, 'type', type);
    }
   }
})
