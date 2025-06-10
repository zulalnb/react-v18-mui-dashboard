import { useEffect, useState } from "react";
import moment from "moment";
import { DatePicker } from "@mui/x-date-pickers";
import Box from "@mui/material/Box";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const slotProps = {
  textField: {
    size: "small",
    variant: "outlined",
    placeholder: "gg.aa.yyyy",
    sx: {
      [`& .${inputLabelClasses.root}`]: {
        position: "relative",
        transform: "translate(0, -1.5px) scale(0.75)",
        "&.Mui-focused, &.MuiFormLabel-filled": {
          transform: "translate(0, -1.5px) scale(0.75)",
        },
        fontSize: "0.875rem",
        top: "0 !important",
        left: "0 !important",
      },
      [`& .${outlinedInputClasses.root}`]: {
        padding: "0 !important",
      },
      [`& .${outlinedInputClasses.input}`]: {
        boxSizing: "content-box",
        padding: "4px 0px 5px 8px",
        minHeight: "1.4375em",
        "&::placeholder": {
          opacity: "1 !important",
        },
      },
      '& label[data-shrink="false"] + .MuiInputBase-root .MuiOutlinedInput-input::placeholder':
        {
          opacity: "1 !important",
        },
    },
  },
  openPickerButton: {
    size: "small",
    sx: {
      borderColor: "transparent",
      "&:hover": {
        borderColor: "transparent",
      },
    },
  },
};

export default function DateRangeInputValue({ item, applyValue }) {
  const [startDate, setStartDate] = useState(
    item.value?.startDate ? moment(item.value.startDate) : null
  );
  const [endDate, setEndDate] = useState(
    item.value?.endDate ? moment(item.value.endDate) : null
  );

  useEffect(() => {
    if (startDate && endDate) {
      applyValue({
        ...item,
        value: {
          startDate: moment(startDate)
            .startOf("day")
            .format("YYYY-MM-DDTHH:mm:ss"),
          endDate: moment(endDate).endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        },
      });
    }
  }, [startDate, endDate]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.5,
      }}
    >
      <DatePicker
        label="Başlangıç"
        value={startDate}
        onChange={setStartDate}
        format="DD.MM.YYYY"
        maxDate={moment().startOf("day")}
        enableAccessibleFieldDOMStructure={false}
        slotProps={slotProps}
      />
      <DatePicker
        label="Bitiş"
        value={endDate}
        onChange={setEndDate}
        format="DD.MM.YYYY"
        disabled={!startDate}
        minDate={startDate || undefined}
        maxDate={moment().endOf("day")}
        enableAccessibleFieldDOMStructure={false}
        slotProps={slotProps}
      />
    </Box>
  );
}
