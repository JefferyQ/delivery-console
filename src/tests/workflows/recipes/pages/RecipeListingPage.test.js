import { List, Map } from 'immutable';
import TestComponent from 'console/workflows/recipes/pages/RecipeListingPage';

const { WrappedComponent: RecipeListingPage } = TestComponent;

describe('<RecipeListingPage>', () => {
  const props = {
    columns: new List(),
    count: null,
    actions: new Map(),
    fetchFilteredRecipesPage: () => {},
    getCurrentUrlAsObject: () => {},
    history: {},
    ordering: null,
    pageNumber: null,
    push: () => {},
    openNewWindow: () => {},
    recipes: new List(),
    searchText: null,
    status: null,
  };

  it('should work', () => {
    const wrapper = () => shallow(<RecipeListingPage {...props} />);

    expect(wrapper).not.toThrow();
  });
});
