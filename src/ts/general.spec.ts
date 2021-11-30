
import { Days } from './days';





describe('General audit', () => {

  Days.map(this_day => {
    test(`${this_day.label} (Day ${this_day.id}) example passes`, () =>
      expect(this_day.approach(this_day.example_data))
        .toBe(this_day.example_solution));
  });

});
