import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class TestComponentsComponent extends Component {
  @tracked testingType = 'non_classic';

  get isClassicTesting() {
    return this.testingType === 'classic';
  }

  @action
  switchTestType(type = 'non_classic') {
    this.testingType = type;
  }
}
