import ReactComponent from '../react-component';
import ArticleView from './article-view';

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<ArticleView  />);
  }
});