import Component from '@ember/component';

import { inject } from '@ember/service';
import { get, setProperties } from '@ember/object';

export default Component.extend({
  actions: {
    onCloseNotify(notificationType){
      console.log("in TestClassicWayComponent :::closing notification type of", notificationType);
    }
  }

})
