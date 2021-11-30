"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const days_1 = require("./days");
describe('General audit', () => {
    days_1.Days.map(this_day => {
        test(`${this_day.label} (Day ${this_day.id}) example passes`, () => expect(this_day.approach(this_day.example_data))
            .toBe(this_day.example_solution));
    });
});
