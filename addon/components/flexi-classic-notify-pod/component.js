import Component from '@ember/component';
import { set, computed } from '@ember/object'
// import layout from 'ember-3-16-addon/components/flexi-classic-notify-pod/template';
import layout from './template';
export default Component.extend({
  layout,

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
