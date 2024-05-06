import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class FlexNotifyComponent extends Component {
  @tracked notificationType = this.args.type;
  constructor() {
    super(...arguments);
    console.log("rendered constructor of :::FlexNotifyComponent:::")
  }

  @action
  closeNotify() {
    this.args.close(this.notificationType);
  }

  @action
  changeNotifyType(type) {
    this.notificationType = type;
  }
}
