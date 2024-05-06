import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class TestNonClassicWayComponent extends Component {

  @action
  onCloseNotify(notificationType){
    console.log("in TestNonClassicWayComponent :::closing notification type of", notificationType);
  }
}
