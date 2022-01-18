import React, {useState} from 'react';
import './App.css';
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import {
  TimePicker,
  DateTimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

function App() {
  const [selectedDate, handleDateChange] = useState<object | null>(moment());

  return (
    <div className="App">
      <h2>Date Time Picker</h2>
      <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
        <DateTimePicker
          variant="inline"
          okLabel="تأیید"
          cancelLabel="لغو"
          labelFunc={date => (date ? date.format("jYYYY/jMM/jDD hh:mm A") : "")}
          value={selectedDate}
          onChange={(newValue) => handleDateChange(newValue)}
          // disableToolbar={true}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
