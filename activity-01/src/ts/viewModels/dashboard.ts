import * as ko from 'knockout';
import 'ojs/ojknockout';
import 'ojs/ojinputtext';
import Message = require("ojs/ojmessaging");
import "oj-c/input-number";
import "oj-c/form-layout";
import "ojs/ojknockout";
import "oj-c/input-text";
import 'oj-c/input-password';
import 'oj-c/input-date-text';
import "oj-c/radioset";
import 'oj-c/checkbox';
import { ojDatePicker } from 'ojs/ojdatetimepicker';
import 'ojs/ojdatetimepicker';
import "oj-c/button";
class DashboardViewModel {
  laptopOptions: Array<{ value: string; label: string }>;
  date: ko.Observable<string>;
  constructor() {
    this.laptopOptions = [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ];
    this.date = ko.observable("");
  }
}
export = DashboardViewModel;